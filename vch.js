/* =========================================================
   VINOD CLOTH STORE — script.js  (single, merged file)
   ---------------------------------------------------------
    1. Config & images          9. Mobile drawer + accordion
    2. Data                    10. Product rail + wishlist
    3. Helpers                 11. Fabric finder
    4. Material showcase       12. Social gallery
    5. Shop by occasion        13. WhatsApp links
    6. Render (cards, grids)   14. Scroll reveal
    7. Mega menu               15. Init
    8. Header (search, sticky, announcements)

   Everything you will want to edit lives in sections 1, 2, 4 and 5.
   ========================================================= */

/* ------------------------------------------------------------------
   1. CONFIG — edit these two things and the whole site updates
   ------------------------------------------------------------------ */
const CONFIG = {
  // Replace with the real number in international format, digits only.
  whatsappNumber: '91XXXXXXXXXX',
  whatsappMessage: 'Hello, I would like to enquire about fabrics from VINOD CLOTH STORE.'
};

/* IMAGES — optional real photography.
   Every visual block ships with a woven CSS texture so nothing is ever broken.
   Put a URL (or a local path like "assets/silk.jpg") against a key below and
   that photo is layered on top of the texture automatically. Leave it as an
   empty string to keep the texture. Keys match the `key` values in DATA. */
const IMAGES = {
  cotton: 'images/cottonn.jpg', linen: 'images/linen.jpg', silk: 'images/silk.jpg', velvet: 'images/velvet.jpg', suiting: 'images/suiting.webp', shirting: 'images/shirting.png',
  embroidery: 'images/embroidery.jpg', printed: 'images/printed.jpg', chanderi: 'images/chanderi.jpg', georgette: 'images/georgette.webp', chiffon: 'images/cheffon.jpg',
  muslin: 'images/muslin.webp', organza: 'images/organza.jpg', jacquard: 'images/jacquard.webp', rayon: 'images/rayon.webp', satin: 'images/satin.webp', woollen: 'images/woollen.jpg'
};

/* Home Furnishing images — same idea, its own key set. */
const IMAGES_HF = {
  curtains: 'images/curtn.png', bedsheets: 'images/bdsht.png', cushions: 'images/cshncvr.png', tablecloth: 'images/tblcvr.png', sofa: 'images/sfcvr.png', rugs: 'images/rrr.png', blankets: 'images/blnkt.png'
};

/* ------------------------------------------------------------------
   2. DATA
   ------------------------------------------------------------------ */
const FABRICS = [
  { key: 'cotton', name: 'Cotton', tex: 'tex-cotton', desc: 'Breathable everyday cotton in plain, textured and printed weaves.' },
  { key: 'linen', name: 'Linen', tex: 'tex-linen', desc: 'Dry, crisp linen that softens with every wash and every wear.' },
  { key: 'silk', name: 'Silk', tex: 'tex-silk', desc: 'Raw, tussar and blended silks with a deep, quiet shine.' },
  { key: 'velvet', name: 'Velvet', tex: 'tex-velvet', desc: 'Dense pile velvet for sherwanis, jackets and winter occasion wear.' },
  { key: 'chanderi', name: 'Chanderi', tex: 'tex-chanderi', desc: 'Light, semi-sheer chanderi with a fine gold-toned lustre.' },
  { key: 'georgette', name: 'Georgette', tex: 'tex-georgette', desc: 'Fluid georgette that drapes well for suits and dupattas.' },
  { key: 'chiffon', name: 'Chiffon', tex: 'tex-organza', desc: 'Feather-light chiffon for dupattas and layered dresses.' },
  { key: 'muslin', name: 'Muslin', tex: 'tex-cotton', desc: 'Soft open-weave muslin, easy on the skin in Punjab summers.' },
  { key: 'organza', name: 'Organza', tex: 'tex-organza', desc: 'Crisp sheer organza that holds shape in dupattas and sleeves.' },
  { key: 'jacquard', name: 'Jacquard', tex: 'tex-jacquard', desc: 'Woven motifs with a raised surface — no print, all weave.' },
  { key: 'rayon', name: 'Rayon', tex: 'tex-georgette', desc: 'Smooth rayon with good fall at an everyday price.' },
  { key: 'satin', name: 'Satin', tex: 'tex-silk', desc: 'High-shine satin for linings, blouses and party wear.' },
  { key: 'woollen', name: 'Woollen', tex: 'tex-wool', desc: 'Tweeds and woollen suitings for the winter months.' },
  { key: 'embroidery', name: 'Embroidery', tex: 'tex-embroidery', desc: 'Thread, sequin and zari work on net, silk and cotton bases.' },
  { key: 'printed', name: 'Printed fabrics', tex: 'tex-print', desc: 'Block-style, floral and geometric prints across bases.' },
  { key: 'suiting', name: 'Suiting', tex: 'tex-suiting', desc: 'Structured suiting in solids, checks and fine pinstripes.' },
  { key: 'shirting', name: 'Shirting', tex: 'tex-shirting', desc: 'Shirting cotton and blends in stripes, checks and solids.' }
];

const HOME_FURNISHING = [
  { key: 'curtains', name: 'Curtains', tex: 'tex-jacquard', desc: 'Heavy weaves that hang well and block light.' },
  { key: 'bedsheets', name: 'Bed Sheets', tex: 'tex-cotton', desc: 'Soft, washable cotton in solids and prints.' },
  { key: 'cushions', name: 'Cushion Covers', tex: 'tex-print', desc: 'Printed and embroidered covers for every room.' },
  { key: 'tablecloth', name: 'Table Cloth', tex: 'tex-linen', desc: 'Easy-care linen and cotton blends for the table.' },
  { key: 'sofa', name: 'Sofa Fabric', tex: 'tex-suiting', desc: 'Durable upholstery weaves built to last.' },
  { key: 'rugs', name: 'Rugs & Runners', tex: 'tex-wool', desc: 'Textured woollen and jacquard floor pieces.' },
  { key: 'blankets', name: 'Blankets', tex: 'tex-suiting', desc: 'Durable upholstery weaves built to last.' },

];

