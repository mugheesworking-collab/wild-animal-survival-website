const $ = (selector) => document.querySelector(selector);
const game = window.GAME;
document.querySelectorAll('[data-play]').forEach(a => {a.href=game.playUrl;a.target='_blank';a.rel='noopener noreferrer';});
if ($('#privacy-link')) $('#privacy-link').href=game.privacyUrl;
if ($('#support-link')) $('#support-link').href=`mailto:${game.supportEmail}`;
if ($('#hero-kicker')) $('#hero-kicker').textContent=game.hero.kicker;
if ($('#hero-body')) $('#hero-body').textContent=game.hero.body;
function makeTabs(container, items, render, prefix) {
  const host=$(container);
  items.forEach((item,i)=>{
    const button=document.createElement('button');button.type='button';button.role='tab';button.id=`${prefix}-tab-${i}`;
    button.innerHTML=`${prefix==='mode'?`<span>0${i+1}</span>`:''}${item.name}${prefix==='world'?`<span>0${i+1} ↗</span>`:''}`;
    button.addEventListener('click',()=>select(i));
    button.addEventListener('keydown',event=>{let next=i;if(event.key==='ArrowRight')next=(i+1)%items.length;else if(event.key==='ArrowLeft')next=(i+items.length-1)%items.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=items.length-1;else return;event.preventDefault();select(next);host.children[next].focus();});
    host.append(button);
  });
  function select(i){[...host.children].forEach((button,j)=>{button.setAttribute('aria-selected',i===j);button.tabIndex=i===j?0:-1;if(prefix==='mode')button.setAttribute('aria-controls','mode-panel');else button.setAttribute('aria-controls','world-panel');});render(items[i],i);}
  select(0);
}
if ($('#mode-tabs') && $('#mode-panel')) {
  makeTabs('#mode-tabs',game.modes,(mode,i)=>{
    $('#mode-panel').setAttribute('aria-labelledby',`mode-tab-${i}`);
    $('#mode-panel').innerHTML=`<div class="mode-image"><img src="assets/game-${mode.image}.webp" alt="${mode.name} — publisher screenshot" loading="lazy" width="1600" height="900"><span class="image-label">GOOGLE PLAY SCREENSHOT</span></div><div class="mode-copy"><p class="eyebrow">${mode.eyebrow}</p><h3>${mode.title}</h3><p>${mode.text}</p><a href="${game.playUrl}" target="_blank" rel="noopener noreferrer" class="text-link">PLAY ON GOOGLE PLAY ↗</a></div>`;
  },'mode');
}
const mapThumbs = document.querySelectorAll('.map-thumb-btn');
const mainMapImage = $('#world-image');
const mainMapCaption = $('#world-caption-title');

function selectMap(index) {
  const world = game.worlds[index];
  if (!world) return;
  mapThumbs.forEach((btn, i) => {
    const isSelected = i === index;
    btn.setAttribute('aria-selected', isSelected);
    btn.classList.toggle('active', isSelected);
    btn.tabIndex = isSelected ? 0 : -1;
  });
  if (mainMapImage) {
    mainMapImage.style.opacity = '0.7';
    setTimeout(() => {
      mainMapImage.src = `assets/game-${world.image}.webp`;
      mainMapImage.alt = `${world.name} landscape — Wild Animal Survival Sim 3D`;
      mainMapImage.style.opacity = '1';
    }, 120);
  }
  if (mainMapCaption) {
    mainMapCaption.textContent = world.name;
  }
  const panel = $('#world-panel');
  if (panel) panel.setAttribute('aria-labelledby', `world-tab-${index}`);
}

mapThumbs.forEach((btn, i) => {
  btn.addEventListener('click', () => selectMap(i));
  btn.addEventListener('keydown', (e) => {
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % mapThumbs.length;
    else if (e.key === 'ArrowLeft') next = (i + mapThumbs.length - 1) % mapThumbs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = mapThumbs.length - 1;
    else return;
    e.preventDefault();
    selectMap(next);
    mapThumbs[next].focus();
  });
});
const characterThumbs = document.querySelectorAll('.character-thumb-btn');
const mainCharImage = $('#character-image');
const mainCharTitle = $('#character-caption-title');
const mainCharDesc = $('#character-caption-desc');

function selectCharacter(index) {
  const animal = game.animals[index];
  if (!animal) return;
  characterThumbs.forEach((btn, i) => {
    const isSelected = i === index;
    btn.setAttribute('aria-selected', isSelected);
    btn.classList.toggle('active', isSelected);
    btn.tabIndex = isSelected ? 0 : -1;
  });
  if (mainCharImage) {
    mainCharImage.style.opacity = '0.7';
    setTimeout(() => {
      // Use dedicated character environment image if available, fallback to game screenshot
      const src = animal.charImage || `assets/game-${animal.image}.webp`;
      mainCharImage.onerror = () => {
        mainCharImage.onerror = null;
        mainCharImage.src = `assets/game-${animal.image}.webp`;
      };
      mainCharImage.src = src;
      mainCharImage.alt = `${animal.name} — Wild Animal Survival Sim 3D`;
      mainCharImage.style.opacity = '1';
    }, 120);
  }
  if (mainCharTitle) {
    mainCharTitle.textContent = animal.name.toUpperCase();
  }
  if (mainCharDesc) {
    mainCharDesc.textContent = animal.text;
  }
  const panel = $('#character-panel');
  if (panel) panel.setAttribute('aria-labelledby', `character-tab-${index}`);
}

