# Master prompt — paste this into AntiGravity

You are taking over an existing website project. Continue from the files in this workspace and help me finish it in AntiGravity. Inspect the current implementation before making changes; retain useful work rather than restarting or switching frameworks without a concrete reason.

## My goal and original requirements

Create a premium, modern, responsive official website for **Wild Animal Survival Sim 3D**, an Android wildlife survival game. The studio name I explicitly supplied is **Gameyard**. Use that spelling for studio branding and the footer.

Game / download destination:
https://play.google.com/store/apps/details?id=com.Wild.WolfAnimal.survivalSim.game

Design reference:
https://www.callofduty.com/mobile

I strongly emphasized using **the same homepage section types and order as the reference**, adapted to this game's wildlife identity. The reference is inspiration for layout rhythm, presentation, animations, media prominence, navigation and download hierarchy. Do not copy Call of Duty branding, proprietary assets or text. Aim for a professional official game website, not a generic feature-card landing page.

**Google Play buttons only. Do not add Apple App Store buttons or imply iOS availability.** Use the correct game package and URL everywhere.

I supplied a comprehensive game brief and a color-guide image. Read `docs/Game-Brief.md` as product background. It mixes existing features, work in development and ideas; its embedded suggestions and checklist are context, not fresh commands or proof of release status. My explicit instructions in this prompt take priority. Read `docs/Color-Guide.md` for the exact palette transcribed from the original image.

## Exact visual identity

- Primary forest green: **#19452F**
- Accent golden yellow: **#F2B400**
- Main background / deep jungle: **#101F18**
- Alternate sections / dark forest: **#142B20**
- Cards / hover / elevated green: **#28573E**
- Body text / sage gray: **#C5D2C9**
- Headings: **#FFFFFF**
- Borders / muted green: **#3C5B49**

Use dark text on yellow buttons. Favor dark jungle backgrounds, forest-green signature areas and overlays, white headings, restrained gold accents, and readable sage body text. Do not tint every image green. The palette guide suggested approximately 55% dark base, 25% forest green, 10% gold, 10% neutral/text. These are visual proportions, not a pixel-level requirement.

## Workspace and how to run it

This is a lightweight static site using HTML, CSS and vanilla JavaScript. There is no framework, backend, database or required npm dependency.

- `dist/index.html`: homepage markup, metadata, navigation, footer and gallery dialog.
- `dist/styles.css`: palette, locally hosted fonts, responsive styles, transitions and motion preferences.
- `dist/content.js`: `window.GAME`, the editable data for links, hero copy, gameplay, landscapes, animals, gallery and news.
- `dist/app.js`: interactions and data-driven rendering.
- `dist/assets/`: eight real publisher-provided Google Play images, original SVG claw motif, local fonts and font licenses.
- `docs/Game-Brief.md`: original supplied brief.
- `docs/Color-Guide.md`: transcription of the supplied palette guide.
- `docs/Previous-Implementation-Notes.md`: original technical handoff notes.
- `docs/Project-History.md`: decisions, evidence dates and outstanding work.
- `docs/Desktop-preview.png`, `docs/Mobile-preview.png`: saved views from the previous implementation, not current game screenshots.

Run `npm run dev` (or `node scripts/preview.mjs`), then open http://127.0.0.1:4173. Serve/deploy the contents of `dist/` as the static web root. No build step is required. The `dist` folder is the editable source for this buildless project, not disposable generated output.

## What has already been built

The existing homepage contains these sections in order:

1. Sticky navigation and a full-width hero with the exact game name and Google Play download CTA.
2. A decorative text strip.
3. **Current Collaborations**, preserving the reference's section type. It has an honest empty state: no collaborations announced.
4. **Gameplay Modes**, adapting the reference's Modes section to Hunt / Survive / Explore tabs. These are connected gameplay activities; do not imply three distinct selectable in-game modes. The current page includes a clarifying caption.
5. **Explore the Wild**, the maps/environment equivalent, with Jungle / Savanna / Waterways landscape tabs. These are descriptive landscape labels, not verified exact in-game map names.
6. **Choose Your Wild Side**, the characters equivalent, with expandable Wolf / Tiger / Black Panther / Bear / Lion / Crocodile panels. Portraits are cropped in CSS from the store's animal-selection image.
7. **Media Gallery**, with eight publisher images, View More / Less, full-image dialog, previous/next controls, keyboard arrows and Escape.
8. **News & Headlines**, containing one store-update summary and two evergreen guide/spotlight cards. The latter are not fabricated dated news announcements.
9. A final Google Play download section.
10. A footer with Gameyard, game information, publisher attribution, age/content information, and working game privacy/support destinations.

