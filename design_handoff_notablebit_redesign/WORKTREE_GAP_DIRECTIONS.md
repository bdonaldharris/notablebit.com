# NotableBIT redesign: worktree gap directions

Source of truth: the `NotableBIT *.dc.html` design files (Home = option **1b**). Compared against `app/**/page.tsx`, `_components/layout.tsx`, `_components/page-sections.tsx` and the selector inventory of `app/globals.css`. I did not run the site, so check anything marked **verify** in the browser.

## How to use this
Hand an agent one page section at a time. Do **Global** first. Every page is a markup change plus a CSS change. The CSS patches alone cannot reach the structural gaps listed here.

Tokens already in `globals.css` (about line 5757) and to reuse: `--nb-paper #F4F1EA`, `--nb-paper-band #E9E5DA`, `--nb-paper-panel #ECE8DD`, `--nb-card #FAF8F3`, `--nb-ink #14161B`, `--nb-ink-2/3`, `--nb-muted #5A5D66`, `--nb-ink-header #1F2430`, `--nb-red #F9313C`, `--nb-blue #014DF9`, `--nb-note`, `--nb-note-old`, `--nb-term-*`, `--nb-rule`.

---

## 0. Global

**G1. `globals.css` has the patch appended several times.**
- `--nb-ink-2/3` and `--nb-soft-shadow` are redeclared at ~5840, ~6084, ~6336 and ~6597.
- Rule blocks such as `.site-shell main .studio-method-node` repeat at ~5965, ~6209, ~6461 and ~6722.
- Keep one copy of the patch and delete the rest.
- Then delete the legacy layers it supersedes. This is issue 11:
  - the `--home-*` variable block (~4065), which sets hero weight 800, a sans display font and a 2.5rem heading
  - the `.home-type-*` lab classes
  - the old `.site-shell::before/::after` texture
  - `.page-hero::before` and `::after` conflicts (~818, ~831–905)
  - the per-page hero atmosphere classes (`.about-hero*`, `.products-hero*`, `.studio-hero*`)

**G2. Cards.** Line ~99 sets `background:white; border-radius:0; box-shadow:none` on `.mission-card, .founder-note-card, .products-feature-card, .platform-card, .products-closing-card, .studio-cta-panel, .consulting-closing-panel, .cta-panel, .card`.
- Design cards are `background:#FAF8F3` (`--nb-card`), `border:1px solid rgba(20,22,27,.2)`, `border-radius:8px` and `box-shadow:0 24px 54px rgba(20,22,27,.1)`.
- The 2px top rule is `linear-gradient(90deg,#F9313C,#014DF9 50%,transparent 88%)` (`--nb-rule`).
- Several of these cards must be removed entirely, not restyled (see per page): mission, founder note, studio CTA, studio model, about founder.

**G3. Section headings.** Every `h2.heading-xl` is Newsreader 500, 48px, line-height 1.05, letter-spacing -.015em, color ink. The intro paragraph under it is 18px/1.6, `--nb-ink-3`, max-width ~860px, `text-wrap:pretty`. **Verify** that no `home-heading-*` variable or weight 760/800 still wins.

**G4. Hero (`PageHero`).**
- Layout: `min-height` 780px for Products, Consulting, Media and About. 640px for Studio. 720px for Home. Padding `170px 24px 96px`. h1 sits at the top and the lede is pinned to the bottom (`margin-top:auto`). The CTA row follows with `margin-top:28px`. Worktree is 680px with padding `150 0 50`.
- h1: Newsreader 500, 76px, line-height 1, letter-spacing -.025em, `text-wrap:balance`, color `#F4F1EA`. Home is 92px with line-height .98 and max-width 900px. Max-width is 820–880px.
- Lede: 20px/1.6, color `#E8E4DA`, max-width 720px.
- Image treatment: `opacity:.6; filter:saturate(.9) contrast(1.05) brightness(.64)`. Replace `grayscale(.25) contrast(1.08)`.
- Overlay: `--nb-hero-overlay-dark`. Keep the 3px red/blue bottom rule as the existing `::after`.
- **Secondary CTA is not an outlined button.** It is an underlined text link: 15.5px/500, `border-bottom:1px solid currentColor`, `padding-bottom:2px`, with a trailing " →". Primary is a blue pill: `#014DF9`, white text, 15.5px/500, padding `15px 24px`, radius 999px. In `PageHero`, render the secondary as a link style, not `variant="secondary"`.
- Fix `.page-hero .button-secondary` (line ~91).
- **Verify** the hero image files exist. The design uses `/assets/originals/consulting-hero.jpeg` and `media-hero.jpeg`. `assets/originals/` has `.png` versions. Make the paths match real files.

