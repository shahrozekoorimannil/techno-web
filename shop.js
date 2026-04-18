/* ═══════════════════════════════════════════
   TECHNO FANS & LIGHTS — Shop Page Logic
   ───────────────────────────────────────────

   HOW TO ADD A REAL PRODUCT IMAGE:
   1. Put your photo at the path in `image:` below
      e.g.  assets/products/atomberg-renesa-plus.jpg
   2. Done — the card will show the photo automatically.

   HOW TO ADD A NEW PRODUCT:
   1. Copy any existing object in PRODUCTS below
   2. Set a unique `id`, then fill in the rest
   3. The product appears in the grid instantly.

═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  // ① PRODUCT CATALOGUE
  //    Ordered: highest demand & margin first
  // ─────────────────────────────────────────────
  const PRODUCTS = [

    // ── CEILING FANS — highest volume ──────────
    {
      id: 'atm-renesa-plus',
      title: 'Atomberg Renesa+ 1200mm',
      brand: 'Atomberg',
      category: 'ceiling-fans',
      price: 4990,
      badge: 'Best Seller',
      specs: 'BLDC Motor · Remote Control · BEE 5 Star',
      image: 'assets/products/atomberg-renesa-plus.jpg'
    },
    {
      id: 'atm-renesa-smart',
      title: 'Atomberg Renesa Smart+ 1200mm',
      brand: 'Atomberg',
      category: 'ceiling-fans',
      price: 6490,
      badge: 'WiFi',
      specs: 'BLDC · WiFi · Alexa & Google Home',
      image: 'assets/products/atomberg-renesa-smart.jpg'
    },
    {
      id: 'atm-gorilla',
      title: 'Atomberg Gorilla 1200mm',
      brand: 'Atomberg',
      category: 'ceiling-fans',
      price: 3490,
      badge: '',
      specs: 'BLDC Motor · 5 Speed · Energy Efficient',
      image: 'assets/products/atomberg-gorilla.jpg'
    },
    {
      id: 'kuhl-alistar-bldc',
      title: 'Kühl Alistar BLDC 1200mm',
      brand: 'Kühl',
      category: 'ceiling-fans',
      price: null,
      badge: 'Premium',
      specs: 'Brushless DC Motor · Remote Included',
      image: 'assets/products/kuhl-alistar-bldc.jpg'
    },

    // ── WATER HEATERS — high margin, authorised ─
    {
      id: 'aos-hse-sds-15',
      title: 'AO Smith HSE-SDS 15 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: 8999,
      badge: 'Top Pick',
      specs: '15L · Horizontal Slim · BEE 5 Star',
      image: 'assets/products/ao-smith-hse-sds-15.jpg'
    },
    {
      id: 'aos-hse-vas-25',
      title: 'AO Smith HSE-VAS 25 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: 12999,
      badge: '',
      specs: '25L · Vertical · Glass Lined Tank',
      image: 'assets/products/ao-smith-hse-vas-25.jpg'
    },
    {
      id: 'aos-hse-sas-10',
      title: 'AO Smith HSE-SAS+ 10 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: 7499,
      badge: '',
      specs: '10L · Fast Heat · 5 Star Rated',
      image: 'assets/products/ao-smith-hse-sas-10.jpg'
    },
    {
      id: 'aos-rapid-6',
      title: 'AO Smith Rapid Heat 6 Litre',
      brand: 'AO Smith',
      category: 'water-heaters',
      price: null,
      badge: '',
      specs: '6L · Instant · 3kW Heating Element',
      image: 'assets/products/ao-smith-rapid-6.jpg'
    },

    // ── SMART FANS — high margin, fast growing ──
    {
      id: 'atm-renesa-smart-wifi',
      title: 'Atomberg Renesa Smart+ WiFi',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 6990,
      badge: 'New',
      specs: 'WiFi · App Control · Alexa · Google',
      image: 'assets/products/atomberg-renesa-smart-wifi.jpg'
    },
    {
      id: 'atm-ikano',
      title: 'Atomberg Ikano Smart Fan',
      brand: 'Atomberg',
      category: 'smart-fans',
      price: 5490,
      badge: '',
      specs: 'IoT Ready · Remote · BLDC Motor',
      image: 'assets/products/atomberg-ikano.jpg'
    },

    // ── DESIGNER FANS — very high margin ────────
    {
      id: 'atm-studio',
      title: 'Atomberg Studio Designer Fan',
      brand: 'Atomberg',
      category: 'designer-fans',
      price: 8490,
      badge: 'Premium',
      specs: 'Designer Edition · BLDC · Remote',
      image: 'assets/products/atomberg-studio.jpg'
    },
    {
      id: 'kuhl-alize',
      title: 'Kühl Alizé Designer Fan',
      brand: 'Kühl',
      category: 'designer-fans',
      price: null,
      badge: 'Exclusive',
      specs: 'Sculpted Blades · Luxury Finish',
      image: 'assets/products/kuhl-alize.jpg'
    },
    {
      id: 'kuhl-reve',
      title: 'Kühl Rêve Luxury Fan',
      brand: 'Kühl',
      category: 'designer-fans',
      price: null,
      badge: '',
      specs: 'Luxury Series · Built-in LED Light',
      image: 'assets/products/kuhl-reve.jpg'
    },

    // ── CHANDELIERS — highest margin ────────────
    {
      id: 'chand-crystal-8arm',
      title: 'Crystal 8-Arm Chandelier',
      brand: 'Techno Exclusive',
      category: 'chandeliers',
      price: null,
      badge: 'Showroom Pick',
      specs: 'Crystal Drops · 8 Arms · Dimmable LED',
      image: 'assets/products/chand-crystal-8arm.jpg'
    },
    {
      id: 'chand-linear-modern',
      title: 'Linear Modern Chandelier',
      brand: 'Techno Exclusive',
      category: 'chandeliers',
      price: null,
      badge: '',
      specs: 'Modern Design · Matte Black · 120cm',
      image: 'assets/products/chand-linear-modern.jpg'
    },
    {
      id: 'chand-brass-ring',
      title: 'Brass Ring Chandelier',
      brand: 'Techno Exclusive',
      category: 'chandeliers',
      price: null,
      badge: '',
      specs: 'Brass Finish · 3-Ring · Luxury',
      image: 'assets/products/chand-brass-ring.jpg'
    },

    // ── DECORATIVE LIGHTS — high margin ─────────
    {
      id: 'deco-gold-pendant',
      title: 'Gold Cluster Pendant Light',
      brand: 'Techno Exclusive',
      category: 'decorative-lights',
      price: null,
      badge: 'Showroom Pick',
      specs: 'LED · Warm White 3000K · Dimmable',
      image: 'assets/products/deco-gold-pendant.jpg'
    },
    {
      id: 'deco-track-system',
      title: 'LED Track Lighting System',
      brand: 'Techno Exclusive',
      category: 'decorative-lights',
      price: null,
      badge: '',
      specs: 'Adjustable · 3000K · 30W · 3-Spot',
      image: 'assets/products/deco-track-system.jpg'
    },
    {
      id: 'deco-wall-sconce',
      title: 'Luxury Wall Sconce Pair',
      brand: 'Techno Exclusive',
      category: 'decorative-lights',
      price: null,
      badge: '',
      specs: 'Set of 2 · Ambient · Gold Finish',
      image: 'assets/products/deco-wall-sconce.jpg'
    },

    // ── EXHAUST FANS ────────────────────────────
    {
      id: 'atm-exhaust-150',
      title: 'Atomberg Efficio Exhaust 150mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1290,
      badge: '',
      specs: '150mm · BLDC · Ultra Silent',
      image: 'assets/products/atomberg-exhaust-150.jpg'
    },
    {
      id: 'atm-exhaust-200',
      title: 'Atomberg Efficio Exhaust 200mm',
      brand: 'Atomberg',
      category: 'exhaust-fans',
      price: 1690,
      badge: '',
      specs: '200mm · BLDC · Built-in Timer',
      image: 'assets/products/atomberg-exhaust-200.jpg'
    },

    // ── SERVICE PRODUCTS ─────────────────────────
    {
      id: 'svc-fan-annual',
      title: 'Fan Annual Maintenance Plan',
      brand: 'Techno Service',
      category: 'service-products',
      price: null,
      badge: 'Service',
      specs: 'All Brands · Annual AMC · Doorstep',
      image: 'assets/products/service-fan.jpg'
    },
    {
      id: 'svc-water-heater-aos',
      title: 'AO Smith Water Heater Service',
      brand: 'AO Smith',
      category: 'service-products',
      price: null,
      badge: 'Authorized',
      specs: 'Authorized Service · Genuine Parts',
      image: 'assets/products/service-water.jpg'
    }
  ];

  // ─────────────────────────────────────────────
  // ② CATEGORY CONFIG
  // ─────────────────────────────────────────────
  const CATEGORIES = {
    'ceiling-fans':      { label: 'Ceiling Fans',       icon: 'fan'    },
    'water-heaters':     { label: 'Water Heaters',      icon: 'water'  },
    'smart-fans':        { label: 'Smart Fans',          icon: 'fan'    },
    'designer-fans':     { label: 'Designer Fans',       icon: 'fan'    },
    'chandeliers':       { label: 'Chandeliers',         icon: 'light'  },
    'decorative-lights': { label: 'Decorative Lights',   icon: 'light'  },
    'exhaust-fans':      { label: 'Exhaust Fans',        icon: 'wind'   },
    'service-products':  { label: 'Service Products',    icon: 'wrench' }
  };

  // ─────────────────────────────────────────────
  // ③ ICON SVGs (placeholder visuals)
  // ─────────────────────────────────────────────
  const ICONS = {
    fan: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2.5"/><path d="M12 9.5c0-3.5 2-6.5 4.5-6.5S21 5.5 21 8c0 2-1.5 3.5-3 4.5L12 9.5z"/><path d="M9.5 12C6 12 3 10 3 7.5S5.5 3 8 3c2 0 3.5 1.5 4.5 3L9.5 12z"/><path d="M14.5 12c3.5 0 6.5 2 6.5 4.5S18.5 21 16 21c-2 0-3.5-1.5-4.5-3L14.5 12z"/><path d="M12 14.5c0 3.5-2 6.5-4.5 6.5S3 18.5 3 16c0-2 1.5-3.5 3-4.5L12 14.5z"/></svg>`,
    light: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21h6M12 3a6 6 0 0 1 4 10.47V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-3.53A6 6 0 0 1 12 3z"/><line x1="12" y1="3" x2="12" y2="1"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/><line x1="21" y1="12" x2="23" y2="12"/></svg>`,
    water: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/><path d="M12 18v-6M10 16h4"/></svg>`,
    wind:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`,
    wrench:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
  };

  // ─────────────────────────────────────────────
  // ④ STATE
  // ─────────────────────────────────────────────
  let state = {
    category : 'all',
    brands   : new Set(),
    search   : '',
    sort     : 'default'
  };

  // ─────────────────────────────────────────────
  // ⑤ DOM REFS
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
  // ⑥ WHATSAPP
  // ─────────────────────────────────────────────
  const WA = '918594000196';
  const WA_MSG = "Hi, I'm interested in this product from Techno Fans & Lights.";

  function waLink(title) {
    return `https://wa.me/${WA}?text=${encodeURIComponent(WA_MSG + '\n\nProduct: ' + title)}`;
  }

  // ─────────────────────────────────────────────
  // ⑦ HELPERS
  // ─────────────────────────────────────────────
  function priceHtml(price) {
    if (!price) return `<div class="product-price call-price">Call for Best Price</div>`;
    return `<div class="product-price"><span class="price-from">From</span> ₹${price.toLocaleString('en-IN')}</div>`;
  }

  function badgeHtml(badge) {
    if (!badge) return '';
    let cls = 'product-badge';
    if (badge === 'Service')    cls += ' badge-service';
    if (badge === 'Authorized') cls += ' badge-auth';
    return `<div class="${cls}">${badge}</div>`;
  }

  // ─────────────────────────────────────────────
  // ⑧ CARD TEMPLATE
  // ─────────────────────────────────────────────
  function cardHtml(p) {
    const cfg  = CATEGORIES[p.category] || { label: p.category, icon: 'light' };
    const icon = ICONS[cfg.icon] || ICONS.light;
    return `
<article class="product-card" data-id="${p.id}" tabindex="0">
  <div class="product-img-wrap" data-cat="${p.category}">
    ${badgeHtml(p.badge)}
    <div class="product-img-placeholder">
      <div class="pip-icon">${icon}</div>
      <span class="pip-label">${cfg.label}</span>
      <span class="pip-hint">Photo coming soon</span>
    </div>
    <img src="${p.image}" alt="${p.title}" class="product-real-img" loading="lazy">
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
  </div>
</article>`;
  }

  // ─────────────────────────────────────────────
  // ⑨ FILTER + SORT
  // ─────────────────────────────────────────────
  function filtered() {
    let list = [...PRODUCTS];
    if (state.category !== 'all')
      list = list.filter(p => p.category === state.category);
    if (state.brands.size > 0)
      list = list.filter(p => state.brands.has(p.brand));
    if (state.search) {
      const q = state.search.toLowerCase();
      const cats = CATEGORIES;
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        (cats[p.category]?.label || '').toLowerCase().includes(q)
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
    }
    return list;
  }

  // ─────────────────────────────────────────────
  // ⑩ RENDER GRID
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

    // Real image fade-in + onerror hide
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
  }

  // ─────────────────────────────────────────────
  // ⑪ BUILD CATEGORY FILTER
  // ─────────────────────────────────────────────
  function buildCategories() {
    const counts = {};
    PRODUCTS.forEach(p => { counts[p.category] = (counts[p.category] || 0) + 1; });

    let html = `<li><button class="filter-btn active" data-cat="all" id="cat-all">All Products <span class="filter-count">${PRODUCTS.length}</span></button></li>`;
    Object.entries(CATEGORIES).forEach(([key, cfg]) => {
      if (!counts[key]) return;
      html += `<li><button class="filter-btn" data-cat="${key}" id="cat-${key}">${cfg.label} <span class="filter-count">${counts[key]}</span></button></li>`;
    });
    catList.innerHTML = html;

    catList.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn[data-cat]');
      if (!btn) return;
      catList.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.category = btn.dataset.cat;
      render();
    });
  }

  // ─────────────────────────────────────────────
  // ⑫ BUILD BRAND FILTER
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
  // ⑬ SEARCH & SORT
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
  // ⑭ CLEAR FILTERS
  // ─────────────────────────────────────────────
  clearBtn.addEventListener('click', () => {
    state = { category: 'all', brands: new Set(), search: '', sort: 'default' };
    searchInput.value     = '';
    sortSelect.value      = 'default';
    catList.querySelectorAll('.filter-btn').forEach((b, i) => b.classList.toggle('active', i === 0));
    brandList.querySelectorAll('input[type="checkbox"]').forEach(cb => { cb.checked = false; });
    render();
  });

  // ─────────────────────────────────────────────
  // ⑮ MOBILE SIDEBAR DRAWER
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
  // ⑯ PRODUCT MODAL
  // ─────────────────────────────────────────────
  const overlay   = document.getElementById('product-modal-overlay');
  const mClose    = document.getElementById('modal-close');

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

    // swap image
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
  // ⑰ INIT
  // ─────────────────────────────────────────────
  buildCategories();
  buildBrands();
  render();

  // Deep-link via ?cat=ceiling-fans
  const urlCat = new URLSearchParams(window.location.search).get('cat');
  if (urlCat && CATEGORIES[urlCat]) {
    state.category = urlCat;
    catList.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const target = catList.querySelector(`[data-cat="${urlCat}"]`);
    if (target) target.classList.add('active');
    render();
  }

})();
