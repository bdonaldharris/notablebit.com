# Shared hero component with dark default and light variant
labels: redesign,shared

**Spec:** README "Shared components > Hero".

- [ ] `PageHero` props: `image`, `title`, `lede`, `primary`, `secondary`, `objectPosition`, `theme` ("dark" default | "light")
- [ ] Dark: overlay `--nb-hero-overlay-dark`, image opacity .6 + filter; Light: tokens in `design-tokens.css`
- [ ] h1 76px/1 Newsreader, lede pinned to bottom with `margin-top:auto`, actions below
- [ ] 3px red/blue bar under the hero
- [ ] Use `next/image` `fill` with `priority`; alt empty (decorative)

**Acceptance:** Studio, Products, Consulting, Media, About use it with only content differences.

Design handoff: see README.md in design_handoff_notablebit_redesign/.