**G5. Header.**
- Nav: IBM Plex Mono 12.5px, uppercase, letter-spacing .08em, gap 28px.
- The current page gets a **6px red (`#F9313C`) dot before its label**. Other items have a transparent dot. Add `.desktop-nav a::before` or a span, keyed on `aria-current="page"`. Over a hero the active item is `#F4F1EA` and the others are `#C9C5BC`. On light pages the active item is ink and the others are `#3A3D45`.
- CTA is a blue pill, 15px/500, padding `11px 20px`, text "Start a conversation".
- Header is transparent and absolute over dark heroes. It is light and in-flow on Contact only. Logo is 66px high, white over heroes and black on light.

**G6. Footer.** Layout matches the design: 4-column grid `1fr 1fr 1fr 1.2fr`, logo 280px with negative margins, the ecosystem icon order bdh / podcast / network / HindSite, and the `© 2026` line in mono. Background `#14161B`, link color `#C9C5BC`. **Verify** the logo margins `-34px 0 -38px`, and that `.site-footer::before` (line ~406) is gone.

**G7. Mobile (<1000px).** All `repeat(N,…)` grids collapse to 1 column. Exceptions: the Home journey goes to 3 columns, and the Consulting decision zones scroll horizontally or stack. Remove `white-space:nowrap` from headings and paragraphs. Hero min-height 560px, h1 `clamp(44px,11vw,76px)`.

---

## 1. Home (`app/page.tsx`)

Design order: hero, mission statement band, tracklist, "how the studio builds" band, founder quote, entry grid. The worktree has an extra section and several cards that must go.

1. **Hero.**
   - Replace `<p className="eyebrow">NotableBIT</p>` with a mono 12.5px uppercase line in `#D9D5CB`, preceded by an 8px red dot: "Black-founded technology studio · Tulsa, Oklahoma".
   - CTAs: blue pill "Explore the ecosystem" (`#ecosystem`) and an underlined link "Listen to BIT Voices →" (`/media`). These replace the "Explore the Ecosystem" and "Start With Voice" buttons.
   - Lede is 20px, max-width 640px.
2. **Delete the `voice-origin` section.** That is the podcast cover, the "Origin Vehicle / Archive Function / Expansion Cue" ledger and the `podcastArtifacts` array. Remove the unused `bitvoicesPodcastLogo` import and its CSS.
3. **Mission statement.** Delete `.mission-card`. Use a plain band: padding `56px`, `border-top` and `border-bottom` of `1px rgba(20,22,27,.14)`. The text is centered, max-width 960px, Newsreader italic 400, 40px/1.22, letter-spacing -.01em, `text-wrap:balance`.
4. **Ecosystem → "Tracklist" (replaces the 2×2 diagram, `.ecosystem-diagram` and the core).**
   - Layout: two columns, `320px | 1fr`, gap 56px, padding `88px 56px`.
   - Left column: h2 "One mission, four outputs." (48px) and the paragraph "These are not separate ventures. Each one answers a real need builders have, and all of them come from the same mission."
   - Right column: `<ol>` with a `1px solid ink` top rule. Each row is `border-bottom:1px solid rgba(20,22,27,.18)` and `padding:26px 0`. Row grid: `56px | 1fr | 120px | 24px`, gap 24px.
   - Row content: mono number 14px muted; name in Newsreader 34px/500; a one-line description at 15.5px/`--nb-ink-3`; a mono 12px uppercase role in its ink color; an "→".
   - Rows, in this order. This is the established order and replaces the BitVoices / HindSite / Advisory / Studio order.

   | # | Name | Role (color) | Line | Href |
   |---|---|---|---|---|
   | 01 | NotableBIT | Studio (ink) | Consulting, coaching, education, and software construction, helping people move from idea to useful, deployed software. | /studio |
   | 02 | BIT Voices Podcast | Media (`#C81E2B`) | Conversations amplifying Black voices and excellence in technology. | /media |
   | 03 | BitVoices Network | Community (`#C81E2B`) | Amplifying Black Excellence in Tech. Community is culture, not features. | https://bitvoices.network |
   | 04 | HindSite | Product (`#014DF9`) | Workflow intelligence for builders and AI-assisted development work. | https://hindsite.pro |

   - Keep `missionOutputs` only as far as needed to supply this data. The `source/becomes` text is no longer shown.
