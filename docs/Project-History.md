# Project history and transfer status

Prepared for transfer to AntiGravity on 30 October 2026.

## Owner's explicit decisions

- Official title: Wild Animal Survival Sim 3D.
- Studio brand: Gameyard, as explicitly clarified in chat.
- Android / Google Play CTAs only. No Apple App Store buttons.
- Preserve the reference homepage's section types and order, with wildlife content.
- Use the supplied forest-green and golden-yellow palette exactly.
- Use real game media where available; do not invent game features or screenshots.
- Continue and finish development in AntiGravity.

## Work completed on 20 October 2026

The brief and color image were studied. The Call of Duty: Mobile homepage and game's Google Play listing were read. A static HTML/CSS/JavaScript website was built, using eight publisher-provided store images and local fonts. Interactive tabs, animal panels, mobile menu, media expansion, image dialog and reduced-motion support were implemented.

Browser checks passed at 320, 390, 768, 1024 and 1440 pixel widths. These covered visible images, horizontal overflow, Play Store links, tabs, animal panels, gallery expansion and lightbox controls, Escape and mobile navigation. JavaScript syntax passed Node checks. Screenshots in this folder are saved views from that work; no current live-browser audit was performed solely for this handoff.

The site was privately deployed at https://wild-animal-survival-gameyard.team-ozforsolutions.chatgpt.site. Deployment succeeded on 20 October. Availability and current access have not been rechecked for this transfer.

## Material limitations / finalization work

- Owner has not yet approved the final design in this conversation. Treat the site as an implementation to refine, not a signed-off final release.
- Section coverage follows the reference as read on 20 October; exact present-day visual or animation parity has not been established.
- No real trailer, official logo file, collaboration announcement or official social URLs were supplied. The collaboration section uses an empty state; the gallery uses still images.
- Store screenshots include publisher UI and promotional material. They are not independently verified current-binary captures.
- The brief has ideas and development work that are not release confirmations. Family/den features and other speculative systems were not marketed as live.
- Verify any changed roster, map naming, current store update or public publisher details before revising factual claims.
- Gameyard branding and Hush Games publisher attribution are separated. Existing game policy/support links came from Google Play. Website-specific policies and final hosting/domain choices remain to be decided as needed.
- Historical checks do not constitute Lighthouse benchmarks, a screen-reader audit, game QA or a real-device certification.

## Modernization & Alignment with Call of Duty Mobile (30 October 2026)

- Completely shifted from initial green/charcoal to Call of Duty Mobile's layered black palette (`#000000` pitch black, `#050507` void, `#0A0A0D` dark layer, `#101015` surface, `#15151C` card, `#1B1B24` elevated).
- Replaced font stack with Call of Duty Mobile typography equivalents: `Teko` (display uppercase headings matching *Hitmarker Condensed*), `Rajdhani` (tactical HUD labels & technical text), preserving local `Barlow` / `Barlow Condensed` fallbacks.
- Replaced header right with a single yellow `#F2B400` "PLAY NOW" button, and implemented smart hide-on-scroll-down / reveal-on-scroll-up behavior with blur backdrop.
- Hero Section Alignment:
  - Cleaned hero content: removed extraneous kicker/body paragraphs and platform labels.
  - Centered game title stacked cleanly in Call of Duty logo font style and proportional sizing.
  - Subtitle callout: bold yellow `#F2B400` "PLAY FREE NOW".
  - Centered official Google Play Store badge matching Call of Duty Mobile's exact black pill button with official 4-color Google Play mark, clean font typography, and dimensions.
  - Attached bottom promotional scroller strip directly to the hero section with a thin gold `#F2B400` top border, continuous marquee, and a compact yellow "PLAY NOW" action button.
- Floating Header & Refined Hero Polish (30 October 2026):
  - Converted the header into a separate floating navigation bar with top/left/right margins, rounded pill container, dark backdrop blur, and smooth show/hide transitions.
  - Replaced the hero background image with the official high-resolution savanna wolf sunset artwork (`hero-wolf.jpg`).
  - Removed HUD corner brackets to achieve exact parity with the Call of Duty Mobile reference hero section.
  - Added a soft, subtle radial black fade behind the central text block (title, callout, and Google Play button) while preserving the natural brilliance of the background sunset.
  - Adjusted proportional typography scale for the title and subtitle, and scaled up the Google Play Store button to match the visual weight in the reference.
  - Styled the yellow outline atop the bottom scroller bar with a gradient that smoothly fades into the dark background on both the left and right edges.
  - Removed the 'Play Now' button from the bottom right scroller strip so the continuous marquee flows smoothly across full width without distraction.
  - Brought down the entire central text cluster (`margin-top: 55px`) into the natural landscape focal plane.
  - Increased typography scale slightly for the game title (`WILD ANIMAL SURVIVAL SIM 3D`) and `PLAY FREE NOW` subtitle.
  - Enlarged the Google Play badge slightly (`58px` height, `28x30px` icon, `19px` bold text) for balanced visual presence.
