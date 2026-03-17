# Ladders for Learning

A modern, responsive website for **Ladders for Learning**, a nonprofit organization dedicated to expanding educational access in Haroonabad and Bhawalnagar, Pakistan. Built with Angular 17 as a single-page application with scroll-driven storytelling, animated impact metrics, and a streamlined donation flow.

> **Live Demo:** _[Add your deployed URL here]_

<img src="./logo.png" alt="Ladders for Learning" width="200">

---

## Features

- **Hero Slideshow** — Full-width carousel with fade transitions across 3 images and 1 auto-playing video, plus text overlay and call-to-action
- **Scroll-Animated Sections** — Alternating 60/40 image-text layouts that reveal on scroll, telling the organization's story
- **Impact Counter** — Animated number counters that tick up as the user scrolls into view, showcasing key metrics
- **Programs Grid** — Icon-driven 4-card grid highlighting the organization's core initiatives
- **Interactive Map** — Static SVG map of Pakistan with focus on the Haroonabad and Bhawalnagar regions
- **Donation CTA** — Full-width call-to-action section with a single prominent donate button
- **Fully Responsive** — Mobile-first layout with sticky navigation, hamburger menu on small screens, and optimized media loading

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Angular 17 (standalone components) |
| Language | TypeScript |
| Styling | CSS3 with custom properties, responsive breakpoints |
| Typography | Playfair Display (headings), Source Sans 3 (body) — via Google Fonts |
| Build | Angular CLI, tree-shaken production builds |
| Hosting | Compatible with GitHub Pages, Netlify, Vercel, or any static host |

## Design

The site follows a detailed design specification centered around Pakistan green (`#01411C`) with clean white backgrounds, generous whitespace, and high-contrast typography. Key design decisions include:

- Minimum 16px body text with 1.5–1.7 line spacing for readability
- Serif/sans-serif font pairing (Playfair Display + Source Sans 3)
- Green accent color used consistently across headings, icons, dividers, and CTAs
- Alternating content layouts to maintain visual rhythm through the single-page scroll

## Project Structure

```
src/
├── app/
│   ├── app.component.ts        # Main component logic & data
│   ├── app.component.html      # Full page template
│   └── app.component.css       # Component styles
├── assets/
│   ├── logo.png                # Organization logo
│   ├── pakistan-map.svg         # Map graphic
│   ├── slides/                 # Hero slideshow media
│   └── sections/               # Scroll section images
├── styles.css                  # Global styles & CSS variables
└── index.html                  # Entry point
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm (included with Node)

### Installation

```bash
cd path/to/ky1
npm install
```

### Development

```bash
npx ng serve
```

Open [http://localhost:4200](http://localhost:4200). The app hot-reloads on file changes.

### Production Build

```bash
npx ng build --configuration production
```

Output is written to `dist/ladders-for-learning/` — deploy to any static hosting provider.

---

## Customization

**Colors** — Edit CSS variables in `src/styles.css` (e.g., `--green: #01411C;`)

**Content** — Update the data arrays in `src/app/app.component.ts`: `programs`, `impactStats`, `scrollSections`, `slides`

**Donate Link** — Find the donate section in `app.component.html` and update the `href`

**Images** — Replace placeholder files in `src/assets/` (use compressed JPGs; optimize at [squoosh.app](https://squoosh.app))


