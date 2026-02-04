/* ========================================
   Image Gallery / Lightbox
   ======================================== */

class Gallery {
  constructor() {
    this.lightbox = null;
    this.currentIndex = 0;
    this.images = [];
    this.init();
  }

  init() {
    this.createLightbox();
    this.bindEvents();
  }

  createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-overlay"></div>
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <button class="lightbox-prev" aria-label="Previous">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button class="lightbox-next" aria-label="Next">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
        <div class="lightbox-image-container">
          <img class="lightbox-image" src="" alt="">
        </div>
        <div class="lightbox-caption"></div>
        <div class="lightbox-counter"></div>
      </div>
    `;

    document.body.appendChild(lightbox);
    this.lightbox = lightbox;

    // Add styles
    this.addStyles();
  }

  addStyles() {
    const styles = document.createElement('style');
    styles.textContent = `
      .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }

      .lightbox.active {
        opacity: 1;
        visibility: visible;
      }

      .lightbox-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
      }

      .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .lightbox-image-container {
        max-width: 100%;
        max-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .lightbox-image {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        opacity: 0;
        transform: scale(0.95);
        transition: opacity 0.3s ease, transform 0.3s ease;
      }

      .lightbox.active .lightbox-image {
        opacity: 1;
        transform: scale(1);
      }

      .lightbox-close,
      .lightbox-prev,
      .lightbox-next {
        position: absolute;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 1rem;
        transition: opacity 0.2s ease;
        z-index: 10;
      }

      .lightbox-close:hover,
      .lightbox-prev:hover,
      .lightbox-next:hover {
        opacity: 0.7;
      }

      .lightbox-close {
        top: 1rem;
        right: 1rem;
      }

      .lightbox-prev {
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }

      .lightbox-next {
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
      }

      .lightbox-close svg,
      .lightbox-prev svg,
      .lightbox-next svg {
        width: 32px;
        height: 32px;
      }

      .lightbox-caption {
        color: white;
        text-align: center;
        margin-top: 1rem;
        font-size: 0.875rem;
        max-width: 600px;
      }

      .lightbox-counter {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.75rem;
        margin-top: 0.5rem;
      }

      @media (max-width: 768px) {
        .lightbox-prev,
        .lightbox-next {
          top: auto;
          bottom: 2rem;
          transform: none;
        }

        .lightbox-prev {
          left: 2rem;
        }

        .lightbox-next {
          right: 2rem;
        }
      }
    `;
    document.head.appendChild(styles);
  }

  bindEvents() {
    // Click on gallery images
    document.addEventListener('click', (e) => {
      const galleryImage = e.target.closest('[data-gallery]');
      if (galleryImage) {
        e.preventDefault();
        this.open(galleryImage);
      }
    });

    // Close button
    this.lightbox.querySelector('.lightbox-close').addEventListener('click', () => this.close());

    // Overlay click
    this.lightbox.querySelector('.lightbox-overlay').addEventListener('click', () => this.close());

    // Navigation
    this.lightbox.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());
    this.lightbox.querySelector('.lightbox-next').addEventListener('click', () => this.next());

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;

      switch (e.key) {
        case 'Escape':
          this.close();
          break;
        case 'ArrowLeft':
          this.prev();
          break;
        case 'ArrowRight':
          this.next();
          break;
      }
    });
  }

  open(element) {
    const galleryId = element.dataset.gallery;
    this.images = Array.from(document.querySelectorAll(`[data-gallery="${galleryId}"]`));
    this.currentIndex = this.images.indexOf(element);

    this.updateImage();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  }

  updateImage() {
    const current = this.images[this.currentIndex];
    const img = this.lightbox.querySelector('.lightbox-image');
    const caption = this.lightbox.querySelector('.lightbox-caption');
    const counter = this.lightbox.querySelector('.lightbox-counter');

    // Get high-res image or fallback to current src
    const src = current.dataset.full || current.src || current.querySelector('img')?.src;
    const alt = current.alt || current.querySelector('img')?.alt || '';
    const captionText = current.dataset.caption || alt;

    img.src = src;
    img.alt = alt;
    caption.textContent = captionText;
    counter.textContent = `${this.currentIndex + 1} / ${this.images.length}`;

    // Hide nav if only one image
    const showNav = this.images.length > 1;
    this.lightbox.querySelector('.lightbox-prev').style.display = showNav ? 'block' : 'none';
    this.lightbox.querySelector('.lightbox-next').style.display = showNav ? 'block' : 'none';
    counter.style.display = showNav ? 'block' : 'none';
  }
}

// Initialize gallery on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new Gallery();
});
