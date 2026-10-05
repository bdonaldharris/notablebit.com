# Fonts
Replace Aptos / Georgia / SFMono stacks with three hosted families via next/font/google in app/layout.tsx:

```ts
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
const newsreader = Newsreader({ subsets:["latin"], weight:["400","500"], style:["normal","italic"], variable:"--font-newsreader", display:"swap" });
const plexSans  = IBM_Plex_Sans({ subsets:["latin"], weight:["400","500","600"], variable:"--font-plex-sans", display:"swap" });
const plexMono  = IBM_Plex_Mono({ subsets:["latin"], weight:["400","500"], variable:"--font-plex-mono", display:"swap" });
// <html className={`${newsreader.variable} ${plexSans.variable} ${plexMono.variable}`}>
```
Roles: Newsreader 500 = every headline, quotes in italic 400/500; IBM Plex Sans = body, buttons, nav links in cards; IBM Plex Mono = nav, captions, labels, form labels, terminal.
