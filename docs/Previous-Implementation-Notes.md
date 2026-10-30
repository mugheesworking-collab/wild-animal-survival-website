# Wild Animal Survival Sim 3D — Gameyard

Responsive, buildless official game website. Deploy the contents of `dist/` to any static host. No installation or build step is required.

## Editing

- `dist/content.js`: game links, studio, hero copy, gameplay tabs, landscapes, animals, gallery and news.
- `dist/index.html`: homepage structure and footer.
- `dist/styles.css`: exact brand palette, responsive layouts, animations and reduced-motion support.
- `dist/app.js`: tabs, animal panels, mobile menu, gallery and keyboard controls.

Run a static HTTP server with `dist/` as its root to preview locally. Opening index.html directly also supports the main experience.

## Content verification

Reference homepage examined 20 October 2026: https://www.callofduty.com/mobile

Section order: hero/download, current collaborations, gameplay modes, wilderness landscapes (maps equivalent), animals (characters equivalent), media gallery, news and headlines, download and studio/legal footer. No Call of Duty art, logo, copy or media is included.

Game information and all eight images were sourced from the publisher's Google Play listing on 20 October 2026:
https://play.google.com/store/apps/details?id=com.Wild.WolfAnimal.survivalSim.game

Images are publisher-supplied store screenshots/promotional media; they have been compressed without content changes. Website labels identify their source. Cropped roster portraits come from the published selection image. Exact map names are not asserted; landscape labels describe the visible scenery. Hunting, survival and exploration are described as connected gameplay activities, not separate selectable in-game modes.

Gameyard is the studio name supplied by the owner. Hush Games remains identified as the Google Play publisher. Privacy and support destinations are the ones linked in that listing. No fictional social accounts, trailers, collaborations, news dates or performance numbers have been added. No App Store buttons are included. Growth, family, den, powers and proposed systems are not promoted as released features.

The collaboration section has an explicit empty state until an announcement is verified. The latest update card reflects store release notes; the other news cards are evergreen guides linking to their corresponding sections.

## Visual identity

Forest green #19452F; golden yellow #F2B400; background #101F18; alternate #142B20; hover/elevated #28573E; body #C5D2C9; headings #FFFFFF; borders #3C5B49. Barlow and Barlow Condensed are locally served; no external font request is required. The claw mark is an original SVG interface motif, not an asserted official game logo.

## Checks

Browser checks cover widths 320, 390, 768, 1024 and 1440 pixels, horizontal overflow, images, download destinations, tabs, animal panels, expandable gallery, lightbox next/previous/Escape and mobile navigation. JavaScript syntax checked with Node.js.

Sites publication starts private. Public audience and custom-domain configuration can be managed separately when ready.