characterThumbs.forEach((btn, i) => {
  btn.addEventListener('click', () => selectCharacter(i));
  btn.addEventListener('keydown', (e) => {
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % characterThumbs.length;
    else if (e.key === 'ArrowLeft') next = (i + characterThumbs.length - 1) % characterThumbs.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = characterThumbs.length - 1;
    else return;
    e.preventDefault();
    selectCharacter(next);
    characterThumbs[next].focus();
  });
});
let activeImage=0;
const dialog=$('#lightbox');
game.media.forEach((media,i)=>{const button=document.createElement('button');button.type='button';button.className='gallery-card';button.hidden=i>=3;button.setAttribute('aria-label',`Open image: ${media.title}`);button.innerHTML=`<img src="assets/game-${media.image}.webp" alt="${media.title} — Google Play screenshot" loading="lazy" width="1600" height="900"><span class="expand" aria-hidden="true">⤢</span><span class="gallery-caption">${media.title}</span>`;button.addEventListener('click',()=>{activeImage=i;showImage();dialog.showModal();document.body.classList.add('locked');});$('#gallery').append(button);});
$('#more-media').addEventListener('click',()=>{const expanded=$('#more-media').getAttribute('aria-expanded')==='true';[...$('#gallery').children].forEach((node,i)=>node.hidden=i>=3&&expanded);$('#more-media').setAttribute('aria-expanded',!expanded);$('#more-media').innerHTML=expanded?'VIEW MORE <span>+</span>':'VIEW LESS <span>−</span>';});
function showImage(){const media=game.media[activeImage];$('#lightbox-image').src=`assets/game-${media.image}.webp`;$('#lightbox-image').alt=`${media.title} — publisher screenshot`;$('#lightbox-title').textContent=media.title;$('#lightbox-count').textContent=`${activeImage+1} / ${game.media.length} · GOOGLE PLAY MEDIA`;}
function stepImage(delta){activeImage=(activeImage+delta+game.media.length)%game.media.length;showImage();}
$('#previous-image').addEventListener('click',()=>stepImage(-1));$('#next-image').addEventListener('click',()=>stepImage(1));$('#close-lightbox').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('locked'));dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});dialog.addEventListener('keydown',event=>{if(event.key==='ArrowLeft')stepImage(-1);if(event.key==='ArrowRight')stepImage(1);});
game.news.forEach(news=>{const a=document.createElement('a');a.className='news-card';a.href=news.target||game.playUrl;if(!news.target){a.target='_blank';a.rel='noopener noreferrer';}a.innerHTML=`<div class="news-image"><img src="assets/game-${news.image}.webp" alt="" loading="lazy" width="1600" height="900"></div><p class="eyebrow">${news.tag}</p><h3>${news.title}</h3><p>${news.text}</p><span class="text-link">${news.target?'EXPLORE':'VIEW STORE UPDATE'} ↗</span>`;$('#news-list').append(a);});
$('.menu-button').addEventListener('click',()=>{const open=$('.menu-button').getAttribute('aria-expanded')==='true';$('.menu-button').setAttribute('aria-expanded',!open);$('.menu-button').setAttribute('aria-label',open?'Open menu':'Close menu');$('#navigation').classList.toggle('open',!open);});
$('#navigation').addEventListener('click',event=>{if(event.target.closest('a')){$('#navigation').classList.remove('open');$('.menu-button').setAttribute('aria-expanded','false');$('.menu-button').setAttribute('aria-label','Open menu');}});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){$('#navigation').classList.remove('open');$('.menu-button').setAttribute('aria-expanded','false');$('.menu-button').setAttribute('aria-label','Open menu');}});

// Smart Header: hide on scroll down, show on scroll up (matching Call of Duty Mobile reference)
let lastScrollY = window.scrollY;
let isHeaderHidden = false;
const header = $('.header');
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const isNavOpen = $('#navigation') && $('#navigation').classList.contains('open');
  if (currentScrollY > 70) {
    header.classList.add('header-scrolled');
    if (!isNavOpen) {
      if (currentScrollY > lastScrollY + 6) {
        if (!isHeaderHidden) {
          header.classList.add('header-hidden');
          isHeaderHidden = true;
        }
      } else if (currentScrollY < lastScrollY - 6) {
        if (isHeaderHidden) {
          header.classList.remove('header-hidden');
          isHeaderHidden = false;
        }
      }
    }
  } else {
    header.classList.remove('header-scrolled');
    header.classList.remove('header-hidden');
    isHeaderHidden = false;
  }
  lastScrollY = Math.max(0, currentScrollY);
}, { passive: true });

