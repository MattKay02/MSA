# MSA — Matthew Simpson Architecture Portfolio

Static multi-page portfolio for Matthew Simpson, an architecture student at UNLV. Presents three project case studies with imagery, narratives, and contact info.

## Stack

- **HTML5 / CSS3 / Vanilla JS** — no frameworks, no build tools
- **Google Fonts** — Inter (weights 100–700)
- **SVG** — decorative shapes and UI icons

## Structure

```
index.html              # Nav + Hero + Projects + About + Footer
projects/
  voided.html           # VOID//ED Meditation Space
  ova.html              # OVA Kinderspace
  thereform.html        # The Reform Offices
css/
  style.css             # Design tokens, components, layout
  responsive.css        # Breakpoints (375px, 768px, 1024px, 1440px)
  animations.css        # Scroll fade-ins, hover effects
js/
  main.js               # Scroll animations, lazy load, nav active state, parallax shapes
  gallery.js            # Lightbox for project detail pages
images/
  Voided/ OVA/ Reform/  # Project imagery
```