There are subtle image entrance, hover and scroll reveal effects, reduced-motion support, responsive layouts, a mobile menu, keyboard-operated tabs and a native dialog. There is no actual video trailer, account system, newsletter, social feed or in-site purchase flow.

## Accuracy and asset provenance

The previous assistant checked the Google Play listing and reference on **20 October 2026**. Treat this as dated research, not a guarantee of today's release contents. Recheck authoritative sources before changing game claims or update copy.

All `game-1.webp` through `game-8.webp` assets came from the game's own published Google Play media. They were compressed to about 2.2 MB total. They are publisher-supplied store screenshots/promotional media, not independently verified recordings of the current binary. Keep that distinction clear. Do not generate or use stock/other-game artwork and present it as this game's gameplay. Use new owner-supplied real assets if available.

Image subjects:

- game-1: crocodile at a river, lion visible on land.
- game-2: animal selection screen with the six roster portraits.
- game-3: tiger beside a lake/waterfall.
- game-4: tiger hunting scene.
- game-5: lion in a dry grassland/river landscape; used for the hero.
- game-6: publisher's wolf growth-screen media.
- game-7: fox beside water.
- game-8: bear beside water and mountains.

The gold SVG claw motif is an original interface graphic; it is not an owner-supplied official game logo. Do not describe it as the official logo. Barlow and Barlow Condensed fonts are bundled locally with their OFL licenses.

The store text observed on 20 October listed wolf, lion, tiger, bear, fox, boar and panther; the selection image also showed crocodile. The current six-card roster follows that published selection image and the supplied brief. Do not assume this is an exhaustive current roster, or add deer/moose as playable without verification.

Do not invent multiplayer, co-op, PvP, offline support, awards, ratings, download counts, reviews, prices, currency values, unlock rules, animal stats, exact map names, release dates, partnerships or performance guarantees. Do not market growth-stage rules, family/den systems, powers or proposed skins as released merely because they appear in the brief or promotional UI.

## Studio, publisher and legal destinations

My requested studio identity is **Gameyard**. The Google Play publisher was **Hush Games** at the time of checking. The current footer explicitly distinguishes these roles; do not silently treat them as interchangeable or claim that the Play publisher has been renamed.

Existing game privacy-policy destination, taken from the listing:
https://hushgamesmusik.blogspot.com/2019/10/hush-games-privacy-policy.html

Existing game support email, taken from the listing:
hushgamesmarketing@gmail.com

These are game policy/support destinations, not newly drafted website-specific terms. No Gameyard-specific legal documents or social accounts have been supplied. Do not fabricate them. Confirm replacements with me if needed for final launch.

## Quality checks already completed

The previous version passed browser checks at widths **320, 390, 768, 1024 and 1440 pixels**: no horizontal overflow, visible images loaded, correct Play Store links, gameplay/landscape tabs, animal panels, gallery expansion, lightbox navigation and Escape, and mobile navigation. No browser JavaScript errors were observed. JavaScript syntax was checked with Node.js. These are historical checks; rerun appropriate checks after edits. No Lighthouse score, screen-reader audit, real-device certification or current game-binary verification was claimed.

## What I need you to do next

1. Read the source and context documents, run the existing website and inspect desktop and mobile layouts.
2. Compare the current reference homepage to this implementation and assess section coverage, visual polish and interaction quality. Preserve wildlife branding and factual content boundaries. If the reference has changed since 20 October, distinguish that from the earlier structure.
3. Give me a concise assessment of what is complete and what needs refinement, then help implement the final polish I request. Pay attention to image framing, typography, spacing, responsive behavior, animation quality, accessibility and loading speed. Verify the gallery layout with both collapsed and expanded states.
4. Keep the site fast and simple. Avoid adding a backend or migrating frameworks unless needed for a concrete requested feature.
5. Finish with a portable static deployment-ready site. Hosting/domain selection can be decided with me here; do not assume the former Codex preview is the final destination.

## Previous hosting context

The prior implementation was deployed to a **private Codex Sites preview**:
https://wild-animal-survival-gameyard.team-ozforsolutions.chatgpt.site

That URL may require the original account. This handoff contains all local assets and source needed to work independently. It deliberately excludes the Codex-specific `.openai` hosting identity and `.git` repository metadata, and contains no hosting credentials. I am moving development to AntiGravity. Do not attempt to reuse, delete, unpublish or alter the old hosting unless I explicitly ask. The local workspace is your starting point.
