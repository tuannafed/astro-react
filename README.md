# Pet Insurance Landing Pages

A modern, responsive pet insurance website built with Astro, React, and Tailwind CSS. Features multiple landing pages optimized for different audiences and conversion goals.

## 🎯 Project Overview

This project contains three main landing pages:

- **Home Page** (`/`) - Main pet insurance landing page matching Knose.com.au
- **Partner Page** (`/partner`) - Pet Price Club exclusive offer page
- **Landing Page** (`/landing`) - Alternative landing page design

## 🚀 Project Structure

```text
/
├── public/                     # Static assets (copied to dist root)
├── src/
│   ├── assets/
│   │   ├── images/            # Images (copied to dist/assets/images/)
│   │   ├── icons/             # Icons (copied to dist/assets/icons/)
│   │   ├── robots.txt         # SEO robots file
│   │   ├── sitemap.xml        # SEO sitemap
│   │   └── _redirects         # Netlify redirects
│   ├── components/
│   │   ├── sections/
│   │   │   ├── home/          # Home page specific sections
│   │   │   ├── partner/       # Partner page specific sections
│   │   │   └── landing/       # Landing page specific sections
│   │   ├── ui/                # Reusable UI components
│   │   └── [shared-components]
│   ├── constants/             # Image paths and constants
│   ├── hooks/                 # Custom React hooks
│   ├── layouts/               # Astro layouts
│   ├── pages/                 # Astro pages (routes)
│   ├── styles/                # Global styles
│   └── utils/                 # Utility functions
├── scripts/                   # Build and optimization scripts
└── dist/                      # Production build output
```

## 🛠️ Tech Stack

- **[Astro](https://astro.build/)** - Static site generator
- **[React](https://react.dev/)** - Interactive components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[AOS](https://michalsnik.github.io/aos/)** - Scroll animations

## 🧞 Commands

All commands are run from the root of the project:

| Command                    | Action                                |
| :------------------------- | :------------------------------------ |
| `npm install`              | Install dependencies                  |
| `npm run dev`              | Start dev server at `localhost:4321`  |
| `npm run build`            | Build for production to `./dist/`     |
| `npm run build:production` | Build + optimize assets + format HTML |
| `npm run preview`          | Preview production build locally      |
| `npm run move-icons`       | Organize assets in dist folder        |
| `npm run format-html`      | Format and beautify HTML files        |

## 📁 Build Output Structure

After running `npm run build:production`, the `dist/` folder will contain:

```text
dist/
├── _redirects              # Netlify redirects
├── robots.txt              # SEO robots file
├── sitemap.xml             # SEO sitemap
├── index.html              # Home page
├── partner/index.html      # Partner page
├── landing/index.html      # Landing page
└── assets/
    ├── css/
    │   └── main.css        # Compiled CSS
    ├── icons/              # SVG icons
    │   ├── check-icon.svg
    │   ├── divider-icon.svg
    │   ├── favicon.svg
    │   ├── file.svg
    │   └── globe.svg
    ├── images/             # All images (PNG, WebP)
    │   ├── hero-*.png
    │   ├── section-*.png
    │   └── logo-*.webp
    └── js/
        ├── client.js       # React components
        ├── home.js         # Home page JS
        └── index.js        # Main JS bundle
```

## 🎨 Asset Management

### Images

- **Development**: Place images in `src/assets/images/`
- **Production**: Automatically copied to `dist/assets/images/`
- **Usage**: Import from `src/constants/index.ts`

### Icons

- **Development**: Place SVG icons in `src/assets/icons/`
- **Production**: Automatically copied to `dist/assets/icons/`
- **Usage**: Import from `src/constants/index.ts`

### Static Files

- **robots.txt**, **sitemap.xml**, **\_redirects** are automatically copied to dist root
- Images are optimized and organized during build process

## 🧩 Component Architecture

### Page-Specific Sections

Each page has its own dedicated components in separate folders:

- `src/components/sections/home/` - Home page sections
- `src/components/sections/partner/` - Partner page sections
- `src/components/sections/landing/` - Landing page sections

### Shared Components

- `src/components/ui/` - Reusable UI components (Button, Modal, Input, etc.)
- `src/components/` - Shared layout components (Footer, etc.)

### Barrel Exports

Each section folder includes an `index.ts` file for clean imports:

```typescript
// Import all home sections
import { HeroSection, USPsSection, QuoteFormSection } from '../components/sections/home'
```

## 🚀 Development Workflow

1. **Start Development**:

   ```bash
   npm run dev
   ```

2. **Add Images**:
   - Place new images in `src/assets/images/`
   - Update `src/constants/index.ts` with new paths
   - Use `/assets/images/filename.ext` paths

3. **Add Icons**:
   - Place new SVG icons in `src/assets/icons/`
   - Update `src/constants/index.ts` with new paths
   - Use `/assets/icons/filename.svg` paths

4. **Build for Production**:

   ```bash
   npm run build:production
   ```

5. **Deploy**:
   - Upload the entire `dist/` folder to your hosting provider
   - Netlify, Vercel, and GitHub Pages are recommended

## 🔧 Customization

### Colors & Branding

- Update `src/styles/globals.css` for color variables
- Modify Tailwind theme in `tailwind.config.js`

### Content

- Edit page content in respective section components
- Update meta tags in `src/layouts/Layout.astro`

### SEO

- Modify `src/assets/robots.txt` for search engine directives
- Update `src/assets/sitemap.xml` with your domain and pages
- Configure redirects in `src/assets/_redirects`

## 📱 Responsive Design

All components are built mobile-first with Tailwind CSS breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 🎭 Animations

The project uses AOS (Animate On Scroll) for smooth animations:

- Fade effects on section entry
- Hover animations with Tailwind CSS
- Custom keyframe animations in `globals.css`

## 🧪 Features

- ✅ Fully responsive design
- ✅ Multiple landing page variants
- ✅ SEO optimized
- ✅ Fast loading with Astro
- ✅ Interactive React components
- ✅ Type-safe with TypeScript
- ✅ Modern CSS with Tailwind
- ✅ Automated asset optimization
- ✅ Form handling and validation
- ✅ Scroll animations

## 📈 Performance

- Lighthouse Score: 95+ (Performance, SEO, Accessibility)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

Built with ❤️ using modern web technologies for optimal performance and user experience.
