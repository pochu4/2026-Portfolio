# Writing case studies into Figma

Everything here was learned the hard way on Johann's portfolio template. Read before editing a case study frame.

## Contents

- [Johann's files](#johanns-files)
- [Step 1: Map before you write](#step-1-map-before-you-write)
- [Step 2: Extract the template's type system](#step-2-extract-the-templates-type-system)
- [The font trap](#the-font-trap)
- [Step 3: Write in batches](#step-3-write-in-batches)
- [Adding new sections](#adding-new-sections)
- [Layout bugs that cost real time](#layout-bugs-that-cost-real-time)
- [Step 4: Verify](#step-4-verify)
- [Rate limits](#rate-limits)
- [Filling image placeholders with real assets](#filling-image-placeholders-with-real-assets)

## Johann's files

| File | Key | Notes |
|---|---|---|
| Portfolio | `x2ULCzqoAzFCWtc27wW5u8` | Pages: Inspiration, Wireframes, LifeguardPortal Project. Case study frames live on **Wireframes**. Sits in his personal Starter team — rate limits bite here. |
| LifeguardPortal Marketing | `56YPSotjlYQRSR2UryvMDk` | Project Scope page holds campaign calendar, release plan, emails, social posts, webinar, prints. Great source material *and* a place to pull real asset imagery from. |

Node IDs change when frames are duplicated. Always re-locate the frame by name rather than trusting an ID from a previous session.

Load the `figma-use` skill before any `use_figma` call — it's a hard prerequisite and skipping it causes obscure failures.

## Step 1: Map before you write

Get the frame's children with positions and sizes, sorted by `y`. This tells you the column grid and vertical rhythm without guessing:

```js
const page = await figma.getNodeByIdAsync(PAGE_ID);
await figma.setCurrentPageAsync(page);
const f = await figma.getNodeByIdAsync(FRAME_ID);
return f.children.map(n => ({
  id: n.id, name: n.name.slice(0,34), type: n.type,
  x: Math.round(n.x), y: Math.round(n.y),
  w: Math.round(n.width), h: Math.round(n.height)
})).sort((a,b) => a.y - b.y);
```

Johann's case study template grid, as of the LifeguardPortal build:

| Element | x | width |
|---|---|---|
| Sidebar nav | 59 | — |
| Section label (40px) | 318 | — |
| Sub-label (24px) | 318 | 226 |
| Body copy (20px) | 607 | 875 |
| Paired images | 318 and 915 | 578 each |
| Full-width image | 318 | 1175 |

Sidebar nav entries sit 36px apart starting at y1537. Frame width is 1512.

## Step 2: Extract the template's type system

Don't guess type styles — read them off existing nodes and reuse the exact values:

```js
const secLabel = await figma.getNodeByIdAsync(SECTION_LABEL_ID);
return {
  size: secLabel.fontSize,
  font: secLabel.fontName,
  fills: JSON.stringify(secLabel.fills)
};
```

Values captured from Johann's template:

- **Section label** — 40px Semibold, blue `{r:0, g:0.1333, b:1}`
- **Sub-label** — 24px Semi Bold, ink `{r:0.1587, g:0.1587, b:0.1587}`
- **Body** — 20px Regular, line height 32px fixed, same ink
- **Image placeholder** — fill `{r:0.851, g:0.851, b:0.851}`, corner radius 10

## The font trap

Johann's template uses **PP Mori** (Pangram Pangram). It is frequently *not installed* on the machine running Figma desktop, and the Plugin API refuses to set `characters` on a node whose font can't load:

```
The font "PP Mori Regular" could not be loaded. The font family "PP Mori" does not exist.
```

Check before writing anything:

```js
const fonts = await figma.listAvailableFontsAsync();
return fonts.filter(f => /mori/i.test(f.fontName.family)).map(f => f.fontName);
```

If it returns empty, you have two options — **tell Johann and let him choose**:

1. He installs PP Mori and restarts Figma desktop; you then write in the real brand font.
2. You substitute Inter (`Regular` / `Semi Bold`), which works immediately but leaves the frame visually mixed — edited nodes in Inter, untouched nodes still in PP Mori.

Inter also runs wider and taller than PP Mori at the same size. A headline that was 4 lines in PP Mori becomes 5 in Inter, and a header block grew 44px purely from line-height difference. Expect layout drift when substituting, and mention that installing the real font closes those gaps automatically.

Note the exact style strings: Inter uses `"Semi Bold"` (with a space), not `"SemiBold"`.

Every text edit follows: load font → `await` → set `fontName` → set `characters`.

## Step 3: Write in batches

Cap each `use_figma` call at roughly 10 logical operations. Larger scripts fail in ways that are hard to localize, and every failed script is atomic — nothing applies, so you lose the whole batch.

Group by section (Overview, Strategy, Deliverables…). Return the node IDs you touched from every call so later calls can reference them.

```js
const reg = {family:'Inter', style:'Regular'};
await figma.loadFontAsync(reg);
const updated = [], errors = [];
for (const [id, text] of updates) {
  try {
    const node = await figma.getNodeByIdAsync(id);
    if (!node) { errors.push({id, error:'not found'}); continue; }
    node.fontName = reg;
    node.characters = text;
    updated.push(id);
  } catch (e) { errors.push({id, error:String(e)}); }
}
return { updated, errors };
```

## Adding new sections

To insert sections mid-page, shift everything below down first, then build into the gap:

```js
const SHIFT = 4900;
for (const id of ['DIVIDER','BODY_FRAME','LABEL','FOOTER_GROUP']) {
  const n = await figma.getNodeByIdAsync(id);
  n.y = n.y + SHIFT;
}
f.resize(1512, f.height + SHIFT);
```

Budget roughly 600px per deliverable sub-block (label + body + full-width image + gap), and ~400px for a Results section with a stat row. The LifeguardPortal frame went from 9,554px to 14,454px adding Deliverables and Results.

New top-level nodes in this template are absolutely positioned — set `x`/`y` directly. Don't reach for auto-layout unless the surrounding structure already uses it.

## Layout bugs that cost real time

**`resize()` resets sizing modes.** Setting `counterAxisSizingMode = 'AUTO'` and then calling `resize()` silently reverts the frame to fixed height. Eleven table rows all collapsed to 10px this way. Fix: set the sizing mode *after* resizing, or re-apply it at the end.

**Wrapping text needs explicit width.** Set `textAutoResize = 'HEIGHT'` and then `resize(width, height)`. Without it the node collapses to a near-zero-width thread.

**Text overflow into the next block.** Body copy that runs one line longer than the reference will overlap the image row beneath it. After writing, scan for collisions and trim the copy rather than moving the furniture:

```js
const kids = f.children.map(n => ({
  name: n.name, x: Math.round(n.x),
  y: Math.round(n.y), b: Math.round(n.y + n.height)
})).sort((a,b) => a.y - b.y);
const clashes = [];
for (let i = 0; i < kids.length; i++)
  for (let j = i+1; j < kids.length; j++) {
    const a = kids[i], b = kids[j];
    if (b.y < a.b - 1 && Math.abs(a.x - b.x) < 200 && a.y !== b.y)
      clashes.push(`${a.name} (${a.y}-${a.b}) vs ${b.name} (${b.y})`);
  }
return clashes;
```

Keep the x-proximity filter tight (~200px) or the sidebar nav generates false positives against section labels.

**Sub-labels wrapping to three lines** look wrong against a template built for two. The 226px label column fits about 24 characters per line in Inter at 24px. "Brand & Messaging System" became "Brand System" for this reason.

## Step 4: Verify

Screenshot inline rather than making a separate call:

```js
await frame.screenshot({ scale: 0.14 });
```

Tall frames need a small scale — 0.14–0.2 for a 14,000px frame. Check for clipped text, overlaps, and orphaned placeholder copy from the source template.

Also grep for stale text left over from whatever the frame was cloned from:

```js
return f.findAllWithCriteria({types:['TEXT']})
  .filter(n => /lorem|placeholder|OLD_PROJECT_NAME/i.test(n.characters))
  .map(n => ({id: n.id, chars: n.characters.slice(0,80)}));
```

## Rate limits

Figma's MCP server enforces per-plan call limits. Johann's personal team (`Johann Chua's team`) is on **Starter** and will cut off mid-session:

> You've reached the Figma MCP tool call limit on the Starter plan.

His **LifeguardDH** team is on Pro and doesn't hit this. Since the Portfolio file lives in the personal team, budget calls there: map once, write in as few batches as possible, screenshot once at the end. If the limit hits, switch to drafting in Notion and note what still needs applying.

`whoami` returns the authenticated account and its plans — useful when access fails, since the desktop app may be signed into a different account than expected. Account switches in Figma desktop can take a full quit-and-relaunch (and sometimes a Claude restart) before the MCP connection picks them up.

## Filling image placeholders with real assets

Gray rectangles undersell the work. Clone real designs from elsewhere in the file — this works across pages in the same file:

```js
const rect = await figma.getNodeByIdAsync(PLACEHOLDER_ID);
const src  = await figma.getNodeByIdAsync(REAL_ASSET_ID);
const parent = rect.parent;
const index = parent.children.indexOf(rect);
const clone = src.clone();
clone.x = rect.x; clone.y = rect.y;
clone.resize(rect.width, rect.height);
clone.name = 'Asset: ' + src.name;
parent.insertChild(index, clone);
rect.remove();
return clone.id;
```

The Marketing file's Project Scope page is a rich source: landing page concepts, all four email templates, social post sections, webinar covers, and training material.
