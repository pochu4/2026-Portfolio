---
name: portfolio-case-study
description: Write and publish portfolio case studies for Johann's design and marketing work — researched from source material, structured for hiring managers, then written into his Figma portfolio template or Notion. Use this skill whenever Johann mentions a case study, writing up a project for his portfolio, documenting a campaign, turning scope docs or project notes into a presentable write-up, or editing existing case study content in Figma or Notion — even if he doesn't use the words "case study." Also use when he shares a project Figma file, a product doc, or campaign notes and asks what to do with them.
---

# Portfolio Case Study

Johann is a Marketing & Brand Designer. This skill produces case studies for his portfolio — read by hiring managers in marketing and design departments, usually while skimming.

## The one rule that matters most

**Never write a word about the product until you have read the actual product documentation.**

This is not a nice-to-have. On the LifeguardPortal project, the product name contained the word "Lifeguard," and a case study got written describing it as "a workforce and credential-management platform for lifeguard organizations." The real product was a client portal for a harm-reduction company — overdose detection devices in shelters and supervised consumption sites, with "Total Lives Saved" as a literal dashboard KPI. The name was the company, not the audience. Every strategic claim in that draft had to be thrown out.

Product names are misleading by default. Before drafting:

1. Ask for or locate the product overview doc, spec, or internal reference. Read it properly — not the table of contents.
2. Read the project scope file in Figma if one exists (campaign calendars, release plans, and asset sections carry real dates, real customer names, and real copy).
3. Read any existing notes in Notion.
4. Only then write.

If you cannot get source material, say so and ask, rather than inferring from the name. A confidently wrong case study is worse than a delayed one.

**When sources disagree, surface the conflict — don't silently pick.** The Figma scope doc said the webinar ran April 14–15 with a Starbucks gift card; the Notion notes said May 5–6 with an "Everything Card." Both went into the draft with a visible flag asking Johann to reconcile before publishing. Quietly choosing one would have put a wrong date on a public portfolio.

## Structure

Hiring managers read in two passes. Pass one is a ~20-second visual scan answering *"is this person's craft any good?"* Pass two only happens if pass one lands, and answers *"can they think?"* A case study that's all narrative fails pass one. A gallery with no reasoning fails pass two. Build for both.

Default section order:

| Section | Purpose |
|---|---|
| **Hero** | One sentence: what the product is, what Johann did. |
| **Meta block** | Role, scope, client, year, tools. |
| **Results** | Stat row + short context. Placed early so skimmers hit impact first. |
| **Overview** | Introduction / Challenge / Solution. |
| **Strategy** | Audience segments, positioning pillars, goals. Proves thinking. |
| **Planning** | Release plan or process artifact, with real dates. |
| **Deliverables** | Channel-by-channel inventory with large imagery. Proves craft. |
| **Brand System** | How it held together across formats. |
| **Reflection** | What he'd change, what he'd keep. |

Adjust freely — sections can be added, merged, or dropped per project. What should stay constant is that results appear early, deliverables get real visual weight, and reflection closes.

`references/worked-example.md` walks through the LifeguardPortal case study Johann approved — section by section, with the level of specificity to aim for and the mistakes earlier drafts made. Read it when starting a new case study or when unsure how much detail is enough.

### Results

Put metrics in their own section, not buried in a reflective paragraph. Numbers sitting inside a passage about what went wrong read as an apology; standing alone they read as evidence.

Lead with a stat row of 3–5 figures — big number, small caption beneath. Follow with two or three sentences of context. Where numbers are modest, give them honest framing rather than inflating them: *"a blended ~23% acceptance rate on a first-ever event with no CRM, no historical benchmark, and no existing marketing list"* is more persuasive than the bare percentage, because it tells the reader what the number was achieved against.

### Deliverables

This is usually the section that's missing, and it's the one doing the craft work. For each channel, give a short paragraph of what was made and why it was designed that way, then a **full-width image block** — wider than the paired thumbnails used elsewhere in the page. The size difference is deliberate: this is the section a skimmer should stop at.

Count the assets and say the number. *"Roughly twenty assets across five channels"* answers the hiring manager's actual question faster than five paragraphs.

Name specific artifacts — template names, subject lines, formats, page counts. Specificity is what separates a real project from a plausible one.

## Voice

Plain and direct. Short declarative sentences. Explain reasoning rather than asserting quality.

- Write **"I"** for Johann's own contributions — he should claim his work.
- Name collaborators explicitly where they led something (*"hosted by Jeff and team"*). Confident and honest beats vague "we" everywhere.
- Prefer concrete nouns over marketing abstractions. "Four templates, each designed desktop-first with a mobile variant" not "a comprehensive email solution."
- Cut hedges and filler. If a sentence survives losing three words, lose them.
- Let constraints do rhetorical work. "No CRM meant every RSVP was tracked by hand" is more interesting than claiming the campaign was well-organized.

**Keep honest caveats, and keep them visually separate.** Owning what went sideways reads as senior. On LifeguardPortal, attendance exceeded RSVPs because invites got forwarded — that went in as its own flagged note, next to the results but not inside them, so it added credibility without undercutting the numbers.

**Sensitive subject matter:** some of Johann's clients work in public health, harm reduction, and safety. Lead with the mission plainly and factually. Don't sensationalize, don't euphemize, and don't bury it — a product whose dashboard reports overdose alerts and confirmed interventions is more compelling described accurately than dressed up as generic B2B SaaS.

## Publishing

Ask where the case study should go — Figma, Notion, both, or a draft in chat — unless Johann has already said. Drafting in Notion first is often cheaper to iterate on; Figma is where it ships.

For Figma work, read `references/figma-mechanics.md` before touching the file. It covers matching an existing template's spacing system, the font-loading trap, batching, and the layout bugs that cost real time on this workflow.

For Notion, fetch `notion://docs/enhanced-markdown-spec` via the Notion fetch tool before writing — the markdown dialect has specific syntax for callouts, tables, and columns. Use `insert_content` to append below existing notes, or `replace_content` for a clean page. Fetch the page first if you plan a targeted edit, since `update_content` needs exact string matches.

## Matching, not cloning

When an existing case study is used as a reference, match its **design language** — column positions, type scale, spacing rhythm, color roles — not its exact section count or content volume. Editing text inside a cloned template constrains you to that template's number of slots, which is how a case study ends up with no deliverables section: there was nowhere to put one. Add sections when the project needs them.
