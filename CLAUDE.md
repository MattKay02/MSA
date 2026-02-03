# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML/CSS/JS portfolio website for Matthew Simpson Architecture (MSA). It showcases architectural projects with no build system or package manager - files are served directly.

## Development

Open any HTML file directly in a browser or use a local server:
```bash
python -m http.server 8000
```

## Architecture

**Structure:**
- `index.html` - Homepage with numbered project list
- `project1.html` through `project5.html` - Individual project pages
- `style.css` - All styles (single file)
- `script.js` - All JavaScript (single file)
- `images/` - Project images organized by `images/project{N}/`

**Page Patterns:**
- Each project page uses `<main class="project{N}">` for project-specific styling
- Header with navigation is duplicated across all HTML files (no templating)
- Footer with LinkedIn contact is duplicated across all HTML files
- Project pages have color themes defined in CSS (e.g., project1 uses `rgb(211,188,141)`, project2 uses `#764f71`)

**Key CSS Components:**
- `.flip-card` - Interactive flip cards showing project details on click
- `.big-images`, `.small-images` - Image gallery layouts with fade-in animations
- `.fade-in-left` - Scroll-triggered animation class (controlled by JS)

**JavaScript Features:**
- Active navigation link highlighting based on current URL
- Scroll-based fade-in animations for `.fade-in-left` elements
- Flip card toggle functionality

## Design System & Guidelines

**Design Philosophy:**
- **Apple-inspired aesthetic** - Clean, minimalistic, sophisticated
- **Full-bleed layouts** - Content should fill the page with minimal white space gaps
- **Spacious but intentional** - Use padding/margins purposefully, not accidentally

**Color Palette:**
- Primary: Beige/grey tones (warm neutrals)
- Accent colors per project (keep existing project-specific colors)
- Backgrounds should minimize stark white - prefer off-white, cream, light grey

**Typography:**
- Keep existing fonts (do not change font families)
- Use typography hierarchy for visual clarity
- Ample line-height and letter-spacing for readability

**Layout Principles:**
- Edge-to-edge content where appropriate
- Generous but intentional spacing
- Grid-based or flexbox layouts for consistency
- Images should breathe but fill their containers

**Mobile Responsiveness:**
- **Required** - Site must be fully responsive
- Use generic, flexible layout patterns (flexbox/grid)
- **Navigation**: Hamburger menu on mobile with dropdown
- **Images**: Stack or reflow gracefully on smaller screens
- **Breakpoints**: Standard mobile (< 768px), tablet (768-1024px), desktop (> 1024px)

## Footer Requirements

**Content:**
- Link to LinkedIn profile for contact
- Message indicating LinkedIn is the preferred contact method (e.g., "Let's connect on LinkedIn" or similar)

**Design:**
- Full creative freedom - design to fit the Apple-inspired aesthetic
- Should be present on all pages (duplicated like header)
- Subtle, minimalistic, but functional
- Responsive on mobile

## Design Freedom

Claude has **full creative freedom** to redesign the entire site to achieve the above aesthetic. This includes:
- Restructuring HTML layouts
- Complete CSS overhaul
- Changing grid/flex patterns
- Reimagining image galleries
- Designing header, footer, and navigation
- Adding new animations or interactions (keep them subtle and Apple-like)

**Constraints:**
- No build tools, package managers, or frameworks
- Keep existing font families
- Maintain project-specific accent colors
- Preserve core navigation structure (5 projects + home)
- Keep the flip-card concept (can be redesigned)