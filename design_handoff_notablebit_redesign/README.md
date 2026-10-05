# Handoff: NotableBIT.com redesign (light editorial theme, dark hero)

## Overview
A restyle of notablebit.com: a warm paper (light) theme with the logo's red and blue as the only accents, serif headlines, monospace labels, and a dark full-bleed hero on every page. Seven pages: Home, Studio, Products, Consulting, Media, About, Contact. Header and footer are shared in structure; each page has its own layout below the hero.

## About the Design Files
Everything in `design_files/` is an **HTML design reference** (Design Component prototypes): they show intended look and behavior. They are **not production code**. Recreate them in the existing Next.js 15 App Router codebase (`app/`, `globals.css`, `_components`, `_content`) using its patterns. Keep existing content files (`site.ts`, `ecosystem.ts`) and the contact server action. Open the `.dc.html` files in a browser to inspect exact values; `screenshots/` has a full-page capture of each page at 1280px.

## Fidelity
**High-fidelity.** Final colors, type, spacing and interactions. Recreate pixel-accurately. The frames are 1280px wide; build fluid layouts that match at 1280 and reflow below ~1000px (the references are desktop only; mobile was not designed, so apply the same system and ask when unsure).

## Global rules
- No eyebrow/kicker labels above section headings (Home keeps its signed-off tracklist/"how the studio builds" labels; remove if you want consistency).
- No em dashes in copy. Section headings that are single lines use `white-space:nowrap` at desktop (Studio, Products, Consulting, Media, About); allow wrapping below 1100px.
- Ecosystem order, wherever listed: NotableBIT | BIT Voices Podcast | BitVoices Network | HindSite. Preserve the name **NotableBIT**.
- Retire: grid/weave overlays (`.site-shell::before/::after`), radial glows, violet/burgundy/green/amber tokens, five `home-type-*` classes, Aptos.

## Shared components
**Header** (all pages): grid `auto 1fr auto`, max-width 1180, padding 0 24, min-height 78. Logo `logo-white-text.png` (66px high) on dark hero, `logo-black-text.png` on light pages (Contact). Nav: IBM Plex Mono 12.5px, uppercase, letter-spacing .08em, gap 28, color #C9C5BC on dark / #3A3D45 on light; active item is #F4F1EA (dark) / #14161B (light) with a 6px red (#F9313C) dot before the label. CTA "Start a conversation": #014DF9 pill, white, Plex Sans 15px/500, padding 11px 20px, nowrap. On image-hero pages the header is `position:absolute; top:0` over the hero (hero content padding-top 170px). Contact: in flow on paper. Mobile: keep existing `<details>` menu pattern.

**Hero** (Studio, Products, Consulting, Media, About, Home): full-bleed image, min-height 780 (Studio 640, Home 720), bg #14161B, image `object-fit:cover` opacity .6 filter `saturate(.9) contrast(1.05) brightness(.64)`, overlay `--nb-hero-overlay-dark`. Content max-width 1180, padding 170px 24px 96px, flex column: h1 at top (Newsreader 500, 76px/1, -0.025em, max-width ~860, color #F4F1EA, text-wrap:balance), lede pinned to the bottom (`margin-top:auto`, 20px/1.6, max-width 720, #E8E4DA), then actions 28px below: primary blue pill (15.5px/500, padding 15px 24px) + text link with 1px underline (#F4F1EA). Under every hero: a 3px bar, left half red, right half blue. Optional light variant tokens exist (`heroTheme` prop in the references: "dark" default, "light").

**Footer** (all pages): bg #14161B, color #F4F1EA, padding 20px 56px 16px, flex column gap 12. Top: 4-column grid `1fr 1fr 1fr 1.2fr`, gap 32, all cells centered both ways: (1) white logo 280px wide with margin -34px 0 -38px to trim transparent padding; (2) blurb 15px/1.6 #C9C5BC centered, max-width 340: "A Black-founded technology studio building products, platforms, media, and strategic systems for builders moving with clarity, context, and ownership."; (3) site nav in a 2-column grid, gap 10px 36px, 15px #C9C5BC (Home + 6 routes); (4) ecosystem icon row, gap 14, links: B Donald Harris (bdh-logo.png, 30px high, bdonaldharris.com), BIT Voices Podcast (36px, youtube.com/@notablebit), BitVoices Network (36px, bitvoices.network), HindSite (36px, hindsite.pro); radius 3px. No heading above the icons. Bottom row: border-top 1px rgba(244,241,234,.16), padding-top 14, socials (18px icons, #C9C5BC, existing SVG paths) left, copyright "© 2026 NotableBIT. All rights reserved." mono 12px right.