5. **"How the studio builds" band** (replaces `.home-journey`).
   - Background `#E9E5DA`, padding `80px 56px`.
   - Heading: "Helping people become better builders, *because generating code is not the finish line.*" The second clause is italic in `--nb-muted`. 48px, max-width 760px, `text-wrap:balance`.
   - Nine steps, with this copy: Idea, Problem excavation, Product definition, Requirements, Design, Architecture, Implementation, Validation, Deployment. The current Listen / Notice / Name… steps are removed.
   - Each step: `border-top:2px solid rgba(20,22,27,.4)`. Step 9 is `#014DF9`. Padding `14px 14px 0 0`. Mono 12px number in muted, and a 15.5px/500 label.
   - Footer row below, `border-top:1px solid rgba(20,22,27,.18)` and `padding-top:28px`, with two parts:
     - Newsreader italic 28px: "The finish line is verified deployment, with a builder who understands what was built."
     - Underlined link "How we work with builders →" (`/consulting`).
   - This is new copy drawn from your own description of the work. Confirm it before shipping.
6. **Founder quote.** Delete `.founder-note-card` and the old gradient band. Use a centered `figure`, max-width 960px, padding `96px 56px`. The `blockquote` is Newsreader 400, 48px/1.15, letter-spacing -.015em, with curly quotes. The caption is mono 12.5px uppercase, color `#3A3D45`: "B Donald Harris, Founder & CEO, NotableBIT".
7. **Entry points** (replaces the numbered list and the "Where to enter the ecosystem." heading).
   - Layout: a 4-column grid, gap 24px, padding `0 56px 88px`, no heading.
   - Each card is a link with `border-top:3px solid` (red / blue / blue / ink) and `padding-top:18px`.
   - Card text: label "01 · Listen" in mono 12px uppercase muted; title in Newsreader 26px; description at 15px.

   | # | Label | Title | Description | Top rule |
   |---|---|---|---|---|
   | 01 | Listen | BIT Voices Podcast | The conversations that started the work. | red |
   | 02 | Build | HindSite | Workflow intelligence from the studio. | blue |
   | 03 | Clarify | Work with the studio | Product, AI workflow, and strategy support. | blue |
   | 04 | Connect | Start a conversation | Partnerships, speaking, advisory, and ecosystem inquiries. | ink |

8. **Eyebrows (final).** Keep the hero eyebrow and the two mono labels "Tracklist" and "How the studio builds" exactly as in 1b. Home is the only page with labels.

---

## 2. Studio (`app/studio/page.tsx`)

1. **Hero copy.**
   - h1: "A studio for practical technology, product clarity, and builder infrastructure."
   - Lede: "How NotableBIT thinks, builds, focuses, and operates across internal products, advisory work, partnerships, and media/community initiatives."
   - CTAs: blue pill "Work with the studio" (`/contact`) and underlined link "Explore products →" (`/products`).
   - The page currently passes `route.title` and `route.description`. Pass literals, or update `site.ts`.
   - Min-height 640px. Image `workstation.jpg` at `62% 52%` is correct.