// Community Suggestions & Feedback Handlers
const topicChips = document.querySelectorAll('.topic-chip');
const suggestionMailBtn = document.getElementById('open-suggestion-btn');
const toggleFormBtn = document.getElementById('toggle-inline-feedback');
const suggestionForm = document.getElementById('suggestion-form');
const suggestionText = document.getElementById('suggestion-text');
const formMsg = document.getElementById('form-msg');
let activeTopic = 'New Animals';

function updateMailtoLink(customText = '') {
  if (!suggestionMailBtn) return;
  const supportEmail = (window.GAME && window.GAME.supportEmail) || 'hushgamesmarketing@gmail.com';
  const subject = encodeURIComponent(`Wild Animal Survival Sim 3D - Suggestion [${activeTopic}]`);
  const body = encodeURIComponent(
    `Hi Gameyard Team,\n\nI have a suggestion for Wild Animal Survival Sim 3D:\n\n- Topic: ${activeTopic}\n- Idea:\n${customText || '(Write your suggestion here)'}\n\nThanks!`
  );
  suggestionMailBtn.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
}

if (topicChips.length) {
  topicChips.forEach(chip => {
    chip.addEventListener('click', () => {
      topicChips.forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      activeTopic = chip.getAttribute('data-topic') || 'Game Idea';
      updateMailtoLink(suggestionText ? suggestionText.value : '');
      if (suggestionText) {
        suggestionText.placeholder = `Describe your idea for ${activeTopic}...`;
        suggestionText.focus();
      }
    });
  });
}

if (toggleFormBtn && suggestionForm) {
  toggleFormBtn.addEventListener('click', () => {
    const isHidden = suggestionForm.style.display === 'none';
    suggestionForm.style.display = isHidden ? 'flex' : 'none';
    toggleFormBtn.textContent = isHidden ? 'Hide form ↑' : 'Or write suggestion here ↓';
    if (isHidden && suggestionText) suggestionText.focus();
  });
}

if (suggestionForm) {
  suggestionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const idea = (suggestionText && suggestionText.value.trim()) || '';
    if (!idea) return;
    updateMailtoLink(idea);
    if (formMsg) {
      formMsg.textContent = 'Opening email draft with your idea... Thank you!';
      formMsg.style.color = '#9CE780';
    }
    window.location.href = suggestionMailBtn.href;
  });
}

// Suggestion Modal Handlers
const suggModal = document.getElementById('suggestion-modal');
const closeSuggModalBtn = document.getElementById('close-suggestion-modal');
const modalChips = document.querySelectorAll('#modal-chips button');
const modalCatInput = document.getElementById('modal-cat-input');
const modalForm = document.getElementById('modal-suggestion-form');
const modalStatus = document.getElementById('modal-form-status');

function openSuggestionModal(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (suggModal && typeof suggModal.showModal === 'function') {
    suggModal.showModal();
    const titleInput = document.getElementById('modal-title-input');
    if (titleInput) titleInput.focus();
  } else {
    window.location.href = 'suggestions.html';
  }
}

document.querySelectorAll('.hero-suggestion-btn, #header-sugg-btn, a[href="suggestions.html"]').forEach(el => {
  el.addEventListener('click', openSuggestionModal);
});

if (closeSuggModalBtn && suggModal) {
  closeSuggModalBtn.addEventListener('click', () => suggModal.close());
  suggModal.addEventListener('click', (e) => {
    if (e.target === suggModal) suggModal.close();
  });
}

if (modalChips.length && modalCatInput) {
  modalChips.forEach(btn => {
    btn.addEventListener('click', () => {
      modalChips.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      modalCatInput.value = btn.getAttribute('data-cat') || 'General';
    });
  });
}

if (modalForm) {
  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const cat = modalCatInput ? modalCatInput.value : 'General';
    const title = (document.getElementById('modal-title-input') || {}).value || '';
    const details = (document.getElementById('modal-details-input') || {}).value || '';
    const name = (document.getElementById('modal-name-input') || {}).value || 'Player';
    const email = (document.getElementById('modal-email-input') || {}).value || '';

    if (modalStatus) {
      modalStatus.textContent = '✔ Thank you! Preparing your email draft to Gameyard...';
    }

    const subject = encodeURIComponent(`Wild Animal Survival Sim 3D - Suggestion [${cat}]: ${title}`);
    const body = encodeURIComponent(
      `Hi Gameyard Development Team,\n\nI have a suggestion for Wild Animal Survival Sim 3D:\n\n- Topic: ${cat}\n- Title: ${title}\n- Details:\n${details}\n\n- Submitted By: ${name}${email ? ' (' + email + ')' : ''}\n\nThanks!`
    );
    const mailto = `mailto:hushgamesmarketing@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      window.location.href = mailto;
      if (suggModal) suggModal.close();
    }, 700);
  });
}

if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.section-head,.mode-panel,.world-intro,.animal-list,.gallery,.news-grid,.latest-updates,.mode-card,.maps-header,.maps-stage,.characters-header,.characters-stage,.community-grid').forEach(node=>{node.classList.add('reveal');observer.observe(node);});}
