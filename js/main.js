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