2. **Operating Principles.**
   - Heading "Our Operating Principles".
   - **Add an intro line** under the heading: "Context before automation. Strategy before code. Systems before scattered effort." It is 18px, `--nb-ink-3`, one line on desktop.
   - The markup is otherwise fine. The CSS is wrong: `.studio-principle-note{background:#fff6a9}` (line ~104) is a bright yellow. The design uses an aged-paper note: `repeating-linear-gradient(0deg,rgba(82,58,24,.025) 0 1px,transparent 1px 4px), var(--nb-note-old)`. Border `1px solid rgba(132,98,43,.42)`. Shadow `0 20px 44px rgba(20,22,27,.16), 0 2px 4px rgba(20,22,27,.14), inset 0 1px rgba(255,255,255,.72)`. Text color `#272014`.
   - Each note has a 2px gold bar at the top, from 28px to 28px inset: `linear-gradient(90deg,#9a6a25,#d2a449 58%,#9a6a25)`.
   - Number: mono 12px/600 in `#76501d`, letter-spacing .12em. Title: Newsreader 28px/600. Body: 15.5px in `#5b4a32`.
   - Tilt: note 1 `rotate(-.7deg) translateY(12px)`, note 2 `rotate(.6deg)`, note 3 `rotate(-.35deg) translateY(18px)`. Grid gap 34px, min-height 270px.
3. **Studio Method: turn the card flow into 4 open columns.**
   - Delete `.studio-method-canvas`, `.studio-method-connector` and the node card chrome (border, shadow, background at ~5965 and its copies).
   - Section background `#E9E5DA`, padding `88px 56px`.
   - Columns: a 4-column grid with no gap. Each `li` has `border-top:3px solid rgba(20,22,27,.4)` (the 4th is `#014DF9`) and `padding:18px 28px 0 0`.
   - Number: mono 12px muted. Title: Newsreader 500, 28px. Body: 15.5px/1.6 in `--nb-ink-3`.
   - Heading "The Studio Method" and subhead as they are now.
4. **Disciplines: restore the green terminal.**
   - Remove `.studio-console{background:var(--nb-ink)}`, `.studio-console *{color:#f7f4ee}` and the blue cursor (lines ~106–108).
   - Outer panel: radius 8, `border:1px solid rgba(179,197,255,.2)`, dark navy gradient background `linear-gradient(145deg,rgba(10,17,40,.97),rgba(5,8,16,.99))`. Chrome bar: 48px, three dots (`rgba(179,197,255,.44)` / `rgba(0,102,255,.68)` / `rgba(231,173,60,.72)`), label "notablebit/workbench", right label "focus.index" in `#8f96ad`.
   - Body background `#030405` (`--nb-term-bg`), padding 40px, IBM Plex Mono. Text `#8fdc95`. Command line at 13px. Entry title `#9be7a1`, 13.8px/600. Entry description at 12.8px in `rgba(143,220,149,.62)`, indented 5.2ch. 20px between entries.
   - Cursor: a bar 0.8em wide and 2px high, `#9be7a1`, using `@keyframes nb-blink` (`0%,48%{opacity:1}50%,100%{opacity:0}`) at `1.1s step-end infinite`. Add `prefers-reduced-motion` handling.
5. **Company/Studio, Not Agency: open columns, no cards.**
   - A 1px hairline `rgba(20,22,27,.14)` sits above the heading with 66px below it.
   - Four columns, gap 24px. Each has `border-top:3px solid`: Build blue, Advise ink, Partner ink, Amplify red. Number in mono 12px with letter-spacing .1em. Title in Newsreader 34px. Body 15.5px.
   - Delete `.studio-model-grid::before`, and each card's `::before` and `::after` connectors, border, shadow and background (lines ~2079–2130).
6. **CTA.** Delete the `.studio-cta-panel` card. Use a centered section with `border-top:1px solid rgba(20,22,27,.14)` and padding `96px 56px`:
   - h2 60px, max-width 820px.
   - Paragraph 19px, max-width 620px.
   - Blue pill "Partner with NotableBIT" and underlined link "View consulting →".

---

## 3. Products (`app/products/page.tsx`)

1. **Hero copy.**
   - h1: "Products and platforms built from real builder workflows."
   - Lede: "The NotableBIT-built ecosystem includes HindSite, BitVoices Network, and carefully framed labs work that supports builders and AI-era workflows."
   - CTAs: blue pill "Join the HindSite waitlist" and underlined link "Visit BitVoices →".
   - Min-height 780px.
