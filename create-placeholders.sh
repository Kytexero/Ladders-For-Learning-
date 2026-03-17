#!/bin/bash
# Generate placeholder images for Ladders for Learning website
# Replace these with your actual images later

# Function to create a simple SVG placeholder
create_placeholder() {
  local path="$1"
  local text="$2"
  local bg="${3:-#01411C}"
  
  cat > "$path" << EOF
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <rect width="1200" height="800" fill="${bg}"/>
  <text x="600" y="380" text-anchor="middle" font-family="sans-serif" font-size="28" fill="white" opacity="0.7">${text}</text>
  <text x="600" y="420" text-anchor="middle" font-family="sans-serif" font-size="16" fill="white" opacity="0.5">Replace with your image</text>
</svg>
EOF
}

ASSETS="src/assets"

# Slideshow images
create_placeholder "${ASSETS}/slides/slide1.jpg" "Slide 1 — Students Learning" "#01411C"
create_placeholder "${ASSETS}/slides/slide2.jpg" "Slide 2 — Community Program" "#024a21"
create_placeholder "${ASSETS}/slides/slide3.jpg" "Slide 3 — Children with Books" "#036330"

# Section images
create_placeholder "${ASSETS}/sections/empowering.jpg" "Empowering Through Education" "#01411C"
create_placeholder "${ASSETS}/sections/building.jpg" "Building Futures" "#024a21"
create_placeholder "${ASSETS}/sections/community.jpg" "Community Driven" "#036330"

echo "Placeholder images created. Replace them with your actual images."
echo ""
echo "Expected image files:"
echo "  src/assets/logo.png             — Your Ladders for Learning logo"
echo "  src/assets/slides/slide1.jpg    — Hero slideshow image 1"
echo "  src/assets/slides/slide2.jpg    — Hero slideshow image 2"
echo "  src/assets/slides/slide3.jpg    — Hero slideshow image 3"
echo "  src/assets/slides/intro-video.mp4 — Hero slideshow video (autoplay, loop)"
echo "  src/assets/sections/empowering.jpg — Scroll section image"
echo "  src/assets/sections/building.jpg   — Scroll section image"
echo "  src/assets/sections/community.jpg  — Scroll section image"
