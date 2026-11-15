import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const newsDir = path.join(distDir, 'news');

if (!fs.existsSync(newsDir)) {
  fs.mkdirSync(newsDir, { recursive: true });
}

export const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.Wild.WolfAnimal.survivalSim.game';
export const SITE_URL = 'https://www.wildanimalsurvivalsim3d.com';

export const articles = [
  {
    slug: 'major-wildlife-rpg-update',
    // Published RIGHT NOW
    publishDate: '2026-11-16T00:00:00+05:00',
    displayDate: 'November 16, 2026',
    tag: 'MAJOR UPDATE',
    eyebrow: 'OFFICIAL PATCH ANNOUNCEMENT',
    title: 'Wild Animal Survival Sim 3D: Major Wildlife RPG Update Released',
    metaTitle: 'Wild Animal Survival Sim 3D - Major Wildlife RPG Update',
    metaDescription: 'The Major Wildlife RPG Update for Wild Animal Survival Sim 3D is live! Explore 3 new animals, family system, den defense, and play free on Google Play Store.',
    focusKeywords: ['Wild Animal Survival Sim 3D update', 'Wild Animal Survival Sim 3D patch notes', 'wildlife RPG mobile update', 'wild animal simulator android'],
    image: 'assets/news/major-wildlife-rpg-update.jpg',
    excerpt: 'The biggest expansion in Wild Animal Survival Sim 3D history has arrived, featuring 3 brand-new playable animals, an immersive Family System, Den defense mechanics, animal growth stages, and multi-language support.',
    readTime: '6 min read',
    getContent: (r) => `
      <p class="lead">The wilderness has evolved. We are thrilled to announce that the <strong>Major Wildlife RPG Update</strong> for <strong>Wild Animal Survival Sim 3D</strong> is officially live across all regions on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a>. This landmark release introduces revolutionary gameplay mechanics, expanding your animal survival journey into a living, breathing ecosystem.</p>

      <h2>What's Inside the Major Wildlife RPG Update?</h2>
      <p>Whether you roam the frozen tundra, stalk prey through the dense rainforest, or claim territory on the open savanna, this update reshapes how you experience <strong>Wild Animal Survival Sim 3D</strong>. Our development team has listened directly to player feedback, engineering nine core improvements that deepen survival roleplay, creature progression, and pack combat.</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/3-new-animals-deer-moose-boar.jpg" alt="3 New Playable Animals: Deer, Moose & Boar in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>3 New Playable Animals: The Swift Deer, Mighty Moose, and Fierce Wild Boar</figcaption>
      </figure>

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
      
      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/new-family-system.jpg" alt="Family System and Den Defense in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>The New Family System: Find a Mate, Protect Your Cubs, and Defend the Home Den</figcaption>
      </figure>

      <p>To support your growing family, the all-new <strong>Den System</strong> provides a sanctuary where your mate and young can rest and heal. But beware: rival predators will actively seek out your den. You must fortify your territory, monitor scents in the wind, and fight fiercely to protect your offspring from surprise ambushes.</p>

      <h2>Elemental Powers and Legendary Skins</h2>
      <p>Combat encounters in <strong>Wild Animal Survival Sim 3D</strong> now feature superhuman predatory powers. Players can unlock the devastating Fire Attack to burn through tough armor, summon a glowing Primal Shield to absorb lethal blow damage, and trigger instant Speed Boosts to outflank any opponent.</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/special-powers-and-skins.jpg" alt="Special Powers and Skins in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Unleash Fire Attacks, Defensive Shields, and Mythical Pelts in the Latest Update</figcaption>
      </figure>

      <div class="article-cta-box">
        <h3>Ready to Lead Your Pack?</h3>
        <p>Experience the biggest update yet in <strong>Wild Animal Survival Sim 3D</strong>. Download the latest build free today and dominate the untamed wilderness!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> INSTALL FREE ON GOOGLE PLAY
        </a>
      </div>

      <h2>Explore New Worlds & Roster</h2>
      <p>This major patch perfectly complements our diverse roster of apex beasts including the <a href="${r}index.html#animals">Wolf, Tiger, Panther, Lion, Bear, and Crocodile</a>. Explore the lush foliage of the Jungle, conquer the vast Savanna, and patrol the dangerous Waterways in our <a href="${r}index.html#worlds">expansive 3D wilderness worlds</a>.</p>
      <p>Have ideas for upcoming features or want to see new animals added next? Submit your thoughts directly to our development team via the official <a href="${r}suggestions.html">Wild Animal Survival Sim 3D Suggestions Portal</a>.</p>
    `
  },
  {
    slug: '3-new-animals-deer-moose-boar',
    publishDate: '2026-11-17T13:00:00+05:00',
    displayDate: 'November 17, 2026',
    tag: 'NEW ANIMALS',
    eyebrow: 'PLAYABLE ROSTER EXPANSION',
    title: 'Play as Deer, Moose & Boar in Wild Animal Survival Sim 3D',
    metaTitle: 'Play Deer, Moose & Boar in Wild Animal Survival Sim 3D',
    metaDescription: 'Unlock 3 new playable beasts in Wild Animal Survival Sim 3D! Master Deer, Moose, and Boar in open wilderness. Download free on the Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D new animals', 'play as deer moose boar', 'wildlife animal simulator 3D roster', 'herbivore survival simulator'],
    image: 'assets/news/3-new-animals-deer-moose-boar.jpg',
    excerpt: 'Step away from traditional carnivores and experience wilderness survival through the eyes of the swift Deer, towering Moose, and ferocious Wild Boar in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    getContent: (r) => `
      <p class="lead">Prepare for an entirely fresh survival dynamic! The latest update to <strong>Wild Animal Survival Sim 3D</strong> brings three extraordinary new playable animals to the roster: the agile <strong>Deer</strong>, the towering <strong>Moose</strong>, and the ferocious <strong>Wild Boar</strong>. Download the update now on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and test your survival instincts with unique abilities and playstyles.</p>

      <h2>1. The Swift Deer: Mastery of Agility and Stealth</h2>
      <p>The Deer brings unprecedented agility to <strong>Wild Animal Survival Sim 3D</strong>. Blessed with supreme leaping heights and rapid sprint acceleration, the Deer excels at evading apex carnivores like the <a href="${r}index.html#animals">Wolf and Panther</a>.</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/game-4.webp" alt="Stalking and Escaping Predators in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>High-Speed Evasion: Use Dense Foliage and Natural Obstacles to Outrun Hunters</figcaption>
      </figure>

      <ul>
        <li><strong>Heightened Senses:</strong> Detect lurking predators through an expanded scent and auditory radar before they close in.</li>
        <li><strong>Stamina Burst:</strong> Outrun predators over long distances and navigate steep rocky ridges where larger carnivores struggle to follow.</li>
        <li><strong>Foraging & Grazing:</strong> Rejuvenate health and stamina by locating rare herbs, wild berries, and fresh river banks across <a href="${r}index.html#worlds">Jungle and Savanna worlds</a>.</li>
      </ul>

      <h2>2. The Mighty Moose: Forest Titan with Crushing Antlers</h2>
      <p>Do not mistake the Moose for passive prey. In <strong>Wild Animal Survival Sim 3D</strong>, the Moose represents one of the most physically imposing creatures in the wilderness. Featuring massive antler armaments and a thick winter coat, the Moose can go toe-to-toe with even the strongest grizzly bears and wolf packs.</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/animal-growth-stages.jpg" alt="Moose and Beast Growth Stages in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Grow Your Moose from Juvenile Calf to Towering Prime Forest Titan</figcaption>
      </figure>

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
      <p>All three animals can be selected directly from the main animal selection menu after updating your game client. Each new creature features full progression support—allowing you to evolve them from young juveniles into majestic prime specimens using the new <a href="${r}news/animal-growth-stages-rpg-guide/">Animal Growth System</a>.</p>
      <p>Share your favorite new creature or tell us which animal we should add next by visiting our <a href="${r}suggestions.html">Gameyard Suggestions Page</a>!</p>
    `
  },
  {
    slug: 'new-family-system-guide',
    publishDate: '2026-11-18T13:00:00+05:00',
    displayDate: 'November 18, 2026',
    tag: 'FAMILY SYSTEM',
    eyebrow: 'RPG DYNASTY GUIDE',
    title: 'Family System Guide for Wild Animal Survival Sim 3D: Mates & Cubs',
    metaTitle: 'Family System Guide for Wild Animal Survival Sim 3D',
    metaDescription: 'Find a mate, raise babies, and protect your pack with the new Family System in Wild Animal Survival Sim 3D. Download free and build your dynasty on Android!',
    focusKeywords: ['Wild Animal Survival Sim 3D family system', 'raise cubs wild animal simulator', 'animal pack dynasty mobile RPG', 'mate and cubs animal sim'],
    image: 'assets/news/new-family-system.jpg',
    excerpt: 'Survival is sweeter with a pack by your side. Discover how to locate a mate, raise healthy cubs, and protect your family in Wild Animal Survival Sim 3D.',
    readTime: '6 min read',
    getContent: (r) => `
      <p class="lead">Solitary wandering is a thing of the past. The newly launched <strong>Family System</strong> in <strong>Wild Animal Survival Sim 3D</strong> transforms the core survival experience into an emotional RPG dynasty. Available now on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a>, this comprehensive guide teaches you how to find a mate, nurture your cubs, and establish an unstoppable animal pack.</p>

      <h2>Step 1: Finding and Courting Your Mate</h2>
      <p>Before you can raise cubs in <strong>Wild Animal Survival Sim 3D</strong>, your beast must reach adulthood and establish sufficient survival territory. Once you reach level requirements, search the biome for potential mates of your species:</p>
      <ul>
        <li><strong>Scent Tracking:</strong> Follow glowing trail pheromones across the terrain to track solitary companions of your animal type.</li>
        <li><strong>Courting Rituals:</strong> Offer fresh prey meat or assist potential mates in driving away hostile predators to build trust and affinity.</li>
        <li><strong>Pack Bond:</strong> Once bonded, your mate will travel alongside you, assist in coordinated takedowns, and share defensive duties at your <a href="${r}news/new-den-system-defense-guide/">home den</a>.</li>
      </ul>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/hunt-and-feed-family.jpg" alt="Hunting and Feeding Pack Family in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Bring Carcasses Back to Your Sanctuary to Feed Your Growing Cubs</figcaption>
      </figure>

      <h2>Step 2: Welcoming Your Cubs into the Wilderness</h2>
      <p>With a secured den and an established mate, your family can welcome new cubs. In <strong>Wild Animal Survival Sim 3D</strong>, young cubs are initially delicate and rely entirely on parental care for nourishment and warmth.</p>
      <div class="feature-highlight-box">
        <h3>Essential Cub Care Checklist:</h3>
        <ol>
          <li><strong>Keep the Den Stocked:</strong> Hunt small game and bring carcasses back to the den to keep hunger bars elevated. Learn more in our <a href="${r}news/hunt-and-feed-family-guide/">Hunt & Feed Guide</a>.</li>
          <li><strong>Den Security:</strong> Never leave young cubs completely unattended for long stretches; wandering hyenas and rival predators will attempt to raid your home.</li>
          <li><strong>Mentorship & Training:</strong> As your cubs grow, take them out on safe practice hunts to earn early survival experience.</li>
        </ol>
      </div>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/new-den-system.jpg" alt="Securing the Family Den in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>The Den Serves as Your Pack's Fortress and Nursery</figcaption>
      </figure>

      <h2>Step 3: Defending Your Bloodline</h2>
      <p>Enemy predators will respond dynamically to your pack's growth. In <strong>Wild Animal Survival Sim 3D</strong>, hostile rivals will aggressively patrol borders near your territory. Coordinate defensive formations with your mate: let your mate draw aggro while you flank the enemy from behind with devastating critical bites.</p>

      <div class="article-cta-box">
        <h3>Start Your Animal Dynasty Now</h3>
        <p>Raise your cubs and rule the wild as a united pack in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Android today!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> BUILD YOUR PACK ON GOOGLE PLAY
        </a>
      </div>

      <h2>Continue Your Journey</h2>
      <p>Mastering the family dynamic is the cornerstone of surviving high-tier encounters in <strong>Wild Animal Survival Sim 3D</strong>. Check out our <a href="${r}news/animal-growth-stages-rpg-guide/">Animal Growth Progression Guide</a> to see how your cubs evolve into ferocious adult hunters!</p>
    `
  },
  {
    slug: 'hunt-and-feed-family-guide',
    publishDate: '2026-11-19T13:00:00+05:00',
    displayDate: 'November 19, 2026',
    tag: 'HUNT & FEED',
    eyebrow: 'SURVIVAL MECHANICS MASTERY',
    title: 'Hunt & Feed Your Pack in Wild Animal Survival Sim 3D: Survival Guide',
    metaTitle: 'Hunt & Feed Your Pack in Wild Animal Survival Sim 3D',
    metaDescription: 'Learn how to hunt prey and feed your cubs in Wild Animal Survival Sim 3D. Master hunger survival tactics and grow your pack on Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D hunt and feed', 'survival hunting simulator guide', 'feed wolf cubs android game', 'pack hunting tactics 3D'],
    image: 'assets/news/hunt-and-feed-family.jpg',
    excerpt: 'Mastering the hunt is essential for pack survival. Discover optimal stalking techniques, carcass transport, and pack feeding strategies in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    getContent: (r) => `
      <p class="lead">An apex predator's duty never ends. In <strong>Wild Animal Survival Sim 3D</strong>, hunting is not simply about sustaining your own health—it is the lifeblood of your growing pack. Get the latest update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and discover how to master prey tracking, coordinated ambushes, and nutritious carcass retrieval.</p>

      <h2>Understanding Prey Types and Difficulty Tiers</h2>
      <p>Different biomes in <strong>Wild Animal Survival Sim 3D</strong> host a diverse ecosystem of prey animals. Knowing which targets to pursue based on your current pack strength prevents costly injuries:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/game-2.webp" alt="Pack Hunting and Animal Selection in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Coordinate Pack Ambushes Across Diverse Open Wilderness Biomes</figcaption>
      </figure>

      <ul>
        <li><strong>Small Game (Rabbits, Rodents, Birds):</strong> Quick to catch and ideal for newly birthed cubs. Requires little stamina but provides modest nutrition.</li>
        <li><strong>Medium Prey (Deer, Gazelles, Wild Boars):</strong> Excellent protein balance for your mate and adolescent cubs. Requires strategic sprinting and cornering.</li>
        <li><strong>Mega Fauna (Bison, Elephants, Crocodiles):</strong> Dangerous high-risk targets that yield massive meat reserves for entire packs. Requires pack synergy and high-level special powers.</li>
      </ul>

      <h2>The Art of the Stealth Ambush</h2>
      <p>Rushing recklessly into a herd of prey will scatter them instantly. Follow these field-tested tactics in <strong>Wild Animal Survival Sim 3D</strong> to guarantee successful kills:</p>
      <div class="feature-highlight-box">
        <h3>Mastering the Stalking Stance:</h3>
        <p>1. <strong>Crouch & Approach Downwind:</strong> Toggle low-profile movement through tall grasslands. Approach from downwind so prey cannot catch your scent.</p>
        <p>2. <strong>Identify the Weakest Target:</strong> Lock on to juvenile or wounded prey animals on the fringes of the herd.</p>
        <p>3. <strong>Sprint Strike:</strong> Close the remaining distance with a burst of sprint energy and execute a pounce strike to pin your prey before it gathers speed.</p>
      </div>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/animal-growth-stages.jpg" alt="Feeding Offspring Promotes Growth in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Consistent Nutrition Directly Drives Cub Evolution into Battle-Ready Adults</figcaption>
      </figure>

      <h2>Transporting Food Back to the Den</h2>
      <p>Once your prey is dispatched, <strong>Wild Animal Survival Sim 3D</strong> allows you to interact with the carcass. Pick up meat portions with your jaws and navigate back to your <a href="${r}news/new-den-system-defense-guide/">home den</a>. Dropping fresh food near your mate and cubs automatically restores their hunger bars and accelerates their <a href="${r}news/animal-growth-stages-rpg-guide/">growth progression</a>!</p>

      <div class="article-cta-box">
        <h3>Become the Ultimate Hunter Today</h3>
        <p>Feed your family, hone your predatory instincts, and conquer the wild in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Google Play!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> HUNT NOW ON GOOGLE PLAY
        </a>
      </div>

      <h2>Community Suggestions Welcome</h2>
      <p>Have an idea for new prey species or hunting mechanics you want to see in the next patch? Submit your suggestions to the Gameyard team at the <a href="${r}suggestions.html">Suggestions Hub</a>!</p>
    `
  },
  {
    slug: 'new-den-system-defense-guide',
    publishDate: '2026-11-20T13:00:00+05:00',
    displayDate: 'November 20, 2026',
    tag: 'DEN SYSTEM',
    eyebrow: 'TERRITORY & BASE DEFENSE',
    title: 'New Den System Guide: Defend Your Home in Wild Animal Survival Sim 3D',
    metaTitle: 'New Den System Guide for Wild Animal Survival Sim 3D',
    metaDescription: 'Discover, fortify, and defend your home den in Wild Animal Survival Sim 3D. Learn top den defense strategies and protect your cubs on Google Play Store now.',
    focusKeywords: ['Wild Animal Survival Sim 3D den system', 'defend animal den simulator', 'wildlife home territory defense', 'den upgrade animal RPG'],
    image: 'assets/news/new-den-system.jpg',
    excerpt: 'Your den is your fortress. Discover how to locate ideal den sites, fortify your sanctuary, and repel predator sieges in Wild Animal Survival Sim 3D.',
    readTime: '6 min read',
    getContent: (r) => `
      <p class="lead">Every wild beast needs a sacred sanctuary to rest, recuperate, and raise offspring away from the harsh elements. The all-new <strong>Den System</strong> in <strong>Wild Animal Survival Sim 3D</strong> introduces tactical home base mechanics to the open world. Grab the latest update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and learn how to claim, upgrade, and defend your territory.</p>

      <h2>How to Discover and Claim a Den</h2>
      <p>As you explore the <a href="${r}index.html#worlds">three unique wilderness worlds</a> in <strong>Wild Animal Survival Sim 3D</strong>, keep your eyes open for secluded rock caves, hollowed ancient trees, and sheltered river alcoves. These landmark locations serve as prospective den foundations:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/new-family-system.jpg" alt="Shelter for Family Inside the Den in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Your Den Keeps Your Mate and Cubs Protected from Extreme Weather and Hostile Packs</figcaption>
      </figure>

      <ul>
        <li><strong>Clear Existing Occupants:</strong> Some prime den locations are occupied by rival predators or territorial bears. Defeat the occupants to claim the site.</li>
        <li><strong>Scent-Mark Territory:</strong> Mark the perimeter of the cave entrance to establish your pack's scent barrier, warning lower-tier carnivores to stay away.</li>
        <li><strong>Rest & Health Recovery:</strong> Sleeping inside your den provides accelerated health and energy regeneration rates compared to resting in open fields.</li>
      </ul>

      <h2>Defending Against Den Invasions</h2>
      <p>A thriving den attracts attention. In <strong>Wild Animal Survival Sim 3D</strong>, hostile predator patrols—including rogue wolves, hyena scavengers, and opportunistic big cats—will periodically stage attacks against your sanctuary, particularly when your mate is nursing young cubs.</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/special-powers-and-skins.jpg" alt="Using Special Powers During Den Defense in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Activate Shields and Fire Claws to Repel Sudden Territory Raids</figcaption>
      </figure>

      <div class="feature-highlight-box">
        <h3>Proven Den Defense Strategies:</h3>
        <ul>
          <li><strong>Funnel Enemies at the Chokepoint:</strong> Do not let invading packs flank your den interior. Stand firm at the narrow entrance mouth, forcing enemies to engage one-by-one.</li>
          <li><strong>Coordinate with Your Mate:</strong> Use command pings to have your mate guard the rear while you unleash your strongest combat abilities at the front lines.</li>
          <li><strong>Deploy Special Powers:</strong> Activate your <a href="${r}news/special-powers-and-skins-guide/">Shield and Fire Attack</a> powers to break through hostile siege groups quickly.</li>
        </ul>
      </div>

      <div class="article-cta-box">
        <h3>Claim Your Fortress in the Wild</h3>
        <p>Establish your den, protect your cubs, and build your kingdom in <strong>Wild Animal Survival Sim 3D</strong>. Play free today on Android!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> DOWNLOAD FREE ON GOOGLE PLAY
        </a>
      </div>

      <h2>Next Up: Growing Your Offspring</h2>
      <p>Once your den is secure and well-defended, your cubs can flourish without fear. Learn how they transform into apex hunters in our comprehensive <a href="${r}news/animal-growth-stages-rpg-guide/">Animal Growth Progression Guide</a>!</p>
    `
  },
  {
    slug: 'animal-growth-stages-rpg-guide',
    publishDate: '2026-11-21T13:00:00+05:00',
    displayDate: 'November 21, 2026',
    tag: 'ANIMAL GROWTH',
    eyebrow: 'RPG PROGRESSION SYSTEM',
    title: 'Animal Growth Guide: Hatchling to Prime in Wild Animal Survival Sim 3D',
    metaTitle: 'Animal Growth Stages in Wild Animal Survival Sim 3D',
    metaDescription: 'Evolve from Juvenile to Prime beast with Animal Growth in Wild Animal Survival Sim 3D. Level up stats and dominate the wild free on Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D animal growth', 'juvenile to prime evolution simulator', 'animal RPG level up guide', 'grow animal simulator 3D'],
    image: 'assets/news/animal-growth-stages.jpg',
    excerpt: 'Witness the miraculous transformation of your beast. Explore the complete animal growth stages from newborn Juvenile to hulking Prime titan in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    getContent: (r) => `
      <p class="lead">Survival is about growth, adaptation, and eventual dominance. The new <strong>Animal Growth System</strong> in <strong>Wild Animal Survival Sim 3D</strong> introduces full visual and statistical RPG progression for your playable creatures. Download the update now on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and discover how to nurture your beast into a legendary Prime predator.</p>

      <h2>The Three Evolutionary Growth Stages</h2>
      <p>Every animal in <strong>Wild Animal Survival Sim 3D</strong> progresses through three distinct life phases, each accompanied by realistic scale scaling, muscular definition, and amplified combat attributes:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/char-wolf.webp" alt="Apex Wolf Stature and Growth in Wild Animal Survival Sim 3D" width="800" height="800" style="max-height:480px; object-fit:contain; background:#000;" loading="lazy">
        <figcaption>Visual Muscular Definition and Scale Scale Up With Each Evolutionary Phase</figcaption>
      </figure>

      <div class="feature-highlight-box">
        <h3>1. Juvenile Stage (Young & Vulnerable)</h3>
        <p>As a juvenile, your creature is small, curious, and fast, but lacks physical durability. Focus on catching insects, small lizards, and rodents while sticking closely to parental protection inside your <a href="${r}news/new-den-system-defense-guide/">home den</a>.</p>
        
        <h3>2. Adolescent Stage (The Rising Hunter)</h3>
        <p>Upon reaching adolescence, your creature experiences a massive growth spurt. Muscles fill out, sprint speeds peak, and you can participate in medium-game hunts alongside your pack members. This stage is critical for learning combo attacks and unlocking initial <a href="${r}news/special-powers-and-skins-guide/">special combat powers</a>.</p>
        
        <h3>3. Prime Stage (Apex Dominance)</h3>
        <p>The pinnacle of biological evolution. In Prime status, your animal reaches maximum size, boasting impenetrable hide armor, crushing jaw force, and an expanded aura that intimidates nearby rivals. Prime beasts can challenge biome bosses and lead large packs effortlessly.</p>
      </div>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/3-new-animals-deer-moose-boar.jpg" alt="Growth Stages Across All Species in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Evolve Newly Added Creatures from Calves into Colossal Prime Titans</figcaption>
      </figure>

      <h2>How to Accelerate Your Growth in Wild Animal Survival Sim 3D</h2>
      <ul>
        <li><strong>Consistent High-Quality Nutrition:</strong> Feeding on fresh, nutritious prey provides substantial XP bonuses towards your next growth milestone. Review our <a href="${r}news/hunt-and-feed-family-guide/">Hunt & Feed Guide</a> for the best hunting routes.</li>
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

      <h2>Customize Your Fully Grown Beast</h2>
      <p>Reaching Prime status unlocks access to elite visual patterns and cosmetic pelt styles. Learn more about customizing your appearance in our <a href="${r}news/special-powers-and-skins-guide/">Special Powers & Skins Guide</a>!</p>
    `
  },
  {
    slug: 'special-powers-and-skins-guide',
    publishDate: '2026-11-22T13:00:00+05:00',
    displayDate: 'November 22, 2026',
    tag: 'POWERS & SKINS',
    eyebrow: 'COMBAT & CUSTOMIZATION',
    title: 'Unlock Fire Attack, Shield & Speed Boost in Wild Animal Survival Sim 3D',
    metaTitle: 'Special Powers & Skins in Wild Animal Survival Sim 3D',
    metaDescription: 'Unleash Fire Attack, Shield, and Speed Boost in Wild Animal Survival Sim 3D! Unlock rare skins and dominate the predator wild on Google Play Store now.',
    focusKeywords: ['Wild Animal Survival Sim 3D powers and skins', 'fire attack shield speed boost animal simulator', 'wildlife simulator skins unlock', 'special abilities animal combat'],
    image: 'assets/news/special-powers-and-skins.jpg',
    excerpt: 'Turn the tides of battle with supernatural animal abilities and strike fear into your rivals with stunning mythical skins in Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    getContent: (r) => `
      <p class="lead">Unleash the primal fury within! The latest combat update for <strong>Wild Animal Survival Sim 3D</strong> introduces game-changing <strong>Special Powers</strong> and an expansive catalog of <strong>Custom Skins</strong>. Download the update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and dominate every wilderness confrontation with unmatched elemental force.</p>

      <h2>Mastering the 3 New Special Powers</h2>
      <p>Engaging rival apex predators requires more than basic claw swipes. Equip and trigger these three dynamic combat powers in <strong>Wild Animal Survival Sim 3D</strong> to turn unwinnable fights into decisive victories:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/game-7.webp" alt="High Stakes Combat in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Engage Apex Rivals with Devastating Elemental Powers and Agile Dodges</figcaption>
      </figure>

      <div class="feature-highlight-box">
        <h3>🔥 1. Fire Attack (Blazing Claws & Bites)</h3>
        <p>Ignite your physical strikes with scorching flame energy. Each successful hit deals immediate burst damage and leaves enemies suffering from ongoing burn status effects over 5 seconds. Perfect for melting high-health boss bears and massive crocodiles.</p>

        <h3>🛡️ 2. Primal Shield (Invulnerability Barrier)</h3>
        <p>Project a hardened mystical forcefield around your beast. The shield absorbs up to 75% of incoming kinetic damage for 8 seconds, allowing you to survive lethal counter-strikes and break out of predatory pins during chaotic <a href="${r}news/new-den-system-defense-guide/">den defense sieges</a>.</p>

        <h3>⚡ 3. Speed Boost (Lightning Reflexes)</h3>
        <p>Supercharge your muscular velocity. Activates a 50% sprint boost with zero stamina depletion for a short burst. Indispensable for chasing down swift prey like the <a href="${r}news/3-new-animals-deer-moose-boar/">new Deer</a> or escaping an overwhelming pack of enemy carnivores.</p>
      </div>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/improved-gameplay-controls.jpg" alt="Smooth Controls and Power Activation in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Enhanced Touch Controls Ensure Instant Power Triggering and Zero Latency</figcaption>
      </figure>

      <h2>Unlocking Rare & Mythical Skins</h2>
      <p>Transform the appearance of your <a href="${r}index.html#animals">Wolf, Tiger, Panther, Lion, Bear, and Crocodile</a>. From bioluminescent phantom markings and volcanic ember pelts to frozen frost hides, skins in <strong>Wild Animal Survival Sim 3D</strong> reflect your status as the reigning supreme predator.</p>
      <p>Skins can be unlocked through gameplay achievements, survival milestones, and daily login rewards. Equip your favorite skins directly from the animal selection menu before entering the wild!</p>

      <div class="article-cta-box">
        <h3>Equip Special Powers & Stand Out</h3>
        <p>Unleash Fire Attacks and show off mythical skins in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Google Play today!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> GET POWERS & SKINS ON GOOGLE PLAY
        </a>
      </div>

      <h2>Help Us Create New Skins</h2>
      <p>Have a theme idea for our next skin drop? Send your artistic concepts and colorway suggestions to our developers on the official <a href="${r}suggestions.html">Suggestions Page</a>!</p>
    `
  },
  {
    slug: 'multi-language-support-update',
    publishDate: '2026-11-23T13:00:00+05:00',
    displayDate: 'November 23, 2026',
    tag: 'LOCALIZATION',
    eyebrow: 'GLOBAL ACCESSIBILITY',
    title: 'Wild Animal Survival Sim 3D Goes Global: Multi-Language Support',
    metaTitle: 'Multi-Language Support in Wild Animal Survival Sim 3D',
    metaDescription: 'Play Wild Animal Survival Sim 3D in 12+ languages! Experience global localization, improved UI, and hunt freely on Android via the Google Play Store today.',
    focusKeywords: ['Wild Animal Survival Sim 3D multi language', 'wildlife simulator global localization', 'play animal simulator in your language', 'multi language RPG android'],
    image: 'assets/news/multi-language-support.jpg',
    excerpt: 'Wild Animal Survival Sim 3D is now fully localized across 12+ international languages, welcoming millions of players worldwide to experience seamless wildlife RPG gaming.',
    readTime: '4 min read',
    getContent: (r) => `
      <p class="lead">Gaming knows no borders. To celebrate our growing worldwide community of wild animal simulator enthusiasts, Gameyard has rolled out comprehensive <strong>Multi-Language Support</strong> in the newest release of <strong>Wild Animal Survival Sim 3D</strong>. Download the update on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and immerse yourself in the wild using your native language.</p>

      <h2>Supported Languages Across the World</h2>
      <p>Our localized build includes fully translated user interfaces, quest objectives, survival tutorials, and RPG talent descriptions for over 12 major languages, including:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/major-wildlife-rpg-update.jpg" alt="Major Wildlife RPG Update Banner in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>The Major Wildlife RPG Expansion is Localized for Over 12 Global Regions</figcaption>
      </figure>

      <div class="feature-highlight-box">
        <ul style="columns: 2; -webkit-columns: 2;">
          <li>🇬🇧 English</li>
          <li>🇪🇸 Spanish (Español)</li>
          <li>🇧🇷 Portuguese (Português)</li>
          <li>🇫🇷 French (Français)</li>
          <li>🇩🇪 German (Deutsch)</li>
          <li>🇮🇹 Italian (Italiano)</li>
          <li>🇷🇺 Russian (Русский)</li>
          <li>🇹🇷 Turkish (Türkçe)</li>
          <li>🇸🇦 Arabic (العربية)</li>
          <li>🇯🇵 Japanese (日本語)</li>
          <li>🇰🇷 Korean (한국어)</li>
          <li>🇨🇳 Simplified Chinese (中文)</li>
        </ul>
      </div>

      <h2>How Language Switching Works</h2>
      <p>In <strong>Wild Animal Survival Sim 3D</strong>, the game automatically detects your mobile device's default system language upon first launch and loads the matching localized text. You can also manually switch languages at any moment via the in-game Settings menu with instant, on-the-fly text reloading.</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/game-6.webp" alt="Vast 3D Biomes in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Enjoy Immersive Wilderness Exploration in Your Native Language</figcaption>
      </figure>

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
      <p>We are committed to continuous localization refinement. If you notice any translation nuance that could be improved, please notify our team via the <a href="${r}suggestions.html">Player Feedback Form</a>!</p>
    `
  },
  {
    slug: 'improved-gameplay-controls-camera-update',
    publishDate: '2026-11-24T13:00:00+05:00',
    displayDate: 'November 24, 2026',
    tag: 'PERFORMANCE',
    eyebrow: 'ENGINE & QUALITY OF LIFE',
    title: 'Enhanced Controls & 60FPS Camera Stability in Wild Animal Survival Sim 3D',
    metaTitle: 'Smooth Controls & Camera in Wild Animal Survival Sim 3D',
    metaDescription: 'Experience fluid camera tracking, crisp 60FPS UI, and tighter combat controls in Wild Animal Survival Sim 3D. Download the latest build on Google Play now.',
    focusKeywords: ['Wild Animal Survival Sim 3D camera controls', 'smooth 60fps wildlife simulator', 'improved gameplay controls animal sim', 'stable camera mobile RPG'],
    image: 'assets/news/improved-gameplay-controls.jpg',
    excerpt: 'Say goodbye to jittery tracking and input latency. Discover how engine overhauls bring buttery smooth 60 FPS camera tracking and precise controls to Wild Animal Survival Sim 3D.',
    readTime: '5 min read',
    getContent: (r) => `
      <p class="lead">Precision is the difference between catching your prey and going hungry. In our latest technical patch for <strong>Wild Animal Survival Sim 3D</strong>, our engineering team completely overhauled the physics engine, touch-response latency, and 3D camera stabilization. Update your game today on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> for the smoothest wildlife survival experience ever created on mobile.</p>

      <h2>Major Camera Overhaul: Stability in the Thick of Battle</h2>
      <p>Fast-paced animal combat often involves rapid pivoting, lunges, and vertical leaps. Previous camera architectures could occasionally clip through dense foliage or hitch when tracking rapid maneuvers. The new dynamic camera in <strong>Wild Animal Survival Sim 3D</strong> fixes this completely:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/game-3.webp" alt="Cinematic 3D Camera Tracking in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Cinematic 60 FPS Camera Following in Dense Wilderness Environments</figcaption>
      </figure>

      <ul>
        <li><strong>Smart Collision Prediction:</strong> The 3D camera now uses raycast smoothing to anticipate terrain obstructions, keeping your beast centered and in clear focus at all times.</li>
        <li><strong>Dynamic Zoom on Combat:</strong> When engaging large boss beasts or defending against multiple intruders at your <a href="${r}news/new-den-system-defense-guide/">home den</a>, the camera automatically pulls back slightly to provide enhanced battlefield awareness.</li>
        <li><strong>Adjustable Sensitivity Sliders:</strong> Customize pitch, yaw, and tracking damping to your exact personal preferences in the Settings panel.</li>
      </ul>

      <h2>Enhanced Touch Responsiveness & UI Precision</h2>
      <p>Survival encounters demand instant reactions. We revamped the virtual analog joystick and combat buttons:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/special-powers-and-skins.jpg" alt="Responsive Combat Action in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Zero Input Latency for Split-Second Combat Power Activations</figcaption>
      </figure>

      <div class="feature-highlight-box">
        <h3>What Feels Better in Version 2.0:</h3>
        <ul>
          <li><strong>Zero Input Deadzone:</strong> Immediate beast response upon touching the directional pad, enabling sharper turns and tactical evasions.</li>
          <li><strong>Combo Buffering:</strong> Tap your attack buttons seamlessly—your creature buffers attack combos cleanly without stuttering.</li>
          <li><strong>Fluid 60 FPS Rendering:</strong> Optimized GPU shader pipelines ensure solid 60 frames per second on mid-tier and flagship Android devices alike.</li>
        </ul>
      </div>

      <div class="article-cta-box">
        <h3>Feel the Difference in Action</h3>
        <p>Experience silky-smooth 60 FPS controls and cinematic camera movement in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Android now!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> PLAY THE UPDATE ON GOOGLE PLAY
        </a>
      </div>

      <h2>Explore All Game Modes</h2>
      <p>Test out your improved control fluidity across all three core gameplay modes: <a href="${r}index.html#modes">Hunt, Survive, and Explore</a>. Have more feedback on controls? Share it on our <a href="${r}suggestions.html">Suggestions Page</a>!</p>
    `
  },
  {
    slug: 'complete-beginners-survival-guide',
    publishDate: '2026-11-25T13:00:00+05:00',
    displayDate: 'November 25, 2026',
    tag: 'BEGINNER GUIDE',
    eyebrow: 'MASTER THE WILDERNESS',
    title: 'Master Beginner’s Survival Guide for Wild Animal Survival Sim 3D',
    metaTitle: 'Beginner\'s Survival Guide to Wild Animal Survival Sim 3D',
    metaDescription: 'Master survival, hunting, and territory control in Wild Animal Survival Sim 3D. Top tips for food, stamina, and leveling up free on Google Play Store.',
    focusKeywords: ['Wild Animal Survival Sim 3D beginner guide', 'how to play Wild Animal Survival Sim 3D', 'wild animal survival sim tips and tricks', 'wildlife RPG starter guide'],
    image: 'assets/explore-new-animals.jpg',
    excerpt: 'New to the wilderness? This comprehensive survival manual gives you the essential tactics, biome maps, and combat secrets to conquer Wild Animal Survival Sim 3D from day one.',
    readTime: '7 min read',
    getContent: (r) => `
      <p class="lead">Welcome to the untamed wilderness. Stepping into <strong>Wild Animal Survival Sim 3D</strong> for the first time is both exhilarating and dangerous. Whether you choose to roam as a stealthy wolf or a fearsome tiger, mastering the fundamentals of stamina management, hydration, territorial expansion, and pack dynamics is vital. Download the game free on the <a href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">Google Play Store</a> and follow this ultimate starter roadmap.</p>

      <h2>1. Managing Your 3 Survival Meters</h2>
      <p>At the core of <strong>Wild Animal Survival Sim 3D</strong> are three vital survival indicators located at the top of your screen:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/game-5.webp" alt="Managing Survival in the Open Savanna in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Balance Hunger, Thirst, and Energy as You Traverse Vast Wilderness Worlds</figcaption>
      </figure>

      <ul>
        <li><strong>Health (Red Bar):</strong> Decreases when damaged by hostile beasts or suffering from starvation/dehydration. Rest inside your <a href="${r}news/new-den-system-defense-guide/">den</a> to regenerate health quickly.</li>
        <li><strong>Hunger (Orange Bar):</strong> Depletes continuously as your beast walks and runs. Replenish it by hunting prey animals across the map. Read our <a href="${r}news/hunt-and-feed-family-guide/">Hunt & Feed Guide</a> for advanced tactics.</li>
        <li><strong>Thirst & Stamina (Blue Bar):</strong> Stamina powers sprinting, leaping, and special attacks. Thirst must be satisfied by visiting freshwater rivers and oasis pools in <a href="${r}index.html#worlds">our expansive biomes</a>.</li>
      </ul>

      <h2>2. Choosing Your Starter Predator</h2>
      <p>Every beast offers unique strengths suited to specific playstyles:</p>

      <figure class="article-figure">
        <img class="article-inbody-image" src="${r}assets/news/new-den-system.jpg" alt="Establish Your Den Sanctuary in Wild Animal Survival Sim 3D" width="1600" height="900" loading="lazy">
        <figcaption>Secure a Safe Den Base Early in Your Journey to Rest and Protect Cubs</figcaption>
      </figure>

      <div class="feature-highlight-box">
        <h3>Starter Beast Recommendations:</h3>
        <ul>
          <li><strong>The Wolf (Balanced Leader):</strong> Exceptional endurance, pack coordination, and balanced stats. Best for players eager to explore the <a href="${r}news/new-family-system-guide/">Family System</a>.</li>
          <li><strong>The Tiger (High Damage Ambush):</strong> Tremendous burst bite damage and stealth prowess in thick rainforest terrain.</li>
          <li><strong>The Crocodile (Waterway Predator):</strong> Supreme water swimming speeds and crushing jaw force near riverbanks.</li>
          <li><strong>The Deer or Boar:</strong> Great for players who want to experience the brand-new <a href="${r}news/3-new-animals-deer-moose-boar/">herbivore and toughness mechanics</a>!</li>
        </ul>
      </div>

      <h2>3. Progression and Unlocking Abilities</h2>
      <p>As you defeat prey, complete daily wilderness missions, and defend your territory, your creature earns Experience Points (XP). Leveling up enhances your base health, increases strike damage, and unlocks the game-changing <a href="${r}news/special-powers-and-skins-guide/">Special Powers (Fire Attack, Shield, and Speed Boost)</a>.</p>

      <div class="article-cta-box">
        <h3>Your Wilderness Adventure Begins Now</h3>
        <p>Step into the wild, conquer the food chain, and build your dynasty in <strong>Wild Animal Survival Sim 3D</strong>. Download free on Android today!</p>
        <a class="article-cta-btn" href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
          <span>▶</span> START PLAYING FREE ON GOOGLE PLAY
        </a>
      </div>

      <h2>Have Ideas for Future Updates?</h2>
      <p>The Gameyard development team actively reviews community suggestions. If you have a feature or animal you want to see, head over to the <a href="${r}suggestions.html">Suggestions Page</a> and let us know!</p>
    `
  }
];

// Helper to generate each article HTML page
function generateArticlePage(art, relPathToRoot) {
  const fullArticleUrl = `${SITE_URL}/news/${art.slug}/`;
  const fullImageUrl = `${SITE_URL}/${art.image}`;

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

 <meta name="theme-color" content="#08080C">
 <link rel="stylesheet" href="${relPathToRoot}styles.css?v=5">

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
    background-color: #08080C;
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
  .article-hero {
    position: relative;
    padding: 130px 24px 40px;
    background: radial-gradient(ellipse 70% 60% at 50% 0%, rgba(242, 180, 0, 0.12) 0%, transparent 70%), linear-gradient(180deg, #050508 0%, #0d0d12 100%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    text-align: center;
  }
  .article-hero-inner {
    max-width: 900px;
    margin: 0 auto;
  }
  .article-breadcrumbs {
    font-family: var(--tech, monospace);
    font-size: 12px;
    color: #8C8C98;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .article-breadcrumbs a {
    color: #F2B400;
    text-decoration: none;
  }
  .article-breadcrumbs a:hover {
    text-decoration: underline;
  }
  .article-tag {
    display: inline-block;
    background: rgba(242, 180, 0, 0.15);
    border: 1px solid rgba(242, 180, 0, 0.4);
    color: #F2B400;
    font-family: var(--tech, monospace);
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.16em;
    padding: 4px 10px;
    border-radius: 3px;
    margin-bottom: 14px;
  }
  .article-title {
    font-family: var(--heading, sans-serif);
    font-size: clamp(30px, 5vw, 54px);
    font-weight: 900;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    line-height: 1.05;
    margin: 0 0 16px;
    color: #FFFFFF;
  }
  .article-meta-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    font-family: var(--tech, monospace);
    font-size: 12px;
    color: #A0A0AC;
    letter-spacing: 0.08em;
  }
  .article-main {
    max-width: 860px;
    width: 100%;
    margin: 0 auto;
    padding: 40px 24px 80px;
    box-sizing: border-box;
    flex: 1;
  }
  .article-featured-image {
    width: 100%;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.7);
    margin-bottom: 36px;
    display: block;
    object-fit: cover;
  }
  .article-figure {
    margin: 36px 0;
    text-align: center;
  }
  .article-inbody-image {
    width: 100%;
    border-radius: 6px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    box-shadow: 0 14px 35px rgba(0, 0, 0, 0.6);
    display: block;
    object-fit: cover;
  }
  .article-figure figcaption {
    font-family: var(--tech, monospace);
    font-size: 12px;
    color: #A0A0AC;
    margin-top: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .article-body {
    font-size: 17px;
    line-height: 1.75;
    color: #D2D2DC;
  }
  .article-body .lead {
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 1.6;
    margin-bottom: 28px;
    border-left: 3px solid #F2B400;
    padding-left: 18px;
  }
  .article-body h2 {
    font-family: var(--heading, sans-serif);
    font-size: 28px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #FFFFFF;
    margin: 40px 0 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 8px;
  }
  .article-body h3 {
    font-family: var(--heading, sans-serif);
    font-size: 21px;
    font-weight: 800;
    text-transform: uppercase;
    color: #F2B400;
    margin: 26px 0 12px;
  }
  .article-body p {
    margin-bottom: 20px;
  }
  .article-body ul, .article-body ol {
    margin: 0 0 24px 20px;
    padding: 0;
  }
  .article-body li {
    margin-bottom: 10px;
    line-height: 1.65;
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
    border-radius: 4px;
    padding: 24px 28px;
    margin: 32px 0;
  }
  .article-cta-box {
    background: radial-gradient(ellipse 90% 70% at 50% 20%, rgba(242, 180, 0, 0.15) 0%, rgba(10, 10, 14, 0.95) 100%);
    border: 1px solid rgba(242, 180, 0, 0.4);
    border-radius: 6px;
    padding: 34px 28px;
    text-align: center;
    margin: 44px 0;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5);
  }
  .article-cta-box h3 {
    font-family: var(--heading, sans-serif);
    font-size: 26px;
    color: #FFFFFF;
    margin: 0 0 10px;
    text-transform: uppercase;
  }
  .article-cta-box p {
    font-size: 16px;
    color: #C4C4CE;
    max-width: 580px;
    margin: 0 auto 20px;
  }
  .article-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #F2B400;
    color: #0A0A0D !important;
    font-family: var(--tech, monospace);
    font-size: 14px;
    font-weight: 900;
    letter-spacing: 0.14em;
    padding: 14px 28px;
    border-radius: 4px;
    text-decoration: none !important;
    transition: all 0.2s ease;
    box-shadow: 0 4px 18px rgba(242, 180, 0, 0.35);
  }
  .article-cta-btn:hover {
    background: #FFCA28;
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(242, 180, 0, 0.5);
  }
  .article-footer-nav {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 30px;
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
  @media (max-width: 768px) {
    .article-hero {
      padding: 100px 16px 30px;
    }
    .article-main {
      padding: 24px 16px 60px;
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
 <header class="header" id="header" style="position:fixed; top:0; left:0; right:0; z-index:100;">
  <div class="header-left">
   <a class="brand" href="${relPathToRoot}index.html#home" aria-label="Back to home">
    <span class="brand-studio">GAMEYARD</span>
    <span class="brand-divider">|</span>
    <span class="brand-title">WILD ANIMAL<small>SIM 3D</small></span>
   </a>
  </div>
  <nav id="navigation" aria-label="Main navigation">
   <a href="${relPathToRoot}index.html#modes">THE GAME</a>
   <a href="${relPathToRoot}index.html#worlds">WORLDS</a>
   <a href="${relPathToRoot}index.html#animals">ROSTER</a>
   <a href="${relPathToRoot}news/">NEWS</a>
  </nav>
  <div class="header-right">
   <a class="header-play-link" data-play href="${PLAY_URL}" target="_blank" rel="noopener noreferrer" aria-label="Play on Google Play">
    <span>▶</span>
    <span>PLAY NOW</span>
   </a>
   <a class="header-cta" href="${relPathToRoot}suggestions.html" aria-label="Give Suggestions">
    <span>GIVE SUGGESTIONS</span>
   </a>
  </div>
 </header>

 <section class="article-hero">
  <div class="article-hero-inner">
   <div class="article-breadcrumbs">
    <a href="${relPathToRoot}index.html">Home</a> &gt; <a href="${relPathToRoot}news/">News & Updates</a> &gt; <span>${art.tag}</span>
   </div>
   <span class="article-tag">${art.tag}</span>
   <h1 class="article-title">${art.title}</h1>
   <div class="article-meta-bar">
    <span>📅 ${art.displayDate}</span>
    <span>•</span>
    <span>⏱ ${art.readTime}</span>
    <span>•</span>
    <span>🏢 Gameyard Studio</span>
   </div>
  </div>
 </section>

 <main class="article-main">
  <img class="article-featured-image" src="${relPathToRoot}${art.image}" alt="${art.title} - Wild Animal Survival Sim 3D" width="1600" height="900" loading="eager">

  <article class="article-body">
   ${art.getContent(relPathToRoot)}
  </article>

  <div class="article-footer-nav">
   <a href="${relPathToRoot}news/">← Back to News & Updates</a>
   <a href="${relPathToRoot}suggestions.html">Submit Your Suggestions →</a>
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
</body>
</html>`;
}