2. **Feature card.**
   - Background `--nb-card`, padding 48px, grid `.94fr | 1.06fr`, gap 48px.
   - The status label is **muted, not red**: mono 12px/500 uppercase, color `#5A5D66`, with `border-bottom:1px solid rgba(20,22,27,.14)`, `padding-bottom:16px`, `margin-bottom:28px`. Remove `.products-feature-status` from line ~102.
   - Workflow rail: left border `1px solid rgba(1,77,249,.35)`. Dots are 11px, blue, with a 3px border in `#FAF8F3` (not white). Numbers are mono and blue.
   - Actions: blue pill "Join waitlist" and underlined link "Discuss builder workflows →". The secondary is not a bordered button.
   - Image frame: `background:#02060f`, padding 10px, radius 8, `border:1px solid rgba(20,22,27,.3)`.
3. **"Built in Sequence" cards.**
   - Background `--nb-card`, radius 8, soft shadow, 16:9 media on `#02050c`.
   - The stage label is mono 11.5px muted (remove the red override on `.platform-card-stage`).
   - Title is Newsreader 30px. Body padding 26px, min-height 286px.
   - **Wrap the product icon in a 44×44 `#14161B` tile**, radius 6, centered, bottom-right. The icon is max 36px. It is currently a bare image.
   - NotableBIT Labs stays a non-link (`article`) with a default cursor.
4. **Closing.** A card with `max-width:920px`, padding 56px, centered. The top rule is a gradient from 12% to 88%, transparent to red to blue to transparent. h2 is 40px. Actions: blue pill "Start a product conversation" and underlined link "Explore the studio →".

---

## 4. Consulting (`app/consulting/page.tsx`)

1. **Hero.** Copy matches and there is one CTA. Fix the image path (G4).
2. **Decision zones: mostly structural already. Match these visuals** (**verify** each).
   - Panel: background `#ECE8DD` with a 34px grid of `rgba(20,22,27,.045)` lines, radius 8, a 2px top rule from red to blue, padding `44px 44px 0`, 5 columns, gap 14px.
   - Odd cards (1, 3, 5) have `margin-top:26px`, so the cards stagger.
   - Card top border is 3px, alternating red and blue.
   - Card header: `background:#1F2430`, min-height 76px, title 15.5px/600 in `#F4F1EA` (IBM Plex Sans, not serif). Body is on `#FAF8F3`, 14px.
   - Under each card: a 30px-wide tapered tail, `clip-path:polygon(0 0,100% 0,62% 100%,38% 100%)`, with a red or blue gradient fading to transparent. The tail fills the space down to the foundation bar. `.consulting-decision-lanes` can supply it.
   - Foundation bar: full-bleed (`margin:0 -44px`), `#14161B`, `border-top:2px solid #F9313C`, "Clarity Before Execution" in Newsreader 28px, line in `#C9C5BC`.
