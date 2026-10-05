# Cleanup: retire unused CSS from globals.css
labels: redesign,cleanup

After all page issues merge.

- [ ] Delete dead page CSS (about-focus, studio-console old theme, podcast/home lab classes, `.card`, `.badge`, unused hero variants)
- [ ] Remove unused tokens (`--violet`, `--burgundy`, `--green`, `--amber*`)
- [ ] Remove `foundation-page.tsx` if unused
- [ ] Run lint and a visual pass at 1280, 1024 and 390px

**Acceptance:** globals.css reduced substantially; no visual regressions against screenshots.

Design handoff: see README.md in design_handoff_notablebit_redesign/.
