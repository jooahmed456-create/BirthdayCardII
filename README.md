<div align="center">

# ✦ Youssef Ahmedy — Pixel Portfolio

### A full-stack .NET developer's personal portfolio and blog, built with a unique retro pixel-art aesthetic.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-youssefahmedy.vercel.app-4a6cf7?style=for-the-badge)](https://youssefahmedy.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-The__Pixel__Portfolio-1a2447?style=for-the-badge&logo=github)](https://github.com/YoussefAhmedy/The_Pixel_Portfolio)
[![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

![Portfolio Preview](https://res.cloudinary.com/dkh59ytfc/image/upload/v1774123472/PicsArt_03-21-09.47.38_jc7kut.png)

Portfolio Preview - Light Mode

![Portfolio Preview](https://res.cloudinary.com/dkh59ytfc/image/upload/v1774123444/PicsArt_03-21-09.50.21_hoif8k.png)

Portfolio Preview - Dark Mode

</div>

---

## 📖 Overview

This is a personal portfolio and blog website for **Youssef Ahmedy**, a .NET Full-Stack Web Developer. The site is designed around a **pixel-art / retro gaming aesthetic** — from the custom pixel borders and Press Start 2P typography, to the dithering background and pixel cursor — while remaining fully responsive and production-ready.

The portfolio serves three core purposes:
- **Showcase projects** with dedicated detail pages covering tech stack, features, and GitHub links
- **Publish technical articles** on full-stack development, architecture, and modern web practices
- **Present professional services** in a memorable, visually distinctive format

---

## ✨ Features

### 🎮 Design & UX
- **Pixel Art Style** — Custom pixel borders, Press Start 2P + VT323 fonts, dithering canvas background
- **Light / Dark Mode** — Full theme toggle with a carefully tuned pixel-art colour palette (lavender light / deep navy dark)
- **Scroll Animations** — Framer Motion `whileInView` animations that trigger correctly on both desktop and mobile as you scroll
- **Responsive Layout** — Mobile-first design with a hamburger menu on small screens and full nav on desktop
- **CSS Zoom Scaling** — `zoom: 0.8` applied at `≥1024px` for a tighter desktop layout

### 📄 Pages
| Page | Description |
|------|-------------|
| `/` | Home — Hero, About, Services, Featured Works, Latest Articles |
| `/about` | Full about page with skills and background |
| `/works` | All projects grid |
| `/works/[slug]` | Individual project detail page |
| `/blog` | All articles grid |
| `/blog/[slug]` | Individual article detail page |

### 🧩 Components
- **PixelHero** — Animated hero with heading, tagline, CTA buttons, and badge overlays on the hero image
- **AboutSection** — Portrait image + biography + animated skill progress bars
- **ServicesSection** — Four service cards with hover animations
- **WorksCard / BlogCard** — Reusable cards with viewport-triggered entrance animations
- **NavMenu** — Desktop nav with active state highlighting; mobile animated hamburger dropdown with backdrop
- **PixelHeader** — Sticky header with scroll-aware background blur
- **PixelFooter** — Pixel-styled footer
- **DitheringBackground** — Canvas-rendered animated dithering background (client-only)
- **ThemeToggle** — Light/dark mode switcher

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | [Next.js 13.5.1](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5.2](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS 3.3](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Animations** | [Framer Motion 11](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theming** | [next-themes](https://github.com/pacocoursey/next-themes) |
| **Date Formatting** | [date-fns](https://date-fns.org/) |
| **Fonts** | Press Start 2P, VT323 (Google Fonts) |
| **Images** | Cloudinary CDN |
| **Deployment** | Vercel |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/YoussefAhmedy/The_Pixel_Portfolio.git
   cd The_Pixel_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
# Build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles, CSS variables, pixel utilities
│   ├── layout.tsx           # Root layout — header, footer, cursor, providers
│   ├── page.tsx             # Home page
│   ├── about/               # About page
│   ├── works/
│   │   ├── page.tsx         # All works listing
│   │   └── [slug]/page.tsx  # Individual work detail
│   └── blog/
│       ├── page.tsx         # All articles listing
│       └── [slug]/page.tsx  # Individual article detail
├── components/
│   ├── pixel-header.tsx     # Sticky navigation header
│   ├── pixel-hero.tsx       # Hero section
│   ├── pixel-footer.tsx     # Footer
│   ├── nav-menu.tsx         # Desktop + mobile hamburger nav
│   ├── about-section.tsx    # About + skills section
│   ├── services-section.tsx # Services cards section
│   ├── works-card.tsx       # Reusable works card
│   ├── blog-card.tsx        # Reusable blog card
│   ├── custom-cursor.tsx    # Custom cursor component
│   ├── pixel-separator.tsx  # Decorative section separator
│   └── ui/                  # shadcn/ui base components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── tailwind.config.ts       # Tailwind configuration
└── next.config.js           # Next.js configuration
```

---

## 🎨 Colour Palette

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Background | `#f0f2ff` near-white lavender | `#0d1226` deep navy |
| Foreground | `#1a2447` deep navy | `#c5cee0` silver-lavender |
| Primary | `#4a6cf7` royal blue | `#4a6cf7` royal blue |
| Secondary | `#c5cee0` silver-lavender | `#1a2447` base navy |
| Accent | `#8fa3d4` periwinkle | `#2d4080` mid navy-blue |

---

## 📬 Contact

**Youssef Ahmedy** — .NET Full-Stack Web Developer

[![GitHub](https://img.shields.io/badge/GitHub-YoussefAhmedy-1a2447?style=flat-square&logo=github)](https://github.com/YoussefAhmedy)
[![Portfolio](https://img.shields.io/badge/Portfolio-youssefahmedy.vercel.app-4a6cf7?style=flat-square)](https://youssefahmedy.vercel.app/)

---

<div align="center">
  <sub>Built with ✦ pixel-perfect precision by Youssef Ahmedy</sub>
</div>
