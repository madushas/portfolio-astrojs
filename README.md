# Portfolio - Astro + Svelte

A modern, brutalist-themed portfolio website built with Astro and Svelte.

## 🚀 Tech Stack

**Note:** Despite the repository name "portfolio-nextjs", this project uses **Astro** (not Next.js). The repository was initially planned for Next.js but was rebuilt with Astro for better performance and flexibility.

- **Framework:** Astro 5.x
- **UI Components:** Svelte 5.x
- **Styling:** Tailwind CSS 4.x
- **CMS:** Sanity.io
- **Animations:** Motion.js
- **Deployment:** Cloudflare Pages

## 📦 Installation

```bash
pnpm install
```

## 🛠️ Development

```bash
pnpm dev
```

## 🏗️ Build

```bash
pnpm build
```

## 📁 Project Structure

```
├── src/
│   ├── components/      # Reusable components
│   │   ├── Home/       # Homepage sections
│   │   ├── shared/     # Shared components
│   │   └── ui/         # UI primitives
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   ├── styles/         # Global styles
│   └── lib/            # Utilities & helpers
├── public/             # Static assets
└── astro.config.mjs    # Astro configuration
```

## ✨ Features

- ✅ Dark/Light mode toggle
- ✅ Smooth scroll animations (Lenis)
- ✅ SEO optimized with JSON-LD
- ✅ Responsive design
- ✅ Accessibility compliant (WCAG AA)
- ✅ TypeScript support
- ✅ Sanity CMS integration
- ✅ Contact form (Web3Forms)

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```env
PUBLIC_WEB3FORM_ACCESS_KEY=your_key_here
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_POSTHOG_KEY=your_key_here
PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

## 👤 Author

**Madusha Sandaruwan**
- GitHub: [@madushas](https://github.com/madushas)
- LinkedIn: [madushas](https://linkedin.com/in/madushas)
- Twitter: [@_MadushaS](https://twitter.com/_MadushaS)
