# UNIQUOVA — Premium 3D E-Commerce Growth Agency Website

A world-class, fully responsive digital growth agency website designed and engineered for **UNIQUOVA** — an **E-Commerce Account Management & Growth Agency**.

Built with a light-themed futuristic aesthetic combining the sophistication of an international creative agency, a luxury technology brand, and an interactive 3D digital experience across every section.

---

## 💎 Brand Positioning & Core Business Model

- **Agency Name**: **UNIQUOVA** (`UQ` lettermark).
- **Agency Type**: Full-Service E-Commerce Account Management & Marketplace Growth Agency.
- **Service-Based Model**: Delivered by real human marketplace practitioners and account directors — **NOT** a SaaS platform, **NOT** an automated bot dashboard, and **NOT** a software subscription.
- **Centralized Brand Identity**: Configured in `src/config/site.ts` for simple maintenance of all channels, contacts, addresses, and services.
- **Marketplaces Supported**:
  - **Amazon** (Amazon India, Amazon US, UK, EU, UAE — Seller Central & Brand Registry)
  - **Flipkart** (Flipkart Seller Hub, F-Assured badge strategy, Big Billion Days preparation)
  - **Meesho** (Pan-India tier-2/3/4 social commerce, zero-commission scaling, RTO control)
  - **Shopify** (Direct-to-consumer flagship stores, UX/CRO, omnichannel inventory synchronization)

---

## 🎨 Visual Identity & Design System

### Color Palette
- **Light Lavender Grey**: `#E9E7EF` (Primary ambient light canvas)
- **Soft Lavender**: `#B9A7E8` (Signature glowing accents and interactive elements)
- **Rich Black**: `#17151D` (Deep contrasting typography and dark sections)
- **Pure White**: `#FFFFFF` (Surface cards and elevated containers)
- **Neutral Grey**: `#D8D5DF` (Refined borders, lines, and secondary badges)

### Typography
- **Space Grotesk**: Editorial display headlines, wordmarks, and numbers.
- **Inter**: Clean, legible body text, form elements, and UI labels.
- **Manrope**: Premium subheadings and metric accents.

---

## 🌐 3D Interactive Experiences & Advanced Visual Polish

1. **Cinematic Entrance Intro Loader (`src/components/ui/IntroLoader.tsx`)**:
   - High-tech entrance animation with dynamic 00% to 100% counter, glowing `UQ` emblem, and real-time terminal telemetry logs (`INITIALIZING 3D WEBGL CORE...`, `CONNECTING AMAZON & FLIPKART APIS...`).
   - Smooth curtain reveal using cubic-bezier transition, with `sessionStorage` persistence to prevent redundant interruptions.
2. **Custom 3D Cursor with Micro-Spark Particle Trails (`src/components/ui/CustomCursor.tsx`)**:
   - Lag-free precision pointer, smooth spring follower ring with magnetic expander over interactive elements, and a high-performance HTML5 canvas trailing micro-sparks and lavender stardust.
3. **Live Marketplace Telemetry Marquee (`src/components/ui/LiveMarketplaceTicker.tsx`)**:
   - Real-time animated ticker streaming live marketplace operational standards (Amazon SPN Grade, Flipkart Tier 1 Elite, Meesho 0% Commission, Shopify Omnichannel Sync, TACoS PPC Discipline, Zero Bots).
4. **Global Living 3D Ambient Background (`src/components/3d/GlobalBackground3D.tsx`)**:
   - Continuous ambient 3D geometric token network (octahedrons, toruses, cubes, and dust particles) that subtly drifts across the full scroll height of every page.
   - Reacts smoothly to cursor position and viewport scrolling with real camera damping.
5. **Hero Floating E-Commerce Ecosystem (`src/components/3d/Hero3DCanvas.tsx`)**:
   - Custom procedural Three.js scene featuring floating parcel shipping boxes with tape and shipping labels, luxury D2C packages with metallic ribbons, floating glass product cards, rotating 3D coins, and a 350-particle stardust atmosphere.
   - Smooth mouse parallax camera damping, scroll-based elevation transitions, and soft lavender directional and rim lighting.
6. **Interactive 3D Perspective Card Tilt (`src/components/ui/Card3DTilt.tsx`)**:
   - Applied across **all** cards (Service Cards, Platform Cards, Process Steps, Case Studies, Testimonials, Form containers, and FAQs).
   - Real-time perspective rotation (`perspective(1000px) rotateX(...) rotateY(...) scale3d(...)`), dynamic specular lighting glare overlay, and multi-layer depth (`translateZ(30px)` on icons and headers).
7. **Audit 3D Interactive Core (`src/components/3d/Audit3DCanvas.tsx`)**:
   - Interactive glowing polyhedron with wireframe geometry, dual orbital rings, and orbiting multi-channel nodes in official marketplace colors (Amazon orange, Flipkart blue, Meesho pink, Shopify green).
8. **Reduced-Motion Support**:
   - Fully respects `prefers-reduced-motion: reduce` media queries.

---

## 🏛️ Website Architecture & Pages

- **`/`**: Flagship homepage with 12 complete sections:
  1. Announcement Bar
  2. Sticky Navbar with UQ badge & backdrop blur
  3. Hero Section with 3D Ecosystem
  4. Marketplace Ecosystem (Amazon, Flipkart, Meesho, Shopify) with 3D Tilt
  5. 6 Services with 3D Tilt and multi-layer depth
  6. Why Choose Us (rich black `#17151D` contrast section with soft lavender glow)
  7. How We Work (interactive 4-phase connected 3D timeline)
  8. Case Studies (standardized problem-strategy-delivery-outcome structure)
  9. Testimonials (3D carousel)
  10. Free Account Audit Section (3D visual + multi-field audit form)
  11. FAQ Accordion (8 operational questions with 3D tilt)
  12. Multi-column Footer (Bengaluru & London hubs, legal, contacts)
- **`/services`** & **`/services/[slug]`**: 6 dedicated service detail pages with scope checklists and 4-phase frameworks.
- **`/platforms`** & **`/platforms/[slug]`**: 4 dedicated platform playbooks (Amazon, Flipkart, Meesho, Shopify).
- **`/about`**: Agency heritage, human-first operator philosophy, and hub details.
- **`/case-studies`**: Filterable case study catalog.
- **`/contact`**: Direct channels, phone lines, and inquiry intake form.
- **`/privacy`** & **`/terms`**: Confidentiality & legal frameworks.
- **`/sitemap.xml`** & **`/robots.txt`**: Production SEO infrastructure.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd uniquova

# Install dependencies
npm install

# Start development server
npm run dev

# Or build and launch production server
npm run build
npm run start
```