const PRODUCTS = [

  {
    key: 'p-cotton',
    name: 'Latest Floral Designs 🌸',
    tex: 'tex-cotton',
    image: 'images/flrll.png',
    desc: 'Fresh floral patterns just arrived.',
    price: 'Enquire for price'
  },

  {
    key: 'p-linen',
    name: 'Latest Geometric Designs ◇',
    tex: 'tex-linen',
    image: 'images/gmtricc.png',
    desc: 'New contemporary patterns in store.',
    price: 'Enquire for price'
  },

  {
    key: 'p-silk',
    name: 'New Embroidery ✨',
    tex: 'tex-silk',
    image: 'images/embrodry.png',
    desc: 'Fresh embroidered fabrics just arrived.',
    price: 'Enquire for price'
  },

  {
    key: 'p-embroidery',
    name: 'New Traditional Prints 🪷',
    tex: 'tex-embroidery',
    image: 'images/trdinl.png',
    desc: 'Latest ethnic prints and patterns.',
    price: 'Enquire for price'
  },

  {
    key: 'p-velvet',
    name: 'New Festive Fabrics 🎉',
    tex: 'tex-velvet',
    image: 'images/festive.png',
    desc: 'Fresh designs for festive occasions.',
    price: 'Enquire for price'
  },

  {
    key: 'p-suiting',
    name: 'Designer Fabric 💎',
    tex: 'tex-suiting',
    image: 'images/designer.png',
    desc: 'New premium designs in store.',
    price: 'Enquire for price'
  },

  {
    key: 'p-printed',
    name: 'New Printed Fabrics 🧵',
    tex: 'tex-print',
    image: 'images/prnted.png',
    desc: 'Latest prints in beautiful colors.',
    price: 'Enquire for price'
  },

  {
    key: 'p-wedding',
    name: 'Trending Fabric Designs 🔥',
    tex: 'tex-jacquard',
    image: 'images/trndng.png',
    desc: 'New styles recently added in store.',
    price: 'Enquire for price'
  }

];

const COLLECTIONS = [
  { key: 'everyday', name: 'Everyday fabrics', note: 'Cotton, rayon, muslin', tex: 'tex-cotton', image: 'images/everydy.png', mod: 'coll--wide' },
  { key: 'wedding', name: 'Wedding collection', note: 'Sherwani, lehenga, bridal', tex: 'tex-embroidery', image: 'images/wdng.png', mod: 'coll--tall' },
  { key: 'suiting', name: 'Premium suiting', note: 'Solids, checks, pinstripes', tex: 'tex-suiting', image: 'images/sutng.png', mod: '' },
  { key: 'punjabi', name: 'Punjabi suits', note: 'Suit pieces with dupattas', tex: 'tex-print', image: 'images/pnjstt.png', mod: '' },
  { key: 'men', name: "Men's collection", note: 'Kurta-pajama, shirting, turban', tex: 'tex-shirting', image: 'images/mlle.png', mod: '' },
  { key: 'women', name: "Women's collection", note: 'Suits, sarees, dress material', tex: 'tex-georgette', image: 'images/wmnn.png', mod: '' },
  { key: 'home', name: 'Home furnishing', note: 'Curtains, bed sheets, covers', tex: 'tex-jacquard', image: 'images/hmfr.png', mod: 'coll--wide' },
  { key: 'rental', name: 'Rental collection', note: 'Sherwani and lehenga on rent', tex: 'tex-velvet', image: 'images/rntl.png', mod: '' }
];

/* fabric finder: what you are making -> recommended materials */
const FINDER = {
  'Kurta': { note: 'For a kurta, look for fabrics that breathe and fall straight.', picks: [['cotton', 'Cool and easy to stitch'], ['linen', 'Crisp, smart in summer'], ['muslin', 'Softest against the skin'], ['silk', 'For festive kurtas']] },
  'Punjabi suit': { note: 'Suit pieces need good drape and a dupatta that matches.', picks: [['cotton', 'Everyday comfort'], ['georgette', 'Fluid drape'], ['chanderi', 'Light with a subtle shine'], ['printed', 'Ready patterns']] },
  'Shirt': { note: 'Shirting should hold a collar and press cleanly.', picks: [['shirting', 'Made for this'], ['cotton', 'Breathable solids'], ['linen', 'Relaxed formal look']] },
  'Trouser': { note: 'Trousers need weight and structure so they hang well.', picks: [['suiting', 'Structured fall'], ['woollen', 'Winter weight'], ['cotton', 'Casual chinos']] },
  'Sherwani': { note: 'Sherwani fabrics carry weight, surface work and depth of colour.', picks: [['velvet', 'Rich winter choice'], ['jacquard', 'Woven motifs'], ['silk', 'Classic lustre'], ['embroidery', 'Hand-worked surfaces']] },
  'Lehenga': { note: 'Lehengas need volume below and a lighter dupatta above.', picks: [['embroidery', 'Heavy skirt work'], ['silk', 'Body and shine'], ['organza', 'Sheer dupatta'], ['velvet', 'Bridal weight']] },
  'Dupatta': { note: 'Dupattas work best in light, sheer or fluid fabrics.', picks: [['chiffon', 'Feather light'], ['organza', 'Holds its shape'], ['chanderi', 'Traditional finish'], ['georgette', 'Soft fall']] },
  'Dress': { note: 'Dresses can take drape or structure depending on the cut.', picks: [['rayon', 'Soft and fluid'], ['satin', 'High shine'], ['printed', 'Pattern-ready'], ['cotton', 'Daily wear']] },
  'Curtains': { note: 'Curtains need weight to hang straight and block light.', picks: [['jacquard', 'Woven texture'], ['velvet', 'Heavy and lightproof'], ['cotton', 'Light and washable']] },
  'Bed sheets': { note: 'Bedding should be soft, washable and colourfast.', picks: [['cotton', 'The standard choice'], ['printed', 'Patterned sets'], ['satin', 'Smooth finish']] },
  'Home furnishing': { note: 'For covers and upholstery, choose durable weaves.', picks: [['jacquard', 'Durable and decorative'], ['velvet', 'Soft upholstery'], ['suiting', 'Firm cover fabric']] }
};

