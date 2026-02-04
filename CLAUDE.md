# Matthew Simpson Architecture Portfolio Website

## Project Overview
Build a modern, responsive portfolio website for Matthew Simpson, an architecture student showcasing selected works from 2024-2025. The site should reflect the clean, minimalist aesthetic of the PDF portfolio while being fully functional and interactive.

## Design Direction

### Visual Identity
- **Color Palette:**
  - Primary: Deep navy blue (#1e3a5f) for headers and text
  - Accent: Dusty rose/coral (#d89898) for highlights and interactive elements
  - Neutral: Soft cream/beige (#f5f1e8) for backgrounds
  - Dark charcoal (#2a2a2a) for body text
  - Pure white (#ffffff) for contrast areas

- **Typography:**
  - Headers: Use a clean sans-serif (e.g., 'Inter', 'Work Sans', or 'Poppins')
  - Body: Use a readable sans-serif (e.g., 'Inter', 'Source Sans Pro')
  - Maintain generous spacing and hierarchy

- **Layout Style:**
  - Minimalist, architectural aesthetic
  - Generous white space
  - Large, high-quality images
  - Clean grid-based layouts
  - Subtle animations on scroll

## Site Structure

### 1. Landing Page (index.html)
**Hero Section:**
- Full viewport height
- Feature the cover image aesthetic: textured background with scattered human figures
- Centered title: "ARCHITECTURE WORK SAMPLES"
- Subtitle: "MATTHEW SIMPSON"
- Tagline: "SELECTED WORKS | 2024 - 2025"
- Smooth scroll-down indicator

**Quick Stats Bar:**
- Location: Las Vegas / Los Angeles
- Status: Architecture Student, UNLV
- Contact info with icons
- Minimal, horizontal layout

**Table of Contents / Project Grid:**
Display 6 project cards in a responsive grid:
1. VOID//ED Meditation Space
2. Zero DayBed
3. Brim Lake
4. OVA Kinderspace
5. Graphics Design Work
6. Inside-Out Studio (THEREFORM Offices)

Each card should include:
- Project number (01-06)
- Project title
- Brief descriptor (Academic/Competition/Professional)
- Hover effect revealing thumbnail image
- Click to navigate to project page

### 2. About Page (about.html)
**Header Section:**
- Name and professional photo placeholder
- Contact information
- Location and visa status
- Social media links

**Two-Column Layout:**

**Left Column - Education:**
- Orange Coast College (2021-2023)
  - Associate of Sciences in Architecture
- University of Nevada, Las Vegas (2023-2026)
  - Bachelor of Arts in Architecture
- To Be Continued... (20xx-20xx)
  - Masters of Architecture

**Right Column - Work Experience:**
- Fox Corporation (June-Aug 2025)
  - Planning Design & Construction Intern
  - Detailed responsibilities
- UNLV Student Health & Recreation (Sept 2024-May 2026)
  - Graphic Designer
  - Detailed responsibilities

**Skills Section:**
Organize in categories with visual skill bars:
- **Software:** Rhinoceros, Revit, AutoCAD, Illustrator, Photoshop, InDesign, Procreate, D5 Render, Lumion, Enscape, Twinmotion
- **Fabrication:** 3D Printing, Laser Work, Model Work, CNC Work
- **Other:** Grasshopper, Photography

**Accolades Section:**
Feature two scholarship achievements with descriptions:
1. UNLV Signature Athlete Scholarship ($5000)
2. UNLV Academic Differential Fee Scholarship ($7500)

### 3. Project Detail Pages (6 individual HTML files)

#### Project 01: VOID//ED Meditation Space (voided.html)
**Hero Image:** Desert meditation space render
**Project Info Sidebar:**
- Status: 3rd Year
- Year: 2025
- Class: AAE 382 - SPRING
- Professor: Jorge Hernandez Castro
- Competition: Buildner's Museum of Emotions
- Typology: Meditation Space
- Location: Double Negative, Nevada

**Content Sections:**
1. Project Statement with quote by Carlos Scarpa
2. Concept Diagrams showing progression (1 month, 5 years, 20 years)
3. Sand filter detail with technical drawings
4. Interior perspective renders showing light quality
5. Timeline visualization of nature reclaiming the space

#### Project 02: Zero DayBed (zerodaybed.html)
**Hero Image:** Detailed furniture photograph
**Project Info Sidebar:**
- Status: 3rd Year
- Year: 2024
- Class: AAE 380 - FALL
- Professor: David Douglas
- Typology: Furniture Piece
- Location: Las Vegas, Nevada

**Content Sections:**
1. Project statement about ergonomic design and NASA zero-gravity research
2. Assembly diagrams (1-2-3 step process)
3. Context illustrations showing "ZerO Housing" concept
4. Detail shots of wood joinery
5. Material and construction notes

#### Project 03: Brim Lake (brimlake.html)
**Hero Image:** Lakeside residence night render
**Project Info Sidebar:**
- Status: 2nd Year
- Year: 2023
- Class: Render Competition
- Typology: Residential
- Location: N/A

**Content Sections:**
1. Project statement about mid-century modernism
2. Exterior night render with lake reflections
3. Interior perspectives: kitchen and living room
4. Material palette and structural approach

#### Project 04: OVA Kinderspace (ova.html)
**Hero Image:** Courtyard with coral-toned walls
**Project Info Sidebar:**
- Status: 3rd Year
- Year: 2025
- Class: AAE 382 - SPRING
- Professor: Jorge Hernandez Castro
- Competition Entry: Buildner's Kinderspace
- Typology: School
- Location: Spring Valley, Nevada

**Content Sections:**
1. Project statement about ecological sanctuary
2. Site analysis and axonometric drawings
3. Concept diagrams: flexibility, root tables
4. Interior classroom renders
5. Floor plans and section drawings
6. Material exploration: weathered copper fins
7. Community engagement approach

#### Project 05: Graphics Design Work (graphics.html)
**Hero Image:** Collage of design work
**Project Info Sidebar:**
- Status: High School - Present
- Year: 2020 - 2025
- Programs: Procreate/Illustrator
- Instagram: @art.by.simpson

**Content Sections:**
1. Personal statement about design approach
2. Album artwork gallery:
   - "Salt Water" by Josh Moreira
   - "Nike Airs" album artwork
   - "Fingertips" album artwork
3. Personal work:
   - "I Miss Being Alive" (COVID reflection piece)
   - "Faceless Explorer" (identity exploration)
4. Process notes and project descriptions

#### Project 06: THEREFORM Offices (thereform.html)
**Hero Image:** Office building exterior with reclaimed materials
**Project Info Sidebar:**
- Status: 4th Year
- Year: 2025
- Class: AAE 482 - FALL
- Professor: Joshua Vermillion
- Typology: Office
- Location: Downtown, Las Vegas

**Content Sections:**
1. Project statement about material reclamation
2. Concept diagrams: connecting corners, shifting levels
3. Structural approach: salvaged skeleton
4. Interior perspectives: the living stitch, working yard
5. Floor plans and sections
6. Material details and sustainability approach

### 4. Contact Page (contact.html)
**Full-page layout featuring:**
- Large "THANK YOU" centered with textured background (matching portfolio aesthetic)
- Contact form with fields:
  - Name
  - Email
  - Subject
  - Message
  - Submit button
- Direct contact information:
  - Email: SIMPSM5@UNLV.NEVADA.EDU
  - Phone: (949) 283 3431
  - Instagram: @matt.simpsonn
- Animated figure silhouettes subtle in background

## Technical Requirements

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px
- Touch-friendly navigation on mobile
- Optimized images for different screen sizes

### Interactive Elements
- Smooth scroll behavior
- Fade-in animations on scroll
- Hover effects on project cards
- Image galleries with lightbox functionality
- Parallax effects on hero sections (subtle)
- Loading animations

### Navigation
**Desktop:**
- Fixed header with logo/name on left
- Navigation menu on right: Home | About | Projects | Contact
- Transparent background that becomes solid on scroll

**Mobile:**
- Hamburger menu
- Slide-in navigation drawer
- Full-screen menu overlay

### Performance
- Lazy loading for images
- Optimized image formats (WebP with fallbacks)
- Minified CSS and JavaScript
- Fast page load times

### Accessibility
- Semantic HTML5
- ARIA labels where needed
- Keyboard navigation support
- Alt text for all images
- Sufficient color contrast

## Content Preparation

### Images Needed
For each project, include:
- 1 hero/cover image (1920x1080px minimum)
- 3-6 supporting images (renders, diagrams, photos)
- Technical drawings (plans, sections, details)
- Process images where applicable

### Placeholder Content
If actual images aren't available immediately, use:
- Colored placeholder boxes matching project theme
- Text indicating image type
- Maintain aspect ratios from PDF

## Additional Features

### Optional Enhancements:
1. **Project Filtering:** Add category filters (Academic, Competition, Professional)
2. **Dark Mode:** Toggle between light and dark themes
3. **Resume Download:** PDF download button on About page
4. **Image Zoom:** Click images to view full-size
5. **Back to Top Button:** Appears after scrolling
6. **Project Navigation:** Previous/Next project buttons on detail pages
7. **Loading Screen:** Branded loading animation on initial page load

### Footer (All Pages)
- Copyright notice: © 2025 Matthew Simpson
- Social media icons
- Quick links to main sections
- Email signup for updates (optional)

## File Structure
```
portfolio/
├── index.html
├── about.html
├── contact.html
├── projects/
│   ├── voided.html
│   ├── zerodaybed.html
│   ├── brimlake.html
│   ├── ova.html
│   ├── graphics.html
│   └── thereform.html
├── css/
│   ├── style.css
│   ├── responsive.css
│   └── animations.css
├── js/
│   ├── main.js
│   ├── gallery.js
│   └── animations.js
├── images/
│   ├── hero/
│   ├── projects/
│   ├── about/
│   └── icons/
└── assets/
    ├── fonts/
    └── resume/
```

## Development Notes

### Fonts
Use Google Fonts or similar:
- Primary: 'Inter' or 'Work Sans' (weights: 300, 400, 500, 600, 700)
- Consider architectural typefaces like 'Archivo' or 'Space Grotesk'

### JavaScript Libraries (optional)
- AOS (Animate On Scroll) for scroll animations
- GLightbox or Lightbox2 for image galleries
- Smoothscroll polyfill for smooth scrolling

### CSS Framework
- Consider using vanilla CSS with CSS Grid and Flexbox
- Or lightweight framework like Tailwind CSS
- Avoid heavy frameworks for performance

## Content Tone
- Professional but approachable
- Focus on design thinking and process
- Highlight sustainability and innovation themes
- Emphasize collaboration and learning

## Launch Checklist
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on multiple devices (mobile, tablet, desktop)
- [ ] Optimize all images
- [ ] Check all links work
- [ ] Verify contact form functionality
- [ ] Add meta tags for SEO
- [ ] Add Open Graph tags for social sharing
- [ ] Set up Google Analytics (optional)
- [ ] Test loading speed
- [ ] Verify accessibility standards

## Future Enhancements
- Blog section for design thoughts
- 3D model viewer for architecture projects
- Animation/video integration for project walkthroughs
- Multilingual support
- Client testimonials section
- Awards and recognition page

---

**Priority:** Build a clean, fast, professional portfolio that showcases Matthew's architectural work with emphasis on visual quality, user experience, and responsive design. The site should feel cohesive with the PDF aesthetic while leveraging web capabilities for interactivity and engagement.