---
name: kodekz-pixel-portfolio
description: Use when building, recreating or restyling a personal developer portfolio in the Kodekz style (kodekz.vercel.app) — a light gray monochrome site set in the Geist Pixel font, with a collapsible left sidebar, one 768px content column, numbered section labels ("01 — experience"), hairline rows, arrow links, metric tiles, and toast feedback. Also use when adding a page or component to a site already built with this skill.
---

# Kodekz Pixel Portfolio

## Overview

A complete, working UI kit for a one-person developer portfolio, taken from the live site at **kodekz.vercel.app** (Thristan Dave Bumagat). It is a Vite + React 19 single-page app styled with Tailwind v4 utilities plus one hand-written `src/index.css`. On the left is a sidebar that collapses to an icon rail on desktop and becomes a slide-in drawer on phones. On the right is a single `max-w-3xl` column of numbered sections.

Build it by copying the files under **Source files** **verbatim**, then replacing Thristan's content (name, links, experience, projects, stack, certificates, email) with the user's own.

**The look lives in the details:** the pixel font on everything, the four grays, 1px `#e4e4e4` hairlines that become a gray fill on hover, the `01 —` labels, and arrows that nudge 2px. Rewriting the CSS "in the same spirit" loses it. Copy, don't paraphrase.

## Non-negotiable design rules

Keep these when adding anything new:

1. **Monochrome gray.** Page `#f3f3f3`, ink `#1d1d1d`, muted `#737373`, hairline/hover `#e4e4e4`. There is no dark mode. Color is allowed in only three places:
   - availability green `#22c55e` (the "Available" dot and the "Freelance" chip);
   - the blue verified badge `#3b82f6` next to the name;
   - the GitHub calendar's green scale.
2. **Two fonts.** `Geist Pixel` is the default on every element (`*`) and gives the site its voice: the name, labels, nav, numbers and buttons. `Geist` is opt-in through the `.normal` modifier for readable copy: intro paragraphs, row titles, descriptions and chips. Arrows use `ui-monospace`. Load both from Google Fonts in `index.html`.
3. **Small type.** Body and labels are 14px (`.text`, muted). Meta is 12px (`.small`). Titles are 14px/600 ink (`.text-heavy`). Page titles are `text-2xl font-medium tracking-tight`. The name is `text-xl`, weight 600. Metric numbers are `text-xl`. Nothing is bigger than that.
4. **One column.** Every section is `max-w-3xl mx-auto px-6`. Home sections sit `mt-16` apart (`mt-12` before the stack). Grids appear only for certificates (`md:grid-cols-3`), service cards (`sm:grid-cols-2`) and the three metric tiles.
5. **Numbered section labels.** Every home section opens with a row: a muted `h1.text` reading `NN — name` (an em dash, lowercase) on the left, and a `view all →` `.tab` link on the right. The subpage that a section links to repeats the same label above its title.
6. **Rows over cards.** Lists are `.card` rows: a top and bottom hairline, `20px 8px` padding, and a gray fill on hover. Each row after the first adds `.bottom` so borders never double up. A linked row's title gets `.link-title`, which underlines on hover. Boxed cards exist only for certificates (`.outer-card` + `.inner-card`), and services (`.service-card`).
7. **Arrow vocabulary.** `↗` (`&#8599;`) means external, `→` (`&#8594;`) internal, `←` (`&#8592;`, with `.link-arrow--back`) back home. Every arrow is a `span.link-arrow` that nudges 2px toward its direction on hover, and the nudge is disabled under reduced motion.
8. **Hover = darken + bold.** Muted links (`.tab`, `.link`, `.navigation`) turn ink and weight 600 on hover. Rows and nav buttons fill with `#e4e4e4`.
9. **Shapes.** Most of the site is square. Chips are 16px radius, stack tags 6px (dashed for "view all"), certificate shells 16px with an 8px inner border, nav buttons 8px, and the avatar is round.
10. **Motion.** Sidebar width and page shift take 450ms `cubic-bezier(0.19, 1, 0.22, 1)`; the drawer slides for 650ms. Arrows ease over 180ms. Lenis handles smooth scrolling. Under `prefers-reduced-motion` the arrow nudge is turned off.
11. **Feedback is a toast.** Every copy, open and download action calls `toast` from `@yusufceng1z/ding-react`, which renders once at `top-center` in `App.jsx`.
12. **Icons** are 16px stroke icons with a 24 viewBox, stroke width 2 (1 on the Resources download icon), round caps and joins, and `currentColor`.

## Design tokens (hard-coded in `src/index.css`)

| Value | Use |
|---|---|
| `#f3f3f3` | page background, sidebar, drawer, certificate shell, selection text |
| `#1d1d1d` | ink: name, `.text-heavy`, hovers, `.button` background, selection background |
| `#737373` | muted: `.text`, labels, scrollbar thumb, dashed-tag hover |
| `#e4e4e4` | hairlines, borders, row/nav hover fill, `.chip` fill, scrollbar track |
| `#22c55e` | availability dot only |
| `#3b82f6` | verified badge only |
| `#EBEDF0`→`#216E39` | GitHub calendar scale |

Type scale: page title `text-2xl`/500, name `text-xl`/600, metric `text-xl`, title `.text-heavy` 14/600, body `.text` 14, meta `.small` 12, arrows 14 monospace.

Layout: the sidebar is 248px open and 68px collapsed at ≥768px. `.page-shell` shifts its `margin-left` to match through `.desktop-nav-open + .page-shell`. Below 768px a top bar holds the menu button, "Kodekz" and the "Available" dot, and a 248px drawer slides in from the left.

## Component catalog

| Piece | Where | What it is |
|---|---|---|
| Sidebar / drawer | `components/layout/Navbar.jsx` | `navLinks` array (label, route, 16px icon). Desktop: brand, collapse toggle (icon rotates 180°), "Available" dot, links. Mobile: top bar + drawer, Escape closes, body scroll locks, `data-lenis-prevent` |
| Footer | `components/layout/Footer.jsx` | Hairline + `©YEAR Name \| City, PH` |
| Hero | `pages/Home/sections/Heading.jsx` | 80px round avatar, pixel name + verified badge, `▹ Role`, justified intro with inline `.chip` keywords, dark "Download CV" `.button`, github/linkedin `↗` links, three metric tiles |
| Metric tiles | Hero | Three `.tile` links (`< 1` year, `10+` technologies, `3` projects) with `.left`/`.right` dividers |
| Section rows | `pages/Home/sections/*` | Experience (thin date rows), Projects, Stack (`.stack` tags + dashed "view all"), Education, Certifications (3-up `Certificate`), GitHub calendar |
| Certificate | `components/common/Certificate.jsx` | Props `certName`, `certProvider`, `link`; a "&lt; Verify &gt;" link inside a nested shell |
| GitHub calendar | `pages/Home/sections/Github.jsx` | `react-github-calendar`, rounded 12px blocks, total count, no legend, auto-scrolls to the latest week |
| Experience timeline | `pages/Experiences/Positions.jsx` | `experiences` data → initials logo box, vertical company/position lines, dot markers, first two skill tags then "+N skills" |
| Subpage header | every page in `pages/` | Optional label, `text-2xl` title, `.normal` lead, `← back home` tab on the right |
| Copy email | Services, Contacts | `mailto:` link whose click copies the address and toasts |
| Download toast | `pages/Resources/Resources.jsx` | Fake progress toast with a Cancel action, then saves the bundled `SKILL.md` as `portfolio-skill.md` |

Class vocabulary for new pages: `.text` / `.text.normal` / `.small` / `.text-heavy(.normal)`, `.card` / `.card.bottom` / `.card.thin`, `.link-title`, `.tab`, `.link`, `.link-arrow(--back)`, `.button`, `.chip`, `.stack` / `.stack.dotted`, `.tile` + `.left` / `.right`, `.outer-card` + `.inner-card`, `.service-card`, `.email`, `.hr`.

## Build steps

