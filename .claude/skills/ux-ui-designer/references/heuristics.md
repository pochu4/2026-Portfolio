# UX/UI Design Reference Checklist

Use this as a working checklist when critiquing a design or justifying decisions in a new one. Not every item applies to every task — pull the ones relevant to what's being reviewed.

## Nielsen's 10 usability heuristics

1. **Visibility of system status** — does the interface show what's happening (loading states, progress, confirmation of actions) within reasonable time?
2. **Match between system and the real world** — does it use the user's language and familiar conventions, not internal jargon or system-centric logic?
3. **User control and freedom** — can users undo, cancel, or back out of a flow they didn't mean to start?
4. **Consistency and standards** — do similar elements look and behave the same way throughout, and does it follow platform conventions (iOS/Material/web) users already know?
5. **Error prevention** — does the design prevent likely mistakes before they happen (confirmation on destructive actions, constraints on invalid input) rather than just handling errors after?
6. **Recognition rather than recall** — are options and actions visible, not something the user has to remember from a previous screen?
7. **Flexibility and efficiency of use** — does it work for first-time users without penalizing power users (e.g., shortcuts, saved preferences)?
8. **Aesthetic and minimalist design** — is every element earning its place, or is there visual noise competing with what matters?
9. **Help users recognize, diagnose, and recover from errors** — are error messages in plain language, specific about what went wrong, and constructive about the fix?
10. **Help and documentation** — for anything non-trivial, is help findable and task-focused rather than a wall of generic docs?

## Accessibility (WCAG-level basics)

- **Contrast**: body text needs at least 4.5:1 against its background (WCAG AA); large text (18px+ bold or 24px+ regular) needs 3:1. UI component boundaries/icons need 3:1.
- **Touch targets**: interactive elements should be at least 44x44px (iOS) / 48x48dp (Material) to be reliably tappable.
- **Focus order and states**: every interactive element needs a visible focus state, and tab order should follow visual/logical order.
- **Color independence**: never use color alone to convey meaning (errors, status, required fields) — pair with an icon, label, or pattern.
- **Text alternatives**: images, icons-only buttons, and non-text content need accessible labels (alt text, aria-label).
- **Reflow and zoom**: layouts should hold up at 200% zoom / smaller viewports without losing content or function.

## Typography

- Body text generally shouldn't go below ~14-16px on screen; check the specific platform convention.
- Line height (leading) around 1.4–1.6x font size for body copy keeps long text readable.
- Line length: aim for roughly 45–75 characters per line for comfortable reading; very wide text blocks hurt scannability.
- Limit the type scale to a small number of deliberate sizes/weights rather than ad hoc values — supports hierarchy and consistency.

## Spacing and layout

- Use a consistent spacing scale (e.g., 4px or 8px base unit) rather than arbitrary pixel values — makes rhythm feel intentional.
- Group related elements with proximity; separate unrelated ones with whitespace rather than lines/borders where possible (Gestalt proximity principle).
- Establish clear visual hierarchy: size, weight, color, and position should all point to what matters most first.
- Alignment: elements should share consistent edges (left/center/baseline) — unaligned elements read as "off" even when the viewer can't say why.

## Color

- Have a defined role for each color (primary action, destructive, success, warning, neutral/background) rather than using color decoratively.
- Check contrast (see accessibility above) for every text/background and icon/background pairing, not just body copy.
- Be deliberate about how many accent colors are in play at once — too many competing colors flattens hierarchy instead of creating it.

## Platform conventions

- **Mobile (iOS/Android)**: bottom-anchored primary actions, tab bars for top-level nav, native gestures (swipe-back, pull-to-refresh) where relevant.
- **Desktop web**: top nav or sidebar for wayfinding, hover states meaningful (no touch-only equivalent needed), denser information layouts tolerated.
- **Forms**: label above field (not placeholder-as-label), inline validation on blur rather than only on submit, clear indication of optional vs. required fields.