3. **Useful artifacts: restructure to a 2-column layout with a paper stack.**
   - New wrapper grid: `minmax(0,2fr) | minmax(0,3fr)`, gap 64px, `align-items:center`, padding-top 104px.
   - Left column (40%): h2 "Useful artifacts,<br>not vague advice." at 52px/1.04, and the paragraph at 18px, max-width 440px.
   - Right column (60%): `.consulting-artifacts-proof` with `position:relative; isolation:isolate`, `max-width:640px`, and `margin:20px 0 24px`.
   - Behind it, three `aria-hidden` sheets, each a full-size rectangle with a 1px border, 4px radius and a soft shadow:

     | Layer | Background | Transform |
     |---|---|---|
     | Back | `#E4DFD1` | `rotate(1.4deg) translate(8px,8px)` |
     | Middle | `#EBE7DA` | `rotate(-1deg) translate(-6px,6px)` |
     | Front | `#F3F0E6` | `rotate(.5deg) translate(4px,3px)` |

   - Top sheet: `#FAF8F3`, padding `52px 52px 160px`, radius 4, with the 2px rule.
   - Label "What you leave with": mono 12px/500 uppercase, letter-spacing .13em, muted.
   - Three artifacts, each with a 54×2px red-to-blue dash above a Newsreader 34px title, then 17px body. Padding `30px 0`, with a 1px divider between.
   - **Turn `.consulting-artifacts-proof-note` into a sticky note**, absolutely placed at `right:40px; bottom:30px; width:200px; transform:rotate(-2.5deg); z-index:3`.
     - Background: `linear-gradient(145deg,#f4e5a8,#e8cf7a)` (`--nb-note`), with a faint top shade and ruled lines. Newsreader italic 15.5px in `#2f2416`, centered, padding `24px 16px 22px`. Drop shadow `0 5px 6px rgba(20,22,27,.22)`.
     - Curled corner: clip the bottom-right 24px with `clip-path:polygon(0 0,100% 0,100% calc(100% - 24px),calc(100% - 24px) 100%,0 100%)`. Add a 24×24 span with a lighter gradient for the fold.
     - Copy is unchanged: "The point is practical clarity: a path people can understand, review, and build."
4. **Closing.**
   - A single centered card, `max-width:880px`, padding 42px, radius 8, with the top rule.
   - h2 is 34px on one line on desktop. The paragraph is 16.5px, max-width 680px.
   - Actions **right-aligned**: underlined link "View products →" first, then the blue pill "Start a consulting conversation".
   - Remove the two-column layout and the `lede` styling in `.consulting-closing-panel`.

---

## 5. Media (`app/media/page.tsx`, `podcast-shorts.tsx`, `media-refinements.module.css`)

1. **Hero.** Copy matches, with one CTA, "Explore BitVoices". Fix the image path (G4).
2. **Podcast section.**
   - Heading "BIT Voices Podcast". The lede is 18px, `--nb-ink-3`, max-width 860px.
   - Shorts: a 4-column grid, gap 18px. Each card is a `button`, `--nb-card`, radius 8, a 1px border and a shadow. The title row is on top (17px/600, min-height 112px). The thumbnail is 4:5 with a bottom darkening gradient, a 64px circular play button (`rgba(5,7,13,.5)` with a white 1px border and a white triangle), and a hover lift of `translateY(-3px)`.
   - "Visit BIT Voices Podcast": a centered, outlined pill. 15.5px/500, `border:1px solid #14161B`, padding `13px 22px`, radius 999px.
   - Note line below: centered, 14.5px, muted. It can wrap on mobile.
3. **Video modal (known bug: dark text on dark panel).**
   - Overlay `rgba(10,12,16,.72)`. Dialog 400px wide, `max-width:100%`, **background `#FAF8F3`**, radius 8.
   - Header: title 15px/600 in **ink `#14161B`**, with an outlined "Close" pill (`border:1px solid #14161B`, 13px/500, transparent). The header sits above a `1px rgba(20,22,27,.14)` divider.
   - The video is a 9:16 iframe on `#000`.
   - Remove any inherited `color:white` or dark panel background from the patch.
4. **Infrastructure panel.** The structure already matches (panel, paths, actions). Match these details:
   - Panel: `#ECE8DD` with a 44px grid, a 2px top rule, padding 52px, radius 8.
   - A timeline line 13px from the top: `linear-gradient(90deg,#F9313C,#014DF9 60%,rgba(20,22,27,.25))`. Mono numbers sit on a `#ECE8DD` chip so the line passes behind them.
   - Columns divided by `1px rgba(20,22,27,.16)`. Column padding is `0 36px 0 0`, `0 36px`, `0 0 0 36px`. Titles are Newsreader 26px. Body is 15.5px/1.68.
   - Actions, right-aligned above a hairline: underlined link "Visit BitVoices →" **first**, then the blue pill "Start a media conversation". The worktree has the pill first and a bordered secondary button.

---

## 6. About (`app/about/page.tsx`)