1. **Scaffold** a Vite React (JavaScript) app: `npm create vite@latest my-site -- --template react`. Delete the scaffold's `App.css`, `assets/react.svg` and `public/vite.svg`.
2. **Install** `react-router-dom lenis react-github-calendar @yusufceng1z/ding @yusufceng1z/ding-react tailwindcss @tailwindcss/vite`.
3. **Create every file under "Source files" exactly as written** at its path, replacing the scaffold's `index.html`, `vite.config.js`, `src/main.jsx`, `src/App.jsx` and `src/index.css`. `vite.config.js` and `jsconfig.json` set up the `@/` → `src/` alias that the imports rely on.
4. **Replace the content** with the user's own:
   - name, role, intro and links in `Heading.jsx`, `Footer.jsx` and `index.html` (title, meta tags, canonical URL);
   - GitHub username in `Github.jsx` and the brand "Kodekz" in `Navbar.jsx`;
   - the email in `Services.jsx` and `Contacts.jsx`;
   - the data arrays in `Positions.jsx`, `Stacks.jsx`, `Stack.jsx` and `Contacts.jsx`;
   - the rows in `Projects.jsx` (page and section), `Certificates.jsx`, `Certifications.jsx`, `Experience.jsx`, `Education.jsx`, `Services.jsx` and `Resources.jsx`;
   - the metric numbers in the hero tiles.

   Ask the user for anything you don't know. Never invent employers, certificates, clients or metrics.
5. **Assets:**
   - `src/assets/images/dev.png`: square avatar, shown at 80px round.
   - `src/assets/docs/resume.pdf`: the CV.
   - `src/assets/files/SKILL.md`: the file the Resources page offers for download.
   - In `public/`: `favicon.png` and `social-preview.png` (the OG image).
6. **Deploy** on Vercel with `vercel.json` rewriting every path to `/index.html`, so client-side routes survive a reload.
7. **Verify** (below) before calling it done.

## Adding to the site

- **New page:** create `src/pages/Name/Name.jsx` using the subpage header pattern (the `mx-auto mt-12 max-w-3xl px-6` wrapper; title and lead on the left, `← back home` on the right; `mb-10`). Then add a `<Route>` in `src/routes/AppRoutes.jsx` and an entry in `navLinks` in `Navbar.jsx` with a 16px stroke icon.
- **New home section:** create `src/pages/Home/sections/Name.jsx` with the `NN — name` label row, and render it in `src/pages/Home/Home.jsx`. Renumber the labels so they stay in order.
- **New list:** `.card` rows, adding `.bottom` to every row after the first. Wrap a row in `<a>` to link it, and give its title `.link-title`.
- **New shared component:** put it in `src/components/common/`, in its own folder if it has a CSS file.
- **New mobile rule:** Tailwind `sm:` / `md:` prefixes inline. The sidebar breakpoint is 768px (`md`).

## Common mistakes

| Mistake | Fix |
|---|---|
| Setting body copy in Geist Pixel | Paragraphs, row titles and chips need `.normal`. Pixel is for the name, labels, nav, numbers and buttons. |
| Adding accent colors or colored buttons | The palette is four grays. Emphasis comes from weight 600 and ink. Color only for availability, the badge and the calendar. |
| Double hairlines between rows | Every row after the first needs `.card.bottom`. |
| Arrows typed as plain text | Wrap them in `span.link-arrow` with `aria-hidden="true"`, or the hover nudge and spacing are lost. |
| Page content hidden under the sidebar | The page must sit in `.page-shell` right after the `<header>` that Navbar renders, because the margin uses the `+` sibling selector. |
| Drawer scrolls the page behind it | Keep `data-lenis-prevent` on `#mobile-menu` and the `mobile-menu-active` body class. |
| Importing `SKILL.md` without `?url` | Vite has no loader for `.md`. Import it as `@/assets/files/SKILL.md?url` and download it through `<a download>`. |
| 404 on reload of `/projects` | Add the `vercel.json` SPA rewrite. |
| Inventing content | Every string in the source files is Thristan's. Replace it with the user's, or leave a clear placeholder. |

## Verify

- `npm run build` and `npm run lint` pass.
- At ≥1200px: the sidebar collapses to 68px and expands again, and the page width follows it. At 375px: the top bar shows, the drawer opens, Escape closes it, and the page behind does not scroll.
- Home: the sections read `01`–`06` in order, the three metric tiles link to their pages, and the GitHub calendar renders scrolled to the latest week.
- Clicking the email copies it and shows a toast. "Download CV" opens the PDF. On Resources, the Portfolio Skill row shows a progress toast and saves `portfolio-skill.md`.
- With OS "reduce motion" on, the arrows don't nudge.

## Source files

Create each file at the path in its heading. Paths are relative to the project root.

### `index.html`

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thristan Dave Bumagat - Web Developer</title>
  <meta name="description" content="Thristan Dave Bumagat's portfolio: web development, full-stack projects, AI agent tooling, and hands-on software engineering." />
  <meta name="author" content="Thristan Dave Bumagat" />
  <link rel="canonical" href="https://kodekz.vercel.app/" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://kodekz.vercel.app/" />
  <meta property="og:site_name" content="Thristan Dave Bumagat" />
  <meta property="og:title" content="Thristan Dave Bumagat - Web Developer" />
  <meta property="og:description" content="Explore my web development portfolio, full-stack projects, and AI agent tooling." />
  <meta property="og:image" content="https://kodekz.vercel.app/social-preview.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="2160" />
  <meta property="og:image:height" content="2700" />
  <meta property="og:image:alt" content="Angled preview of Thristan Dave Bumagat's portfolio, featuring his profile, AI Coding Agent Orchestration project, and experience." />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Thristan Dave Bumagat - Web Developer" />
  <meta name="twitter:description" content="Explore my web development portfolio, full-stack projects, and AI agent tooling." />
  <meta name="twitter:image" content="https://kodekz.vercel.app/social-preview.png" />
  <meta name="twitter:image:alt" content="Angled preview of Thristan Dave Bumagat's web developer portfolio." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Geist+Pixel&family=Geist:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
</head>

<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>

</html>
```

### `vite.config.js`

```js
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

