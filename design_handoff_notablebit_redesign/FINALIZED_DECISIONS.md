# Finalized decisions

These are signed off. Where any other file in this package conflicts, this file wins.

## Direction
1. **Home is option 1b ("Liner Notes").** The reference is `design_files/NotableBIT Home.dc.html`. Options 1a (current site rebuilt) and 1c (Signal, dark) are rejected and are not in the package.
2. **Dark hero theme on every image-hero page**: Home, Studio, Products, Consulting, Media, About. The header is transparent and absolute over the hero, with the white logo and cream nav. The light hero variant (`heroTheme: "light"`) is a prototype toggle only. **Do not build it.**
3. **Contact is the only page without a hero.** It uses the light header and the black logo, on paper.
4. **Light paper theme everywhere else.** Page background #F4F1EA. Mid-page bands use #E9E5DA. Grid panels use #ECE8DD. Cards use #FAF8F3.
5. **Two accents only:** red #F9313C (voice, media) and blue #014DF9 (action, building). No violet, burgundy, green or amber tokens. The two exceptions are the Studio terminal's green text and the gold on the Studio principle notes and Consulting sticky note.
6. **Type:** Newsreader for headlines (500), IBM Plex Sans for body, IBM Plex Mono for labels and nav. No Aptos.

## Page-level decisions
- **Home (1b):** the hero eyebrow is "Black-founded technology studio · Tulsa, Oklahoma". Sections run in this order:
  - centered italic mission quote
  - "One mission, four outputs." tracklist
  - the #E9E5DA "how the studio builds" band, with the 9-step rail Idea → Deployment
  - centered founder quote
  - 4-column entry cards

  Home is the only page that keeps mono labels ("Tracklist", "How the studio builds"), exactly as designed.
- **Studio:**
  - Operating principles are three aged-paper sticky notes, with an intro line added.
  - The Method is 4 open columns on the #E9E5DA band, not cards.
  - Disciplines keep the green terminal.
  - Company/Studio is 4 open columns with colored top rules.
  - The CTA is a centered section, not a card.
- **Products:** feature card with workflow rail. "Built in Sequence" has 3 platform cards, with product icons in 44px dark tiles. NotableBIT Labs is not a link.
- **Consulting:**
  - 5 staggered decision zones with comet tails into the "Clarity Before Execution" bar.
  - "Useful artifacts" is a 40|60 layout with a portrait paper stack and a curled sticky note.
  - The closing card is centered, with actions right-aligned.
- **Media:** 4 Shorts cards open a light-panel video modal with ink text. The ecosystem panel is a grid-paper panel with a red→blue timeline.
- **About:**
  - Two-column story with a red→blue vertical rule.
  - The founder portrait is untinted and has no card.
  - Values are a 3×2 ruled grid with no numbers and no gradient bars.
  - There is no timeline and no "concentrating now" section.
- **Contact:** 64px title, 3px red/blue rule, form card as specified in the README.

## Global rules
- No eyebrow labels above section headings (Home's two labels are the only exception).
- No em dashes in copy.
- Ecosystem order everywhere: NotableBIT | BIT Voices Podcast | BitVoices Network | HindSite.
- Secondary hero and card actions are underlined text links with a trailing "→", not outlined buttons. The one exception is the outlined pill for "Visit …" actions.
- Hero: 3px bar under every hero, left half red and right half blue.
- Retire: grid/weave overlays, radial glows, the `home-type-*` classes, and the `--home-*` variable block.

## Open items (copy, not design)
- Home tracklist and "how the studio builds" copy is new. Confirm with the founder.
- Button label case: designs use sentence case ("Start a conversation"). The repo uses Title Case. Pick one site-wide. The recommendation is sentence case.
- Mobile (<1000px) was not designed. Apply the same system.

## Where to find things
- `README.md`: full spec per page, shared components, tokens.
- `WORKTREE_GAP_DIRECTIONS.md`: page-by-page diff between these designs and the current worktree, written for an implementing agent.
- `design_files/`: seven finished pages (`NotableBIT Home|Studio|Products|Consulting|Media|About|Contact.dc.html`) plus assets.
- `screenshots/`, `issues/`, `design-tokens.css`, `fonts.md`.