**Buttons**: primary = #014DF9 pill, white. Secondary = text link, 1px bottom border, or 1px #14161B outlined pill (13px 22px) for "Visit ..." actions. Hover: darken blue to #0A5CFF, links turn #014DF9.

## Screens
Each section lists layout then key values. Headline font Newsreader 500, -0.015em unless noted; section h2 48px/1.05; body 18px/1.65 #3A3D45; page side padding 56.

### Home (`NotableBIT Redesign.dc.html`, option 1b)
Hero (dark, image first_podcast_set.jpeg, eyebrow "Black-founded technology studio · Tulsa, Oklahoma" with red dot; h1 92px/.98) then: centered italic mission quote (Newsreader italic 40px, max 960, borders top/bottom); "One mission, four outputs." tracklist (320px heading column + ruled 4-row list: index, name Newsreader 34px, one-line description, role label colored red for media/community and blue for product, arrow); tinted band #E9E5DA "Helping people become better builders, because generating code is not the finish line." with 9-step rail (Idea ... Deployment; last step has blue 2px rule, others rgba(20,22,27,.4)) and closing italic line + link; centered founder quote (48px); 4-column entry cards with top rules (red Listen, blue Build, blue Clarify, ink Connect). Copy for the band and tracklist is new; confirm with the founder.

### Studio (`NotableBIT Studio.dc.html`)
Hero (workstation.jpg, object-position 62% 52%). Sections: (1) "Our Operating Principles" (one line) + original description in one line; three sticky notes in a 3-col grid, gap 34, notes rotated -0.7deg/+0.6deg/-0.35deg with translateY 12/0/18, bg `--nb-note-old`, border rgba(132,98,43,.42), top gold rule, number in mono, title Newsreader 600 28px, body #5b4a32; (2) "The Studio Method" on #E9E5DA band: heading + description single lines; 4 steps in a row, 3px top rule (rgba(20,22,27,.4); step 4 blue), mono number, title 28px, body 15.5px; (3) "Disciplines of the Work": heading + one-line intro, then the original terminal panel (navy bordered header with three dots, label "notablebit/workbench", "focus.index"; body #030405 with green text, entries "[01] ai_workflow_tools" + description indented 5.2ch, ending with a blinking 2px underscore cursor, keyframes `0-48% opacity 1, 50-100% 0`, 1.1s step-end infinite); (4) "Company/Studio, Not Agency": original heading and copy, then 4 columns Build (blue rule), Advise (ink), Partner (ink), Amplify (red) with index, title 34px, body; (5) CTA "Need clarity before the build?" centered.

### Products (`NotableBIT Products.dc.html`)
Hero (products-hero.png). Featured card "Building HindSite": card #FAF8F3, 1px border, radius 8, 48 padding, top 2px red-to-blue rule, 2-col (.94fr/1.06fr); left: status in mono "Alpha / Waitlist / Active Build", h2 48px, intro 16.5px, vertical workflow rail (4 steps with blue dots, left border rgba(1,77,249,.35)), actions; right: hindsite-saas-badge.png in a dark framed figure. "Built in Sequence": 3 platform cards (media 16:9 dark badge image, mono stage label, title Newsreader 30px, copy 15px, 44px dark tile with icon bottom-right): BitVoices Network, HindSite, NotableBIT Labs (not a link). Closing card (max 920) with one-line copy.

### Consulting (`NotableBIT Consulting.dc.html`)
Hero (consulting-hero.jpeg). "Five decision zones. One clearer path forward." (one line) + paragraph; panel bg #ECE8DD with 34px grid lines, 5 columns of cards staggered (odd cards margin-top 26px), card top border 3px red (odd) / blue (even), dark header #1F2430 min-height 76 with title vertically centered in cream Plex Sans 15.5/600, light body 14px; under each card a "comet tail" (30px wide, flex:1, min-height 64, clip-path polygon(0 0,100% 0,62% 100%,38% 100%), gradient from rgba(color,.6) to 0) running to the foundation bar "Clarity Before Execution" (full-bleed ink bar, 2px red top rule, Newsreader 28px). "Useful artifacts, not vague advice." in a 2-col [40|60] section: left heading (52px, two lines) and paragraph; right a portrait paper stack: three rotated sheets behind (rotate 1.4deg/-1deg/.5deg, offsets 8/6/4px, colors #E4DFD1 #EBE7DA #F3F0E6) and a cover sheet (#FAF8F3, padding 52 52 160) with label "What you leave with", three artifacts (title with 54px red-to-blue rule + description stacked), and a sticky note bottom-right (200px, rotate -2.5deg, `--nb-note`, bottom-right corner folded: clip-path polygon(0 0,100% 0,100% calc(100% - 24px),calc(100% - 24px) 100%,0 100%) plus a 24px gradient flap triangle, drop-shadow filter). Closing card "Start with the conversation, not a menu."