- Yellow Spotlight Section ("Latest Updates") (30 October 2026):
  - Created a full-width vibrant yellow section immediately following the hero scroller line, matching Call of Duty Mobile's second section layout.
  - Background features high-contrast wilderness imagery washed in a rich golden-yellow tint and soft radial gradient.
  - Centered bold black heading: "LATEST UPDATES".
  - Centered a 16:9 widescreen showcase frame with deep drop-shadow and dark border, currently displaying a placeholder game action image, ready to receive the user's custom asset.
  - Inspected and applied exact styling specifications extracted from Call of Duty Mobile's live production CSS:
    - Font: Heavyweight condensed display font (`Anton` / `Hitmarker Condensed Black`), `font-weight: 900`, `letter-spacing: 1px`.
    - Title size: Exact `3.25rem` (52px) desktop / `2.25rem` (36px) mobile with `line-height: 3.25rem`.
    - Section height & spacing: Exact `padding: 80px 0` desktop / `padding: 40px 0` tablet / `padding: 20px 15px` mobile, with exact `gap: 21px`.
    - Showcase frame: Exact `max-width: 866px`, `width: 90%`, centered with 16:9 aspect ratio and dark border.
    - Replaced background with clean scenery art (`game-3.webp`) with zero UI/HUD overlays.
    - Updated centerpiece media frame with user's official artwork: "Explore New Animals" featuring the moose and wild boar wilderness scene (`explore-new-animals.jpg`).
- Modes Section Overhaul (30 October 2026):
  - Removed old single-card tab switcher (`#mode-tabs` / `#mode-panel`).
  - Implemented Call of Duty Mobile's exact 50/50 alternating card row layout:
    - Card 1 (Hunt): Image left, title and description right.
    - Card 2 (Survive): Title and description left, image right (reversed).
    - Card 3 (Explore): Image left, title and description right.
  - Sourced and applied the official dark textured concrete/grunge background (`modes-bg.webp`).
  - Section title: Centered `MODES` in bold yellow (`var(--gold)`), `Anton` 900 font, `3.25rem` (52px) desktop / `2.25rem` (36px) mobile.
  - Card titles: Bold yellow `2.25rem` (36px), uppercase, with descriptive text underneath.
  - Responsive stacking with full-width cards on tablets and mobile devices.
  - Restored full widescreen 16:9 landscape aspect ratio on all mode card images:
    - Fixed container sizing to `flex: 0 0 54%; max-width: 620px; aspect-ratio: 16 / 9;` with `align-items: center; justify-content: space-between;`.
    - Eliminated vertical image stretching and cropping so every gameplay scene (tiger hunt, river crocodile, fox wilderness) renders cleanly in widescreen landscape format.
  - Rebuilt Maps / Worlds section (`#worlds`) to match Call of Duty Mobile's Maps carousel:
    - Sourced authentic dark fade background image (`maps-bg.webp`).
    - Title: Centered `EXPLORE THE WILD` in bold yellow `Anton` 900 font (`var(--gold)`), with clean subtitle `Discover the landscapes of Wild Animal Survival Sim 3D.`. Removed extraneous eyebrow tags and Google Play screenshot badges.
    - Centered 16:9 widescreen landscape framed box with soft shadow. Positioned the active map name badge in the upper middle area (`top: 18px; left: 50%; transform: translateX(-50%);`) with translucent dark glass and gold border/text (`JUNGLE`, `SAVANNA`, `WATERWAYS`) so it remains clearly visible without overlapping in-game HUD controls.
    - Centered row of 3 widescreen thumbnail cards below the main box for selecting landscapes with active gold outline and smooth transition. Accessible via click and arrow keys.
  - Rebuilt Characters / Roster section (`#animals`) to match Call of Duty Mobile's "ICONIC CHARACTERS" carousel:
    - Sourced and applied dark textured background (`modes-bg.webp`).
    - Title: Centered `CHOOSE YOUR WILD SIDE` in bold yellow `Anton` 900 font (`var(--gold)`), with subtitle `Meet the inhabitants of your next adventure.`.
    - Main display: 16:9 widescreen landscape framed card showing the active animal in gameplay / character selection screen (Wolf, Tiger, Black Panther, Bear, Lion, Crocodile) with a bottom-left overlay displaying the animal name, description, and `+` indicator.
    - Sourced individual cropped widescreen thumbnails for each animal from `game-2.webp` (`animal-wolf.webp`, `animal-tiger.webp`, `animal-panther.webp`, `animal-bear.webp`, `animal-lion.webp`, `animal-crocodile.webp`) in a centered selector row with gold active state and keyboard accessibility. Smooth swiping on mobile.


## Transfer packaging

`dist/` is copied from the existing site without changing the website. The full original Markdown brief is included. The color guide is transcribed because the temporary PNG is no longer present. The new preview script and package.json provide a portable, dependency-free local launch command. Original Codex-specific Git/hosting metadata and credentials are excluded. Old files and the hosted preview are retained; no deletion or unpublishing was requested.

`MASTER-PROMPT.md` is a curated transfer of relevant conversation requirements, decisions and implementation context, not a verbatim chat transcript.
