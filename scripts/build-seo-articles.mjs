import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const newsDir = path.join(distDir, 'news');

// Clean previous generated news subfolders
if (fs.existsSync(newsDir)) {
  fs.rmSync(newsDir, { recursive: true, force: true });
}
fs.mkdirSync(newsDir, { recursive: true });

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.Wild.WolfAnimal.survivalSim.game';
export const SITE_URL = 'https://www.wildanimalsurvivalsim3d.com';

// Exactly 7 Articles corresponding to the 7 client update images
export const articles = [
  {
    slug: 'major-wildlife-rpg-update',
    // Article 1: LIVE RIGHT NOW
    publishDate: '2026-11-16T00:00:00+05:00',
    displayDate: 'November 16, 2026',
    tag: 'MAJOR UPDATE',
    title: 'Wild Animal Survival Sim 3D: Major Wildlife RPG Update Released',
    metaTitle: 'Wild Animal Survival Sim 3D - Major Wildlife RPG Update',
    metaDescription: 'The Major Wildlife RPG Update for Wild Animal Survival Sim 3D is live! Explore 3 new animals, family system, den defense, and play free on Google Play Store.',
    focusKeywords: ['Wild Animal Survival Sim 3D update', 'Wild Animal Survival Sim 3D patch notes', 'wildlife RPG mobile update', 'wild animal simulator android'],
    image: '/assets/news/major-wildlife-rpg-update.jpg',
    excerpt: 'The biggest expansion in Wild Animal Survival Sim 3D history has arrived, featuring 3 brand-new playable animals, an immersive Family System, Den defense mechanics, animal growth stages, and multi-language support.',
    readTime: '6 min read',
    contentHtml: `
      <p class="lead">The wilderness has evolved. We are thrilled to announce that the <strong>Major Wildlife RPG Update</strong> for <strong>Wild Animal Survival Sim 3D</strong> is officially live across all regions on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a>. This landmark release introduces revolutionary gameplay mechanics, expanding your animal survival journey into a living, breathing ecosystem.</p>

      <div class="intel-brief-card">
        <div class="intel-brief-header">
          <span class="intel-pill">PATCH 2.0 INTEL</span>
          <span>BUILD: LIVE WORLDWIDE</span>
        </div>
        <div class="intel-grid">
          <div><strong>GAME:</strong> Wild Animal Survival Sim 3D</div>
          <div><strong>UPDATE:</strong> Major Wildlife RPG Expansion</div>
          <div><strong>PLATFORM:</strong> Android (Google Play)</div>
          <div><strong>GENRE:</strong> 3D Wildlife RPG / Survival</div>
        </div>
      </div>

      <h2>What's Inside the Major Wildlife RPG Update?</h2>
      <p>Whether you roam the frozen tundra, stalk prey through the dense rainforest, or claim territory on the open savanna, this update reshapes how you experience <strong>Wild Animal Survival Sim 3D</strong>. Our development team has listened directly to player feedback, engineering core improvements that deepen survival roleplay, creature progression, and pack combat.</p>

      <div class="feature-highlight-box">
        <h3>Key Update Highlights:</h3>
        <ul>
          <li><strong>3 New Playable Animals:</strong> Step into the hoofs of the majestic Deer, mighty Moose, and fierce Wild Boar.</li>
          <li><strong>New Family System:</strong> Find your mate, birth cubs, and protect your bloodline against apex predators.</li>
          <li><strong>New Den System:</strong> Claim an authentic territory base, rest safely, and defend your cubs from enemy invasions.</li>
          <li><strong>Animal Growth Stages:</strong> Evolve your beast from a fragile Juvenile into a colossal Prime predator.</li>
          <li><strong>Special Powers & Custom Skins:</strong> Unleash Fire Attack, protective Shields, and Speed Boosts with exclusive new skins.</li>
          <li><strong>Multi-Language Localization:</strong> Play seamlessly in 12+ international languages.</li>
          <li><strong>Enhanced Camera & Gameplay:</strong> Tighter controls, stable camera movement, and fluid 60 FPS mobile performance.</li>
        </ul>
      </div>

      <h2>A Deeper Roleplaying Experience in Wild Animal Survival Sim 3D</h2>
      <p>Survival in <strong>Wild Animal Survival Sim 3D</strong> is no longer just about hunting down food—it is about establishing a dynasty. With the newly integrated <strong>Family System</strong>, solo survival gives way to strategic pack coordination. You can discover a compatible mate across dynamic biomes, build kinship through shared hunts, and raise your offspring from vulnerable cubs into formidable allies.</p>
      <p>To support your growing family, the all-new <strong>Den System</strong> provides a sanctuary where your mate and young can rest and heal. But beware: rival predators will actively seek out your den. You must fortify your territory, monitor scents in the wind, and fight fiercely to protect your offspring from surprise ambushes.</p>

      <h2>Elemental Powers and Legendary Skins</h2>
      <p>Combat encounters in <strong>Wild Animal Survival Sim 3D</strong> now feature superhuman predatory powers. Players can unlock the devastating Fire Attack to burn through tough armor, summon a glowing Primal Shield to absorb lethal blow damage, and trigger instant Speed Boosts to outflank any opponent.</p>

      <div class="article-cta-box">
        <h3>Ready to Lead Your Pack?</h3>
        <p>Experience the biggest update yet in <strong>Wild Animal Survival Sim 3D</strong>. Download the latest build free today and dominate the untamed wilderness!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> INSTALL FREE ON GOOGLE PLAY
        </a>
      </div>

      <h2>Explore New Worlds & Roster</h2>
      <p>This major patch perfectly complements our diverse roster of apex beasts including the <a href="/#animals">Wolf, Tiger, Panther, Lion, Bear, and Crocodile</a>. Explore the lush foliage of the Jungle, conquer the vast Savanna, and patrol the dangerous Waterways in our <a href="/#worlds">expansive 3D wilderness worlds</a>.</p>
      <p>Have ideas for upcoming features or want to see new animals added next? Submit your thoughts directly to our development team via the official <a href="/suggestions">Wild Animal Survival Sim 3D Suggestions Portal</a>.</p>
    `
  },
  {
    slug: '3-new-animals-deer-moose-boar',
    publishDate: '2026-11-17T13:00:00+05:00',
    displayDate: 'November 17, 2026',
    tag: 'NEW ANIMALS',
    title: 'Play as Deer, Moose & Boar in Wild Animal Survival Sim 3D',
    metaTitle: 'Play Deer, Moose & Boar in Wild Animal Survival Sim 3D',
    metaDescription: 'Unlock 3 new playable beasts in Wild Animal Survival Sim 3D! Master Deer, Moose, and Boar in open wilderness. Download free on the Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D new animals', 'play as deer moose boar', 'wildlife animal simulator 3D roster', 'herbivore survival simulator'],
    image: '/assets/news/3-new-animals-deer-moose-boar.jpg',
    excerpt: 'Step away from traditional carnivores and experience wilderness survival through the eyes of the swift Deer, towering Moose, and ferocious Wild Boar in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    contentHtml: `
      <p class="lead">Prepare for an entirely fresh survival dynamic! The latest update to <strong>Wild Animal Survival Sim 3D</strong> brings three extraordinary new playable animals to the roster: the agile <strong>Deer</strong>, the towering <strong>Moose</strong>, and the ferocious <strong>Wild Boar</strong>. Download the update now on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and test your survival instincts with unique abilities and playstyles.</p>

      <h2>1. The Swift Deer: Mastery of Agility and Stealth</h2>
      <p>The Deer brings unprecedented agility to <strong>Wild Animal Survival Sim 3D</strong>. Blessed with supreme leaping heights and rapid sprint acceleration, the Deer excels at evading apex carnivores like the <a href="/#animals">Wolf and Panther</a>.</p>
      <ul>
        <li><strong>Heightened Senses:</strong> Detect lurking predators through an expanded scent and auditory radar before they close in.</li>
        <li><strong>Stamina Burst:</strong> Outrun predators over long distances and navigate steep rocky ridges where larger carnivores struggle to follow.</li>
        <li><strong>Foraging & Grazing:</strong> Rejuvenate health and stamina by locating rare herbs, wild berries, and fresh river banks across <a href="/#worlds">Jungle and Savanna worlds</a>.</li>
      </ul>

      <h2>2. The Mighty Moose: Forest Titan with Crushing Antlers</h2>
      <p>Do not mistake the Moose for passive prey. In <strong>Wild Animal Survival Sim 3D</strong>, the Moose represents one of the most physically imposing creatures in the wilderness. Featuring massive antler armaments and a thick winter coat, the Moose can go toe-to-toe with even the strongest grizzly bears and wolf packs.</p>
      <ul>
        <li><strong>Antler Ram Attack:</strong> Deliver high-impact kinetic headbutts that stun charging predators and knock down pursuing foes.</li>
        <li><strong>Waterway Superiority:</strong> Swim through deep rivers and marshlands faster than land predators, utilizing water bodies as tactical escape routes.</li>
        <li><strong>Territory Stomp:</strong> Clear surrounding ambushes with a ground-shaking hoof stomp that causes area-of-effect stagger damage.</li>
      </ul>

      <h2>3. The Wild Boar: Raw Aggression and Relentless Toughness</h2>
      <p>Tenacious, armored, and fiercely protective of its den, the Wild Boar is built for close-quarters brawling in <strong>Wild Animal Survival Sim 3D</strong>. With its razor-sharp tusks and thick hide, the Boar can root for underground sustenance and counterattack any carnivore bold enough to challenge its feeding grounds.</p>

      <div class="article-cta-box">
        <h3>Master All 3 New Beasts Today</h3>
        <p>Switch between predators and herbivores in <strong>Wild Animal Survival Sim 3D</strong>. Unlock the Deer, Moose, and Boar on the Google Play Store right now!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> GET THE NEW ANIMALS ON GOOGLE PLAY
        </a>
      </div>

      <h2>How to Unlock and Play the New Animals</h2>
      <p>All three animals can be selected directly from the main animal selection menu after updating your game client. Each new creature features full progression support—allowing you to evolve them from young juveniles into majestic prime specimens.</p>
      <p>Share your favorite new creature or tell us which animal we should add next by visiting our <a href="/suggestions">Gameyard Suggestions Page</a>!</p>
    `
  },
  {
    slug: 'new-family-system-guide',
    publishDate: '2026-11-18T13:00:00+05:00',
    displayDate: 'November 18, 2026',
    tag: 'FAMILY SYSTEM',
    title: 'Family System Guide for Wild Animal Survival Sim 3D: Mates & Cubs',
    metaTitle: 'Family System Guide for Wild Animal Survival Sim 3D',
    metaDescription: 'Find a mate, raise babies, and protect your pack with the new Family System in Wild Animal Survival Sim 3D. Download free and build your dynasty on Android!',
    focusKeywords: ['Wild Animal Survival Sim 3D family system', 'raise cubs wild animal simulator', 'animal pack dynasty mobile RPG', 'mate and cubs animal sim'],
    image: '/assets/news/new-family-system.jpg',
    excerpt: 'Survival is sweeter with a pack by your side. Discover how to locate a mate, raise healthy cubs, and protect your family in Wild Animal Survival Sim 3D.',
    readTime: '6 min read',
    contentHtml: `
      <p class="lead">Solitary wandering is a thing of the past. The newly launched <strong>Family System</strong> in <strong>Wild Animal Survival Sim 3D</strong> transforms the core survival experience into an emotional RPG dynasty. Available now on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a>, this comprehensive guide teaches you how to find a mate, nurture your cubs, and establish an unstoppable animal pack.</p>

      <h2>Step 1: Finding and Courting Your Mate</h2>
      <p>Before you can raise cubs in <strong>Wild Animal Survival Sim 3D</strong>, your beast must reach adulthood and establish sufficient survival territory. Once you reach level requirements, search the biome for potential mates of your species:</p>
      <ul>
        <li><strong>Scent Tracking:</strong> Follow glowing trail pheromones across the terrain to track solitary companions of your animal type.</li>
        <li><strong>Courting Rituals:</strong> Offer fresh prey meat or assist potential mates in driving away hostile predators to build trust and affinity.</li>
        <li><strong>Pack Bond:</strong> Once bonded, your mate will travel alongside you, assist in coordinated takedowns, and share defensive duties at your home den.</li>
      </ul>

      <h2>Step 2: Welcoming Your Cubs into the Wilderness</h2>
      <p>With a secured den and an established mate, your family can welcome new cubs. In <strong>Wild Animal Survival Sim 3D</strong>, young cubs are initially delicate and rely entirely on parental care for nourishment and warmth.</p>
      <div class="feature-highlight-box">
        <h3>Essential Cub Care Checklist:</h3>
        <ol>
          <li><strong>Keep the Den Stocked:</strong> Hunt small game and bring carcasses back to the den to keep hunger bars elevated.</li>
          <li><strong>Den Security:</strong> Never leave young cubs completely unattended for long stretches; wandering hyenas and rival predators will attempt to raid your home.</li>
          <li><strong>Mentorship & Training:</strong> As your cubs grow, take them out on safe practice hunts to earn early survival experience.</li>
        </ol>
      </div>

      <h2>Step 3: Defending Your Bloodline</h2>
      <p>Enemy predators will respond dynamically to your pack's growth. In <strong>Wild Animal Survival Sim 3D</strong>, hostile rivals will aggressively patrol borders near your territory. Coordinate defensive formations with your mate: let your mate draw aggro while you flank the enemy from behind with devastating critical bites.</p>

      <div class="article-cta-box">
        <h3>Start Your Animal Dynasty Now</h3>
        <p>Raise your cubs and rule the wild as a united pack in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Android today!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> BUILD YOUR PACK ON GOOGLE PLAY
        </a>
      </div>
    `
  },
  {
    slug: 'new-den-system-defense-guide',
    publishDate: '2026-11-19T13:00:00+05:00',
    displayDate: 'November 19, 2026',
    tag: 'DEN SYSTEM',
    title: 'New Den System Guide: Defend Your Home in Wild Animal Survival Sim 3D',
    metaTitle: 'New Den System Guide for Wild Animal Survival Sim 3D',
    metaDescription: 'Discover, fortify, and defend your home den in Wild Animal Survival Sim 3D. Learn top den defense strategies and protect your cubs on Google Play Store now.',
    focusKeywords: ['Wild Animal Survival Sim 3D den system', 'defend animal den simulator', 'wildlife home territory defense', 'den upgrade animal RPG'],
    image: '/assets/news/new-den-system.jpg',
    excerpt: 'Your den is your fortress. Discover how to locate ideal den sites, fortify your sanctuary, and repel predator sieges in Wild Animal Survival Sim 3D.',
    readTime: '6 min read',
    contentHtml: `
      <p class="lead">Every wild beast needs a sacred sanctuary to rest, recuperate, and raise offspring away from the harsh elements. The all-new <strong>Den System</strong> in <strong>Wild Animal Survival Sim 3D</strong> introduces tactical home base mechanics to the open world. Grab the latest update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and learn how to claim, upgrade, and defend your territory.</p>

      <h2>How to Discover and Claim a Den</h2>
      <p>As you explore the three unique wilderness worlds in <strong>Wild Animal Survival Sim 3D</strong>, keep your eyes open for secluded rock caves, hollowed ancient trees, and sheltered river alcoves. These landmark locations serve as prospective den foundations:</p>
      <ul>
        <li><strong>Clear Existing Occupants:</strong> Some prime den locations are occupied by rival predators or territorial bears. Defeat the occupants to claim the site.</li>
        <li><strong>Scent-Mark Territory:</strong> Mark the perimeter of the cave entrance to establish your pack's scent barrier, warning lower-tier carnivores to stay away.</li>
        <li><strong>Rest & Health Recovery:</strong> Sleeping inside your den provides accelerated health and energy regeneration rates compared to resting in open fields.</li>
      </ul>

      <h2>Defending Against Den Invasions</h2>
      <p>A thriving den attracts attention. In <strong>Wild Animal Survival Sim 3D</strong>, hostile predator patrols—including rogue wolves, hyena scavengers, and opportunistic big cats—will periodically stage attacks against your sanctuary, particularly when your mate is nursing young cubs.</p>
      <div class="feature-highlight-box">
        <h3>Proven Den Defense Strategies:</h3>
        <ul>
          <li><strong>Funnel Enemies at the Chokepoint:</strong> Do not let invading packs flank your den interior. Stand firm at the narrow entrance mouth, forcing enemies to engage one-by-one.</li>
          <li><strong>Coordinate with Your Mate:</strong> Use command pings to have your mate guard the rear while you unleash your strongest combat abilities at the front lines.</li>
          <li><strong>Deploy Special Powers:</strong> Activate your Shield and Fire Attack powers to break through hostile siege groups quickly.</li>
        </ul>
      </div>

      <div class="article-cta-box">
        <h3>Claim Your Fortress in the Wild</h3>
        <p>Establish your den, protect your cubs, and build your kingdom in <strong>Wild Animal Survival Sim 3D</strong>. Play free today on Android!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> DOWNLOAD FREE ON GOOGLE PLAY
        </a>
      </div>
    `
  },
  {
    slug: 'animal-growth-stages-rpg-guide',
    publishDate: '2026-11-20T13:00:00+05:00',
    displayDate: 'November 20, 2026',
    tag: 'ANIMAL GROWTH',
    title: 'Animal Growth Guide: Hatchling to Prime in Wild Animal Survival Sim 3D',
    metaTitle: 'Animal Growth Stages in Wild Animal Survival Sim 3D',
    metaDescription: 'Evolve from Juvenile to Prime beast with Animal Growth in Wild Animal Survival Sim 3D. Level up stats and dominate the wild free on Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D animal growth', 'juvenile to prime evolution simulator', 'animal RPG level up guide', 'grow animal simulator 3D'],
    image: '/assets/news/animal-growth-stages.jpg',
    excerpt: 'Witness the miraculous transformation of your beast. Explore the complete animal growth stages from newborn Juvenile to hulking Prime titan in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    contentHtml: `
      <p class="lead">Survival is about growth, adaptation, and eventual dominance. The new <strong>Animal Growth System</strong> in <strong>Wild Animal Survival Sim 3D</strong> introduces full visual and statistical RPG progression for your playable creatures. Download the update now on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and discover how to nurture your beast into a legendary Prime predator.</p>

      <h2>The Three Evolutionary Growth Stages</h2>
      <p>Every animal in <strong>Wild Animal Survival Sim 3D</strong> progresses through three distinct life phases, each accompanied by realistic scale scaling, muscular definition, and amplified combat attributes:</p>

      <div class="feature-highlight-box">
        <h3>1. Juvenile Stage (Young & Vulnerable)</h3>
        <p>As a juvenile, your creature is small, curious, and fast, but lacks physical durability. Focus on catching insects, small lizards, and rodents while sticking closely to parental protection inside your home den.</p>
        
        <h3>2. Adolescent Stage (The Rising Hunter)</h3>
        <p>Upon reaching adolescence, your creature experiences a massive growth spurt. Muscles fill out, sprint speeds peak, and you can participate in medium-game hunts alongside your pack members.</p>
        
        <h3>3. Prime Stage (Apex Dominance)</h3>
        <p>The pinnacle of biological evolution. In Prime status, your animal reaches maximum size, boasting impenetrable hide armor, crushing jaw force, and an expanded aura that intimidates nearby rivals.</p>
      </div>

      <h2>How to Accelerate Your Growth in Wild Animal Survival Sim 3D</h2>
      <ul>
        <li><strong>Consistent High-Quality Nutrition:</strong> Feeding on fresh, nutritious prey provides substantial XP bonuses towards your next growth milestone.</li>
        <li><strong>Territory Exploration:</strong> Discovering hidden landmarks, traversing uncharted biomes, and drinking from pristine mountain springs unlocks exploration experience.</li>
        <li><strong>Surviving Predatory Encounters:</strong> Successfully defending against rival predator ambushes grants major survival resilience boosts.</li>
      </ul>

      <div class="article-cta-box">
        <h3>Evolve into a Legendary Prime Beast</h3>
        <p>Experience realistic growth and unmatched power in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Android right now!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> EVOLVE YOUR BEAST ON GOOGLE PLAY
        </a>
      </div>
    `
  },
  {
    slug: 'special-powers-and-skins-guide',
    publishDate: '2026-11-21T13:00:00+05:00',
    displayDate: 'November 21, 2026',
    tag: 'POWERS & SKINS',
    title: 'Unlock Fire Attack, Shield & Speed Boost in Wild Animal Survival Sim 3D',
    metaTitle: 'Special Powers & Skins in Wild Animal Survival Sim 3D',
    metaDescription: 'Unleash Fire Attack, Shield, and Speed Boost in Wild Animal Survival Sim 3D! Unlock rare skins and dominate the predator wild on Google Play Store now.',
    focusKeywords: ['Wild Animal Survival Sim 3D powers and skins', 'fire attack shield speed boost animal simulator', 'wildlife simulator skins unlock', 'special abilities animal combat'],
    image: '/assets/news/special-powers-and-skins.jpg',
    excerpt: 'Turn the tides of battle with supernatural animal abilities and strike fear into your rivals with stunning mythical skins in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    contentHtml: `
      <p class="lead">Unleash the primal fury within! The latest combat update for <strong>Wild Animal Survival Sim 3D</strong> introduces game-changing <strong>Special Powers</strong> and an expansive catalog of <strong>Custom Skins</strong>. Download the update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and dominate every wilderness confrontation with unmatched elemental force.</p>

      <h2>Mastering the 3 New Special Powers</h2>
      <p>Engaging rival apex predators requires more than basic claw swipes. Equip and trigger these three dynamic combat powers in <strong>Wild Animal Survival Sim 3D</strong> to turn unwinnable fights into decisive victories:</p>

      <div class="feature-highlight-box">
        <h3>🔥 1. Fire Attack (Blazing Claws & Bites)</h3>
        <p>Ignite your physical strikes with scorching flame energy. Each successful hit deals immediate burst damage and leaves enemies suffering from ongoing burn status effects over 5 seconds. Perfect for melting high-health boss bears and massive crocodiles.</p>

        <h3>🛡️ 2. Primal Shield (Invulnerability Barrier)</h3>
        <p>Project a hardened mystical forcefield around your beast. The shield absorbs up to 75% of incoming kinetic damage for 8 seconds, allowing you to survive lethal counter-strikes and break out of predatory pins during chaotic den defense sieges.</p>

        <h3>⚡ 3. Speed Boost (Lightning Reflexes)</h3>
        <p>Supercharge your muscular velocity. Activates a 50% sprint boost with zero stamina depletion for a short burst. Indispensable for chasing down swift prey or escaping an overwhelming pack of enemy carnivores.</p>
      </div>

      <h2>Unlocking Rare & Mythical Skins</h2>
      <p>Transform the appearance of your <a href="/#animals">Wolf, Tiger, Panther, Lion, Bear, and Crocodile</a>. From bioluminescent phantom markings and volcanic ember pelts to frozen frost hides, skins in <strong>Wild Animal Survival Sim 3D</strong> reflect your status as the reigning supreme predator.</p>

      <div class="article-cta-box">
        <h3>Equip Special Powers & Stand Out</h3>
        <p>Unleash Fire Attacks and show off mythical skins in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Google Play today!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> GET POWERS & SKINS ON GOOGLE PLAY
        </a>
      </div>
    `
  },
  {
    slug: 'multi-language-support-update',
    publishDate: '2026-11-22T13:00:00+05:00',
    displayDate: 'November 22, 2026',
    tag: 'LOCALIZATION',
    title: 'Wild Animal Survival Sim 3D Goes Global: Multi-Language Support',
    metaTitle: 'Multi-Language Support in Wild Animal Survival Sim 3D',
    metaDescription: 'Play Wild Animal Survival Sim 3D in 12+ languages! Experience global localization, improved UI, and hunt freely on Android via the Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D multi language', 'wildlife simulator global localization', 'play animal simulator in your language', 'multi language RPG android'],
    image: '/assets/news/multi-language-support.jpg',
    excerpt: 'Wild Animal Survival Sim 3D is now fully localized across 12+ international languages, welcoming millions of players worldwide to experience seamless wildlife RPG gaming.',
    readTime: '4 min read',
    contentHtml: `
      <p class="lead">Gaming knows no borders. To celebrate our growing worldwide community of wild animal simulator enthusiasts, Gameyard has rolled out comprehensive <strong>Multi-Language Support</strong> in the newest release of <strong>Wild Animal Survival Sim 3D</strong>. Download the update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and immerse yourself in the wild using your native language.</p>

      <h2>Supported Languages Across the World</h2>
      <p>Our localized build includes fully translated user interfaces, quest objectives, survival tutorials, and RPG talent descriptions for over 12 major languages, including English, Spanish, Portuguese, French, German, Italian, Russian, Turkish, Arabic, Japanese, Korean, and Simplified Chinese.</p>

      <h2>How Language Switching Works</h2>
      <p>In <strong>Wild Animal Survival Sim 3D</strong>, the game automatically detects your mobile device's default system language upon first launch and loads the matching localized text. You can also manually switch languages at any moment via the in-game Settings menu with instant, on-the-fly text reloading.</p>

      <h2>Cleaner, Clearer HUD Across All Screen Sizes</h2>
      <p>Alongside linguistic translation, our team redesigned typography kerning and button padding to guarantee that dialogue boxes, status bars, and quest indicators format impeccably across every mobile screen size—from compact smartphones to ultra-wide tablets.</p>

      <div class="article-cta-box">
        <h3>Play in Your Native Tongue</h3>
        <p>Join millions of players globally in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Google Play today!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> PLAY IN YOUR LANGUAGE ON GOOGLE PLAY
        </a>
      </div>

      <h2>Spot a Translation Improvement?</h2>
      <p>We are committed to continuous localization refinement. If you notice any translation nuance that could be improved, please notify our team via the <a href="/suggestions">Player Feedback Form</a>!</p>
    `
  }
];

// Helper to generate each article HTML page
function generateArticlePage(art) {
  const fullArticleUrl = `${SITE_URL}/news/${art.slug}/`;
  const fullImageUrl = `${SITE_URL}${art.image}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>${art.metaTitle}</title>
 <meta name="description" content="${art.metaDescription}">
 <link rel="canonical" href="${fullArticleUrl}">

 <!-- OpenGraph Metadata -->
 <meta property="og:type" content="article">
 <meta property="og:site_name" content="Wild Animal Survival Sim 3D">
 <meta property="og:title" content="${art.metaTitle}">
 <meta property="og:description" content="${art.metaDescription}">
 <meta property="og:url" content="${fullArticleUrl}">
 <meta property="og:image" content="${fullImageUrl}">

 <!-- Twitter Card Metadata -->
 <meta name="twitter:card" content="summary_large_image">
 <meta name="twitter:title" content="${art.metaTitle}">
 <meta name="twitter:description" content="${art.metaDescription}">
 <meta name="twitter:image" content="${fullImageUrl}">

 <meta name="theme-color" content="#07070A">
 <link rel="stylesheet" href="/styles.css?v=8">

 <!-- Structured Data: NewsArticle & VideoGame Schema -->
 <script type="application/ld+json">
 [
   {
     "@context": "https://schema.org",
     "@type": "NewsArticle",
     "headline": "${art.title.replace(/"/g, '\\"')}",
     "description": "${art.metaDescription.replace(/"/g, '\\"')}",
     "image": ["${fullImageUrl}"],
     "datePublished": "${art.publishDate}",
     "dateModified": "${art.publishDate}",
     "author": {
       "@type": "Organization",
       "name": "Gameyard Studio"
     },
     "publisher": {
       "@type": "Organization",
       "name": "Gameyard",
       "logo": {
         "@type": "ImageObject",
         "url": "${SITE_URL}/assets/mark.svg"
       }
     },
     "mainEntityOfPage": {
       "@type": "WebPage",
       "@id": "${fullArticleUrl}"
     }
   },
   {
     "@context": "https://schema.org",
     "@type": "VideoGame",
     "name": "Wild Animal Survival Sim 3D",
     "operatingSystem": "Android",
     "applicationCategory": "GameApplication",
     "genre": ["Action", "Simulation", "Role-Playing", "Survival"],
     "url": "${SITE_URL}",
     "installUrl": "${PLAY_URL}",
     "offers": {
       "@type": "Offer",
       "price": "0.00",
       "priceCurrency": "USD"
     }
   },
   {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     "itemListElement": [
       {
         "@type": "ListItem",
         "position": 1,
         "name": "Home",
         "item": "${SITE_URL}/"
       },
       {
         "@type": "ListItem",
         "position": 2,
         "name": "News",
         "item": "${SITE_URL}/news/"
       },
       {
         "@type": "ListItem",
         "position": 3,
         "name": "${art.title.replace(/"/g, '\\"')}",
         "item": "${fullArticleUrl}"
       }
     ]
   }
 ]
 </script>

 <style>
  body {
    background-color: #07070A;
    color: #E2E2E8;
    font-family: var(--body, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
    margin: 0;
    padding: 0;
  }
  .article-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* Fixed Persistent Header */
  .header {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: min(1380px, calc(100% - 36px));
    height: 56px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: rgba(10, 10, 14, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
    transition: all 0.3s ease;
  }
  .header-scrolled {
    background: rgba(6, 6, 9, 0.98);
    border-color: rgba(242, 180, 0, 0.3);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.95);
  }

  /* Hero Section */
  .article-hero {
    position: relative;
    padding: 130px 24px 30px;
    background: 
      radial-gradient(ellipse 80% 60% at 50% 0%, rgba(242, 180, 0, 0.16) 0%, transparent 75%),
      linear-gradient(180deg, #050508 0%, #0d0d14 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
  }
  .article-hero-inner {
    max-width: 960px;
    margin: 0 auto;
  }
  .article-breadcrumbs {
    font-family: var(--tech, monospace);
    font-size: 12px;
    color: #8C8C98;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }
  .article-breadcrumbs a {
    color: #F2B400;
    text-decoration: none;
    transition: color 0.2s;
  }
  .article-breadcrumbs a:hover {
    color: #FFFFFF;
    text-decoration: underline;
  }
  .article-badges {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  .article-tag {
    display: inline-block;
    background: #F2B400;
    color: #0A0A0D;
    font-family: var(--tech, monospace);
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.18em;
    padding: 5px 12px;
    border-radius: 3px;
    text-transform: uppercase;
  }
  .article-status-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(34, 197, 94, 0.15);
    border: 1px solid rgba(34, 197, 94, 0.4);
    color: #4ADE80;
    font-family: var(--tech, monospace);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.14em;
    padding: 4px 10px;
    border-radius: 3px;
    text-transform: uppercase;
  }
  .article-status-badge::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    background: #4ADE80;
    border-radius: 50%;
    box-shadow: 0 0 8px #4ADE80;
  }
  .article-title {
    font-family: var(--heading, sans-serif);
    font-size: clamp(32px, 5.5vw, 56px);
    font-weight: 900;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    line-height: 1.05;
    margin: 0 0 20px;
    color: #FFFFFF;
  }
  .article-meta-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-family: var(--tech, monospace);
    font-size: 13px;
    color: #A6A6B4;
    letter-spacing: 0.08em;
    flex-wrap: wrap;
  }
  .meta-sep {
    color: #555562;
  }
  
  /* Full-Size Showcase Featured Frame: 100% visible, never cut off */
  .article-banner-wrap {
    max-width: 1180px;
    width: 100%;
    margin: 36px auto 0;
    padding: 0 16px;
    box-sizing: border-box;
  }
  .article-banner-frame {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    border: 2px solid rgba(242, 180, 0, 0.5);
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.9), 0 0 35px rgba(242, 180, 0, 0.2);
    background: #000000;
  }
  .article-featured-img {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    display: block;
    object-fit: contain; /* Absolutely zero cutoff */
    background: #000000;
  }

  /* Article Content */
  .article-main {
    max-width: 880px;
    width: 100%;
    margin: 0 auto;
    padding: 50px 24px 80px;
    box-sizing: border-box;
    flex: 1;
  }
  .intel-brief-card {
    background: linear-gradient(135deg, rgba(22, 22, 28, 0.95), rgba(14, 14, 18, 0.98));
    border: 1px solid rgba(242, 180, 0, 0.3);
    border-left: 4px solid #F2B400;
    border-radius: 6px;
    padding: 20px 24px;
    margin-bottom: 34px;
  }
  .intel-brief-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--tech, monospace);
    font-size: 11px;
    color: #8C8C98;
    letter-spacing: 0.12em;
    margin-bottom: 14px;
    text-transform: uppercase;
  }
  .intel-pill {
    background: rgba(242, 180, 0, 0.15);
    color: #F2B400;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 3px;
  }
  .intel-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 12px;
    font-size: 14px;
    color: #D2D2DC;
  }
  .intel-grid strong {
    color: #FFFFFF;
    font-family: var(--tech, monospace);
    letter-spacing: 0.05em;
  }

  .article-body {
    font-size: 17.5px;
    line-height: 1.8;
    color: #D0D0DA;
  }
  .article-body .lead {
    font-size: 21px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.65;
    margin-bottom: 32px;
    border-left: 3px solid #F2B400;
    padding-left: 20px;
  }
  .article-body h2 {
    font-family: var(--heading, sans-serif);
    font-size: 30px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin: 48px 0 18px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
  }
  .article-body h3 {
    font-family: var(--heading, sans-serif);
    font-size: 22px;
    font-weight: 800;
    text-transform: uppercase;
    color: #F2B400;
    margin: 28px 0 14px;
  }
  .article-body p {
    margin-bottom: 22px;
  }
  .article-body ul, .article-body ol {
    margin: 0 0 26px 20px;
    padding: 0;
  }
  .article-body li {
    margin-bottom: 12px;
    line-height: 1.7;
  }
  .article-body strong {
    color: #FFFFFF;
  }
  .article-body a {
    color: #F2B400;
    text-decoration: underline;
    text-underline-offset: 3px;
  }
  .article-body a:hover {
    color: #FFFFFF;
  }
  .feature-highlight-box {
    background: linear-gradient(145deg, rgba(20, 20, 26, 0.95), rgba(12, 12, 16, 0.98));
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-left: 4px solid #F2B400;
    border-radius: 6px;
    padding: 26px 30px;
    margin: 36px 0;
  }
  .article-cta-box {
    background: radial-gradient(ellipse 90% 70% at 50% 20%, rgba(242, 180, 0, 0.18) 0%, rgba(10, 10, 14, 0.98) 100%);
    border: 1px solid rgba(242, 180, 0, 0.45);
    border-radius: 8px;
    padding: 38px 30px;
    text-align: center;
    margin: 50px 0;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.6);
  }
  .article-cta-box h3 {
    font-family: var(--heading, sans-serif);
    font-size: 28px;
    color: #FFFFFF;
    margin: 0 0 12px;
    text-transform: uppercase;
  }
  .article-cta-box p {
    font-size: 16px;
    color: #C4C4CE;
    max-width: 600px;
    margin: 0 auto 24px;
  }
  .article-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #F2B400;
    color: #0A0A0D !important;
    font-family: var(--tech, monospace);
    font-size: 15px;
    font-weight: 900;
    letter-spacing: 0.16em;
    padding: 16px 32px;
    border-radius: 4px;
    text-decoration: none !important;
    transition: all 0.25s ease;
    box-shadow: 0 6px 22px rgba(242, 180, 0, 0.4);
  }
  .article-cta-btn:hover {
    background: #FFCA28;
    transform: translateY(-2px);
    box-shadow: 0 8px 28px rgba(242, 180, 0, 0.6);
  }
  .article-footer-nav {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 32px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
  }
  .article-footer-nav a {
    color: #F2B400;
    font-family: var(--tech, monospace);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-decoration: none;
  }
  .article-footer-nav a:hover {
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    .header nav {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      background: rgba(10, 10, 14, 0.98);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 6px;
      flex-direction: column;
      padding: 16px 20px;
      gap: 12px;
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.95);
    }
    .header nav.open { display: flex; }
    .header nav a {
      font-size: 16px;
      width: 100%;
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
  }

  @media (max-width: 768px) {
    .header {
      top: 8px;
      width: calc(100% - 16px);
      height: 50px;
      padding: 0 10px;
      gap: 8px;
    }
    .article-hero {
      padding: 100px 16px 24px;
    }
    .article-banner-wrap {
      margin: 20px auto 0;
      padding: 0 8px;
    }
    .article-main {
      padding: 30px 16px 60px;
    }
    .article-body {
      font-size: 16px;
    }
    .feature-highlight-box, .article-cta-box {
      padding: 20px 18px;
    }
  }
 </style>
