# Matthew Simpson Architecture Portfolio

## Site Structure

Single-page index (`index.html`) with three scroll sections, plus three standalone project detail pages.

**Pages:**
- `index.html` — Hero → Projects → About → Footer (single scroll)
- `projects/voided.html` — VOID//ED Meditation Space
- `projects/ova.html` — OVA Kinderspace
- `projects/thereform.html` — THEREFORM Offices (Inside-Out Studio)

**Deleted pages (do not recreate):** `about.html`, `contact.html`, `projects/zerodaybed.html`, `projects/brimlake.html`, `projects/graphics.html`

---

## Design System (derived from PDF portfolio)

### Colors
```
--color-primary:    #1e3a5f   (deep navy — headings, boxes, dark elements)
--color-accent:     #d89898   (dusty rose/coral — highlights, bars, labels)
--color-neutral:    #f5f1e8   (cream/off-white — all backgrounds)
--color-dark:       #2a2a2a   (charcoal — body text)
--color-white:      #ffffff
--color-green:      #2d5a3d   (forest green — footer accent, closing page echo)
--color-border:     #e8e4db   (light border/divider)
--color-gray:       #9a9a9a   (muted text, metadata)
```

### Typography
- Font: Inter (Google Fonts, weights 100–700)
- **ALL CAPS + generous letter-spacing (0.1–0.25em)** for all headings and labels
- Project numbers: very large (clamp 5rem–9rem), weight 100, navy
- Section labels: small (0.75rem), all caps, weight 500, letter-spacing 0.2em, accent color
- Body text: mixed case, 1.6–1.8 line-height, 1rem–1.0625rem
- Metadata/info labels: 0.75rem, all caps, accent color

### Recurring Visual Elements
- **Scattered human silhouettes**: inline SVG paths, positioned absolutely in hero and footer
- **Navy textured rectangle** in hero: `background-color: #1e3a5f` + CSS stripe overlay
- **Dusty rose horizontal bars** for skills in About section

---

## index.html Sections

### 1. Hero
- Full viewport height, cream background
- Central navy box (`hero-box`) containing:
  - Small label: `SELECTED WORKS | 2024 – 2025`
  - Title line 1: `ARCHITECTURE`
  - Title line 2: `WORK SAMPLES`
  - Name: `MATTHEW SIMPSON`
- SVG human silhouettes (~10) scattered absolutely around the hero
- Contact links at bottom of viewport (email, phone, Instagram) — all `<a>` tags
- Scroll indicator at very bottom center

### 2. Projects Section (`#projects`)
- Section label: `SELECTED WORKS`
- Three project cards (horizontal row, stacks on mobile):
  - `01` VOID//ED Meditation Space → `projects/voided.html`
  - `02` OVA Kinderspace → `projects/ova.html`
  - `03` Inside-Out Studio → `projects/thereform.html`
- Card design: image fills card, large number (01/02/03) overlaid top-left (thin/100 weight, white), title + descriptor overlaid at bottom (gradient)
- Click whole card to navigate

### 3. About Section (`#about`)
- Two-column: photo placeholder (left, 3:4) + content (right)
- Content: name, location, bio, Education, Experience, Skills (with bars), Accolades
- Skills use horizontal bars filled with `--color-accent`

### 4. Footer
- Minimal: copyright left, three contact links right
- Contact: `SIMPSM5@UNLV.NEVADA.EDU` | `(949) 283-3431` | `@MATT.SIMPSONN`
- No nav links

---

## Project Detail Pages

**Header (all 3):**
- Fixed, minimal, cream background
- Left: `MATTHEW SIMPSON` → links to `../index.html`
- Right: `← ALL PROJECTS` → links to `../index.html#projects`

**Layout (all 3):**
- Full-width hero image (70vh)
- Content area: sticky sidebar (project info card) + main content
- Sidebar: project number, title in ALL CAPS, metadata rows
- Main: sections with ALL CAPS headers, images, text
- Footer: identical to index footer
- Prev/Next navigation between the 3 active projects

### Image Paths (relative to projects/)

**VOID//ED:**
- Hero: `../images/Voided/main-1.jpg`
- 1-month: `../images/Voided/medium-1-month-image.jpg`
- 5-year: `../images/Voided/medium-5-year-image.jpg`
- 20-year: `../images/Voided/medium-20-year-image.jpg`
- Filter detail: `../images/Voided/void-filter-detail-image.png`
- Side view: `../images/Voided/Side-view-image.png`
- Cascade images: `../images/Voided/small-cascade-image-[1-5].png`

**OVA:**
- Hero: `../images/OVA/Main-1.jpg`
- Interior: `../images/OVA/main-2.jpg`, `../images/OVA/main-5.jpg`
- Site: `../images/OVA/the-site-image.png`
- Flexibility: `../images/OVA/flexibility-image.png`
- Root tables: `../images/OVA/root-tables-image.jpg`
- Main views: `../images/OVA/main-3.png`, `../images/OVA/main-4.png`, `../images/OVA/main-6.png`
- Copper: `../images/OVA/weathered-copper-image.png`

**THEREFORM:**
- Hero: `../images/Reform/main-1-project-statement.png`
- Salvaged skeleton: `../images/Reform/main-2-the-salvaged-skeleton.png`
- Living stitch: `../images/Reform/main-3-the-living-stich.png`
- Working yard: `../images/Reform/main-4-the-working-yard.png`
- Working yard detail: `../images/Reform/the-working-yard-image-1.png`
- Floor plans: `../images/Reform/4th-floor-plan-image-1.png`, `../images/Reform/4th-floor-plan-image-2.png`

---

## Contact Info
- Email: SIMPSM5@UNLV.NEVADA.EDU
- Phone: (949) 283-3431
- Instagram: @matt.simpsonn (https://www.instagram.com/matt.simpsonn/)

---

## CSS Files
- `css/style.css` — all design tokens, components, layout
- `css/responsive.css` — breakpoints (375px, 768px, 1024px, 1440px)
- `css/animations.css` — scroll-triggered fade-ins, hover effects

## JS Files
- `js/main.js` — scroll animations, back-to-top, lazy loading, smooth scroll
- `js/gallery.js` — lightbox for project detail pages
