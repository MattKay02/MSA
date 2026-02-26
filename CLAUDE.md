# Matthew Simpson Architecture Portfolio

## Site Structure

Single-page index (`index.html`) with four scroll sections, plus three standalone project detail pages.

**Pages:**
- `index.html` — Nav → Hero → Projects → About → Footer
- `projects/voided.html` — VOID//ED Meditation Space
- `projects/ova.html` — OVA Kinderspace
- `projects/thereform.html` — The Reform Offices

**Deleted pages (do not recreate):** `about.html`, `contact.html`, `projects/zerodaybed.html`, `projects/brimlake.html`, `projects/graphics.html`

---

## Design System

### Colors
```
--color-primary:  #1e3a5f   (deep navy — headings, dark elements)
--color-accent:   #d89898   (dusty rose/coral — highlights, labels)
--color-neutral:  #f5f1e8   (cream — all backgrounds)
--color-dark:     #2a2a2a   (charcoal — body text)
--color-white:    #ffffff
--color-green:    #2d5a3d   (forest green — defined, sparingly used)
--color-border:   #e8e4db   (light border/divider)
--color-gray:     #9a9a9a   (muted text, metadata)
```

### Typography
- Font: Inter (Google Fonts, weights 100–700)
- Body: 1.7 line-height, 16px base
- Section labels: small, all caps, letter-spacing, accent color (`.label` class)
- Section titles: large, all caps (`.section-title` class)

### Spacing Scale
```
--space-xs: 0.5rem   --space-sm: 1rem    --space-md: 1.5rem
--space-lg: 2rem     --space-xl: 3rem    --space-2xl: 4rem   --space-3xl: 6rem
```

### Decorative Shape Layer (`page-shapes`)
A full-page `div.page-shapes` sits behind all content in `index.html`. Contains `.hs` divs with positional class names:
- Hero zone: `pg-h1` through `pg-h6`
- Projects zone: `pg-p1` through `pg-p4`
- About zone: `pg-a0` through `pg-a4`

---

## index.html Sections

### Nav (`.main-nav`)
- Fixed top, cream background, 64px height
- Left: `Matthew Simpson Architecture` → `#home`
- Right: `Home`, `Projects`, `About` anchor links
- Active state managed by `initNavActiveState()` in `main.js`

### Hero (`#home`, `.hero`)
- Full viewport height, cream background
- Decorative layer (`.hero-decor`): two SVG dashed circles (`.hero-bg-circle`) + four CSS corner brackets (`.hero-corner.tl/tr/bl/br`)
- Central content (`.hero-inner`):
  - Overline: `Selected Works` (`.hero-overline`)
  - H1 with two spans: `Architecture` / `Work Samples` (`.hero-headline`)
  - Horizontal rule (`.hero-rule`)
  - Name tag: `Matthew Simpson` (`.hero-name-tag`)
- Contact links (`.hero-contacts`): email | phone | Instagram — all `<a>` tags
- Scroll indicator arrow at bottom center (`.scroll-indicator`)

### Projects Section (`#projects`, `.projects-section`)
- Section label: `Matthew Simpson | Portfolio`
- Section title: `Projects`
- Three project cards in `.projects-grid` (each a full `<a>` tag, class `.project-card`):
  - Image fills card (`.project-card-img`), lazy loaded
  - Gradient overlay (`.project-card-overlay`)
  - Bottom info block (`.project-card-info`): title (`.project-card-title`) + descriptor (`.project-card-desc`)

| Card | Title | Desc | Image | Link |
|------|-------|------|-------|------|
| 1 | Void//ED | Academic / Competition | `images/Voided/main-1.jpg` | `projects/voided.html` |
| 2 | OVA | Academic / Competition | `images/OVA/main-1.jpg` | `projects/ova.html` |
| 3 | The Reform offices | Academic | `images/Reform/main-3-the-living-stich.png` | `projects/thereform.html` |

### About Section (`#about`, `.about-section`)
- Section label: `The Architect`
- Section title: `About`
- Two-column grid (`.about-grid`):
  - Left (`.about-left`): SVG icon placeholder + caption (name, role, school/location)
  - Right (`.about-content`):
    - Name heading + meta line
    - Bio paragraph
    - Two-column sub-layout (`.about-columns`): Education (left) + Experience (right)
    - Entries use `.timeline-item` with `.timeline-date`, `.timeline-title`, `.timeline-role`, `.timeline-desc`
    - Skills (`.skills-section-inner`): three categories with `.skill-list` text — no bars
    - Accolades (`.accolades-grid`): two `.accolade-card` items