</head>
<body class="article-page">
 <header class="header" id="header">
  <div class="header-left">
   <button type="button" class="menu-button" aria-expanded="false" aria-controls="navigation" aria-label="Open menu">
    <span></span><span></span><span></span>
   </button>
   <a class="brand" href="/" aria-label="Wild Animal Survival Sim 3D home">
    <span class="brand-studio">GAMEYARD</span>
    <span class="brand-divider">|</span>
    <span class="brand-title">WILD ANIMAL<small>SIM 3D</small></span>
   </a>
  </div>
  <nav id="navigation" aria-label="Main navigation">
   <a href="/#modes">THE GAME</a>
   <a href="/#worlds">WORLDS</a>
   <a href="/#animals">ROSTER</a>
   <a href="/#media">MEDIA</a>
   <a href="/news/">NEWS</a>
  </nav>
  <div class="header-right">
   <a class="header-play-link" data-play href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Play on Google Play">
    <span>▶</span>
    <span>PLAY NOW</span>
   </a>
   <a class="header-cta" href="/suggestions" aria-label="Give us suggestions">
    <span>GIVE SUGGESTIONS</span>
   </a>
  </div>
 </header>

 <section class="article-hero">
  <div class="article-hero-inner">
   <div class="article-breadcrumbs">
    <a href="/">Home</a> &gt; <a href="/news/">News & Updates</a> &gt; <span>${art.tag}</span>
   </div>
   <div class="article-badges">
    <span class="article-tag">${art.tag}</span>
    <span class="article-status-badge">OFFICIAL INTEL</span>
   </div>
   <h1 class="article-title">${art.title}</h1>
   <div class="article-meta-bar">
    <span>🎮 <strong>Gameyard Studio</strong></span>
    <span class="meta-sep">•</span>
    <span>📅 ${art.displayDate}</span>
    <span class="meta-sep">•</span>
    <span>⏱ ${art.readTime}</span>
   </div>
  </div>

  <!-- Full-Size Showcase Featured Frame (Never cropped) -->
  <div class="article-banner-wrap">
   <div class="article-banner-frame">
    <img class="article-featured-img" src="${art.image}" alt="${art.title} - Wild Animal Survival Sim 3D" width="1024" height="576" loading="eager">
   </div>
  </div>
 </section>

 <main class="article-main">
  <article class="article-body">
   ${art.contentHtml}
  </article>

  <div class="article-footer-nav">
   <a href="/news/">← Back to News & Updates</a>
   <a href="/suggestions">Submit Your Suggestions →</a>
  </div>
 </main>

 <footer class="footer" style="background:#050508; border-top:1px solid rgba(255,255,255,0.08); padding:36px 24px; text-align:center;">
  <p style="font-family:var(--tech, monospace); font-size:12px; color:#8C8C98; margin:0 0 8px; letter-spacing:0.1em;">
   © 2026 GAMEYARD STUDIO • ALL RIGHTS RESERVED • WILD ANIMAL SURVIVAL SIM 3D
  </p>
  <p style="font-size:12px; color:#5E5E6B; margin:0;">
   Official game available on <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" style="color:#F2B400;">Google Play Store</a>.
  </p>
 </footer>

 <script>
  // Mobile Menu Toggle & Header Scroll Handling
  const menuBtn = document.querySelector('.menu-button');
  const nav = document.getElementById('navigation');
  const header = document.getElementById('header');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !open);
      menuBtn.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      nav.classList.toggle('open', !open);
    });

    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Scroll Header Effect
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    }
  });
 </script>