### `jsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### `vercel.json`

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactLenis } from "lenis/react";
import { BrowserRouter } from "react-router-dom";
import "lenis/dist/lenis.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ReactLenis root options={{ autoRaf: true, anchors: true }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactLenis>
  </StrictMode>,
);
```

### `src/App.jsx`

```jsx
import { Toaster } from "@yusufceng1z/ding-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <>
      <Toaster position="top-center" theme="system" />
      <Navbar />
      <div className="page-shell">
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
```

### `src/routes/AppRoutes.jsx`

```jsx
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Experiences from "@/pages/Experiences/Experiences";
import Stacks from "@/pages/Stacks/Stacks";
import Certificates from "@/pages/Certificates/Certificates";
import Projects from "@/pages/Projects/Projects";
import Services from "@/pages/Services/Services";
import Resources from "@/pages/Resources/Resources";
import Contacts from "@/pages/Contacts/Contacts";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/stacks" element={<Stacks />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/services" element={<Services />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default AppRoutes;
```

### `src/index.css`

```css
@import "tailwindcss";

* {
  box-sizing: border-box;
  font-family: "Geist Pixel", sans-serif;
  scrollbar-color: #737373 #e4e4e4;
  scrollbar-width: thin;
}

body {
  padding: 0;
  margin: 0;
  background-color: #f3f3f3;
  color: #1d1d1d;
}

body.mobile-menu-active {
  overflow: hidden;
}

.page-shell {
  width: 100%;
  margin-left: 0;
  transition:
    width 450ms cubic-bezier(0.19, 1, 0.22, 1),
    margin-left 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e4e4e4;
  padding:8px;
}

.mobile-nav__bar,
.desktop-nav__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.desktop-nav__bar {
  transition: margin 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

.mobile-menu {
  border-right: 1px solid #e4e4e4;
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 248px;
  height: 100dvh;
  padding: 8px 8px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #f3f3f3;
  opacity: 0;
  transform: translateX(-100%);
  visibility: hidden;
  transition:
    transform 650ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 300ms ease,
    visibility 0s linear 650ms;
}

.mobile-menu--open {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
  transition-delay: 0s;
}

.mobile-menu__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-menu__bar,
.desktop-nav__bar,
.sidebar-availability {
  margin-inline: 8px;
}

.mobile-menu__links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 48px;
}

.mobile-menu__footer {
  margin-bottom: 8px;
}

.desktop-nav {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e4e4e4;
  background-color: #f3f3f3;
  padding: 16px 8px;
  width: 248px;
  height: 100dvh;
  position: fixed;
  inset: 0 auto 0 0;
  z-index: 100;
  overflow: hidden;
  transition: width 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

.desktop-nav__label,
.desktop-nav__content,
.desktop-nav__footer {
  opacity: 1;
  visibility: visible;
  transition:
    opacity 200ms ease,
    visibility 200ms ease;
}

.desktop-nav__label {
  max-width: 160px;
  padding-left: 16px;
  overflow: hidden;
  transition:
    max-width 450ms cubic-bezier(0.19, 1, 0.22, 1),
    padding 450ms cubic-bezier(0.19, 1, 0.22, 1),
    opacity 200ms ease,
    visibility 200ms ease;
}

.desktop-nav--collapsed {
  width: 68px;
}

.desktop-nav--collapsed .desktop-nav__bar {
  justify-content: center;
  margin-inline: 0;
}

.desktop-nav--collapsed .desktop-nav__label {
  max-width: 0;
  min-width: 0;
  padding: 0 !important;
  margin: 0 !important;
}

.desktop-nav--collapsed .desktop-nav__label,
.desktop-nav--collapsed .desktop-nav__content,
.desktop-nav--collapsed .desktop-nav__footer {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.nav-toggle {
  display: grid;
  flex: 0 0 auto;
  padding: 0;
  border: 0;
  background: transparent;
  color: inherit;
  cursor: pointer;
  place-items: center;
}

.nav-toggle svg {
  transition: transform 450ms cubic-bezier(0.19, 1, 0.22, 1);
}

.nav-toggle--expanded svg {
  transform: rotate(180deg);
}

.nav-toggle:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 4px;
}

@media (min-width: 768px) {
  .mobile-nav {
    display: none;
  }

  .desktop-nav {
    display: flex;
  }

  .page-shell {
    width: calc(100% - 68px);
    margin-left: 68px;
  }

  .desktop-nav-open + .page-shell {
    width: calc(100% - 248px);
    margin-left: 248px;
  }
}

::selection {
  background-color: #1d1d1d;
  color: #f3f3f3;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #e4e4e4;
}

::-webkit-scrollbar-thumb {
  background: #737373;
  border: 2px solid #e4e4e4;
  border-radius: 999px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1d1d1d;
}

.navigation {
  padding: 8px 0;
}

.navigation:hover {
  font-weight: 600;
  color: #1d1d1d;
  border-radius: 8px;
}

.nav-btn {
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-btn:hover {
  background-color: #e4e4e4;
  border-radius: 8px;
}

a {
  font-family: "Geist Pixel", sans-serif;
}


.brand-name {
  font-weight: 600;
}

.devName {
  font-family: "Geist Pixel", sans-serif;
  font-weight: 600;
  color: #1d1d1d;
}

.role {
  font-family: "Geist Pixel", sans-serif;
  color: #1d1d1d;
}

.text {
  font-size: 14px;
  color: #737373;
}

.text.normal {
  font-family: "Geist", sans-serif;
}

.text.small,
.small {
  font-size: 12px;
}

.text-heavy {
  font-size: 14px;
  font-weight: 600;
  color: #1d1d1d;
}

.text-heavy.normal {
  font-family: "Geist", sans-serif;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  background-color: #1d1d1d;
  padding: 4px 8px;
}

.button:hover {
  color: #f3f3f3;
  cursor: pointer;
}

.link {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  padding: 4px;
}

.link-arrow {
  display: inline-block;
  margin-inline-start: 0.2em;
  font-family: ui-monospace, monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  vertical-align: 0.05em;
  opacity: 0.75;
  transition: transform 180ms ease, opacity 180ms ease;
}

.link-arrow--back {
  --arrow-shift: -2px;
  margin-inline-start: 0;
  margin-inline-end: 0.2em;
}

a:hover .link-arrow,
a:focus-visible .link-arrow {
  opacity: 1;
  transform: translateX(var(--arrow-shift, 2px));
}

@media (prefers-reduced-motion: reduce) {
  .link-arrow {
    transition: none;
  }

  a:hover .link-arrow,
  a:focus-visible .link-arrow {
    transform: none;
  }
}

.link:hover {
  color: #1d1d1d;
  font-weight: 600;
}

.tile {
  padding: 20px;
  border-top: 1px solid #e4e4e4;
}

.tile:hover .link {
  color: #1d1d1d;
  font-weight: 600;
}

.tile h1 {
  font-weight: 600;
}

.left {
  border-right: 1px solid #e4e4e4;
}

.right {
  border-left: 1px solid #e4e4e4;
}

.tab:hover {
  color: #1d1d1d;
  font-weight: 600;
}

.card {
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  padding: 20px 8px;
}

.card.thin {
  padding: 10px 0 !important;
}

.card:hover {
  background-color: #e4e4e4;
}

.card.bottom {
  border-top: none;
}

.card:hover .link {
  color: #1d1d1d;
  font-weight: 600;
}

.card:hover .link-title {
  text-decoration: underline;
}

.stack {
  padding: 4px 8px;
  border: 1px solid #e4e4e4;
  border-radius: 6px;
}

.stack.dotted {
  border: 1px dashed #e4e4e4;
}

.stack.dotted:hover {
  border: 1px dashed #737373;
}

.outer-card {
  background-color: #f3f3f3;
  padding: 8px;
  min-height: 150px;
  border-radius: 16px;
}

.outer-card:hover .link {
  color: #1d1d1d;
  font-weight: 600;
}

.inner-card {
  border: 1px solid #e4e4e4;
  border-radius: 8px;
}

.github-calendar {
  color: #1d1d1d;
}

.github-calendar text {
  fill: #1d1d1d;
  font-family: "Geist Pixel", sans-serif;
  font-size: 12px;
}

.github-calendar .react-activity-calendar__footer,
.github-calendar .react-activity-calendar__footer * {
  font-size: 12px;
}

.hr {
  border-top: 1px solid #e4e4e4;
}

.email {
  color: #1d1d1d;
}

.email:hover {
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.chip {
  border-radius: 16px;
  padding: 4px 8px;
  background-color: #e4e4e4;
  color: #1d1d1d;
}

.service-card {
  border: 1px solid #e4e4e4;
  padding: 16px;
  transition: background-color 150ms ease, border-color 150ms ease;
}

.service-card:hover {
  background-color: #e4e4e4;
}
```

### `src/components/layout/Navbar.jsx`

```jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
    {
        label: "Experience",
        to: "/experiences",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M8.25 6.5V6C8.25 4.3431 9.5931 3 11.25 3H12.75C14.4069 3 15.75 4.3431 15.75 6V6.5M2 10.5C6 12.75 18 12.75 22 10.5M9.5 12.1132V13.5C9.5 14.6046 10.3954 15.5 11.5 15.5H12.5C13.6046 15.5 14.5 14.6046 14.5 13.5V12.1132M5 6.5H19C20.6569 6.5 22 7.8431 22 9.5V18C22 19.6569 20.6569 21 19 21H5C3.3431 21 2 19.6569 2 18V9.5C2 7.8431 3.3431 6.5 5 6.5Z" />
            </svg>
        ),
    },
    {
        label: "Projects",
        to: "/projects",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M4.1043 15.8632C2.8523 15.4715 2 14.3118 2 13L2 6C2 4.3431 3.3431 3 5 3L19 3C20.6569 3 22 4.3431 22 6L22 13C22 14.3118 21.1477 15.4715 19.8957 15.8632M12.8 14.0667L16.8 19.4C17.2944 20.0592 16.824 21 16 21L8 21C7.176 21 6.7056 20.0592 7.2 19.4L11.2 14.0667C11.6 13.5333 12.4 13.5333 12.8 14.0667Z" />
            </svg>
        ),
    },
    {
        label: "Stack",
        to: "/stacks",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path
                    d="M12.4382 2.1011L21.4382 6.4886C22.1873 6.8538 22.1873 7.9212 21.4382 8.2864L12.4382 12.6739C12.1616 12.8087 11.8384 12.8087 11.5618 12.6739L2.5618 8.2864C1.8127 7.9212 1.8127 6.8538 2.5618 6.4886L11.5618 2.1011C11.8384 1.9663 12.1616 1.9663 12.4382 2.1011ZM2 12.625L11.5618 17.2864C11.8384 17.4212 12.1616 17.4212 12.4382 17.2864L22 12.625M2 17.2375L11.5618 21.8989C11.8384 22.0337 12.1616 22.0337 12.4382 21.8989L22 17.2375"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        label: "Certificates",
        to: "/certificates",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path
                    d="M20.3692 8.5334C21.4021 9.3883 22 10.6592 22 12C22 13.3408 21.4021 14.6117 20.3692 15.4666C20.3825 15.6071 20.3891 15.748 20.3891 15.8891C20.3891 18.3744 18.3744 20.3891 15.8891 20.3891C15.748 20.3891 15.6071 20.3825 15.4666 20.3692C14.6117 21.4021 13.3408 22 12 22C10.6592 22 9.3883 21.4021 8.5334 20.3692C8.3929 20.3825 8.252 20.3891 8.1109 20.3891C5.6256 20.3891 3.6109 18.3744 3.6109 15.8891C3.6109 15.748 3.6175 15.6071 3.6308 15.4666C2.5979 14.6117 2 13.3408 2 12C2 10.6592 2.5979 9.3883 3.6308 8.5334C3.6175 8.3929 3.6109 8.252 3.6109 8.1109C3.6109 5.6256 5.6256 3.6109 8.1109 3.6109C8.252 3.6109 8.3929 3.6175 8.5334 3.6308C9.3883 2.5979 10.6592 2 12 2C13.3408 2 14.6117 2.5979 15.4666 3.6308C15.6071 3.6175 15.748 3.6109 15.8891 3.6109C18.3744 3.6109 20.3891 5.6256 20.3891 8.1109C20.3891 8.252 20.3825 8.3929 20.3692 8.5334Z"
                    fill="none"
                />
                <path
                    d="M8.45 8.45L11.29 11.29L8.45 14.13M12.71 15.55L15.55 15.55"
                    fill="none"
                />
            </svg>
        ),
    },
    {
        label: "Services",
        to: "/services",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path d="M4 16V6C4 4.8954 4.8954 4 6 4H18C19.1046 4 20 4.8954 20 6V16M2.5 16H21.5C21.7761 16 22 16.2239 22 16.5V18C22 19.1046 21.1046 20 20 20H4C2.8954 20 2 19.1046 2 18V16.5C2 16.2239 2.2239 16 2.5 16Z" />
            </svg>
        ),
    },
    {
        label: "Resources",
        to: "/resources",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M14 2H8C5.79086 2 4 3.79086 4 6V18C4 20.2091 5.79086 22 8 22H16C18.2091 22 20 20.2091 20 18V8L14 2ZM14 2V5C14 6.65685 15.3431 8 17 8H20M8 13H12M8 17H16" />
            </svg>
        ),
    },
    {
        label: "Contact",
        to: "/contacts",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
            >
                <path
                    d="M2 4C2 2.8954 2.8954 2 4 2L7 2C8.1046 2 9 2.8954 9 4L9 7C9 7.6295 8.7036 8.2223 8.2 8.6L7.7388 8.9459C7.487 9.1348 7.3388 9.4312 7.3388 9.7459C7.3388 9.8992 7.374 10.0504 7.4417 10.1879C8.8053 12.9552 11.0448 15.1947 13.8121 16.5583C13.9496 16.626 14.1008 16.6612 14.2541 16.6612C14.5688 16.6612 14.8652 16.513 15.0541 16.2612L15.4 15.8C15.7777 15.2964 16.3705 15 17 15L20 15C21.1046 15 22 15.8954 22 17L22 20C22 21.1046 21.1046 22 20 22C10.0589 22 2 13.9411 2 4Z"
                    fill="none"
                />
            </svg>
        ),
    },
];