### Media (`NotableBIT Media.dc.html`)
Hero (media-hero.jpeg). "BIT Voices Podcast": lede, 4 YouTube Shorts cards (title area min 112px, 4:5 thumbnail with 64px circular play button, hover lift -3px). Click opens a modal (400px wide, 9:16 iframe, Close button, backdrop click closes; add Escape + focus trap as in the existing `podcast-shorts.tsx`, keep that component and restyle it). Centered "Visit BIT Voices Podcast" outlined pill and one-line note. "Media that serves the ecosystem.": panel #ECE8DD with 44px grid lines, three columns with index labels sitting on a red-to-blue line, vertical dividers, actions row bottom right.

### About (`NotableBIT About.dc.html`)
Hero (about-hero.png). Two-column story separated by a 1px vertical red-to-blue rule; founder section (2-col .8fr/1.2fr): 4:5 portrait (`assets/b-donald-portrait.webp`; in the repo use the existing `b-donald.jpeg` through `next/image`) and heading "B Donald Harris leads the company direction." with paragraph and outlined link; values: 3x2 ruled grid (top border 1px ink, row borders rgba(20,22,27,.18)), title 32px, body 15.5px, no numbers; CTA card. The "concentrating now" section was removed deliberately.

### Contact (`NotableBIT Contact.dc.html`)
No image hero; light header. h1 "Start a conversation." 64px nowrap; lede 20px max 780; 3px red/blue bar; form card (max 880, padding 44, top rule): "Inquiry form", email fallback line, 2-col grid of fields (Name*, Email*, Organization, Inquiry type* select, Budget range, Timeline, full-width message textarea min-height 150). Labels mono 12.5px uppercase .07em; inputs white, 1px rgba(20,22,27,.28), radius 4, min-height 46, focus: #014DF9 border + 0 0 0 3px rgba(1,77,249,.2). Submit "Send inquiry" blue pill right-aligned with status line above (idle #5A5D66, success #1F7A4D, error #B3261E). Keep the existing server action; success copy now reads "Thanks, your inquiry has been sent. I'll review it and follow up if there's a fit." (comma instead of em dash).

## Interactions & state
Hero theme prop (dark default; light optional). Media: selected short (modal). Contact: form status (idle/pending/success/error, existing `useActionState`). Hover: nav link color, card lift (-3px, 180ms), links to #014DF9. Blinking cursor keyframes above. No other animation.

## Design tokens
See `design-tokens.css` and `fonts.md`. Type scale: hero 76px (home 92), h2 48, card titles 26-34, quote 38-48, body 18/1.65, small body 15-15.5, mono labels 12-12.5 uppercase .07-.13em. Spacing: gutter 56, section padding 88-96, grid gaps 14-64. Radii: 999 pills, 8 cards, 4 sheets.

## Assets
All in `design_files/assets/`: logos (logo-white-text, logo-black-text, bdh-logo, bitvoices-icon-logo, bitvoices-podcast-icon-logo, hindsite-icon-logo, hindsite-icon, stacked-compact), hero images (first_podcast_set.jpeg, workstation.jpg, products-hero.png, consulting-hero.jpeg, media-hero.jpeg, about-hero.png), product badges (hindsite-saas-badge, bitvoices-platform-badge, notablebit-labs-badge). All come from `assets/originals` in the repo. Images not used in the final design: greenwood.jpg, podcast_set2.jpg (keep for future About/Media use).

## Copy changes to review
Em dashes removed everywhere. Home: new tracklist and band copy. Consulting hero lede and decisions paragraph (comma instead of dash). Studio: titles keep original capitalization; hero lede kept. Button labels are sentence case in the designs ("Start a conversation"); the repo uses Title Case ("Start a Conversation"); pick one site-wide. Contact success message punctuation.

## Files
`design_files/*.dc.html` (seven pages), `design-tokens.css`, `fonts.md`, `screenshots/*.png`, `issues/*.md` + `issues/create-issues.sh`.
