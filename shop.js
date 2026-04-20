/* ═══════════════════════════════════════════
   TECHNO FANS & LIGHTS — Shop Page Logic
   ───────────────────────────────────────────

   HOW TO ADD A REAL PRODUCT IMAGE:
   1. Put your photo at the path in `image:` below
      e.g.  assets/products/atomberg-renesa-elite-snow-white.jpg
   2. Done — the card shows it automatically.

   HOW TO ADD A NEW PRODUCT:
   1. Copy any object in PRODUCTS below
   2. Set a unique `id`, fill in the rest
   3. The product instantly appears in the grid.

   CATEGORIES: smart-fans | designer-fans | remote-fans |
               wall-fans  | exhaust-fans  | water-heaters |
               decorative-lights | chandeliers | service-products

═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // ① PRODUCT CATALOGUE — Verified Live Stock
  // ─────────────────────────────────────────────
  const PRODUCTS = [

    // ── PREMIUM SMART FANS ────────────────────────────────────
    {
      id: 'atm-renesa-elite-smart-ritz-blue',
      title: 'Renesa Elite Smart — Ritz Blue',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 5349,
      badges: ['Smart', 'New Arrival'],
      specs: 'BLDC · IoT · Alexa & Google · Moonbeam LED · 5 Star',
      image: 'assets/products/atomberg-renesa-elite-smart-ritz-blue.jpg',
      isNew: true, isSmart: true, isLimitedStock: true
    },
    {
      id: 'atm-renesa-elite-smart-golden-oakwood',
      title: 'Renesa Elite Smart — Golden Oakwood',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 5349,
      badges: ['Smart'],
      specs: 'BLDC · IoT · Alexa & Google · Moonbeam LED · 5 Star',
      image: 'assets/products/atomberg-renesa-elite-smart-golden-oakwood.jpg',
      isNew: false, isSmart: true, isLimitedStock: false
    },
    {
      id: 'atm-renesa-elite-smart-pearl-white',
      title: 'Renesa Elite Smart — Pearl White',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 4699,
      badges: ['Smart', 'Best Seller'],
      specs: 'BLDC · IoT · Alexa & Google · Moonbeam LED · 5 Star',
      image: 'assets/products/atomberg-renesa-elite-smart-pearl-white.jpg',
      isNew: false, isSmart: true
    },
    {
      id: 'atm-renesa-halo-smart-white-gold',
      title: 'Renesa Halo Smart — Gloss White Gold',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 4099,
      badges: ['Smart', 'Premium'],
      specs: 'BLDC · Halo LED Ring · IoT · 5 Star BEE Rated',
      image: 'assets/products/atomberg-renesa-halo-smart-white-gold.jpg',
      isNew: false, isSmart: true
    },
    {
      id: 'atm-renesa-halo-smart-midnight-black',
      title: 'Renesa Halo Smart — Midnight Black',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 4099,
      badges: ['Smart'],
      specs: 'BLDC · Halo LED Ring · IoT · 5 Star BEE Rated',
      image: 'assets/products/atomberg-renesa-halo-smart-midnight-black.jpg',
      isNew: false, isSmart: true
    },

    // ── DESIGNER CEILING FANS ─────────────────────────────────
    {
      id: 'atm-studio-plus-earth-brown',
      title: 'Studio+ — Earth Brown',
      brand: 'Atomberg',
      category: 'designer-fans',
      price: 5249,
      badges: ['Premium', 'Best Seller'],
      specs: 'BLDC · Anti-Dust Coating · Designer Metallic Finish · Remote',
      image: 'assets/products/atomberg-studio-plus-earth-brown.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-aris-gladius-pearl-white',
      title: 'Aris Gladius — Pearl White',
      brand: 'Atomberg',
      category: 'designer-fans',
      price: 6799,
      badges: ['Premium', 'New Arrival'],
      specs: 'BLDC · High Air Delivery 245 CMM · Integrated ABS · IoT',
      image: 'assets/products/atomberg-aris-gladius-pearl-white.jpg',
      isNew: true, isSmart: true, isLimitedStock: true
    },
    {
      id: 'atm-aris-gladius-sand-grey',
      title: 'Aris Gladius — Sand Grey',
      brand: 'Atomberg',
      category: 'designer-fans',
      price: 6799,
      badges: ['Premium', 'New Arrival'],
      specs: 'BLDC · High Air Delivery 245 CMM · Integrated ABS · IoT',
      image: 'assets/products/atomberg-aris-gladius-sand-grey.jpg',
      isNew: true, isSmart: true, isLimitedStock: true
    },

    // ── REMOTE CEILING FANS ──────────────────────────────────
    {
      id: 'atm-renesa-elite-snow-white',
      title: 'Renesa Elite — Snow White',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 4449,
      badges: ['Best Seller'],
      specs: 'BLDC · Smart IR Remote · Moonbeam LED · BEE 5 Star · 35W',
      image: 'assets/products/atomberg-renesa-elite-snow-white.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-renesa-elite-blaze-brown',
      title: 'Renesa Elite — Blaze Brown',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 4449,
      badges: [],
      specs: 'BLDC · Smart IR Remote · Moonbeam LED · BEE 5 Star · 35W',
      image: 'assets/products/atomberg-renesa-elite-blaze-brown.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-renesa-elite-midnight-black',
      title: 'Renesa Elite — Midnight Black',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 4449,
      badges: [],
      specs: 'BLDC · Smart IR Remote · Moonbeam LED · BEE 5 Star · 35W',
      image: 'assets/products/atomberg-renesa-elite-midnight-black.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-ameza-gloss-white',
      title: 'Ameza-I — Gloss White',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 3599,
      badges: ['Best Seller'],
      specs: 'BLDC · Remote Control · LED Speed Indicator · 5 Star · 35W',
      image: 'assets/products/atomberg-ameza-gloss-white.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-ameza-gloss-brown',
      title: 'Ameza-I — Gloss Brown',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 3599,
      badges: [],
      specs: 'BLDC · Remote Control · LED Speed Indicator · 5 Star · 35W',
      image: 'assets/products/atomberg-ameza-gloss-brown.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-ameza-midnight-black',
      title: 'Ameza-I — Midnight Black',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 3599,
      badges: [],
      specs: 'BLDC · Remote Control · LED Speed Indicator · 5 Star · 35W',
      image: 'assets/products/atomberg-ameza-midnight-black.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-renesa-prime-gloss-white',
      title: 'Renesa Prime RM — Gloss White',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 3599,
      badges: [],
      specs: 'BLDC · Remote Control · 5 Star · Voltage 165V–285V · 35W',
      image: 'assets/products/atomberg-renesa-prime-gloss-white.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-renesa-prime-gloss-brown',
      title: 'Renesa Prime Remote — Gloss Brown',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 3599,
      badges: [],
      specs: 'BLDC · Remote Control · 5 Star · Voltage 165V–285V · 35W',
      image: 'assets/products/atomberg-renesa-prime-gloss-brown.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-renesa-prime-misty-teal',
      title: 'Renesa Prime Remote — Misty Teal',
      brand: 'Atomberg',
      category: 'remote-fans',
      price: 3599,
      badges: ['New Arrival'],
      specs: 'BLDC · Remote Control · 5 Star · Voltage 165V–285V · 35W',
      image: 'assets/products/atomberg-renesa-prime-misty-teal.jpg',
      isNew: true, isSmart: false, isLimitedStock: true
    },

    // ── WALL FANS ──────────────────────────────────────────────
    {
      id: 'atm-silenceaire-wf-midnight-black',
      title: 'SilenceAire WF — Midnight Black',
      brand: 'Atomberg',
      category: 'wall-fans',
      price: 4499,
      badges: ['Premium'],
      specs: 'BLDC · Ultra Silent · 90° Oscillation · Remote Control · 60W',
      image: 'assets/products/atomberg-silenceaire-wf-midnight-black.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-renesa-wallfan-snow-white',
      title: 'Renesa Wallfan — Snow White',
      brand: 'Atomberg',
      category: 'wall-fans',
      price: 4299,
      badges: [],
      specs: 'BLDC · High Speed · Remote Control · 5 Star · 35W',
      image: 'assets/products/atomberg-renesa-wallfan-snow-white.jpg',
      isNew: false, isSmart: false
    },

    // ── EXHAUST FANS ────────────────────────────────────────────
    {
      id: 'atm-exhaust-studio-plus-150',
      title: 'Exhaust Studio+ 150mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1999,
      badges: ['Best Seller'],
      specs: '150mm · BLDC · Most Powerful · Double Ball Bearing · Ultra Silent',
      image: 'assets/products/atomberg-exhaust-studio-plus-150.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-exhaust-studio-150',
      title: 'Exhaust Studio 150mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1699,
      badges: [],
      specs: '150mm · BLDC · Designer Look · Silent Operation · Anti-Insect Flaps',
      image: 'assets/products/atomberg-exhaust-studio-150.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-exhaust-efficio-150',
      title: 'Exhaust Efficio 150mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1249,
      badges: [],
      specs: '150mm · BLDC · Energy Efficient · 5W–13W · Silent · 2-Year Warranty',
      image: 'assets/products/atomberg-exhaust-efficio-150.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-exhaust-efficio-200',
      title: 'Exhaust Efficio 200mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1549,
      badges: [],
      specs: '200mm · BLDC · Energy Efficient · 16W · High Air Delivery 800 CMH',
      image: 'assets/products/atomberg-exhaust-efficio-200.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'atm-exhaust-efficio-orb-150',
      title: 'Exhaust Efficio Orb 150mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1249,
      badges: [],
      specs: '150mm · BLDC · Compact Round Design · Silent · Anti-Insect Flaps',
      image: 'assets/products/atomberg-exhaust-efficio-orb-150.jpg',
      isNew: false, isSmart: false
    },

    // ── WATER HEATERS — AO Smith ─────────────────────────────
    {
      id: 'aos-hse-sds-15',
      title: 'AO Smith HSE-SDS 15 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: 8999,
      badges: ['Top Pick'],
      specs: '15L · Horizontal Slim · BEE 5 Star · Glass Lined Tank',
      image: 'assets/products/ao-smith-hse-sds-15.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'aos-hse-vas-25',
      title: 'AO Smith HSE-VAS 25 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: 12999,
      badges: [],
      specs: '25L · Vertical · Glass Lined Tank · Capillary Thermostat',
      image: 'assets/products/ao-smith-hse-vas-25.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'aos-hse-sas-10',
      title: 'AO Smith HSE-SAS+ 10 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: 7499,
      badges: [],
      specs: '10L · Fast Heat · 5 Star Rated · 2kW Element',
      image: 'assets/products/ao-smith-hse-sas-10.jpg',
      isNew: false, isSmart: false
    },

    // ── DESIGNER LIGHTS ──────────────────────────────────────
    {
      id: 'chand-crystal-8arm',
      title: 'Crystal 8-Arm Chandelier',
      brand: 'Techno Exclusive',
      category: 'chandeliers',
      price: null,
      badges: ['Showroom Pick'],
      specs: 'Crystal Drops · 8 Arms · Dimmable LED · Custom Install',
      image: 'assets/products/chand-crystal-8arm.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'chand-linear-modern',
      title: 'Linear Modern Chandelier',
      brand: 'Techno Exclusive',
      category: 'chandeliers',
      price: null,
      badges: [],
      specs: 'Modern Design · Matte Black · 120cm · LED Strip',
      image: 'assets/products/chand-linear-modern.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'deco-gold-pendant',
      title: 'Gold Cluster Pendant Light',
      brand: 'Techno Exclusive',
      category: 'decorative-lights',
      price: null,
      badges: ['Showroom Pick'],
      specs: 'LED · Warm White 3000K · Dimmable · Custom Height',
      image: 'assets/products/deco-gold-pendant.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'deco-track-system',
      title: 'LED Track Lighting System',
      brand: 'Techno Exclusive',
      category: 'decorative-lights',
      price: null,
      badges: [],
      specs: 'Adjustable · 3000K · 30W · 3-Spot · Matte Black Rail',
      image: 'assets/products/deco-track-system.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'deco-wall-sconce',
      title: 'Luxury Wall Sconce Pair',
      brand: 'Techno Exclusive',
      category: 'decorative-lights',
      price: null,
      badges: [],
      specs: 'Set of 2 · Ambient · Gold Finish · Warm White',
      image: 'assets/products/deco-wall-sconce.jpg',
      isNew: false, isSmart: false
    },

    // ── SERVICE ──────────────────────────────────────────────
    {
      id: 'svc-fan-annual',
      title: 'Fan Annual Maintenance Plan',
      brand: 'Techno Service',
      category: 'service-products',
      price: null,
      badges: ['Service'],
      specs: 'All Brands · Annual AMC · Doorstep · Priority Support',
      image: 'assets/products/service-fan.jpg',
      isNew: false, isSmart: false
    },
    {
      id: 'svc-water-heater-aos',
      title: 'AO Smith Water Heater Service',
      brand: 'AO Smith',
      category: 'service-products',
      price: null,
      badges: ['Authorized'],
      specs: 'Authorized Service · Genuine Parts · 48hr Response',
      image: 'assets/products/service-water.jpg',
      isNew: false, isSmart: false
    }
  ];

  // ─────────────────────────────────────────────
  // ② CATEGORY CONFIG (extended for new tags)
  // ─────────────────────────────────────────────
  const CATEGORIES = {
    'smart-fans':        { label: 'Smart Fans',         icon: 'fan'    },
    'designer-fans':     { label: 'Designer Fans',      icon: 'fan'    },
    'remote-fans':       { label: 'Remote Fans',        icon: 'fan'    },
    'wall-fans':         { label: 'Wall Fans',           icon: 'fan'    },
    'exhaust-fans':      { label: 'Exhaust Fans',        icon: 'wind'   },
    'water-heaters':     { label: 'Water Heaters',       icon: 'water'  },
    'chandeliers':       { label: 'Chandeliers',         icon: 'light'  },
    'decorative-lights': { label: 'Decorative Lights',   icon: 'light'  },
    'service-products':  { label: 'Service Products',    icon: 'wrench' }
  };

  // ─────────────────────────────────────────────
  // ③ VIRTUAL FILTER TAGS (Best Sellers / New Arrivals)
  // ─────────────────────────────────────────────
  const VIRTUAL_TAGS = {
    'best-sellers': { label: 'Best Sellers', filter: p => p.badges && p.badges.includes('Best Seller') },
    'new-arrivals': { label: 'New Arrivals', filter: p => p.isNew === true }
  };

  // ─────────────────────────────────────────────
  // ④ ICON SVGs
  // ─────────────────────────────────────────────
  const ICONS = {
    fan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5c0-3.5 2-6.5 4.5-6.5S21 5.5 21 8c0 2-1.5 3.5-3 4.5L12 9.5z"/><path d="M9.5 12C6 12 3 10 3 7.5S5.5 3 8 3c2 0 3.5 1.5 4.5 3L9.5 12z"/><path d="M14.5 12c3.5 0 6.5 2 6.5 4.5S18.5 21 16 21c-2 0-3.5-1.5-4.5-3L14.5 12z"/><path d="M12 14.5c0 3.5-2 6.5-4.5 6.5S3 18.5 3 16c0-2 1.5-3.5 3-4.5L12 14.5z"/></svg>`,
    light: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21h6M12 3a6 6 0 0 1 4 10.47V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3.53A6 6 0 0 1 12 3z"/></svg>`,
    water: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
    wind:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
    wrench:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  };

  // ─────────────────────────────────────────────
  // ⑤ STATE
  // ─────────────────────────────────────────────
  let state = {
    category  : 'all',
    virtualTag: '',
    brands    : new Set(),
    search    : '',
    sort      : 'default'
  };

  // ─────────────────────────────────────────────
  // ⑥ DOM REFS
  // ─────────────────────────────────────────────
  const grid         = document.getElementById('product-grid');
  const noResults    = document.getElementById('no-results');
  const resultsCnt   = document.getElementById('results-count');
  const searchInput  = document.getElementById('shop-search');
  const sortSelect   = document.getElementById('sort-select');
  const catList      = document.getElementById('category-filter');
  const brandList    = document.getElementById('brand-filter');
  const sidebar      = document.getElementById('shop-sidebar');
  const backdrop     = document.getElementById('sidebar-backdrop');
  const filterToggle = document.getElementById('filter-toggle');
  const clearBtn     = document.getElementById('clear-filters');

  // ─────────────────────────────────────────────
  // ⑦ WHATSAPP
  // ─────────────────────────────────────────────
  const WA = '918594000196';
  const WA_MSG = "Hi, I'm interested in this product from Techno Fans & Lights — your Atomberg dealer in Malappuram.";

  function waLink(title) {
    return `https://wa.me/${WA}?text=${encodeURIComponent(WA_MSG + '\n\nProduct: ' + title)}`;
  }

  // ─────────────────────────────────────────────
  // ⑧ HELPERS
  // ─────────────────────────────────────────────
  function priceHtml(price) {
    if (!price) return `<div class="product-price call-price">Call for Best Price</div>`;
    return `<div class="product-price"><span class="price-from">From</span> ₹${price.toLocaleString('en-IN')}</div>`;
  }

  function badgesHtml(p) {
    const badges = p.badges || [];
    let html = '';
    // Limited Stock always occupies the main badge slot
    if (p.isLimitedStock) {
      html += `<div class="product-badge badge-limited">Limited Stock</div>`;
    } else if (badges.length) {
      const primary = badges[0];
      let cls = 'product-badge';
      if (primary === 'Service')     cls += ' badge-service';
      if (primary === 'Authorized')  cls += ' badge-auth';
      if (primary === 'Smart')       cls += ' badge-smart';
      if (primary === 'New Arrival') cls += ' badge-new';
      html += `<div class="${cls}">${primary}</div>`;
    }
    // Second badge (stacked below first)
    const secondSource = p.isLimitedStock ? badges[0] : badges[1];
    if (secondSource) {
      let cls2 = 'product-badge product-badge-2';
      if (secondSource === 'Smart')       cls2 += ' badge-smart';
      if (secondSource === 'New Arrival') cls2 += ' badge-new';
      if (secondSource === 'Best Seller') cls2 += ' badge-bs';
      if (secondSource === 'Premium')     cls2 += '';
      html += `<div class="${cls2}">${secondSource}</div>`;
    }
    return html;
  }

  // ─────────────────────────────────────────────
  // ⑨ CARD TEMPLATE
  // ─────────────────────────────────────────────
  function cardHtml(p) {
    const cfg  = CATEGORIES[p.category] || { label: p.category, icon: 'light' };
    const icon = ICONS[cfg.icon] || ICONS.light;
    const compareId = 'cmp-' + p.id;
    return `
<article class="product-card" data-id="${p.id}" tabindex="0" role="listitem">
  <div class="product-img-wrap" data-cat="${p.category}">
    ${badgesHtml(p)}
    <div class="product-img-placeholder">
      <div class="pip-icon">${icon}</div>
      <span class="pip-label">${cfg.label}</span>
      <span class="pip-hint">Photo coming soon</span>
    </div>
    <img src="${p.image}" alt="${p.title}" class="product-real-img" loading="lazy" decoding="async">
  </div>
  <div class="product-info">
    <div class="product-brand">${p.brand}</div>
    <h3 class="product-title">${p.title}</h3>
    <p class="product-specs">${p.specs}</p>
    ${priceHtml(p.price)}
    <div class="product-actions">
      <a href="${waLink(p.title)}"
         target="_blank" rel="noopener noreferrer"
         class="btn-enquire"
         aria-label="WhatsApp enquiry for ${p.title}">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        Enquire
      </a>
      <button class="btn-details" data-id="${p.id}" aria-label="View details for ${p.title}">
        Details
      </button>
    </div>
    <div class="compare-checkbox-wrap">
      <input type="checkbox" id="${compareId}" class="compare-check" data-id="${p.id}" aria-label="Compare ${p.title}">
      <label for="${compareId}">Compare</label>
    </div>
  </div>
</article>`;
  }

  // ─────────────────────────────────────────────
  // ⑩ FILTER + SORT
  // ─────────────────────────────────────────────
  function filtered() {
    let list = [...PRODUCTS];

    // Virtual tags (Best Sellers / New Arrivals) override category
    if (state.virtualTag && VIRTUAL_TAGS[state.virtualTag]) {
      list = list.filter(VIRTUAL_TAGS[state.virtualTag].filter);
    } else if (state.category !== 'all') {
      list = list.filter(p => p.category === state.category);
    }

    if (state.brands.size > 0)
      list = list.filter(p => state.brands.has(p.brand));

    if (state.search) {
      const q = state.search.toLowerCase();
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        (CATEGORIES[p.category]?.label || '').toLowerCase().includes(q)
      );
    }

    switch (state.sort) {
      case 'price-asc':
        list.sort((a, b) => {
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return a.price - b.price;
        }); break;
      case 'price-desc':
        list.sort((a, b) => {
          if (a.price === null && b.price === null) return 0;
          if (a.price === null) return 1;
          if (b.price === null) return -1;
          return b.price - a.price;
        }); break;
      case 'name-asc':
        list.sort((a, b) => a.title.localeCompare(b.title)); break;
      case 'newest':
        list.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
    }
    return list;
  }

  // ─────────────────────────────────────────────
  // ⑪ RENDER GRID
  // ─────────────────────────────────────────────
  function render() {
    const list = filtered();
    if (!list.length) {
      grid.innerHTML = '';
      noResults.hidden = false;
      resultsCnt.textContent = '0 products';
      return;
    }
    noResults.hidden = true;
    grid.innerHTML = list.map(cardHtml).join('');
    resultsCnt.textContent = `${list.length} ${list.length === 1 ? 'product' : 'products'}`;

    // Real image fade-in
    grid.querySelectorAll('.product-real-img').forEach(img => {
      img.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .45s ease;';
      img.addEventListener('load',  () => { img.style.opacity = '1'; });
      img.addEventListener('error', () => { img.style.display = 'none'; });
    });

    // Details button → open modal
    grid.querySelectorAll('.btn-details').forEach(btn => {
      btn.addEventListener('click', () => openModal(btn.dataset.id));
    });

    // Card keyboard
    grid.querySelectorAll('.product-card').forEach(card => {
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter') openModal(card.dataset.id);
      });
    });

    // Restore compare checkbox states & bind new ones
    grid.querySelectorAll('.compare-check').forEach(cb => {
      // Restore checked state if this product is already in compare set
      if (compareSet.has(cb.dataset.id)) cb.checked = true;
      cb.addEventListener('change', () => {
        if (cb.checked) {
          if (compareSet.size >= 3) {
            cb.checked = false;
            // Flash the bar to signal limit
            compareBar.classList.add('visible');
            compareBar.style.borderTopColor = 'rgba(220,80,80,0.5)';
            setTimeout(() => { compareBar.style.borderTopColor = ''; }, 800);
            return;
          }
          compareSet.add(cb.dataset.id);
        } else {
          compareSet.delete(cb.dataset.id);
        }
        renderCompareBar();
      });
    });
  }

  // ─────────────────────────────────────────────
  // ⑫ BUILD CATEGORY FILTER (with virtual tags)
  // ─────────────────────────────────────────────
  function buildCategories() {
    const counts = {};
    PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

    const bsCount  = PRODUCTS.filter(VIRTUAL_TAGS['best-sellers'].filter).length;
    const newCount = PRODUCTS.filter(VIRTUAL_TAGS['new-arrivals'].filter).length;

    let html = `<li><button class="filter-btn active" data-cat="all" id="cat-all">All Products <span class="filter-count">${PRODUCTS.length}</span></button></li>`;

    // Virtual tags at top
    html += `<li><button class="filter-btn filter-btn-virtual" data-virtual="best-sellers" id="cat-best-sellers">⭐ Best Sellers <span class="filter-count">${bsCount}</span></button></li>`;
    html += `<li><button class="filter-btn filter-btn-virtual" data-virtual="new-arrivals" id="cat-new-arrivals">✦ New Arrivals <span class="filter-count">${newCount}</span></button></li>`;

    // Separator
    html += `<li class="filter-separator"></li>`;

    Object.entries(CATEGORIES).forEach(([key, cfg]) => {
      if (!counts[key]) return;
      html += `<li><button class="filter-btn" data-cat="${key}" id="cat-${key}">${cfg.label} <span class="filter-count">${counts[key]}</span></button></li>`;
    });
    catList.innerHTML = html;

    catList.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      catList.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.virtual) {
        state.virtualTag = btn.dataset.virtual;
        state.category   = 'all';
      } else {
        state.virtualTag = '';
        state.category   = btn.dataset.cat;
      }
      render();
    });
  }

  // ─────────────────────────────────────────────
  // ⑬ BUILD BRAND FILTER
  // ─────────────────────────────────────────────
  function buildBrands() {
    const order  = ['Atomberg', 'AO Smith', 'Kühl', 'Techno Exclusive', 'Techno Service'];
    const counts = {};
    PRODUCTS.forEach(p => { counts[p.brand] = (counts[p.brand] || 0) + 1; });

    let html = '';
    order.forEach(brand => {
      if (!counts[brand]) return;
      const safeId = 'brand-' + brand.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      html += `<li><label class="brand-check" for="${safeId}">
        <input type="checkbox" id="${safeId}" value="${brand}">
        <span class="brand-check-label">${brand}</span>
        <span class="brand-check-count">${counts[brand]}</span>
      </label></li>`;
    });
    brandList.innerHTML = html;

    brandList.addEventListener('change', e => {
      const cb = e.target;
      if (cb.type !== 'checkbox') return;
      cb.checked ? state.brands.add(cb.value) : state.brands.delete(cb.value);
      render();
    });
  }

  // ─────────────────────────────────────────────
  // ⑭ SEARCH & SORT
  // ─────────────────────────────────────────────
  searchInput.addEventListener('input', () => {
    state.search = searchInput.value.trim();
    render();
  });

  sortSelect.addEventListener('change', () => {
    state.sort = sortSelect.value;
    render();
  });

  // ─────────────────────────────────────────────
  // ⑮ CLEAR FILTERS
  // ─────────────────────────────────────────────
  clearBtn.addEventListener('click', () => {
    state = { category: 'all', virtualTag: '', brands: new Set(), search: '', sort: 'default' };
    searchInput.value = '';
    sortSelect.value  = 'default';
    catList.querySelectorAll('.filter-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    brandList.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
    render();
  });

  // ─────────────────────────────────────────────
  // ⑯ MOBILE SIDEBAR DRAWER
  // ─────────────────────────────────────────────
  function openSidebar()  {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    filterToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    filterToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  filterToggle.addEventListener('click', openSidebar);
  backdrop.addEventListener('click', closeSidebar);

  // ─────────────────────────────────────────────
  // ⑰ PRODUCT MODAL
  // ─────────────────────────────────────────────
  const overlay = document.getElementById('product-modal-overlay');
  const mClose  = document.getElementById('modal-close');

  function openModal(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;

    const cfg  = CATEGORIES[p.category] || { label: p.category, icon: 'light' };
    const icon = ICONS[cfg.icon] || ICONS.light;

    document.getElementById('modal-brand').textContent = p.brand;
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-specs').textContent = p.specs;
    document.getElementById('modal-price').textContent = p.price
      ? `₹${p.price.toLocaleString('en-IN')}`
      : 'Call for Best Price';
    document.getElementById('modal-enquire').href = waLink(p.title);

    const imgWrap = document.getElementById('modal-img-wrap');
    imgWrap.dataset.cat = p.category;
    const pipIcon = imgWrap.querySelector('.modal-pip-icon');
    if (pipIcon) pipIcon.innerHTML = icon;

    let mImg = imgWrap.querySelector('.modal-real-img');
    if (!mImg) {
      mImg = document.createElement('img');
      mImg.className = 'modal-real-img';
      mImg.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .4s ease;';
      imgWrap.appendChild(mImg);
    }
    mImg.style.opacity = '0';
    mImg.style.display = '';
    mImg.src = p.image;
    mImg.alt = p.title;
    mImg.onload  = () => { mImg.style.opacity = '1'; };
    mImg.onerror = () => { mImg.style.display = 'none'; };

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    mClose.focus();
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  mClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

  // ─────────────────────────────────────────────
  // ⑱ INIT
  // ─────────────────────────────────────────────
  buildCategories();
  buildBrands();
  render();

  const urlParams = new URLSearchParams(window.location.search);

  // Deep-link via ?cat=smart-fans
  const urlCat = urlParams.get('cat');
  if (urlCat && CATEGORIES[urlCat]) {
    state.category   = urlCat;
    state.virtualTag = '';
    catList.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const target = catList.querySelector(`[data-cat="${urlCat}"]`);
    if (target) target.classList.add('active');
    render();
  }

  // Deep-link via ?virtual=best-sellers or ?virtual=new-arrivals
  const urlVirtual = urlParams.get('virtual');
  if (urlVirtual && VIRTUAL_TAGS[urlVirtual]) {
    state.virtualTag = urlVirtual;
    state.category   = 'all';
    catList.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const target = catList.querySelector(`[data-virtual="${urlVirtual}"]`);
    if (target) target.classList.add('active');
    render();
  }

  // Deep-link via ?brand=Atomberg
  const urlBrand = urlParams.get('brand');
  if (urlBrand) {
    const checkboxes = brandList.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      if (cb.value.toLowerCase() === urlBrand.toLowerCase()) {
        cb.checked = true;
        state.brands.add(cb.value);
      }
    });
    if (state.brands.size > 0) render();
  }

  // ─────────────────────────────────────────────
  // ⑲ COMPARE SYSTEM (max 3 products)
  // ─────────────────────────────────────────────
  const compareSet = new Set();
  const compareBar = document.getElementById('compare-bar');
  const compareItemsEl = document.getElementById('compare-items');
  const compareBtnNow  = document.getElementById('btn-compare-now');
  const compareBtnClr  = document.getElementById('btn-compare-clear');
  const compareModalOverlay = document.getElementById('compare-modal-overlay');
  const compareModalClose   = document.getElementById('compare-modal-close');

  function renderCompareBar() {
    const ids = [...compareSet];
    compareItemsEl.innerHTML = '';

    ids.forEach(id => {
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      const chip = document.createElement('div');
      chip.className = 'compare-item-chip';
      chip.innerHTML = `<span>${p.title}</span><button class="compare-remove-chip" data-id="${id}" aria-label="Remove ${p.title} from compare">&times;</button>`;
      chip.querySelector('.compare-remove-chip').addEventListener('click', () => {
        compareSet.delete(id);
        // Uncheck the card's checkbox if visible
        const cb = grid.querySelector(`.compare-check[data-id="${id}"]`);
        if (cb) cb.checked = false;
        renderCompareBar();
      });
      compareItemsEl.appendChild(chip);
    });

    // Empty slots
    for (let i = ids.length; i < 3; i++) {
      const slot = document.createElement('div');
      slot.className = 'compare-empty-slot';
      slot.textContent = 'Select product';
      compareItemsEl.appendChild(slot);
    }

    compareBar.classList.toggle('visible', ids.length > 0);
  }

  function openCompareModal() {
    const ids = [...compareSet];
    if (ids.length < 2) {
      compareBar.style.borderTopColor = 'rgba(220,80,80,0.5)';
      setTimeout(() => { compareBar.style.borderTopColor = ''; }, 800);
      return;
    }
    const products = ids.map(id => PRODUCTS.find(x => x.id === id)).filter(Boolean);

    const ROWS = [
      { label: 'Brand',    val: p => p.brand },
      { label: 'Category', val: p => (CATEGORIES[p.category] || {}).label || p.category },
      { label: 'Price',    val: p => p.price ? `₹${p.price.toLocaleString('en-IN')}` : 'Call for Price' },
      { label: 'Specs',    val: p => p.specs },
      { label: 'Smart',    val: p => p.isSmart ? '<strong>Yes</strong>' : 'No' },
    ];

    let headerCols = '<th>Spec</th>';
    products.forEach(p => { headerCols += `<th>${p.title}</th>`; });

    let rows = '';
    ROWS.forEach(row => {
      let cells = `<td>${row.label}</td>`;
      products.forEach(p => { cells += `<td>${row.val(p)}</td>`; });
      rows += `<tr>${cells}</tr>`;
    });

    // WhatsApp row
    let waRow = '<td>Enquire</td>';
    products.forEach(p => {
      waRow += `<td><a href="${waLink(p.title)}" target="_blank" rel="noopener noreferrer" style="color:var(--gold);font-size:.78rem;text-decoration:none;">WhatsApp →</a></td>`;
    });
    rows += `<tr>${waRow}</tr>`;

    document.getElementById('compare-table-head').innerHTML = `<tr>${headerCols}</tr>`;
    document.getElementById('compare-table-body').innerHTML = rows;

    compareModalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCompareModal() {
    compareModalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (compareBtnNow) compareBtnNow.addEventListener('click', openCompareModal);
  if (compareBtnClr) compareBtnClr.addEventListener('click', () => {
    compareSet.clear();
    grid.querySelectorAll('.compare-check').forEach(cb => { cb.checked = false; });
    renderCompareBar();
  });
  if (compareModalClose)  compareModalClose.addEventListener('click', closeCompareModal);
  if (compareModalOverlay) {
    compareModalOverlay.addEventListener('click', e => { if (e.target === compareModalOverlay) closeCompareModal(); });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && compareModalOverlay && compareModalOverlay.classList.contains('open')) closeCompareModal();
  });

})();