const ANNOUNCEMENTS = [
  'Premium fabrics · Wedding collection · Visit our showroom',
  'Sherwani and lehenga available on rent',
  'Suiting, shirting and turban fabric in stock'
];

/* ------------------------------------------------------------------
   3. HELPERS
   ------------------------------------------------------------------ */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const fabric = key => FABRICS.find(f => f.key === key);

/* builds a texture block, with a photo on top if one is configured */
function media(texClass, key, extraClass = '') {
  const url = key && IMAGES[key];
  const img = url ? `<img src="${url}" alt="" loading="lazy">` : '';
  return `<span class="media ${texClass} ${extraClass}">${img}</span>`;
}

function waLink(message) {
  const text = encodeURIComponent(message || CONFIG.whatsappMessage);
  return `https://wa.me/${CONFIG.whatsappNumber.replace(/\D/g, '')}?text=${text}`;
}

/* =========================================================
   4. MATERIAL SHOWCASE
   Everything you'll edit lives in MATERIALS below.
   Add a new material by pushing one object — no HTML to touch.
   ========================================================= */

(function () {

  /* ------------------------------------------------------------------
     MATERIALS — the single source of truth.
     - image:  put a real photo path here, e.g. 'images/materials/cotton.jpg'.
               Leave it '' to fall back to the woven CSS texture (tex-*
               classes already defined in style.css) so nothing ever breaks.
     - tex:    which fallback texture class to use when image is empty.
     - number is NOT stored here — it's just the item's position, so
       reordering or inserting a material never requires renumbering.
     ------------------------------------------------------------------ */
  const MATERIALS = [
    { key: 'cotton',     name: 'Cotton',     tex: 'tex-cotton',     image: 'images/cottonn.jpg', desc: 'Soft, breathable and naturally comfortable, cotton is a timeless choice for everyday creations.', link: '#categories' },
    { key: 'linen',      name: 'Linen',      tex: 'tex-linen',      image: 'images/linen.jpg', desc: 'Naturally breathable, lightweight and timeless. Linen brings effortless elegance to every creation.', link: '#categories' },
    { key: 'silk',       name: 'Silk',       tex: 'tex-silk',       image: 'images/silk.jpg', desc: 'Smooth, refined and naturally luxurious, silk brings an elegant finish to every creation.', link: '#categories' },
    { key: 'velvet',     name: 'Velvet',     tex: 'tex-velvet',     image: 'images/velvet.jpg', desc: 'Dense, plush and richly toned, velvet adds instant depth to sherwanis and occasion wear.', link: '#categories' },
    { key: 'chanderi',   name: 'Chanderi',   tex: 'tex-chanderi',   image: 'images/chanderi.jpg', desc: 'Light and semi-sheer with a fine gold-toned lustre, woven for festive ease.', link: '#categories' },
    { key: 'georgette',  name: 'Georgette',  tex: 'tex-georgette',  image: 'images/georgette.webp', desc: 'Fluid and lightweight, georgette drapes beautifully for suits and dupattas.', link: '#categories' },
    { key: 'chiffon',    name: 'Chiffon',    tex: 'tex-organza',    image: 'images/cheffon.jpg', desc: 'Feather-light and sheer, chiffon layers effortlessly for dupattas and dresses.', link: '#categories' },
    { key: 'muslin',     name: 'Muslin',     tex: 'tex-cotton',     image: 'images/muslin.webp', desc: 'Open-weave and airy, muslin stays soft against the skin through warm seasons.', link: '#categories' },
    { key: 'organza',    name: 'Organza',    tex: 'tex-organza',    image: 'images/organza.jpg', desc: 'Crisp and sheer, organza holds its shape for structured sleeves and dupattas.', link: '#categories' },
    { key: 'jacquard',   name: 'Jacquard',   tex: 'tex-jacquard',   image: 'images/jacquard.webp', desc: 'Motifs woven directly into the fabric, giving a raised surface with no print.', link: '#categories' },
    { key: 'rayon',      name: 'Rayon',      tex: 'tex-georgette',  image: 'images/rayon.webp', desc: 'Smooth and fluid, rayon offers a graceful fall at an everyday price.', link: '#categories' },
    { key: 'satin',      name: 'Satin',      tex: 'tex-silk',       image: 'images/satin.webp', desc: 'High-shine and fluid, satin lends a polished finish to blouses and linings.', link: '#categories' },
    { key: 'woollen',    name: 'Woollen',    tex: 'tex-wool',       image: 'images/woollen.jpg', desc: 'Warm tweeds and suitings, woven for the cooler months.', link: '#categories' },
    { key: 'embroidery', name: 'Embroidery', tex: 'tex-embroidery', image: 'images/embroidery.jpg', desc: 'Thread, sequin and zari work hand-finished on silk, net and cotton bases.', link: '#categories' },
    { key: 'printed',    name: 'Printed',    tex: 'tex-print',      image: 'images/printed.jpg', desc: 'Block-style, floral and geometric prints carried across everyday bases.', link: '#categories' },
    { key: 'suiting',    name: 'Suiting',    tex: 'tex-suiting',    image: 'images/suiting.webp', desc: 'Structured and tailored, suiting holds its shape in solids and fine checks.', link: '#categories' },
    { key: 'shirting',   name: 'Shirting',   tex: 'tex-shirting',   image: 'images/shirting.png', desc: 'Crisp shirting cotton in stripes, checks and solids for a clean press.', link: '#categories' }

    /* Add a new material any time — nothing else in this file needs to change:
    { key: 'denim', name: 'Denim', tex: 'tex-suiting', image: 'images/materials/denim.jpg', desc: 'Sturdy twill weave with a casual, everyday character.', link: '#categories' },
    */
  ];

  const root = document.getElementById('materialShowcase');
  if (!root) return;

  const layers  = Array.from(root.querySelectorAll('.material-showcase__layer'));
  const cardsEl = root.querySelector('.material-showcase__cards');
  const prevBtn = root.querySelector('.material-showcase__arrow--prev');
  const nextBtn = root.querySelector('.material-showcase__arrow--next');
  const content = root.querySelector('.material-showcase__content');
  const countIdx = root.querySelector('[data-mh="index"]');
  const countTot = root.querySelector('[data-mh="total"]');
  const nameEl  = root.querySelector('[data-mh="name"]');
  const descEl  = root.querySelector('[data-mh="desc"]');
  const ctaEl   = root.querySelector('[data-mh="link"]');
  const ctaText = root.querySelector('[data-mh="cta-text"]');

  let activeLayer = 0;
  let activeIndex = 0;
  let swapTimer;

  const pad = n => String(n).padStart(2, '0');

  /* paint a background layer with the material's photo or its CSS texture */
  function paintLayer(el, material) {
    el.style.backgroundImage = '';
    Array.from(el.classList)
      .filter(c => c.startsWith('tex-'))
      .forEach(c => el.classList.remove(c));

    if (material.image) {
      el.style.backgroundImage = `url("${material.image}")`;
    } else {
      el.classList.add(material.tex);
    }
  }

  /* crossfade the two stacked background layers — no flash, subtle zoom */
  function setBackground(material) {
    const nextIndex = 1 - activeLayer;
    const nextEl = layers[nextIndex];
    const prevEl = layers[activeLayer];

    paintLayer(nextEl, material);
    void nextEl.offsetWidth; // force reflow so the transition actually runs

    requestAnimationFrame(() => {
      nextEl.classList.add('is-active');
      prevEl.classList.remove('is-active');
    });

    activeLayer = nextIndex;
  }

  /* swap the title / description / count / CTA with a short fade */
  function setContent(material, index) {
    clearTimeout(swapTimer);
    content.classList.add('is-swapping');
    swapTimer = setTimeout(() => {
      countIdx.textContent = pad(index + 1);
      countTot.textContent = pad(MATERIALS.length);
      nameEl.textContent = material.name;
      descEl.textContent = material.desc;
      ctaText.textContent = `Explore ${material.name}`;
      ctaEl.href = material.link || '#';
      content.classList.remove('is-swapping');
    }, 180);
  }

  function setActiveCard(index) {
    Array.from(cardsEl.children).forEach((card, i) => {
      const active = i === index;
      card.classList.toggle('is-active', active);
      card.setAttribute('aria-selected', String(active));
      card.tabIndex = active ? 0 : -1;
    });
  }

  function activate(index) {
    const material = MATERIALS[index];
    if (!material) return;
    activeIndex = index;
    setBackground(material);
    setContent(material, index);
    setActiveCard(index);
  }

  function renderCards() {
    cardsEl.innerHTML = MATERIALS.map((m, i) => `
      <button type="button"
        class="material-showcase__card${i === 0 ? ' is-active' : ''}"
        role="option" aria-selected="${i === 0}" tabindex="${i === 0 ? 0 : -1}"
        data-index="${i}" aria-label="${m.name} fabric, ${i + 1} of ${MATERIALS.length}">
        <span class="material-showcase__card-img${m.image ? '' : ' ' + m.tex}"
          ${m.image ? `style="background-image:url('${m.image}')"` : ''}></span>
        <span class="material-showcase__card-name">${m.name}</span>
        <span class="material-showcase__card-num">${pad(i + 1)}</span>
      </button>`).join('');
  }

  /* hover previews (mouse), focus previews (keyboard), click/tap activates (touch) */
  function wireCards() {
    cardsEl.addEventListener('mouseover', e => {
      const card = e.target.closest('[data-index]');
      if (card) activate(Number(card.dataset.index));
    });
    cardsEl.addEventListener('focusin', e => {
      const card = e.target.closest('[data-index]');
      if (card) activate(Number(card.dataset.index));
    });
    cardsEl.addEventListener('click', e => {
      const card = e.target.closest('[data-index]');
      if (card) activate(Number(card.dataset.index));
    });
    cardsEl.addEventListener('keydown', e => {
      const card = e.target.closest('[data-index]');
      if (!card) return;
      const i = Number(card.dataset.index);
      let next = null;
      if (e.key === 'ArrowRight') next = Math.min(MATERIALS.length - 1, i + 1);
      if (e.key === 'ArrowLeft')  next = Math.max(0, i - 1);
      if (e.key === 'Home')       next = 0;
      if (e.key === 'End')        next = MATERIALS.length - 1;
      if (next !== null) {
        e.preventDefault();
        const nextCard = cardsEl.children[next];
        activate(next);
        nextCard.focus();
        nextCard.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    });
  }

  function wireArrows() {
    const scrollByCards = dir => {
      const sample = cardsEl.querySelector('.material-showcase__card');
      const step = sample ? (sample.getBoundingClientRect().width + 14) * 3 : 300;
      cardsEl.scrollBy({ left: dir * step, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByCards(-1));
    nextBtn.addEventListener('click', () => scrollByCards(1));
  }

  renderCards();
  wireCards();
  wireArrows();
  activate(0);

})();

/* =========================================================
   5. SHOP BY OCCASION
   All editable content lives in OCCASIONS below.
   Replace each card's "image" path with your real photo.
   ========================================================= */

(function () {

  /* ------------------------------------------------------------------
     OCCASIONS — one entry per left-nav item, in display order.
     Replace image paths with your own photos, e.g. "images/occasion/wedding-1.jpg"
     ------------------------------------------------------------------ */
  const OCCASIONS = [
    {
      key: 'wedding',
      label: 'Wedding',
      title: 'Wedding Collection',
      desc: 'Exquisite fabrics for your most special moments.',
      cards: [
        {
          title: 'Sherwani Fabrics',
          subtitle: 'ROYAL TEXTURES & RICH FABRICS',
          image: 'images/shrvni.png'
        },
        {
          title: 'Lehenga Fabrics',
          subtitle: 'LUXURY FABRICS FOR BRIDAL LOOKS',
          image: 'images/lhnga4.png'
        },
        {
          title: 'Bridal Suit Fabrics',
          subtitle: 'ELEGANT FABRICS FOR TIMELESS ELEGANCE',
          image: 'images/brdlst.png'
        },
        {
          title: 'Wedding Dupattas',
          subtitle: 'EMBROIDERED & GRACEFUL DRAPES',
          image: 'images/dpta.png'
        }
      ]
    },
    {
      key: 'festive',
      label: 'Festive',
      title: 'Festive Collection',
      desc: 'Rich fabrics for every festive celebration.',
      cards: [
        {
          title: 'Festive Suit Fabrics',
          subtitle: 'BRIGHT & ELEGANT FABRICS',
          image: 'images/fsst.png'
        },
        {
          title: 'Embroidered Fabrics',
          subtitle: 'RICH DETAILS & FINE CRAFT',
          image: 'images/embrd.png'
        },
        {
          title: 'Silk & Jacquard',
          subtitle: 'LUXURIOUS FESTIVE TEXTURES',
          image: 'images/skjd.png'
        },
        {
          title: 'Phulkari Fabrics',
          subtitle: 'TIMELESS PUNJABI HERITAGE',
          image: 'images/phlkri.png'
        }
      ]
    },
    {
      key: 'daily',
      label: 'Daily wear',
      title: 'Daily Wear Collection',
      desc: 'Comfortable fabrics made for everyday living.',
      cards: [
        {
          title: 'Cotton Fabrics',
          subtitle: 'BREATHABLE & EVERYDAY COMFORT',
          image: 'images/dctn.png'
        },
        {
          title: 'Linen Fabrics',
          subtitle: 'LIGHT, COOL & EFFORTLESS',
          image: 'images/lnen.png'
        },
        {
          title: 'Printed Fabrics',
          subtitle: 'EASY EVERYDAY STYLES',
          image: 'images/prntd.png'
        },
        {
          title: 'Cotton Blends',
          subtitle: 'SOFT, DURABLE & VERSATILE',
          image: 'images/ctnblnd.png'
        }
      ]
    },
    {
      key: 'party',
      label: 'Party wear',
      title: 'Party Wear Collection',
      desc: 'Statement fabrics for unforgettable evenings.',
      cards: [
        {
          title: 'Sequins & Shimmer',
          subtitle: 'STATEMENT PARTY GLAMOUR',
          image: 'images/sssr.png'
        },
        {
          title: 'Velvet Fabrics',
          subtitle: 'RICH & LUXURIOUS TEXTURES',
          image: 'images/vlvt.png'
        },
        {
          title: 'Satin & Silk',
          subtitle: 'SMOOTH, ELEGANT & GLAMOROUS',
          image: 'images/snsk.png'
        },
        {
          title: 'Organza & Net',
          subtitle: 'LIGHT, SHEER & SOPHISTICATED',
          image: 'images/orgnza.png'
        }
      ]
    },
    {
      key: 'traditional',
      label: 'Traditional',
      title: 'Traditional Collection',
      desc: 'Timeless fabrics inspired by Indian heritage.',
      cards: [
        {
          title: 'Phulkari Fabrics',
          subtitle: 'ICONIC PUNJABI EMBROIDERY',
          image: 'images/phlkri.png'
        },
        {
          title: 'Chanderi & Handloom',
          subtitle: 'TIMELESS INDIAN CRAFTSMANSHIP',
          image: 'images/chm.png'
        },
        {
          title: 'Khadi Fabrics',
          subtitle: 'AUTHENTIC TRADITIONAL TEXTURES',
          image: 'images/khdi.png'
        },
        {
          title: 'Traditional Prints',
          subtitle: 'CLASSIC MOTIFS & HERITAGE PATTERNS',
          image: 'images/trdnlprnt.png'
        }
      ]
    },
    {
      key: 'formal',
      label: 'Formal',
      title: 'Formal Collection',
      desc: 'Refined fabrics for polished professional looks.',
      cards: [
        {
          title: 'Suiting Fabrics',
          subtitle: 'SHARP & PROFESSIONAL LOOKS',
          image: 'images/suting.png'
        },
        {
          title: 'Shirting Fabrics',
          subtitle: 'REFINED EVERYDAY FORMALS',
          image: 'images/srtng.png'
        },
        {
          title: 'Tropical Wool',
          subtitle: 'PREMIUM FORMAL TAILORING',
          image: 'images/trwl.png'
        },
        {
          title: 'Linen Blends',
          subtitle: 'LIGHTWEIGHT MODERN FORMALS',
          image: 'images/lnbll.png'
        }
      ]
    },
    {
      key: 'home',
      label: 'Home',
      title: 'Home Collection',
      desc: 'Beautiful fabrics to make every space feel like home.',
      cards: [
        {
          title: 'Curtain Fabrics',
          subtitle: 'ELEGANT WINDOW STYLING',
          image: 'images/crttn.png'
        },
        {
          title: 'Bed & Bedding',
          subtitle: 'SOFT EVERYDAY COMFORT',
          image: 'images/bdbg.png'
        },
        {
          title: 'Cushion & Sofa Covers',
          subtitle: 'STYLISH HOME ACCENTS',
          image: 'images/cscs.png'
        },
        {
          title: 'Table Linen',
          subtitle: 'REFINED DINING ESSENTIALS',
          image: 'images/tbl.png'
        }
      ]
    }

    /* Add another occasion the same way — nav, counter and cards all update automatically:
    {
      key: 'denim', label: 'Denim wear', title: 'Denim Collection',
      desc: 'Casual, sturdy fabrics for everyday denim styles.',
      cards: [
        { title: 'Raw Denim', subtitle: 'STURDY TWILL', image: 'images/occasion/denim-1.jpg' },
        ...
      ]
    }
    */
  ];

  const root = document.getElementById('occasionShop');
  if (!root) return;

  const navEl = root.querySelector('#occasionNav');
  const cardsEl = root.querySelector('#occasionCards');
  const titleEl = root.querySelector('#occasionTitle');
  const descEl = root.querySelector('#occasionDesc');
  const countEl = root.querySelector('#occasionCount');
  const prevBtn = root.querySelector('#occasionPrev');
  const nextBtn = root.querySelector('#occasionNext');
  const exploreEl = root.querySelector('#occasionExplore');

  let activeIndex = 0;
  let swapTimer;

  const pad = n => String(n).padStart(2, '0');

  function renderNav() {
    navEl.innerHTML = OCCASIONS.map((o, i) => `
      <button type="button" class="occasion-shop__item${i === 0 ? ' is-active' : ''}"
        role="listitem" data-index="${i}" aria-current="${i === 0}">
        <span class="occasion-shop__item-num">${pad(i + 1)}</span>
        <span class="occasion-shop__item-label">${o.label}</span>
        <i class="fa-solid fa-arrow-right occasion-shop__item-arrow" aria-hidden="true"></i>
      </button>`).join('');
  }

  function renderCards(occasion) {
    cardsEl.innerHTML = occasion.cards.map(c => `
    <article class="occasion-shop__card">
      <div class="occasion-shop__card-media">
        <img src="${c.image}" alt="${c.title}" loading="lazy">
      </div>
      <div class="occasion-shop__card-body">
        <p class="occasion-shop__card-name">${c.title}</p>
        <p class="occasion-shop__card-sub">${c.subtitle}</p>
      </div>
    </article>`).join('');
  }

  function setActiveNav(index) {
    Array.from(navEl.children).forEach((item, i) => {
      const active = i === index;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-current', String(active));
    });
  }

  function activate(index, { animate = true } = {}) {
    const total = OCCASIONS.length;
    activeIndex = ((index % total) + total) % total; // wrap both directions
    const occasion = OCCASIONS[activeIndex];

    setActiveNav(activeIndex);
    countEl.textContent = `${pad(activeIndex + 1)} / ${pad(total)}`;
    exploreEl.href = `#${occasion.key}`;

    const swap = () => {
      titleEl.textContent = occasion.title;
      descEl.textContent = occasion.desc;
      renderCards(occasion);
    };

    if (!animate) { swap(); return; }

    clearTimeout(swapTimer);
    cardsEl.classList.add('is-switching');
    titleEl.style.opacity = '0';
    descEl.style.opacity = '0';

    swapTimer = setTimeout(() => {
      swap();
      requestAnimationFrame(() => {
        cardsEl.classList.remove('is-switching');
        titleEl.style.opacity = '1';
        descEl.style.opacity = '1';
      });
    }, 220);
  }

  function wireNav() {
    navEl.addEventListener('click', e => {
      const item = e.target.closest('[data-index]');
      if (item) activate(Number(item.dataset.index));
    });
  }

  function wireArrows() {
    prevBtn.addEventListener('click', () => activate(activeIndex - 1));
    nextBtn.addEventListener('click', () => activate(activeIndex + 1));
  }

  renderNav();
  wireNav();
  wireArrows();
  activate(0, { animate: false });

})();

/* ------------------------------------------------------------------
   6. RENDER — grids, rails, cards
   ------------------------------------------------------------------ */
function renderCategories() {
  const grid = $('#catGrid');
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map(key => {
    const f = fabric(key);
    return `<a class="cat reveal" href="#arrivals" aria-label="Explore ${f.name} fabrics">
      ${media(f.tex, f.key, 'cat__tex')}
      <span class="cat__body">
        <span class="cat__name">${f.name}</span>
        <span class="cat__go">Explore <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i></span>
      </span>
    </a>`;
  }).join('');
}

function renderProducts() {
  const rail = $('#productRail');
  if (!rail) return;
  rail.innerHTML = PRODUCTS.map((p, i) => `
    <article class="card">
      <div class="card__media">
        <span class="media ${p.tex} card__tex">
          ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : ''}
        </span>
        <button class="card__wish" type="button" aria-pressed="false" aria-label="Save ${p.name} to wishlist" data-wish="${i}">
          <i class="fa-regular fa-heart" aria-hidden="true"></i>
        </button>
      </div>
      <div class="card__body">
        <h3 class="card__name">${p.name}</h3>
        <p class="card__desc">${p.desc}</p>
        <p class="card__price">${p.price}</p>
       <a class="card__cta" href="${waLink('Hello, I would like to enquire about ' + p.name + ' from VINOD CLOTH STORE.')}" target="_blank" rel="noopener">
  <span class="card__cta-text">View collection</span>
  <span class="card__cta-arrow" aria-hidden="true">&rarr;</span>
</a>
      </div>
    </article>`).join('');
}

function renderCollections() {
  const grid = $('#collGrid');
  if (!grid) return;
  grid.innerHTML = COLLECTIONS.map(c => `
    <a class="coll ${c.mod} reveal" href="#arrivals">
      <span class="media ${c.tex} coll__tex">
        ${c.image ? `<img src="${c.image}" alt="${c.name}" loading="lazy">` : ''}
      </span>
      <span class="coll__label"><span>${c.name}</span><small>${c.note}</small></span>
    </a>`).join('');
}

function renderOccasions() {
  const grid = $('#occGrid');
  if (!grid) return;
  grid.innerHTML = OCCASIONS.map(o => `
    <article class="occ reveal">
      <div class="occ__media">${media(o.tex, null, 'occ__tex')}</div>
      <div class="occ__body">
        <h3>${o.name}</h3>
        <a class="occ__link" href="#categories">Explore</a>
      </div>
    </article>`).join('');
}

/* ------------------------------------------------------------------
   7. MEGA MENU — reusable for Fabrics, Home Furnishing, or any future dropdown
   ------------------------------------------------------------------ */
function setupMegaMenu({ data, images, colsId, mediaId, titleId, descId, mobileGridId, mobileLinkHref }) {
  const cols = $(colsId);
  if (!cols) return;

  cols.innerHTML = data.map((f, i) =>
    `<button class="mega__link${i === 0 ? ' is-active' : ''}" type="button" data-fab="${f.key}">${f.name}</button>`
  ).join('');

  const mobile = $(mobileGridId);
  if (mobile) {
    mobile.innerHTML = data.map(f => `<a href="${mobileLinkHref}">${f.name}</a>`).join('');
  }

  const setFeature = key => {
    const f = data.find(x => x.key === key);
    if (!f) return;
    const titleEl = $(titleId);
    const descEl = $(descId);
    const box = $(mediaId);
    if (titleEl) titleEl.textContent = f.name;
    if (descEl) descEl.textContent = f.desc;
    if (box) {
      box.className = `mega__media media ${f.tex}`;
      box.innerHTML = images[f.key] ? `<img src="${images[f.key]}" alt="${f.name}" loading="lazy">` : '';
    }
    $$('.mega__link', cols).forEach(b => b.classList.toggle('is-active', b.dataset.fab === key));
  };

  cols.addEventListener('mouseover', e => {
    const btn = e.target.closest('[data-fab]');
    if (btn) setFeature(btn.dataset.fab);
  });
  cols.addEventListener('focusin', e => {
    const btn = e.target.closest('[data-fab]');
    if (btn) setFeature(btn.dataset.fab);
  });
  cols.addEventListener('click', e => {
    const btn = e.target.closest('[data-fab]');
    if (!btn) return;
    setFeature(btn.dataset.fab);
  });

  setFeature(data[0].key);
}

/* Open/close behaviour — reusable for any mega dropdown trigger */
function wireMegaTrigger(parentId, triggerId, menuId) {
  const parent = $(parentId);
  const trigger = $(triggerId);
  const menu = $(menuId);
  if (!parent || !trigger || !menu) return;
  let timer;

  const open = () => {
    menu.hidden = false;
    requestAnimationFrame(() => menu.classList.add('is-open'));
    trigger.setAttribute('aria-expanded', 'true');
  };
  const close = () => {
    if (menu.hidden) return;
    menu.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
    setTimeout(() => { if (!menu.classList.contains('is-open')) menu.hidden = true; }, 280);
  };

  const enter = () => { clearTimeout(timer); open(); };
  const leave = () => { clearTimeout(timer); timer = setTimeout(close, 180); };

  parent.addEventListener('mouseenter', enter);
  parent.addEventListener('mouseleave', leave);
  menu.addEventListener('mouseenter', enter);
  menu.addEventListener('mouseleave', leave);
  trigger.addEventListener('click', () => menu.classList.contains('is-open') ? close() : open());
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
  document.addEventListener('click', e => {
    if (!parent.contains(e.target) && !menu.contains(e.target)) close();
  });
}

/* ------------------------------------------------------------------
   8. HEADER: search, sticky shadow, announcement rotator
   ------------------------------------------------------------------ */
const searchToggle = $('#searchToggle');
const searchPanel = $('#searchPanel');
if (searchToggle && searchPanel) {
  searchToggle.addEventListener('click', () => {
    const open = searchPanel.hidden;
    searchPanel.hidden = !open;
    searchToggle.setAttribute('aria-expanded', String(open));
    if (open) $('#searchInput').focus();
  });
  $('#searchForm').addEventListener('submit', e => {
    e.preventDefault();
    const q = $('#searchInput').value.trim().toLowerCase();
    const hint = $('#searchHint');
    if (!q) { hint.textContent = 'Type a fabric name, for example cotton or velvet.'; return; }
    const hits = FABRICS.filter(f => f.name.toLowerCase().includes(q) || f.desc.toLowerCase().includes(q));
    hint.textContent = hits.length
      ? `Available in store: ${hits.map(h => h.name).join(', ')}. Ask us on WhatsApp for stock.`
      : `We could not match “${$('#searchInput').value.trim()}”. Message us on WhatsApp and we will check the counter.`;
  });
}

const header = $('#header');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-stuck', window.scrollY > 10);
}, { passive: true });

const announceText = $('.announce__text');
let annIndex = 0;
function showAnnouncement(i) {
  annIndex = (i + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length;
  announceText.classList.add('is-fading');
  setTimeout(() => {
    announceText.textContent = ANNOUNCEMENTS[annIndex];
    announceText.classList.remove('is-fading');
  }, 300);
}
$$('[data-announce]').forEach(btn => {
  btn.addEventListener('click', () => {
    showAnnouncement(annIndex + (btn.dataset.announce === 'next' ? 1 : -1));
    clearInterval(annAuto);
  });
});
let annAuto = setInterval(() => showAnnouncement(annIndex + 1), 6000);

/* ------------------------------------------------------------------
   9. MOBILE DRAWER + ACCORDION
   ------------------------------------------------------------------ */
const burger = $('#burger');
const drawer = $('#mobileNav');
const scrim = $('#scrim');

function openDrawer() {
  drawer.hidden = false; scrim.hidden = false;
  requestAnimationFrame(() => { drawer.classList.add('is-open'); scrim.classList.add('is-on'); });
  burger.setAttribute('aria-expanded', 'true');
  burger.setAttribute('aria-label', 'Close menu');
  document.body.classList.add('is-locked');
}
function closeDrawer() {
  drawer.classList.remove('is-open'); scrim.classList.remove('is-on');
  burger.setAttribute('aria-expanded', 'false');
  burger.setAttribute('aria-label', 'Open menu');
  document.body.classList.remove('is-locked');
  setTimeout(() => { drawer.hidden = true; scrim.hidden = true; }, 380);
}
burger.addEventListener('click', () => {
  drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
});
$('#drawerClose').addEventListener('click', closeDrawer);
scrim.addEventListener('click', closeDrawer);
$$('#mobileNav a').forEach(a => a.addEventListener('click', closeDrawer));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && drawer.classList.contains('is-open')) closeDrawer();
});

