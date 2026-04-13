/* ═══════════════════════════════════════════
   LUMIS — JavaScript
   Scroll animations, parallax, interactions
═══════════════════════════════════════════ */

(function () {
  'use strict';

  // ── CURSOR GLOW ──
  const cursorGlow = document.getElementById('cursor-glow');
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    cursorGlow.style.left = glowX + 'px';
    cursorGlow.style.top  = glowY + 'px';
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  // ── NAVBAR SCROLL STATE ──
  const navbar = document.getElementById('navbar');
  function updateNavbar() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // ── HERO SCROLL ANIMATION ──
  const canvas = document.getElementById('hero-canvas');
  const context = canvas ? canvas.getContext('2d') : null;
  const canvasBloom = document.getElementById('hero-canvas-bloom');
  const contextBloom = canvasBloom ? canvasBloom.getContext('2d') : null;
  const isMobile = window.innerWidth <= 768;
  const frameStep = isMobile ? 4 : 1; // Load every 4th frame on mobile to save ~75% RAM
  const totalFrames = 240;
  const frameCount = Math.floor(totalFrames / frameStep);
  const images = new Array(frameCount);
  const heroScrollContainer = document.getElementById('hero-scroll-container');
  let imagesLoaded = 0;

  if (canvas) {
    const currentFrame = index => {
      // Map array index back to physical file number
      const actualFileIndex = (index * frameStep) - (frameStep - 1);
      return `assets/images/hero/ezgif-frame-${actualFileIndex.toString().padStart(3, '0')}.png`;
    };

    // PROGRESSIVE LOADING: Prevent main thread blocking and memory spikes
    const loadNextFrame = (i) => {
      if (i > frameCount) return;
      const img = new Image();
      img.onload = () => {
        images[i - 1] = img;
        imagesLoaded++;
        if (imagesLoaded === 1 && !images[0]) {
           renderCanvas(images[0]);
        }
        // Recursively load the next image only after the current one finishes
        requestAnimationFrame(() => loadNextFrame(i + 1));
      };
      // Prevent failed loads from breaking the chain
      img.onerror = () => {
        requestAnimationFrame(() => loadNextFrame(i + 1));
      };
      img.src = currentFrame(i);
    };

    // EAGER PRELOAD BATCH
    const preloadTarget = Math.min(6, frameCount);
    let preloadFinished = 0;

    for (let i = 1; i <= preloadTarget; i++) {
      const img = new Image();
      img.onload = () => {
        images[i - 1] = img;
        imagesLoaded++;
        preloadFinished++;
        if (i === 1) renderCanvas(img); // Instantly render frame 1 on load
        
        // Once preload batch finishes, kick off the background progressive loader
        if (preloadFinished === preloadTarget) {
          loadNextFrame(preloadTarget + 1);
        }
      };
      img.onerror = () => {
        preloadFinished++;
        if (preloadFinished === preloadTarget) loadNextFrame(preloadTarget + 1);
      };
      img.src = currentFrame(i);
    }

    let currentFrameIndex = 0;
    let targetFrameIndex = 0;
    let currentFraction = 0;
    let targetFraction = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (canvasBloom) {
        canvasBloom.width = window.innerWidth;
        canvasBloom.height = window.innerHeight;
      }
      targetFraction = calcScrollFraction();
      targetFrameIndex = Math.min(frameCount - 1, targetFraction * (frameCount - 1));
      currentFrameIndex = targetFrameIndex; // Snap on resize
      currentFraction = targetFraction;
    };

    function renderCanvas(img) {
      if (!img || !img.complete) return;
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio  = Math.max(hRatio, vRatio);
      const centerShift_x = (canvas.width - img.naturalWidth * ratio) / 2;
      const centerShift_y = (canvas.height - img.naturalHeight * ratio) / 2;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, centerShift_x, centerShift_y, img.naturalWidth * ratio, img.naturalHeight * ratio);
      
      if (contextBloom) {
        contextBloom.clearRect(0, 0, canvasBloom.width, canvasBloom.height);
        contextBloom.drawImage(canvas, 0, 0);
      }
    }

    function calcScrollFraction() {
      const rect = heroScrollContainer.getBoundingClientRect();
      const st = -rect.top;
      const maxScroll = rect.height - window.innerHeight;
      let fraction = st / maxScroll;
      return Math.max(0, Math.min(1, fraction));
    }

    function updateAnimation() {
      // Tight binding on mobile to remove lag/delay, smooth easing on desktop
      const easing = isMobile ? 1 : 0.08; 
      currentFrameIndex += (targetFrameIndex - currentFrameIndex) * easing;
      currentFraction += (targetFraction - currentFraction) * easing;

      const frameToDraw = Math.round(currentFrameIndex);
      
      if (imagesLoaded > 0 && images[frameToDraw]) {
        renderCanvas(images[frameToDraw]);
      }

      const textPanels = document.querySelectorAll('.hero-text-panel');
      textPanels.forEach(panel => {
        const start = parseFloat(panel.getAttribute('data-start'));
        const end = parseFloat(panel.getAttribute('data-end'));
        
        let opacity = 0;
        let yOffset = 20;

        if (currentFraction >= start && currentFraction <= end) {
          const range = end - start;
          const localProgress = (currentFraction - start) / range;
          
          // Fade in (0 to 0.2) and fade out (0.8 to 1.0)
          if (localProgress < 0.2) {
            opacity = localProgress / 0.2;
            yOffset = 20 * (1 - opacity);
          } else if (localProgress > 0.8) {
            opacity = (1 - localProgress) / 0.2;
            yOffset = -20 * (1 - opacity);
          } else {
            opacity = 1;
            yOffset = 0;
          }
        } else if (currentFraction > end) {
          yOffset = -20; // Keep it floated up when passed
        }
        
        panel.style.opacity = Math.max(0, Math.min(1, opacity));
        panel.style.transform = `translateY(${yOffset}px)`;
      });

      const flare = document.getElementById('lens-flare');
      if (flare) {
        let flareOp = 0;
        if (currentFraction <= 0.12) {
          flareOp = currentFraction / 0.12;
        } else if (currentFraction <= 0.3) {
          flareOp = 1 - ((currentFraction - 0.12) / 0.18);
        }
        flare.style.opacity = Math.max(0, flareOp * 0.85); // 85% opacity max
        flare.style.transform = `scale(${0.9 + flareOp * 0.15})`; 
      }

      requestAnimationFrame(updateAnimation);
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    updateAnimation();

    window.addEventListener('scroll', () => {
      targetFraction = calcScrollFraction();
      targetFrameIndex = Math.min(frameCount - 1, targetFraction * (frameCount - 1));
    }, { passive: true });
  }

  // ── MOBILE MENU ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── HERO PARTICLES ──
  const particleContainer = document.getElementById('hero-particles');
  const PARTICLE_COUNT = 28;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.setProperty('--dur',   (3 + Math.random() * 5) + 's');
    p.style.setProperty('--delay', (Math.random() * 6) + 's');
    p.style.left   = (5 + Math.random() * 90) + '%';
    p.style.bottom = (5 + Math.random() * 40) + '%';
    p.style.width  = (1 + Math.random() * 2) + 'px';
    p.style.height = p.style.width;
    particleContainer.appendChild(p);
  }

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll(
    '.reveal-up, .reveal-fade, .reveal-left, .reveal-right, .reveal-scale'
  );

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.style.getPropertyValue('--delay') || '0ms';
        setTimeout(() => {
          el.classList.add('visible');
        }, parseInt(delay));
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ── COUNTER ANIMATION ──
  const statNums = document.querySelectorAll('.stat-num');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  statNums.forEach(el => counterObserver.observe(el));

  // ── PARALLAX ──
  const ambientImg  = document.getElementById('ambient-img');
  const showroomImg = document.getElementById('showroom-img');

  function doParallax() {
    const scrollY = window.scrollY;
    const wh = window.innerHeight;

    // Ambient section parallax
    if (ambientImg) {
      const ambientSection = document.querySelector('.ambient-section');
      const rect = ambientSection.getBoundingClientRect();
      const progress = (wh - rect.top) / (wh + rect.height);
      const offset = (progress - 0.5) * 120;
      ambientImg.style.transform = `translateY(${offset}px)`;
    }

    // Showroom parallax
    if (showroomImg) {
      const showroomSection = document.querySelector('.showroom');
      const rect = showroomSection.getBoundingClientRect();
      const progress = (wh - rect.top) / (wh + rect.height);
      const offset = (progress - 0.5) * 100;
      showroomImg.style.transform = `translateY(${offset}px)`;
    }
  }

  window.addEventListener('scroll', doParallax, { passive: true });
  doParallax();

  // ── HERO STAGGER ANIMATION ──
  const heroEls = [
    { id: 'hero-eyebrow', delay: 400 },
    { id: 'hero-headline', delay: 600 },
    { id: 'hero-sub',      delay: 900 },
    { id: 'hero-cta',      delay: 1100 },
  ];

  heroEls.forEach(({ id, delay }) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => el.classList.add('visible'), delay);
  });

  // ── COLLECTION PANEL HOVER TILT ──
  document.querySelectorAll('.collection-media').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
      const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 10;
      el.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });


  // ── REMOVED CONTACT FORM ──

  // ── SMOOTH ANCHOR SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const yOffset = -72;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  // ── AMBIENT QUOTE PARALLAX TEXT ──
  const ambientQuote = document.getElementById('ambient-quote');
  if (ambientQuote) {
    const ambientObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          ambientQuote.classList.add('visible');
          document.querySelector('.ambient-attr').classList.add('visible');
        }
      });
    }, { threshold: 0.3 });
    ambientObs.observe(ambientQuote);
  }

  // ── CURSOR DOT STYLE ON INTERACTIVE ELS ──
  const interactiveEls = document.querySelectorAll('a, button, input, select, textarea, .collection-media');
  interactiveEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorGlow.style.width  = '500px';
      cursorGlow.style.height = '500px';
      cursorGlow.style.opacity = '0.7';
    });
    el.addEventListener('mouseleave', () => {
      cursorGlow.style.width  = '320px';
      cursorGlow.style.height = '320px';
      cursorGlow.style.opacity = '1';
    });
  });

  // ── NAV ACTIVE SECTION HIGHLIGHT ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === '#' + id
            ? 'var(--white)'
            : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px' });

  sections.forEach(s => sectionObserver.observe(s));

  // ── PAGE LOAD FADE-IN ──
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.6s ease';
  window.addEventListener('load', () => {
    document.body.style.opacity = '1';
  });

})();