</body>
</html>`;
}

// Generate News Hub Page (dist/news/index.html)
// ONLY SHOWS PUBLISHED ARTICLES
function generateNewsHubPage(publishedList) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1">
 <title>News & Major Updates | Wild Animal Survival Sim 3D</title>
 <meta name="description" content="Stay up to date with the latest official news, patch notes, guides, and updates for Wild Animal Survival Sim 3D on Android. Play free on Google Play.">
 <link rel="canonical" href="${SITE_URL}/news/">
 <meta property="og:title" content="News & Updates | Wild Animal Survival Sim 3D">
 <meta property="og:description" content="Explore patch notes, animal rosters, and survival guides for Wild Animal Survival Sim 3D.">
 <meta property="og:image" content="${SITE_URL}/assets/news/major-wildlife-rpg-update.jpg">
 <meta name="theme-color" content="#07070A">
 <link rel="stylesheet" href="/styles.css?v=8">
 <style>
  body { background:#07070A; color:#E2E2E8; font-family:var(--body, sans-serif); margin:0; }
  .news-page { min-height:100vh; display:flex; flex-direction:column; }
  
  .header {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: min(1380px, calc(100% - 36px));
    height: 56px;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: rgba(10, 10, 14, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 6px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
    box-sizing: border-box;
  }
  .header-scrolled {
    background: rgba(6, 6, 9, 0.98);
    border-color: rgba(242, 180, 0, 0.3);
  }

  .news-hero {
    position:relative; padding:130px 24px 50px;
    background:radial-gradient(ellipse 70% 60% at 50% 0%, rgba(242, 180, 0, 0.14) 0%, transparent 70%), linear-gradient(180deg, #050508 0%, #0d0d12 100%);
    border-bottom:1px solid rgba(255,255,255,0.08); text-align:center;
  }
  .news-hero-inner { max-width:820px; margin:0 auto; }
  .news-eyebrow { font-family:var(--tech, monospace); font-size:13px; font-weight:800; letter-spacing:0.2em; color:#F2B400; text-transform:uppercase; margin:0 0 12px; }
  .news-title { font-family:var(--heading, sans-serif); font-size:clamp(36px, 6vw, 64px); font-weight:900; letter-spacing:0.03em; text-transform:uppercase; line-height:0.95; margin:0 0 16px; color:#FFFFFF; }
  .news-title span { color:#F2B400; }
  .news-desc { font-size:17px; line-height:1.6; color:#C0C0C8; margin:0 auto; max-width:640px; }
  .news-main { max-width:1200px; width:100%; margin:0 auto; padding:50px 24px 80px; box-sizing:border-box; flex:1; }
  .articles-grid { display:grid; grid-template-columns:repeat(auto-fill, minmax(340px, 1fr)); gap:28px; }
  .article-card {
    background:linear-gradient(150deg, rgba(20,20,26,0.95), rgba(12,12,16,0.98));
    border:1px solid rgba(255,255,255,0.12); border-radius:6px; overflow:hidden;
    display:flex; flex-direction:column; text-decoration:none; color:inherit;
    transition:all 0.25s ease;
  }
  .article-card:hover {
    transform:translateY(-4px); border-color:#F2B400;
    box-shadow:0 14px 35px rgba(242, 180, 0, 0.15);
  }
  .article-card-img-wrap { position:relative; aspect-ratio:16/9; overflow:hidden; background:#000; }
  .article-card-img-wrap img { width:100%; height:100%; object-fit:contain; background:#000; transition:transform 0.3s ease; }
  .article-card:hover .article-card-img-wrap img { transform:scale(1.03); }
  .article-card-body { padding:22px; flex:1; display:flex; flex-direction:column; }
  .article-card-tag { font-family:var(--tech, monospace); font-size:11px; font-weight:800; color:#F2B400; letter-spacing:0.14em; text-transform:uppercase; margin-bottom:8px; }
  .article-card-title { font-family:var(--heading, sans-serif); font-size:20px; font-weight:800; text-transform:uppercase; color:#FFFFFF; line-height:1.2; margin:0 0 10px; }
  .article-card-excerpt { font-size:14px; line-height:1.55; color:#A8A8B4; margin:0 0 18px; flex:1; }
  .article-card-footer { display:flex; justify-content:space-between; align-items:center; font-family:var(--tech, monospace); font-size:11px; color:#787884; border-top:1px solid rgba(255,255,255,0.08); padding-top:12px; }
  .article-card-cta { color:#F2B400; font-weight:800; }

  @media(max-width:900px){
    .header nav {
      display:none; position:absolute; top:calc(100% + 8px); left:0; right:0;
      background:rgba(10,10,14,0.98); backdrop-filter:blur(16px);
      flex-direction:column; padding:16px 20px; gap:12px;
      border:1px solid rgba(255,255,255,0.12); border-radius:6px;
    }
    .header nav.open { display:flex; }
  }
  @media(max-width:768px){
    .header { top:8px; width:calc(100% - 16px); height:50px; padding:0 10px; }
    .news-hero { padding:100px 16px 36px; }
    .news-main { padding:30px 16px 60px; }
    .articles-grid { grid-template-columns:1fr; }
  }
 </style>
</head>
<body class="news-page">
 <header class="header" id="header">
  <div class="header-left">
   <button type="button" class="menu-button" aria-expanded="false" aria-controls="navigation" aria-label="Open menu">
    <span></span><span></span><span></span>
   </button>
   <a class="brand" href="/" aria-label="Wild Animal Survival Sim 3D home">
    <span class="brand-studio">GAMEYARD</span>
    <span class="brand-divider">|</span>
    <span class="brand-title">WILD ANIMAL<small>SIM 3D</small></span>
   </a>
  </div>
  <nav id="navigation" aria-label="Main navigation">
   <a href="/#modes">THE GAME</a>
   <a href="/#worlds">WORLDS</a>
   <a href="/#animals">ROSTER</a>
   <a href="/#media">MEDIA</a>
   <a href="/news/">NEWS</a>
  </nav>
  <div class="header-right">
   <a class="header-play-link" data-play href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
    <span>▶</span>
    <span>PLAY NOW</span>
   </a>
   <a class="header-cta" href="/suggestions">
    <span>GIVE SUGGESTIONS</span>
   </a>
  </div>
 </header>

 <div class="news-hero">
  <div class="news-hero-inner">
   <p class="news-eyebrow">INTELLIGENCE & FIELD UPDATES</p>
   <h1 class="news-title">WILD ANIMAL SURVIVAL SIM 3D <span>NEWS</span></h1>
   <p class="news-desc">
    Official patch releases, playable animal spotlights, survival masterclasses, and system breakdowns from the Gameyard dev team.
   </p>
  </div>
 </div>

 <main class="news-main">
  <div class="articles-grid">
   ${publishedList.map(a => `
     <a class="article-card" href="/news/${a.slug}/">
      <div class="article-card-img-wrap">
       <img src="${a.image}" alt="${a.title}" width="600" height="338" loading="lazy">
      </div>
      <div class="article-card-body">
       <div class="article-card-tag">${a.tag}</div>
       <h2 class="article-card-title">${a.title}</h2>
       <p class="article-card-excerpt">${a.excerpt}</p>
       <div class="article-card-footer">
        <span>📅 ${a.displayDate}</span>
        <span class="article-card-cta">READ INTEL ▶</span>
       </div>
      </div>
     </a>
   `).join('')}
  </div>
 </main>

 <footer class="footer" style="background:#050508; border-top:1px solid rgba(255,255,255,0.08); padding:36px 24px; text-align:center;">
  <p style="font-family:var(--tech, monospace); font-size:12px; color:#8C8C98; margin:0 0 8px; letter-spacing:0.1em;">
   © 2026 GAMEYARD STUDIO • ALL RIGHTS RESERVED • WILD ANIMAL SURVIVAL SIM 3D
  </p>
  <p style="font-size:12px; color:#5E5E6B; margin:0;">
   Official game available on <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" style="color:#F2B400;">Google Play Store</a>.
  </p>
 </footer>

 <script>
  const menuBtn = document.querySelector('.menu-button');
  const nav = document.getElementById('navigation');
  const header = document.getElementById('header');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !open);
      nav.classList.toggle('open', !open);
    });
  }
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 40) header.classList.add('header-scrolled');
      else header.classList.remove('header-scrolled');
    }
  });
 </script>
</body>
</html>`;
}