1. **Hero.** Copy matches. CTAs: blue pill "Start a conversation" and underlined link "Meet B Donald →" (`https://bdonaldharris.com`). Min-height 780px.
2. **Story: two open columns with a gradient divider.**
   - Grid `minmax(0,1fr) 1px minmax(0,1fr)`, gap 56px, padding `96px 56px`, no card.
   - Insert `<div className="about-story-divider" aria-hidden="true" />` between the two articles, with `background:linear-gradient(180deg,#F9313C,#014DF9)`.
   - h2 is 38px/1.08 and the paragraph is 18px/1.65.
   - Remove the border rule on `.about-story-column + .about-story-column` (line ~119).
3. **Founder: remove the card and the tint (known bug).**
   - Delete the white card chrome: `.about-founder-card` background, border and `::before`.
   - **Delete `.about-founder-media::before` and `::after`**. These are the tinted overlay. The portrait must show untinted.
   - Layout: `grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr)`, gap 64px, `align-items:center`.
   - Portrait frame: `aspect-ratio:4/5`, radius 4, `background:#E4DFD1`, `box-shadow:0 24px 54px rgba(20,22,27,.2)`. `object-fit:cover`. Use the handoff `assets/b-donald-portrait.webp` if the current JPEG is not the approved crop.
   - Text: h2 48px with the non-breaking name, paragraph 18px/max-width 600, and an outlined pill "Visit B Donald Harris" (`1px solid ink`, padding `13px 22px`).
4. **Values.**
   - Add a 1px hairline `rgba(20,22,27,.14)` above the heading, with 66px of margin below it.
   - Make sure `SectionHeading` renders **no eyebrow**. The intro line is 18px.
   - Grid: 3 columns, `border-top:1px solid #14161B`. Each cell has `border-bottom:1px solid rgba(20,22,27,.18)` and padding `30px 32px 34px 0`. Title is Newsreader 32px, body is 15.5px.
   - **Delete `.about-values-cell::before`.** The gradient bar is not in the design.
5. **CTA.** Use `max-width:900px`, padding 52px, `--nb-card` and the top rule. h2 is 38px, max-width 640px. Actions: blue pill "Work with NotableBIT" and underlined link "Explore the studio →". Check that `CtaSection` renders the secondary as a link, and drop the `.about-cta-section .cta-panel` overrides (~906–970).

---

## 7. Contact (`app/contact/page.tsx`, `contact-form.tsx`)

1. **Header.** Light and in-flow, with the black logo. This already works through the pathname check.
2. **Title block.**
   - Padding `72px 56px 28px`. Content is left-aligned inside an 880px container.
   - h1 "Start a conversation." is **64px** Newsreader 500, letter-spacing -.025em. Set the size explicitly, because `.display` is 76–92px. The lede is 20px/1.6 in `#2E3139`, max-width 780px.
   - **Add the 3px red/blue rule** between the title and the form: `<div className="nb-rule" />` with 36px of top margin. It is missing from the worktree markup.
   - Remove `padding-top:100px` (line ~124).
3. **Form panel.**
   - `--nb-card`, `max-width:880px`, padding 44px, radius 8, the top rule. Section padding `56px 56px 96px`.
   - "Inquiry form" at 34px Newsreader. The email line is 15px muted, with a blue underlined link (underline offset 3px).
   - Form: a 2-column grid, gap 18px. Fields are Name*, Email*, Organization, Inquiry type* (select), Budget range, Timeline. The message textarea is full width, min-height 150px. The status line and a right-aligned pill "Send inquiry" sit below.
   - Labels: mono 12.5px/500 uppercase, letter-spacing .07em, ink.
   - Inputs: min-height 46px, padding `12px 14px`, 15.5px, white background, `1px solid rgba(20,22,27,.28)`, radius 4. Focus: `border-color:#014DF9; box-shadow:0 0 0 3px rgba(1,77,249,.2)`.
   - Submit: blue pill, padding `15px 26px`, 15.5px/500.
   - **Verify** that `contact-form.tsx` classes match. I did not read it.

---

## Suggested order for the agent
1. G1 (dedupe the CSS), G2–G6.
2. Home, then Studio, Products, Consulting, Media, About and Contact. Home first because its hero sets the pattern.
3. G7 (mobile) last, once the markup is in place.
