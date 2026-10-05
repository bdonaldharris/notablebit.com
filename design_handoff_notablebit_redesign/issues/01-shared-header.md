# Shared header: transparent over hero, light variant for Contact
labels: redesign,shared

**Spec:** README "Shared components > Header".

- [ ] `Header` in `app/_components/layout.tsx`: grid `auto 1fr auto`, container 1180, min-height 78
- [ ] Mono uppercase nav, gap 28; active route gets 6px red dot and full-contrast color (`aria-current="page"`)
- [ ] CTA "Start a conversation" blue pill, nowrap
- [ ] Prop `overHero` (default true): absolute over hero with white logo; false: in flow, black logo (Contact)
- [ ] Keep mobile `<details>` menu, restyled to paper/ink
- [ ] Remove amber-to-blue header underline

**Acceptance:** matches screenshots on all 7 pages at 1280px; keyboard focus visible; no layout shift between pages.

Design handoff: see README.md in design_handoff_notablebit_redesign/.
