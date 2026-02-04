/* ========================================
   Matthew Simpson Architecture Portfolio
   Main JavaScript
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules
  initHeader();
  initMobileNav();
  initScrollAnimations();
  initBackToTop();
  initSmoothScroll();
  initActiveNavLinks();
});

/* ========================================
   Header Scroll Effect
   ======================================== */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  const scrollThreshold = 50;

  const updateHeader = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', throttle(updateHeader, 10));
  updateHeader();
}

/* ========================================
   Mobile Navigation
   ======================================== */
function initMobileNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.querySelector('.nav-mobile');
  const navLinks = document.querySelectorAll('.nav-mobile a');

  if (!menuToggle || !navMobile) return;

  const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navMobile.classList.toggle('active');
    document.body.style.overflow = navMobile.classList.contains('active') ? 'hidden' : '';
  };

  menuToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMobile.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMobile.classList.contains('active')) {
      menuToggle.classList.remove('active');
      navMobile.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

/* ========================================
   Scroll Animations
   ======================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .timeline-item'
  );

  if (!animatedElements.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

/* ========================================
   Back to Top Button
   ======================================== */
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  if (!backToTop) return;

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', throttle(toggleVisibility, 100));

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* ========================================
   Smooth Scroll for Anchor Links
   ======================================== */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();

      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
}

/* ========================================
   Active Navigation Links
   ======================================== */
function initActiveNavLinks() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    // Check if current path matches link
    if (currentPath.endsWith(linkPath) ||
        (currentPath === '/' && linkPath === 'index.html') ||
        (currentPath.endsWith('/') && linkPath === 'index.html')) {
      link.classList.add('active');
    }

    // Check for project pages
    if (currentPath.includes('/projects/') && linkPath === '#projects') {
      link.classList.add('active');
    }
  });
}

/* ========================================
   Utility Functions
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

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/* ========================================
   Image Lazy Loading
   ======================================== */
function initLazyLoading() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }
}

/* ========================================
   Form Validation (Contact Page)
   ======================================== */
function initContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Basic validation
    let isValid = true;
    const requiredFields = ['name', 'email', 'message'];

    requiredFields.forEach(field => {
      const input = form.querySelector(`[name="${field}"]`);
      if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
      } else {
        input.classList.remove('error');
      }
    });

    // Email validation
    const emailInput = form.querySelector('[name="email"]');
    if (emailInput && !isValidEmail(emailInput.value)) {
      emailInput.classList.add('error');
      isValid = false;
    }

    if (isValid) {
      // Form is valid - would submit here
      console.log('Form submitted:', data);
      form.reset();
      alert('Thank you for your message! I\'ll get back to you soon.');
    }
  });
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/* ========================================
   Project Card Interactions
   ======================================== */
function initProjectCards() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const link = card.querySelector('a') || card.dataset.link;
      if (link) {
        window.location.href = typeof link === 'string' ? link : link.href;
      }
    });
  });
}

// Initialize additional modules on page load
document.addEventListener('DOMContentLoaded', () => {
  initLazyLoading();
  initContactForm();
  initProjectCards();
});
