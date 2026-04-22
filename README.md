# devmonograph

Single-page personal homepage built with React + TypeScript + Vite.

## Features

- Section-based one-page layout: `Hero`, `About`, `Skills`, `Experience`, `Projects`, `Blog`
- Internationalization: `en` / `zh` / `ja`
- Theme switch: `dark` / `light`, persisted in `localStorage`
- Responsive layout and navigation for desktop and mobile
- Blog feed: fetch from Halo API, fallback to local placeholder data on failure

## Tech Stack

- React 18
- TypeScript 5
- Vite 5
- Tailwind CSS 3 + PostCSS
- GSAP + Lucide React + developer-icons
- ESLint + Prettier + Husky + lint-staged

## Quick Start

### 1. Install dependencies

```bash
pnpm install
```

If PowerShell blocks script execution, use:

```powershell
pnpm.cmd install
```

### 2. Start local development

```bash
pnpm dev
```

Default URL: `http://localhost:5173`

## Available Commands

- `pnpm dev`: start dev server
- `pnpm build`: run `tsc -b` and build production bundle
- `pnpm preview`: preview built output
- `pnpm lint`: run ESLint with `--max-warnings 0`
- `pnpm format`: format `src/**/*.{ts,tsx,css}` with Prettier

## Project Structure

```text
src/
  components/           # Page sections (Hero/About/Skills/...)
  components/reactbits/ # Reusable animation primitives
  data/                 # Structured content data
  locales/              # Locale modules
  styles/               # Design tokens and base styles
  App.tsx
  i18n.tsx
  main.tsx
public/                 # Static assets
docs/                   # Supplemental docs and design handoff files
```

## Content and Configuration

- Locale dictionaries: `src/locales/*`
- Structured page data: `src/data/*`
- Blog config: `src/config.ts` (`base`, `previewCount`, cache key, cache TTL)

## Minimum Quality Gate

Run before commit:

```bash
pnpm lint
pnpm build
```

For UI changes, verify:

- Breakpoints: `sm (480px)`, `md (768px)`, `lg (900px)`
- Themes: `dark` and `light`
- Languages: `en`, `zh`, `ja`