// Generate News Hub Page (dist/news/index.html and dist/news.html)
function generateNewsHubPage(articlesList, relPathToRoot) {
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
 <meta name="theme-color" content="#08080C">
 <link rel="stylesheet" href="${relPathToRoot}styles.css?v=5">
 <style>
  body { background:#08080C; color:#E2E2E8; font-family:var(--body, sans-serif); margin:0; }
  .news-page { min-height:100vh; display:flex; flex-direction:column; }
  .news-hero {
    position:relative; padding:130px 24px 50px;
    background:radial-gradient(ellipse 70% 60% at 50% 0%, rgba(242, 180, 0, 0.12) 0%, transparent 70%), linear-gradient(180deg, #050508 0%, #0d0d12 100%);
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
  .article-card-img-wrap img { width:100%; height:100%; object-fit:cover; transition:transform 0.3s ease; }
  .article-card:hover .article-card-img-wrap img { transform:scale(1.04); }
  .article-card-body { padding:22px; flex:1; display:flex; flex-direction:column; }
  .article-card-tag { font-family:var(--tech, monospace); font-size:11px; font-weight:800; color:#F2B400; letter-spacing:0.14em; text-transform:uppercase; margin-bottom:8px; }
  .article-card-title { font-family:var(--heading, sans-serif); font-size:20px; font-weight:800; text-transform:uppercase; color:#FFFFFF; line-height:1.2; margin:0 0 10px; }
  .article-card-excerpt { font-size:14px; line-height:1.55; color:#A8A8B4; margin:0 0 18px; flex:1; }
  .article-card-footer { display:flex; justify-content:space-between; align-items:center; font-family:var(--tech, monospace); font-size:11px; color:#787884; border-top:1px solid rgba(255,255,255,0.08); padding-top:12px; }
  .article-card-cta { color:#F2B400; font-weight:800; }
  @media(max-width:768px){
    .news-hero { padding:100px 16px 36px; }
    .news-main { padding:30px 16px 60px; }
    .articles-grid { grid-template-columns:1fr; }
  }
 </style>
</head>
<body class="news-page">
 <header class="header" id="header" style="position:fixed; top:0; left:0; right:0; z-index:100;">
  <div class="header-left">
   <a class="brand" href="${relPathToRoot}index.html#home" aria-label="Back to home">
    <span class="brand-studio">GAMEYARD</span>
    <span class="brand-divider">|</span>
    <span class="brand-title">WILD ANIMAL<small>SIM 3D</small></span>
   </a>
  </div>
  <nav id="navigation" aria-label="Main navigation">
   <a href="${relPathToRoot}index.html#modes">THE GAME</a>
   <a href="${relPathToRoot}index.html#worlds">WORLDS</a>
   <a href="${relPathToRoot}index.html#animals">ROSTER</a>
   <a href="${relPathToRoot}news/">NEWS</a>
  </nav>
  <div class="header-right">
   <a class="header-play-link" data-play href="${PLAY_URL}" target="_blank" rel="noopener noreferrer">
    <span>▶</span>
    <span>PLAY NOW</span>
   </a>
   <a class="header-cta" href="${relPathToRoot}suggestions.html">
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
   ${articlesList.map(a => `
     <a class="article-card" href="${relPathToRoot === '../' ? a.slug + '/' : 'news/' + a.slug + '/'}">
      <div class="article-card-img-wrap">
       <img src="${relPathToRoot}${a.image}" alt="${a.title}" width="600" height="338" loading="lazy">
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
</body>
</html>`;
}

// Generate Sitemap XML
function generateSitemap(articlesList) {
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Main pages
  xml += `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>${SITE_URL}/news/</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>\n`;
  xml += `  <url>\n    <loc>${SITE_URL}/suggestions.html</loc>\n    <lastmod>${currentDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;

  // Article pages
  articlesList.forEach(art => {
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
console.log('Generating 10 SEO Articles with Featured + In-Body Images...');

// 1. Generate individual article directories and HTML files
articles.forEach(art => {
  const artDir = path.join(newsDir, art.slug);
  if (!fs.existsSync(artDir)) {
    fs.mkdirSync(artDir, { recursive: true });
  }
  // For directory version: relPathToRoot is '../../'
  const htmlDir = generateArticlePage(art, '../../');
  fs.writeFileSync(path.join(artDir, 'index.html'), htmlDir, 'utf8');

  // For flat file version (e.g. dist/news/slug.html): relPathToRoot is '../'
  const htmlFlat = generateArticlePage(art, '../');
  fs.writeFileSync(path.join(newsDir, `${art.slug}.html`), htmlFlat, 'utf8');

  console.log(`✔ Generated: dist/news/${art.slug}/index.html and dist/news/${art.slug}.html`);
});

// 2. Generate News Archive Hub (dist/news/index.html and dist/news.html)
const newsHubDirHtml = generateNewsHubPage(articles, '../');
fs.writeFileSync(path.join(newsDir, 'index.html'), newsHubDirHtml, 'utf8');

const newsHubRootHtml = generateNewsHubPage(articles, '');
fs.writeFileSync(path.join(distDir, 'news.html'), newsHubRootHtml, 'utf8');
console.log('✔ Generated: dist/news/index.html and dist/news.html');

// 3. Generate Sitemap XML
const sitemapXml = generateSitemap(articles);
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
console.log('✔ Generated: dist/sitemap.xml');

// 4. Generate Robots.txt
const robotsTxt = generateRobotsTxt();
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt, 'utf8');
console.log('✔ Generated: dist/robots.txt');

console.log('All articles with featured and in-body images generated successfully!');
