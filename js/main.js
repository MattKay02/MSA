/* ========================================
   Matthew Simpson Architecture Portfolio
   Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initSkillBars();
  initBackToTop();
  initSmoothScroll();
  initLazyLoading();
  initNavActiveState();
  initParallaxShapes();
});

/* ========================================
   Scroll Animations (IntersectionObserver)
   ======================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll(
    '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .timeline-item'
  );
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

  elements.forEach(el => observer.observe(el));
}

/* ========================================
   Skill Bar Fill Animation
   ======================================== */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  // Set the actual width before animating
  fills.forEach(fill => {
    const w = fill.dataset.width || '0.75';
    fill.style.width = (parseFloat(w) * 100) + '%';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  fills.forEach(fill => observer.observe(fill));
}

/* ========================================
   Back to Top Button
   ======================================== */
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', throttle(() => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, 100));

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ========================================
   Smooth Scroll for Anchor Links
   ======================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ========================================
   Image Lazy Loading
   ======================================== */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');
  if (!lazyImages.length) return;

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          io.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => io.observe(img));
  } else {
    lazyImages.forEach(img => { img.src = img.dataset.src; });
  }
}

/* ========================================
   Nav Active State (scroll-based)
   ======================================== */
function initNavActiveState() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = ['home', 'projects', 'about'].map(id => document.getElementById(id)).filter(Boolean);
  if (!navLinks.length || !sections.length) return;

  const navHeight = document.getElementById('main-nav')?.offsetHeight || 64;

  function updateActive() {
    const scrollY = window.scrollY + navHeight + 40;
    let current = sections[0].id;
    sections.forEach(section => {
      if (section.offsetTop <= scrollY) current = section.id;
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', throttle(updateActive, 80));
  updateActive();
}

/* ========================================
   Parallax Background Shapes
   ======================================== */
function initParallaxShapes() {
  // x/y: translation multiplier (px per scroll-px)
  // scale: amplitude of size pulse (1 ± scale)
  // phase: offset into the sine wave so shapes breathe out of sync
  // Line shapes (bars) are constrained to their long axis only.
  // All x/y values are the previous values × 1.05 for extra distance.
  const config = [
    { selector: '.pg-h1', x:  0.11, y:  0.17, scale: 0.10, phase: 0.0 },  // circle
    { selector: '.pg-h2', x: -0.14, y:  0.12, scale: 0.08, phase: 1.3 },  // circle
    { selector: '.pg-h3', x:  0.00, y: -0.21, scale: 0.06, phase: 2.5 },  // vertical bar — Y only
    { selector: '.pg-h4', x:  0.16, y:  0.00, scale: 0.09, phase: 0.9 },  // horizontal bar — X only
    { selector: '.pg-h5', x: -0.08, y: -0.17, scale: 0.11, phase: 3.2 },  // square
    { selector: '.pg-h6', x:  0.07, y: -0.19, scale: 0.07, phase: 1.9 },  // circle
    { selector: '.pg-p1', x: -0.13, y: -0.10, scale: 0.08, phase: 2.1 },  // circle
    { selector: '.pg-p2', x:  0.00, y: -0.14, scale: 0.10, phase: 0.6 },  // vertical bar — Y only
    { selector: '.pg-p3', x:  0.15, y: -0.08, scale: 0.09, phase: 3.7 },  // circle
    { selector: '.pg-p4', x: -0.10, y:  0.13, scale: 0.11, phase: 1.6 },  // square
    { selector: '.pg-a0', x:  0.09, y: -0.08, scale: 0.07, phase: 2.9 },  // circle
    { selector: '.pg-a1', x:  0.00, y: -0.15, scale: 0.10, phase: 0.4 },  // vertical bar — Y only
    { selector: '.pg-a2', x: -0.13, y:  0.00, scale: 0.08, phase: 4.1 },  // horizontal bar — X only
    { selector: '.pg-a3', x: -0.08, y: -0.19, scale: 0.09, phase: 1.1 },  // circle
    { selector: '.pg-a4', x:  0.15, y:  0.10, scale: 0.11, phase: 3.4 },  // square
  ];

  const shapes = config
    .map(c => ({ el: document.querySelector(c.selector), ...c }))
    .filter(s => s.el);

  if (!shapes.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // How fast scale oscillates (radians per scroll-px).
  // 0.0015 ≈ roughly one full breathe cycle every ~4200px of scroll.
  const SCALE_FREQ = 0.0015;
  // Lerp factor: how quickly the rendered position catches the real scroll.
  // 0.09 gives a silky lag without feeling slow.
  const LERP = 0.09;

  let targetY = window.scrollY;
  let smoothY = window.scrollY;

  window.addEventListener('scroll', () => { targetY = window.scrollY; }, { passive: true });

  function tick() {
    smoothY += (targetY - smoothY) * LERP;

    shapes.forEach(({ el, x, y, scale, phase }) => {
      const tx = smoothY * x;
      const ty = smoothY * y;
      const s  = 1 + scale * Math.sin(smoothY * SCALE_FREQ + phase);
      el.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

/* ========================================
   Utilities
   ======================================== */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
