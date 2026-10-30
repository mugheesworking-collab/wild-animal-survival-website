window.GAME = {
  title: 'Wild Animal Survival Sim 3D', studio: 'Gameyard',
  playUrl: 'https://play.google.com/store/apps/details?id=com.Wild.WolfAnimal.survivalSim.game',
  privacyUrl: 'https://hushgamesmusik.blogspot.com/2019/10/hush-games-privacy-policy.html',
  supportEmail: 'hushgamesmarketing@gmail.com',
  hero: { kicker: 'THE WILDERNESS IS CALLING', body: 'Follow your instincts. Face the wilderness. Make every hunt count.' },
  modes: [
    { name:'Hunt', eyebrow:'01 / TRUST YOUR INSTINCTS', title:'THE CHASE IS ON.', text:'Track prey, close the distance, and choose your moment to strike. Take on hunting missions across the wilderness.', image:4 },
    { name:'Survive', eyebrow:'02 / EVERY CHOICE MATTERS', title:'STAY IN THE FIGHT.', text:'Find food. Search for water. Rest and recover. Keep your hunger, thirst, and energy in balance as you explore.', image:1 },
    { name:'Explore', eyebrow:'03 / FOLLOW THE UNKNOWN', title:'BEYOND THE TRAIL.', text:'Leave the familiar behind. Explore natural landscapes, encounter wildlife, and find your next hunting ground.', image:7 }
  ],
  worlds: [
    {name:'Jungle', title:'INTO THE GREEN.', text:'Dense foliage. Rocky trails. A wilderness alive with possibility.', image:3},
    {name:'Savanna', title:'WIDE OPEN. UNTAMED.', text:'Open grasslands stretch toward the horizon. Follow the hunt.', image:5},
    {name:'Waterways', title:'AT THE WATER\'S EDGE.', text:'Rivers and lakes bring the wilderness together. Stay alert.', image:1}
  ],
  animals: [
    {name:'Wolf',         text:'Follow your instincts into the wild.',      image:2, charImage:'assets/char-wolf.webp'},
    {name:'Tiger',        text:'Meet the wilderness with tooth and claw.',   image:4, charImage:'assets/char-tiger.webp'},
    {name:'Black Panther',text:'Discover a different side of the wild.',     image:3, charImage:'assets/char-panther.webp'},
    {name:'Bear',         text:'Stand your ground in the wilderness.',       image:8, charImage:'assets/char-bear.webp'},
    {name:'Lion',         text:'Answer the call of the savanna.',            image:5, charImage:'assets/char-lion.webp'},
    {name:'Crocodile',    text:'See the wild from the water\'s edge.',       image:1, charImage:'assets/char-crocodile.webp'}
  ],
  media: [
    {image:3, title:'Tiger at the water\'s edge'}, {image:5,title:'Lion in the grasslands'},
    {image:1,title:'Crocodile in the river'}, {image:4,title:'The hunt begins'},
    {image:7,title:'A different perspective'}, {image:8,title:'Wildlife encounters'},
    {image:2,title:'Animal selection'}, {image:6,title:'More from the wilderness'}
  ],
  news: [
    {tag:'GAME UPDATE', title:'A fresh trail ahead', text:'The latest store notes include interface improvements, daily login rewards, performance improvements, and fixes.', image:3},
    {tag:'FIELD GUIDE', title:'The art of staying alive', text:'Food, water, and rest. Get to know the essentials of life in the wilderness.', image:1, target:'#modes'},
    {tag:'ANIMAL SPOTLIGHT', title:'Find your wild side', text:'Meet the animals and choose your next perspective on the wilderness.', image:5, target:'#animals'}
  ],
  // Verified against Google Play on 20 October 2026. Store screenshots are publisher-supplied promotional media.
  // Add future features, trailers, collaborations, social links and map names only after verification.
};
