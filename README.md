# Ladders for Learning — Website

A modern Angular 17 website for the Ladders for Learning nonprofit organization, focused on education in Haroonabad & Bhawalnagar, Pakistan.

## Quick Start (Command Prompt / Terminal)

### Prerequisites
You need **Node.js** installed (version 18 or higher).  
Download it from: https://nodejs.org/

To check if you have it:
```
node --version
npm --version
```

### Step-by-Step Setup

1. **Open your terminal** (Command Prompt, PowerShell, or Terminal)

2. **Navigate to the project folder:**
   ```
   cd path/to/ky1
   ```

3. **Install dependencies:**
   ```
   npm install
   ```
   This will download all the Angular packages. It may take a few minutes the first time.

4. **Run the development server:**
   ```
   npx ng serve
   ```

5. **Open your browser** and go to:
   ```
   http://localhost:4200
   ```

   The site will automatically reload whenever you save a file change.

### Building for Production

To create an optimized production build:
```
npx ng build --configuration production
```
The output files will be in the `dist/ladders-for-learning/` folder. You can upload these to any static hosting service (GitHub Pages, Netlify, Vercel, etc.).

---

## Adding Your Images

Replace the placeholder files with your actual images:

| File Path | Description | Recommended Size |
|-----------|-------------|-----------------|
| `src/assets/logo.png` | Ladders for Learning logo | ~200px wide |
| `src/assets/slides/slide1.jpg` | Hero slideshow image 1 | 1920×1080 |
| `src/assets/slides/slide2.jpg` | Hero slideshow image 2 | 1920×1080 |
| `src/assets/slides/slide3.jpg` | Hero slideshow image 3 | 1920×1080 |
| `src/assets/slides/intro-video.mp4` | Hero slideshow video | Web-optimized MP4 |
| `src/assets/sections/empowering.jpg` | Scroll section photo | 1200×800 |
| `src/assets/sections/building.jpg` | Scroll section photo | 1200×800 |
| `src/assets/sections/community.jpg` | Scroll section photo | 1200×800 |

### Tips for Images
- Use `.jpg` for photos (compressed, smaller file size)
- Optimize images for web before adding (use https://squoosh.app)
- The hero video should be compressed for web playback (< 15MB ideally)

---

## Project Structure

```
ky1/
├── src/
│   ├── app/
│   │   ├── app.component.ts       ← Main component logic
│   │   ├── app.component.html     ← Full page template
│   │   └── app.component.css      ← All component styles
│   ├── assets/
│   │   ├── logo.png               ← Your logo
│   │   ├── pakistan-map.svg        ← Map graphic
│   │   ├── slides/                ← Hero slideshow media
│   │   └── sections/              ← Scroll section images
│   ├── styles.css                 ← Global styles & CSS variables
│   ├── index.html                 ← HTML entry point (fonts loaded here)
│   └── main.ts                    ← Angular bootstrap
├── angular.json                   ← Angular CLI config
├── package.json                   ← Dependencies
├── tsconfig.json                  ← TypeScript config
└── README.md                      ← This file
```

## Design Specifications (from PDF)

- **Primary color:** Pakistan green `#01411C`
- **Background:** White
- **Headings:** Playfair Display (serif), green
- **Body text:** Source Sans 3 (sans-serif), charcoal, 16px minimum, 1.5–1.7 line spacing
- **Navigation:** Sticky header with hamburger on mobile
- **Hero:** Full-width slideshow (3 images + 1 video) with fade transitions and overlay
- **Scroll sections:** Alternating 60% image / 40% text layout
- **Mission:** White background, centered text with green dividers
- **Programs:** 4-item grid with icons in green
- **Map:** Static image of Pakistan focusing on Haroonabad & Bhawalnagar
- **Impact:** Number counters with large green numbers
- **Donate CTA:** Full-width green background, white text, single CTA button
- **Footer:** White background, green divider, org name, nonprofit status, contact link

## Customization

### Changing Colors
Edit the CSS variables in `src/styles.css`:
```css
:root {
  --green: #01411C;
  --charcoal: #333333;
  /* etc. */
}
```

### Changing Content
Edit the arrays in `src/app/app.component.ts`:
- `programs` — Program cards
- `impactStats` — Impact numbers
- `scrollSections` — Alternating scroll content
- `slides` — Hero slideshow items

### Changing the Donate Link
In `src/app/app.component.html`, find the donate section and update the `href`:
```html
<a href="https://your-donation-link.com" ...>Donate Now</a>
```

---

## Pushing to GitHub

After making changes:
```
git add .
git commit -m "Redesign website to match PDF specifications"
git push origin master
```

## Troubleshooting

**"ng is not recognized"** — Use `npx ng serve` instead of `ng serve`, or install Angular CLI globally:
```
npm install -g @angular/cli
```

**Port 4200 already in use** — Use a different port:
```
npx ng serve --port 4300
```

**Node version too old** — Update Node.js from https://nodejs.org/ (need v18+)