function NavToggle({ expanded, controls, label, onClick }) {
    return (
        <button
            className={`nav-toggle${expanded ? " nav-toggle--expanded" : ""}`}
            type="button"
            aria-expanded={expanded}
            aria-controls={controls}
            aria-label={label}
            onClick={onClick}
        >
            <div className="nav-btn">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <path d="M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM9 3V21M13 9L16 12L13 15" />
                </svg>
            </div>
        </button>
    );
}

function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isDesktopOpen, setIsDesktopOpen] = useState(true);

    useEffect(() => {
        document.body.classList.toggle("mobile-menu-active", isMobileOpen);

        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setIsMobileOpen(false);
            }
        };

        window.addEventListener("keydown", closeOnEscape);

        return () => {
            document.body.classList.remove("mobile-menu-active");
            window.removeEventListener("keydown", closeOnEscape);
        };
    }, [isMobileOpen]);

    return (
        <header
            className={isDesktopOpen ? "desktop-nav-open" : "desktop-nav-closed"}
        >
            <nav className="mobile-nav" aria-label="Mobile navigation">
                <div className="mobile-nav__bar">
                    <div className="flex flex-row items-center gap-2">
                        <NavToggle
                            expanded={isMobileOpen}
                            controls="mobile-menu"
                            label={
                                isMobileOpen ? "Close navigation menu" : "Open navigation menu"
                            }
                            onClick={() => setIsMobileOpen((isOpen) => !isOpen)}
                        />
                        <Link
                            className="whitespace-nowrap brand-name"
                            to="/"
                            onClick={() => setIsMobileOpen(false)}
                        >
                            Kodekz
                        </Link>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <svg
                            width={8}
                            height={8}
                            viewBox="0 0 24 24"
                            aria-label="Available"
                        >
                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                        </svg>
                        <p className="text small mr-4">Available</p>
                    </div>
                </div>

                <div
                    id="mobile-menu"
                    className={`mobile-menu${isMobileOpen ? " mobile-menu--open" : ""}`}
                    aria-hidden={!isMobileOpen}
                    data-lenis-prevent
                >
                    <div>
                        <div className="mobile-menu__bar pl-4">
                            <Link
                                className="whitespace-nowrap brand-name"
                                to="/"
                                tabIndex={isMobileOpen ? 0 : -1}
                                onClick={() => setIsMobileOpen(false)}
                            >
                                Kodekz
                            </Link>
                            <NavToggle
                                expanded={isMobileOpen}
                                controls="mobile-menu"
                                label="Close navigation menu"
                                onClick={() => setIsMobileOpen(false)}
                            />
                        </div>
                        <div className="mobile-menu__links pl-6 pr-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    className="text small navigation flex items-center gap-4"
                                    to={link.to}
                                    tabIndex={isMobileOpen ? 0 : -1}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="mobile-menu__footer pl-4 pr-4"></div>
                </div>
            </nav>

            <nav
                className={`desktop-nav${isDesktopOpen ? "" : " desktop-nav--collapsed"}`}
                aria-label="Desktop navigation"
            >
                <div>
                    <div className="desktop-nav__bar">
                        <Link
                            className="desktop-nav__label whitespace-nowrap brand-name"
                            to="/"
                        >
                            Kodekz
                        </Link>
                        <NavToggle
                            expanded={isDesktopOpen}
                            controls="desktop-menu"
                            label={isDesktopOpen ? "Collapse sidebar" : "Expand sidebar"}
                            onClick={() => setIsDesktopOpen((isOpen) => !isOpen)}
                        />
                    </div>

                    <div id="desktop-menu" className="desktop-nav__content">
                        <div className="sidebar-availability flex flex-row items-center gap-2 pl-4">
                            <svg
                                width={8}
                                height={8}
                                viewBox="0 0 24 24"
                                aria-label="Available"
                            >
                                <circle cx="12" cy="12" r="10" fill="#22c55e" />
                            </svg>
                            <p className="text small">Available</p>
                        </div>
                        <div className="mt-12 flex flex-col gap-2 pl-6 pr-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    className="text small navigation flex items-center gap-4"
                                    to={link.to}
                                >
                                    {link.icon}
                                    <span>{link.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="desktop-nav__footer mb-2 pl-4 pr-4">
                    
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
```

### `src/components/layout/Footer.jsx`

```jsx
function Footer() {
    return (
        <div className="mt-12 md:mt-24">
            <div className="max-w-3xl mx-auto px-6 mt-6 text-center mb-6">
                <p className="hr mb-6"></p>
                <p className="text small footer">
                    &copy;<span>{new Date().getFullYear()}</span> Thristan Dave Bumagat |
                    Tarlac, PH
                </p>
            </div>
        </div>
    );
}
export default Footer;
```

### `src/components/common/Certificate.jsx`

```jsx
function Certificate(props) {
    return (
        <div className="h-full">
            <div className="outer-card h-full shadow-lg">
                <a className="block h-full" target="_blank" href={props.link}>
                    <div className="inner-card flex h-full flex-col items-center justify-center p-4 text-center">
                        <h1 className="text-heavy normal">{props.certName}</h1>
                        <p className="text">{props.certProvider}</p>
                        <p className="text link mt-2">&lt; Verify &gt;</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Certificate;
```

### `src/pages/Home/Home.jsx`

```jsx
import Heading from "./sections/Heading";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Github from "./sections/Github";

function Home() {
  return (
    <>
      <Heading />
      <Experience />
      <Projects />
      <Stack />
      <Education />
      <Certifications />
      <Github />
    </>
  );
}

export default Home;
```

### `src/pages/Home/sections/Heading.jsx`

```jsx
import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";
import resume from "@/assets/docs/resume.pdf";
import devpfp from "@/assets/images/dev.png";

function Hero() {
    return (
        <div className="mt-10 md:mt-12">
            <div className="max-w-3xl mx-auto px-6">
                <div className="flex flex-row gap-4 items-center">
                    <img
                        className="w-20 h-20 rounded-full"
                        src={devpfp}
                        alt="Thristan Dave Bumagat"
                        srcset=""
                    />
                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row items-center gap-2">
                            <h1 className="devName text-xl">Thristan Dave Bumagat</h1>
                            <svg viewBox="0 0 24 24" width="15" height="15" fill="#3b82f6">
                                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.416-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .495.083.965.238 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path>
                            </svg>
                        </div>
                        <div>
                            <h1 className="text font-normal role">&#9657; Web Developer</h1>
                        </div>
                    </div>
                </div>
                <p className="text font-normal normal text-justify mt-6">
                    A 3rd-year{" "}
                    <span className="text normal font-medium chip inline-flex items-center gap-2 align-middle whitespace-nowrap">
                        Computer Science
                    </span>{" "}
                    student, aspiring software engineer. Building clean{" "}
                    <span className="text normal font-medium chip inline-flex items-center gap-2 align-middle whitespace-nowrap">
                        &lt;/&gt; full-stack
                    </span>{" "}
                    platforms, bridging frontier{" "}
                    <span className="text normal font-medium chip inline-flex items-center gap-2 align-middle whitespace-nowrap">AI</span> models with
                    agentic tooling, and architecting normalized relational backends.
                </p>
                <div className="flex flex-row items-center justify-between gap-3 sm:gap-8 mt-6">
                    <a
                        className="text button whitespace-nowrap"
                        target="_blank"
                        href={resume}
                        onClick={() => toast.success("Resume opened in a new tab")}
                    >
                        Download CV
                    </a>
                    <div className="flex flex-row items-center gap-3 sm:gap-8">
                        <a
                            className="text link whitespace-nowrap"
                            target="_blank"
                            href="https://github.com/3stannn"
                        >
                            github{" "}
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </a>
                        <a
                            className="text link whitespace-nowrap"
                            target="_blank"
                            href="https://www.linkedin.com/in/kodekz01"
                        >
                            linkedin{" "}
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </a>
                    </div>
                </div>
                <div className="flex flex-row gap-8 mt-6">
                    <div className="flex w-full justify-between">
                        <Link className="tile left w-full" to="/experiences">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-xl">&lt; 1</h1>
                                <p className="text link">
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </p>
                            </div>
                            <p className="text normal">year experience</p>
                        </Link>
                        <Link className="tile w-full" to="/stacks">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-xl">10+</h1>
                                <p className="text link">
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </p>
                            </div>
                            <p className="text normal">technologies</p>
                        </Link>
                        <Link className="tile right w-full" to="/projects">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-xl">3</h1>
                                <p className="text link">
                                    <span className="link-arrow" aria-hidden="true">
                                        &#8599;
                                    </span>
                                </p>
                            </div>
                            <p className="text normal">projects shipped</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
```

### `src/pages/Home/sections/Experience.jsx`

```jsx
import { Link } from "react-router-dom";

function Experience() {
    return (
        <div className="max-w-3xl mx-auto px-6 mt-16">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">01 — experience</h1>
                <Link className="text tab whitespace-nowrap" to="/experiences">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
            <div className="card thin flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text text-xs sm:text-sm shrink-0 whitespace-nowrap sm:w-36">
                        2026 - Present
                    </p>
                    <h1 className="text-heavy normal text-sm sm:text-base">AWSLC - Tech Officer</h1>
                </div>
                <p className="text text-xs sm:text-sm sm:text-right">AWS - Genesis | TSU Chapter</p>
            </div>
            <div className="card thin bottom flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text text-xs sm:text-sm shrink-0 whitespace-nowrap sm:w-36">
                        2024 - Present
                    </p>
                    <h1 className="text-heavy normal text-sm sm:text-base">Web Developer</h1>
                </div>
                <p className="text text-xs sm:text-sm sm:text-right">Freelance</p>
            </div>
            <div className="card thin bottom flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 sm:py-1 gap-1 sm:gap-4">
                <div className="flex items-baseline justify-between sm:justify-start sm:gap-12">
                    <p className="text text-xs sm:text-sm shrink-0 whitespace-nowrap sm:w-36">
                        2022 - Present
                    </p>
                    <h1 className="text-heavy normal text-sm sm:text-base">Graphic Designer</h1>
                </div>
                <p className="text text-xs sm:text-sm sm:text-right">Freelance</p>
            </div>
        </div>
    );
}
export default Experience;
```

### `src/pages/Home/sections/Projects.jsx`

```jsx
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div>
            <div className="max-w-3xl mx-auto px-6 mt-16">
                <div className="flex flex-row justify-between mb-4">
                    <h1 className="text">02 — projects</h1>
                    <Link className="text tab" to="/projects">
                        view all{" "}
                        <span className="link-arrow" aria-hidden="true">
                            &#8594;
                        </span>
                    </Link>
                </div>
                <a target="_blank" href="https://usekip.vercel.app/">
                    <div className="card flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                Kip - AI Coding Agent Orchestrator
                            </h1>
                            <p className="text">
                                AI orchestration utility that prevents low-quality AI code
                                generation
                            </p>
                        </div>
                        <div>
                            <p className="text text-right">Dev Tool</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://insta-frame-three.vercel.app/">
                    <div className="card bottom flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                InstaFrame — Webpage Studio & Responsive Viewports
                            </h1>
                            <p className="text">
                                A web tool to preview responsive websites across devices and
                                capture realistic mockups.
                            </p>
                        </div>
                        <div>
                            <p className="text text-right">Dev Tool</p>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="https://schedy-sepia.vercel.app/">
                    <div className="card bottom flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                Schedy — Shared Workspace Calendar
                            </h1>
                            <p className="text">
                                A minimalist shared workspace and productivity
                            </p>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Projects;
```

### `src/pages/Home/sections/Stack.jsx`

```jsx
import { Link } from "react-router-dom";

const technologies = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Python",
    "Java",
    "Node.js",
    "Express.js",
];

function Stack() {
    return (
        <div className="max-w-3xl mx-auto px-6 mt-12">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">03 — tech stack</h1>
                <Link className="text tab" to="/stacks">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
                {technologies.map((technology) => (
                    <span key={technology} className="stack text normal">
                        {technology}
                    </span>
                ))}
                <Link className="stack dotted text tab" to="/stacks">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
        </div>
    );
}
export default Stack;
```

### `src/pages/Home/sections/Education.jsx`

```jsx
function Education() {
    return (
        <div className="max-w-3xl mx-auto px-6 mt-16">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">04 — education</h1>
            </div>
            <div className="card flex flex-row justify-between">
                <div>
                    <h1 className="text-heavy normal">Tarlac State University</h1>
                    <p className="text normal">Bachelor of Science in Computer Science</p>
                </div>
                <div>
                    <p className="text text-right">2024 - Present</p>
                </div>
            </div>
        </div>
    );
}
export default Education;
```

### `src/pages/Home/sections/Certifications.jsx`

```jsx
import Certificate from "@/components/common/Certificate";
import { Link } from "react-router-dom";

function Certifications() {
    return (
        <div className="max-w-3xl mx-auto px-6 mt-16">
            <div className="flex flex-row justify-between mb-4">
                <h1 className="text">05 — certifications</h1>
                <Link className="text tab" to="/certificates">
                    view all <span className="link-arrow" aria-hidden="true">&#8594;</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                <Certificate
                    certName="Intro to Networks"
                    certProvider="CCNA"
                    link="https://www.credly.com/badges/a4bb5c18-4a8a-4cc5-9719-78c7b6e53e15/public_url"
                />
                <Certificate
                    certName="Switching, Routing, and Wireless Essentials"
                    certProvider="CCNA"
                    link="https://www.credly.com/badges/702e4599-77ff-4f5e-b686-348ce7b047a1/public_url"
                />
                <Certificate
                    certName="HTML Fundamentals"
                    certProvider="CodeCred"
                    link="https://www.codecred.dev/verify/482e33bd-2832-4efa-af1a-acc7ad4105f5"
                />
            </div>
        </div>
    );
}
export default Certifications;
```

### `src/pages/Home/sections/Github.jsx`

```jsx
import { GitHubCalendar } from "react-github-calendar";
import { useEffect, useRef } from "react";

export default function GitHubCalendarWidget() {
    const calendarRef = useRef(null);
    useEffect(() => {
        const calendar = calendarRef.current;
        let observer;

        const scrollToLatest = () => {
            const scrollContainer = [...calendar.querySelectorAll("*")].find(
                (element) => element.scrollWidth > element.clientWidth,
            );

            if (scrollContainer) {
                scrollContainer.scrollLeft = scrollContainer.scrollWidth;
                observer?.disconnect();
                return true;
            }

            return false;
        };

        if (!scrollToLatest()) {
            observer = new MutationObserver(scrollToLatest);
            observer.observe(calendar, { childList: true, subtree: true });
        }

        return () => observer?.disconnect();
    }, []);

    return (
        <div
            ref={calendarRef}
            className="github-calendar max-w-3xl mx-auto px-6 mt-16"
        >
            <div className="flex flex-row justify-between mb-6">
                <h1 className="text">06 — github</h1>
                <a
                    className="text tab"
                    target="_blank"
                    href="https://github.com/3stannn"
                >
                    @3stannn <span className="link-arrow" aria-hidden="true">&#8599;</span>
                </a>
            </div>
            <GitHubCalendar
                username="3stannn"
                colorScheme="light"
                theme={{
                    light: ["#EBEDF0", "#9BE9A8", "#40C463", "#30A14E", "#216E39"],
                }}
                blockSize={12}
                blockMargin={4}
                renderBlock={(block, activity) => {
                    return (
                        <g style={{ cursor: "pointer" }}>
                            <rect
                                {...block.props}
                                rx={2}
                                ry={2}
                                data-count={activity.count}
                            />
                        </g>
                    );
                }}
                showTotalCount={true}
                showColorLegend={false}
            />
        </div>
    );
}
```

### `src/pages/Experiences/Experiences.jsx`

```jsx
import { Link } from "react-router-dom";
import Positions from './Positions';

function Experiences() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">01 — experience</p>
                    <h1 className="text-2xl font-medium tracking-tight">Experience</h1>
                    <p className="text normal mt-4 max-w-xl">
                        Taking client projects from initial wireframe to live, deployed
                        product.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">&#8592;</span> back home
                </Link>
            </div>
            <Positions/>
        </div>
    );
}
export default Experiences;
```

### `src/pages/Experiences/Positions.jsx`

```jsx
const experiences = [
  {
    company: "AWS Learning Club - Genesis",
    initials: "LC",
    employment: "Organization Officer",
    location: "Tarlac State University",
    positions: [
      // {
      //   title: "Tech Officer",
      //   date: "Nov 2026 - Present · 1 month",
      //   description: [
      //     "Co-founded the AWS Learning Club – TSU Chapter, establishing the organization’s foundational community and student engagement.",
      //   ],
      //   skills: ["Cloud Computing", "AWS"],
      //   // extraSkills: 2,
      // },
      {
        title: "Tech Officer",
        date: "Nov 2026 - Present · 1 month",
        description: [
          "Co-founded the AWS Learning Club – TSU Chapter, establishing the organization’s foundational community and student engagement.",
        ],
        skills: ["Cloud Computing", "AWS"],
        // extraSkills: 2,
      },
    ],
  },
  {
    company: "Programmers' Den",
    initials: "PD",
    employment: "Organization Officer",
    location: "Tarlac State University",
    positions: [
      {
        title: "Finance | Graphic Designer",
        date: "S.Y 2025 - 2026",
        description: [
          "Managed budget allocation, fund tracking, and financial documentation for organization initiatives while designing promotional graphics, publication materials, and visual branding for programming workshops and competitions.",
        ],
        skills: ["Budgeting", "Branding"],
        extraSkills: [1],
      },
    ],
  },
  {
    company: "Junior Philippine Computer Society",
    initials: "JP",
    employment: "Organization Officer",
    location: "Tarlac State University",
    positions: [
      {
        title: "Graphic Designer",
        date: "S.Y 2024 - 2025",
        description: [
          "Created official publication materials, event banners, and social media collaterals for college-wide tech seminars, assemblies, and student campaigns, maintaining a consistent and engaging visual brand identity.",
        ],
        skills: ["Brand Identity", "Visual Design"],
        extraSkills: [1],
      },
    ],
  },
  {
    company: "Web Developer",
    initials: "WD",
    employment: "Freelance",
    location: "Remote",
    positions: [
      {
        title: "",
        date: "2024 - Present",
        description: [
          "Build responsive websites and web applications from concept to deployment, focusing on clear interfaces, reliable functionality, and performant user experiences.",
        ],
        skills: ["Web Development", "React", "Responsive Design"],
      },
    ],
  },
  {
    company: "Graphic Designer",
    initials: "GD",
    employment: "Freelance",
    location: "Remote",
    positions: [
      {
        title: "",
        date: "2022 - Present",
        description: [
          "Create visual identities, social media assets, and marketing materials that communicate ideas clearly across digital and print touchpoints.",
        ],
        skills: ["Brand Identity", "Marketing Design", "Visual Design"],
      },
    ],
  },
];

function Positions() {
  return (
    <section className="mx-auto max-w-3xl px-4 text-neutral-900">
      {/* Experience timeline */}
      <div className="space-y-12">
        {experiences.map((company, index) => (
          <div key={company.company} className="relative flex gap-5">
            {/* Company logo and timeline */}
            <div className="relative flex w-12 shrink-0 justify-center">
              {/* Vertical company timeline */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-1/2 top-12 h-[calc(100%+3rem)] w-px -translate-x-1/2 bg-neutral-200" />
              )}

              {/* Company logo */}
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-200 bg-white text-xs font-medium text-neutral-700">
                {company.initials}
              </div>
            </div>

            {/* Company details */}
            <div className="min-w-0 flex-1">
              <h3 className="text-heavy normal">{company.company}</h3>

              <p className="mt-1 text">{company.employment}</p>

              {company.location && (
                <p className="mt-1 text small">{company.location}</p>
              )}

              {/* Positions */}
              <div className="mt-6 ml-6 space-y-8">
                {company.positions.map((position, i) => (
                  <div key={position.title} className="relative">
                    {/* Position timeline */}
                    {i !== company.positions.length - 1 && (
                      <div className="absolute -left-5.25 top-2.5 h-[calc(100%+2rem)] w-px bg-neutral-200" />
                    )}
                    <div className="absolute -left-6.25 top-1.5 h-2 w-2 rounded-full border border-neutral-300 bg-white" />

                    <h4 className="text-heavy">{position.title}</h4>

                    <p className="mt-2 text small">{position.date}</p>

                    {/* Description */}
                    <div className="mt-4 text">
                      {position.description.map((paragraph, j) => (
                        <p key={j}>{paragraph}</p>
                      ))}
                    </div>

                    {/* Skills */}
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {position.skills.slice(0, 2).map((skill) => (
                        <span key={skill} className="stack text small normal">
                          {skill}
                        </span>
                      ))}

                      {position.extraSkills > 0 && (
                        <span className="stack text small normal">
                          +{position.extraSkills} skills
                        </span>
                      )}

                      {position.skills.length > 2 &&
                        !position.extraSkills &&
                        position.skills.slice(2).map((skill) => (
                          <span key={skill} className="stack text small normal">
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Positions;
```

### `src/pages/Projects/Projects.jsx`

```jsx
import { Link } from "react-router-dom";

function Projects() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">02 — projects</p>
                    <h1 className="text-2xl font-medium tracking-tight">Projects </h1>
                    <p className="text normal mt-4 max-w-xl">
                        Systems I've built for clients, and the things I build for myself.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">&#8592;</span> back home
                </Link>
            </div>
            <a target="_blank" href="https://usekip.vercel.app/">
                <div className="card flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">Kip - AI Coding Agent Orchestrator</h1>
                        </div>
                        <div>
                            <p className="text text-right">Dev Tool</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Kip is an easy-setup AI orchestration utility that prevents
                            low-quality AI code generation, optimizing workflows for Codex,
                            Claude Code, and Antigravity.
                        </p>
                    </div>
                </div>
            </a>
            <a
                target="_blank"
                href="https://marketplace.visualstudio.com/items?itemName=kodekz01.simply-slate-theme"
            >
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">Simply Slate Theme</h1>
                        </div>
                        <div>
                            <p className="text text-right">VS Code</p>
                            <p className="text text-right">Theme</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            A minimalist VS Code theme built for developers seeking a refined
                            aesthetic. Combines soft slate palettes with intentional contrast
                            to keep the editor clean, modern, and easy on the eyes.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://insta-frame-three.vercel.app/">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                InstaFrame — Webpage Studio & Responsive Viewports
                            </h1>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                            <p className="text text-right">Web Extension</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Eliminates the friction of manual browser resizing and third-party
                            mockup tools. Provides live, multi-device viewport previews and
                            converts active web tabs into studio-grade mockups in a single
                            click.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://schedy-sepia.vercel.app/">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">
                                Schedy — Shared Workspace and Calendar
                            </h1>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Designed and engineered an intuitive shared workspace that pairs
                            event scheduling with a central bulletin board. Built with
                            responsive layouts and real-time state updates to keep teams
                            aligned effortlessly.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://expense-tracker-fawn-psi-24.vercel.app/">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">Expense Tracker</h1>
                        </div>
                        <div>
                            <p className="text text-right">Web App</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            A clean personal finance web app designed to log transactions,
                            categorize spending, and visualize cash flow in real time.
                        </p>
                    </div>
                </div>
            </a>
            <a target="_blank" href="https://github.com/3stannn/Tyto">
                <div className="card bottom flex flex-col justify-between gap-4">
                    <div className="flex flex-row justify-between">
                        <div>
                            <h1 className="text-heavy normal link-title">Tyto — Payment Ledger System</h1>
                        </div>
                        <div>
                            <p className="text text-right">Application</p>
                        </div>
                    </div>
                    <div>
                        <p className="text">
                            Architected a reliable ledger management system to handle
                            transaction entries, compute real-time balances, and maintain
                            financial records. Emphasized clean UI controls and rigorous data
                            integrity.
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default Projects;
```

### `src/pages/Stacks/Stacks.jsx`

```jsx
import { Link } from "react-router-dom";

const stackGroups = [
    {
        title: "Frontend",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Bootstrap",
            "TypeScript",
            "Next.js",
        ],
    },
    {
        title: "Backend & Database",
        technologies: [
            "Node.js",
            "Express.js",
            "Python",
            "Java",
            "PHP",
            "SQL",
            "MongoDB",
            "Supabase",
        ],
    },
    {
        title: "Tools",
        technologies: [
            "Git",
            "GitHub",
            "VS Code",
            "Vite",
            "Antigravity",
            "Codex",
            "Visual Studio",
            "Postman",
            "npm",
        ],
    },
    {
        title: "Design Tools",
        technologies: ["Photoshop", "Illustrator", "Figma"],
    },
];

function Stacks() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">03 — tech stack</p>
                    <h1 className="text-2xl font-medium tracking-tight">
                        Tools I work with
                    </h1>
                    <p className="text normal mt-4 max-w-xl">
                        Technologies I use to design, build, and ship web applications.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">&#8592;</span> back home
                </Link>
            </div>

            <div className="border-t border-[#e4e4e4]">
                {stackGroups.map((group) => (
                    <section
                        key={group.title}
                        className="grid gap-4 border-b border-[#e4e4e4] py-7 sm:grid-cols-[9rem_1fr]"
                    >
                        <h2 className="text">{group.title}</h2>
                        <div className="flex flex-wrap gap-2">
                            {group.technologies.map((technology) => (
                                <span key={technology} className="stack text normal">
                                    {technology}
                                </span>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Stacks;
```

### `src/pages/Certificates/Certificates.jsx`

```jsx
import Certificate from "@/components/common/Certificate";
import { Link } from "react-router-dom";

function Certificates() {
    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <p className="text mb-2">05 — certifications</p>
                    <h1 className="text-2xl font-medium tracking-tight">
                        Certificates
                    </h1>
                    <p className="text normal mt-4 max-w-xl">Credentials & Qualifications.</p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">&#8592;</span> back home
                </Link>
            </div>
            <div>
                <p className="text mb-4">Hackathon</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate
                        certName="IBM Bob 2.0 Hackathon"
                        certProvider="LABLAB.AI"
                        link="https://lablab.ai/u/@kodekz/ai-hackathons/ibm-bob-2-hackathon/certificate"
                    />
                </div>
            </div>
            <div className="mt-10">
                <p className="text mb-4">Networks</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate
                        certName="Intro to Networks"
                        certProvider="CCNA"
                        link="https://www.credly.com/badges/a4bb5c18-4a8a-4cc5-9719-78c7b6e53e15/public_url"
                    />
                    <Certificate
                        certName="Switching, Routing, and Wireless Essentials"
                        certProvider="CCNA"
                        link="https://www.credly.com/badges/702e4599-77ff-4f5e-b686-348ce7b047a1/public_url"
                    />
                </div>
            </div>
            <div className="mt-10">
                <p className="text mb-4">Web</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate
                        certName="HTML Fundamentals"
                        certProvider="CodeCred"
                        link="https://www.codecred.dev/verify/482e33bd-2832-4efa-af1a-acc7ad4105f5"
                    />
                </div>
            </div>
            <div className="mt-10">
                <p className="text mb-4">Backend & Database</p>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                    <Certificate
                        certName="Relational Model to Document Model"
                        certProvider="MongoDB"
                        link="https://www.credly.com/badges/bafb3311-e2b4-4829-8835-98328523e015/public_url"
                    />
                </div>
            </div>
        </div>
    );
}
export default Certificates;
```

### `src/pages/Services/Services.jsx`

```jsx
import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";

function Services() {
    const handleCopyEmail = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText("thristandave12@gmail.com");
            toast.success("Email copied to clipboard!");
        } catch {
            toast.error("Failed to copy email");
        }
    };

    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-medium tracking-tight">
                        What I Can Build for You
                    </h1>
                    <p className="text normal mt-4 max-w-xl">
                        I design and develop responsive, user-friendly websites and web
                        applications tailored to your goals.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">
                        &#8592;
                    </span>{" "}
                    back home
                </Link>
            </div>
            <div>
                <div className="card flex flex-row items-center gap-2">
                    <span className="text">Currently working: </span>
                    <span className="chip flex flex-row items-center gap-2">
                        <svg
                            width={8}
                            height={8}
                            viewBox="0 0 24 24"
                            aria-label="Available"
                        >
                            <circle cx="12" cy="12" r="10" fill="#22c55e" />
                        </svg>
                        <span className="text normal">Freelance</span>
                    </span>
                </div>
            </div>
            <div className="mt-10">
                <span className="text">What I build</span>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="service-card flex flex-col gap-2 h-full">
                        <span className="text-heavy normal">Websites</span>
                        <span className="text normal">
                            Clean, modern websites crafted for personal brands, growing
                            businesses, and creative projects.
                        </span>
                    </div>
                    <div className="service-card flex flex-col gap-2 h-full">
                        <span className="text-heavy normal">Custom CRMs</span>
                        <span className="text normal">
                            Tailored dashboards and client management systems built to
                            streamline your exact business workflow—without the bloat of
                            off-the-shelf software.
                        </span>
                    </div>
                    <div className="service-card flex flex-col gap-2 h-full">
                        <span className="text-heavy normal">Automation</span>
                        <span className="text normal">
                            Eliminating repetitive tasks with smart, automated workflows.
                        </span>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <span className="text">Have a project in mind?</span>
                <div className="mt-2 flex flex-row items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7" />
                    </svg>
                    <a
                        className="text email"
                        href="mailto:thristandave12@gmail.com"
                        onClick={handleCopyEmail}
                    >
                        thristandave12@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Services;
```

### `src/pages/Resources/Resources.jsx`

```jsx
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";
import portfolioSkill from "@/assets/files/SKILL.md?url";

const MD_ICON = `data:image/svg+xml;utf8,${encodeURIComponent(
    `
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <circle cx="16" cy="16" r="16" fill="#2b2d31"/>
  <text x="16" y="16.5" text-anchor="middle" dominant-baseline="central" fill="#ffffff" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="10.5" letter-spacing="0.5">MD</text>
</svg>
`.trim(),
)}`;

function Resources() {
    const downloadIntervalRef = useRef(null);

    useEffect(() => {
        return () => {
            if (downloadIntervalRef.current) {
                clearInterval(downloadIntervalRef.current);
            }
        };
    }, []);

    const handleDownload = (e) => {
        e.preventDefault();

        if (downloadIntervalRef.current) {
            return;
        }

        let progress = 0;
        const fileName = "portfolio-skill.md";

        const cancelDownload = () => {
            if (downloadIntervalRef.current) {
                clearInterval(downloadIntervalRef.current);
                downloadIntervalRef.current = null;
            }
        };

        const toastId = toast.info(fileName, {
            description: "Downloading · 0%",
            progress: 0,
            image: MD_ICON,
            action: {
                label: "Cancel",
                onClick: () => {
                    cancelDownload();
                    return {
                        type: "info",
                        title: "Download cancelled",
                        description: fileName,
                        progress: null,
                        duration: 2500,
                    };
                },
            },
        });

        downloadIntervalRef.current = setInterval(() => {
            const activeToast = toast.getState().toasts.find((t) => t.id === toastId);
            if (
                !activeToast ||
                activeToast.phase === "exit" ||
                activeToast.phase === "closing"
            ) {
                cancelDownload();
                return;
            }

            progress += Math.floor(Math.random() * 8) + 6;

            if (progress >= 100) {
                progress = 100;
                cancelDownload();

                toast.update(toastId, {
                    type: "success",
                    title: fileName,
                    description: "Download complete",
                    progress: null,
                    action: null,
                    duration: 3500,
                });

                const link = document.createElement("a");
                link.href = portfolioSkill;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                toast.update(toastId, {
                    description: `Downloading · ${progress}%`,
                    progress: progress / 100,
                });
            }
        }, 120);
    };

    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-medium tracking-tight">Resources</h1>
                    <p className="text normal mt-4 max-w-xl">
                        My go-to templates, tools, and guides—all in one spot.
                    </p>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">
                        &#8592;
                    </span>{" "}
                    back home
                </Link>
            </div>
            <p className="text mb-4">Tools I use</p>
            <div className="card flex flex-col">
                <span className="text-heavy">Claude Code</span>
                <span className="text">Pro Plan</span>
            </div>
            <div className="card bottom flex flex-col">
                <span className="text-heavy">Claude Design</span>
                <span className="text">Creative assets</span>
            </div>
            <div className="card bottom flex flex-col">
                <span className="text-heavy">Codex</span>
                <span className="text">Pro Plan</span>
            </div>
            <div className="card bottom flex flex-col mb-12">
                <span className="text-heavy">Gemini</span>
                <span className="text">Pro Plan</span>
            </div>
            <p className="text mb-4">Skills I use</p>
            <a
                href={portfolioSkill}
                download="portfolio-skill.md"
                onClick={handleDownload}
                className="cursor-pointer"
            >
                <div className="card">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-heavy">Portfolio Skill</span>
                            <span className="text">My own Portfolio Skill</span>
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 3V14M8 10L12 14L16 10M4 18V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V18" />
                        </svg>
                    </div>
                </div>
            </a>
            <a href="https://usekip.vercel.app/">
                <div className="card bottom mb-8">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-heavy">
                                Kip - AI Coding Agent Orchestration
                            </span>
                            <span className="text">Open Source</span>
                        </div>
                        <p className="text link">
                            <span className="link-arrow" aria-hidden="true">
                                &#8599;
                            </span>
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Resources;
```

### `src/pages/Contacts/Contacts.jsx`

```jsx
import { Link } from "react-router-dom";
import { toast } from "@yusufceng1z/ding-react";

const contactGroups = [
    {
        title: "links",
        contacts: [
            {
                name: "GitHub",
                username: "3stannn",
                href: "https://github.com/3stannn",
            },
            {
                name: "LinkedIn",
                username: "thristandavebumagat",
                href: "https://linkedin.com/in/thristandavebumagat",
            },
        ],
    },
    {
        title: "social",
        contacts: [
            {
                name: "TikTok",
                username: "kodekzdev",
                href: "https://www.tiktok.com/@kodekzdev",
            },
            {
                name: "Discord",
                username: "kodekz01",
                href: "https://discord.com/users/662096336161603602",
            },
        ],
    },
];

function Contacts() {
    const handleCopyEmail = async (e) => {
        e.preventDefault();
        try {
            await navigator.clipboard.writeText("thristandave12@gmail.com");
            toast.success("Email copied to clipboard!");
        } catch {
            toast.error("Failed to copy email");
        }
    };

    return (
        <div className="mx-auto mt-12 max-w-3xl px-6">
            <div className="mb-10 flex items-start justify-between gap-6">
                <div>
                    <h1 className="text-2xl font-medium tracking-tight">Get in Touch</h1>
                    <p className="text normal mt-4 max-w-xl">
                        Have an opportunity, a project in mind, or just want to connect?
                        Reach out anytime.
                    </p>
                    <div className="mt-2 flex flex-row items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path d="M5 4H19C20.6569 4 22 5.34315 22 7V17C22 18.6569 20.6569 20 19 20H5C3.34315 20 2 18.6569 2 17V7C2 5.34315 3.34315 4 5 4ZM2 7L11.2929 11C11.7154 11.2817 12.2846 11.2817 12.7071 11L22 7" />
                        </svg>
                        <a
                            className="text email"
                            href="mailto:thristandave12@gmail.com"
                            onClick={handleCopyEmail}
                        >
                            thristandave12@gmail.com
                        </a>
                    </div>
                    <a
                        className="text button whitespace-nowrap mt-4"
                        onClick={() => toast.success("On the Works ;)")}
                    >
                        Send a Message
                    </a>
                </div>
                <Link className="text tab whitespace-nowrap" to="/">
                    <span className="link-arrow link-arrow--back" aria-hidden="true">
                        &#8592;
                    </span>{" "}
                    back home
                </Link>
            </div>
            <div>
                {contactGroups.map((group, index) => (
                    <section key={group.title} className={index > 0 ? "mt-10" : ""}>
                        <p className="text">{group.title}</p>

                        <div className="links-container mt-4">
                            {group.contacts.map((contact, contactIndex) => (
                                <a
                                    key={contact.name}
                                    href={contact.href}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <div
                                        className={
                                            contactIndex > 0
                                                ? "card bottom flex flex-row items-center justify-between"
                                                : "card flex flex-row items-center justify-between"
                                        }
                                    >
                                        <div>
                                            <p className="text-heavy normal link-title">
                                                {contact.name}
                                            </p>
                                            <p className="text">@{contact.username}</p>
                                        </div>
                                        <p className="text link">
                                            <span className="link-arrow" aria-hidden="true">
                                                &#8599;
                                            </span>
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
export default Contacts;
```
