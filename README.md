# DC Solar Uganda website
Vite + React + TypeScript. Run: `npm install && npm run dev`. Build: `npm run build`.

**Manage content**: products in `src/data/products.ts`; phone, WhatsApp number, brands in `src/config.ts`; colours/fonts/spacing in `src/styles/tokens.css`.
**Before launch**: set the real WhatsApp number (digits only), replace placeholder images, add `public/og.png` (1200x630), update `public/sitemap.xml` when you add products, and configure the host to serve `index.html` for all routes (SPA fallback).
**SEO tip**: for best indexing, prerender routes (e.g. `vite-plugin-ssr` / `vite-react-ssg`) or host on Netlify/Vercel prerendering.