$$('.acc__head').forEach(head => {
  const body = head.nextElementSibling;
  head.addEventListener('click', () => {
    const open = head.getAttribute('aria-expanded') === 'true';
    head.setAttribute('aria-expanded', String(!open));
    body.style.maxHeight = open ? '0px' : body.scrollHeight + 'px';
  });
});

/* ------------------------------------------------------------------
   10. PRODUCT RAIL ARROWS + WISHLIST
   ------------------------------------------------------------------ */
const rail = $('#productRail');
$$('[data-rail]').forEach(btn => {
  btn.addEventListener('click', () => {
    const step = Math.max(240, rail.clientWidth * 0.6);
    rail.scrollBy({ left: btn.dataset.rail === 'next' ? step : -step, behavior: 'smooth' });
  });
});
if (rail) {
  rail.addEventListener('click', e => {
    const btn = e.target.closest('[data-wish]');
    if (!btn) return;
    const on = btn.classList.toggle('is-on');
    btn.setAttribute('aria-pressed', String(on));
    btn.querySelector('i').className = on ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
  });
}

/* ------------------------------------------------------------------
   11. FABRIC FINDER
   ------------------------------------------------------------------ */
function renderFinder() {
  const opts = $('#finderOpts');
  const out = $('#finderOut');
  if (!opts) return;

  opts.innerHTML = Object.keys(FINDER).map(k =>
    `<button class="chip" type="button" data-make="${k}" aria-pressed="false">${k}</button>`
  ).join('');

  opts.addEventListener('click', e => {
    const btn = e.target.closest('[data-make]');
    if (!btn) return;
    $$('.chip', opts).forEach(c => {
      const on = c === btn;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', String(on));
    });

    const data = FINDER[btn.dataset.make];
    out.innerHTML = `
      <p class="finder__note">${data.note}</p>
      <div class="finder__res">
        ${data.picks.map(([key, why], i) => {
      const f = fabric(key);
      const img = IMAGES[key] ? `<img src="${IMAGES[key]}" alt="${f.name}" loading="lazy">` : '';
      return `<div class="fres" style="animation-delay:${i * 60}ms">
            <span class="fres__sw media ${f.tex}">${img}</span>
            <span><span class="fres__name">${f.name}</span><span class="fres__why">${why}</span></span>
          </div>`;
    }).join('')}
      </div>`;
  });
}