**Education:**
- 2021–2023 · Orange Coast College · Associate of Sciences in Architecture
- 2023–2026 · UNLV · Bachelor of Arts in Architecture
- 20xx–20xx · To Be Continued… · Master of Architecture

**Experience:**
- June–Aug 2025 · Fox Corporation · Planning Design & Construction Intern
- Sept 2024–May 2026 · UNLV Student Health & Recreation · Graphic Designer

**Skills:**
- Software: Rhinoceros, Revit, AutoCAD, Illustrator, Photoshop, InDesign, Procreate
- Rendering: D5 Render, Lumion, Enscape, Twinmotion
- Fabrication & Other: 3D Printing, Laser Work, CNC Work, Grasshopper

**Accolades:**
- $7,500 · UNLV Academic Differential Fee Scholarship
- $5,000 · UNLV Signature Athlete Scholarship

### Footer (`.footer`)
- Left: `© 2025 Matthew Simpson`
- Right: email | phone | Instagram links

---

## Project Detail Pages

**Header (all 3, `.project-header`):**
- Fixed, 64px, cream background
- Left: `Matthew Simpson` → `../index.html`
- Right: `← All Projects` → `../index.html#projects`

**Layout (all 3):**
- Full-width hero image (`.project-hero`) with title overlay and prev/next arrow buttons on the image
- Content area (`.project-content`): sticky sidebar (`.project-sidebar`) + main article (`.project-main`)
- Sidebar: project title + metadata rows (`.project-info-list` → `.project-info-item`)
- Bottom nav bar (`.project-nav-bar`): prev/next project links
- Footer: identical to index footer

**Project navigation order (circular):**
- voided → prev: thereform, next: ova
- ova → prev: voided, next: thereform
- thereform → prev: ova, next: voided

---

## Image Paths (relative to `projects/`)

### VOID//ED
- Hero: `../images/Voided/main-1.jpg`
- Side view: `../images/Voided/Side-view-image.png`
- Filter detail: `../images/Voided/void-filter-detail-image.png`
- Cascade sequence: `../images/Voided/small-cascade-image-[1-5].png`
- Medium views: `../images/Voided/medium-1-month-image.jpg`, `medium-5-year-image.jpg`, `medium-20-year-image.jpg`

### OVA
- Hero: `../images/OVA/main-1.jpg` *(lowercase m)*
- Interior: `../images/OVA/main-2.jpg`, `../images/OVA/main-5.jpg`
- Site axon: `../images/OVA/the-site-image.png`
- Flexibility: `../images/OVA/flexibility-image.png`
- Root tables: `../images/OVA/root-tables-image.jpg`
- Weathered copper: `../images/OVA/weathered-copper-image.png`
- Plans/sections: `../images/OVA/main-3.png`, `../images/OVA/main-4.png`, `../images/OVA/main-6.png`

### THE REFORM OFFICES
- Hero: `../images/Reform/main-1-project-statement.png`
- Layout views: `../images/Reform/building-layout-top-view.png`, `building-layout-front-view.png`, `building-layout-side-view.png`
- Structural axon: `../images/Reform/main-2-the-salvaged-skeleton.png`
- Connecting corners: `../images/Reform/connecting-corners-image.png`
- Interior atrium: `../images/Reform/main-3-the-living-stich.png`
- Shifting levels: `../images/Reform/shifting-levels-image.png`
- Working yard: `../images/Reform/main-4-the-working-yard.png`
- Circulation diagram: `../images/Reform/circulation-as-landscape-image.png`

---

## CSS Files
- `css/style.css` — design tokens, reset, all component and layout styles
- `css/responsive.css` — breakpoints (375px, 768px, 1024px, 1440px)
- `css/animations.css` — scroll-triggered fade-ins, hover effects

## JS Files
- `js/main.js` — initializes: `initScrollAnimations`, `initSkillBars`, `initBackToTop`, `initSmoothScroll`, `initLazyLoading`, `initNavActiveState`, `initParallaxShapes`
- `js/gallery.js` — `Gallery` class: lightbox with keyboard/click navigation, loaded on all project detail pages

---

## Contact Info
- Email: SIMPSM5@UNLV.NEVADA.EDU
- Phone: (949) 283-3431
- Instagram: @matt.simpsonn (https://www.instagram.com/matt.simpsonn/)
