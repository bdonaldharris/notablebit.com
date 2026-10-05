# Foundation: design tokens and hosted fonts
labels: redesign,foundation

Replace the current :root tokens and Aptos/Georgia stacks with the redesign tokens and hosted fonts.

**Spec:** `design-tokens.css`, `fonts.md`, README "Global rules".

- [ ] Add `next/font/google` Newsreader, IBM Plex Sans, IBM Plex Mono in `app/layout.tsx` with CSS variables
- [ ] Replace `:root` in `app/globals.css` with the `--nb-*` tokens
- [ ] Body background `--nb-paper`, text `--nb-ink`; remove body radial gradients
- [ ] Remove `.site-shell::before/::after` grid and weave overlays
- [ ] Define link default/hover colors (ink / #014DF9)
- [ ] Define shared utilities: pill button primary, text-link button, `.nb-rule` (red to blue), `.nb-frame`
- [ ] Keep focus-visible outline (use blue instead of amber)

**Acceptance:** all pages render in Newsreader / Plex with no Aptos fallback; no violet/burgundy/green/amber tokens remain referenced.

Design handoff: see README.md in design_handoff_notablebit_redesign/.