/* ------------------------------------------------------------------
   12. SOCIAL GALLERY (Instagram)
   ------------------------------------------------------------------ */
const FJ_INSTAGRAM_URL = "https://www.instagram.com/your-handle/";

// REPLACE IMAGE PATHS (image) AND CARD TITLES (title) HERE
const FJ_GALLERY = [
  { title: "New Arrivals",           image: "images/nwrvl.png" },
  { title: "Wedding Collection",     image: "images/wwdng.png" },
  { title: "Fabric Details",         image: "images/ffbric.png" },
  { title: "Our Showroom",           image: "images/shwrm.png" },
  { title: "Home Collection",        image: "images/hmcl.png" },
  { title: "Traditional Collection", image: "images/ttrdnl.png" }
];

// Inline Instagram icon (no external library needed)
const fjIconSVG = (cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>`;

document.getElementById("fj-gallery").innerHTML = FJ_GALLERY.map(item => `
    <li>
      <a class="fj-card" href="${FJ_INSTAGRAM_URL}" target="_blank" rel="noopener" aria-label="${item.title} on Instagram">
        <img class="fj-card-img" src="${item.image}" alt="${item.title}" loading="lazy">
        ${fjIconSVG("fj-card-icon")}
        <div class="fj-card-label">
          <div class="fj-card-title">${item.title}</div>
          <span class="fj-card-line"></span>
        </div>
      </a>
    </li>`).join("");

document.getElementById("fj-btn").href = FJ_INSTAGRAM_URL;
document.getElementById("fj-btn-icon").innerHTML = fjIconSVG();

/* ------------------------------------------------------------------
   13. WHATSAPP LINKS
   ------------------------------------------------------------------ */
function wireWhatsApp() {
  $$('[data-wa]').forEach(el => {
    el.href = waLink(el.dataset.waMsg);
    el.target = '_blank';
    el.rel = 'noopener';
  });
}

/* ------------------------------------------------------------------
   14. SCROLL REVEAL
   ------------------------------------------------------------------ */
function wireReveal() {
  const items = $$('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach(i => io.observe(i));
}

/* ------------------------------------------------------------------
   15. INIT
   ------------------------------------------------------------------ */

/* Fabrics dropdown (header) */
setupMegaMenu({
  data: FABRICS,
  images: IMAGES,
  colsId: '#megaCols',
  mediaId: '#megaMedia',
  titleId: '#megaTitle',
  descId: '#megaDesc',
  mobileGridId: '#mobileFabrics',
  mobileLinkHref: '#categories'
});
wireMegaTrigger('#megaParent', '#megaTrigger', '#megaMenu');

/* Home Furnishing dropdown (header) */
setupMegaMenu({
  data: HOME_FURNISHING,
  images: IMAGES_HF,
  colsId: '#hfCols',
  mediaId: '#hfMedia',
  titleId: '#hfTitle',
  descId: '#hfDesc',
  mobileGridId: '#hfMobile',
  mobileLinkHref: '#collections'
});
wireMegaTrigger('#hfParent', '#hfTrigger', '#hfMenu');

renderCategories();
renderProducts();
renderCollections();
renderOccasions();
renderFinder();
wireWhatsApp();
wireReveal();
$('#year').textContent = new Date().getFullYear();