// Generate Sitemap XML (ONLY published articles)
function generateSitemap(publishedList) {
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Main pages
  xml += `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>${SITE_URL}/news/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>${SITE_URL}/suggestions</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

  // ONLY Article pages that have been published
  publishedList.forEach(art => {
    const artDate = art.publishDate.split('T')[0];
    xml += `  <url>\n    <loc>${SITE_URL}/news/${art.slug}/</loc>\n    <lastmod>${artDate}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.85</priority>\n  </url>\n`;
  });

  xml += `</urlset>\n`;
  return xml;
}

// Generate Robots.txt
function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

// Main Execution
const now = new Date();
const publishedArticles = articles.filter(a => new Date(a.publishDate) <= now);
console.log(`Currently published articles: ${publishedArticles.length} of ${articles.length}`);

// 1. Generate individual article directories with clean index.html (so /news/<slug>/ works as a clean URL!)
articles.forEach(art => {
  const artDir = path.join(newsDir, art.slug);
  if (!fs.existsSync(artDir)) {
    fs.mkdirSync(artDir, { recursive: true });
  }
  const html = generateArticlePage(art);
  fs.writeFileSync(path.join(artDir, 'index.html'), html, 'utf8');
});

// 2. Generate News Hub Page (dist/news/index.html)
const newsHubHtml = generateNewsHubPage(publishedArticles);
fs.writeFileSync(path.join(newsDir, 'index.html'), newsHubHtml, 'utf8');
console.log(`✔ Generated: dist/news/index.html with ${publishedArticles.length} published article(s)`);

// 3. Generate Sitemap XML (ONLY including published articles!)
const sitemapXml = generateSitemap(publishedArticles);
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`✔ Generated: dist/sitemap.xml with ${publishedArticles.length} published article(s)`);

// 4. Generate Robots.txt
const robotsTxt = generateRobotsTxt();
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('✔ Generated: dist/robots.txt');

console.log('Build completed successfully!');
