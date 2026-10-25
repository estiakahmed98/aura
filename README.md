# AURA Winter Landing – Report

## Stack
Next.js 15 (App Router) + React 19 + TypeScript, Three.js, plain CSS (globals.css), next/font (Anton, Italiana, Inter).

## 8 components (components/)
1. Hero – nav, lime headline drop-in animation, Three.js cloud over the model, CTA
2. Marquee – two counter-scrolling text bands + tilted photo card
3. ShopStyle – "Shop by signature style", 3 product cards (scroll reveal, hover lift)
4. Curate – "How we curate your winter look", lime panel with 3 steps
5. Drops – scroll-snap carousel with prev/next arrows
6. Loved – Three.js cloud over jacket, 4 floating review cards
7. Newsletter – footer with email form (client state), links, contact
8. Wordmark – giant AURA with scroll-driven parallax photos

Helpers: CloudScene.tsx (Three.js), Reveal.tsx (IntersectionObserver reveal). app/page.tsx stacks the 8 sections.

## Three.js
CloudScene builds a cloud from 8 white spheres, floats them with sin/cos, and eases rotation toward the pointer. Transparent canvas, ResizeObserver, full dispose on unmount, honours prefers-reduced-motion. Used in Hero and Loved.

## Images
No photos are bundled (original image assets were not available). Drop files into public/images with these names; missing files fall back to the colour placeholders:
hero-model.png, marquee.jpg, puffer.png, wool.png, knit.png, curate.png, drop1-4.jpg, coat.png, wm1.jpg, wm2.jpg

## Run
npm install && npm run dev (open http://localhost:3000). Production: npm run build && npm start.

## Known differences from the mock
- Image areas are placeholders until you add photos.
- Social icons are text; swap for an icon set if wanted.
- Pixel positions in Curate/Loved are approximate and responsive, not pixel-identical.
