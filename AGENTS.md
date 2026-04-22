# Repository Guidelines

## Project Structure & Module Organization
- `src/main.tsx` bootstraps the app, and `src/App.tsx` composes all single-page sections.
- `src/components/` contains page sections (`Hero`, `About`, `Skills`, etc.); `src/components/reactbits/` holds reusable animation primitives.
- `src/data/` stores structured content, `src/locales/` stores locale modules, and `src/i18n.tsx` defines language/theme contexts and translation hooks.
- `src/styles/base.css` defines design tokens and theme variables; `src/index.css` contains Tailwind layers and shared component classes.
- `public/` is for static assets; `docs/` holds supplemental project docs/artifacts.

## Build, Test, and Development Commands
- `pnpm dev`: start the Vite development server.
- `pnpm build`: run `tsc -b` and produce a production bundle with Vite.
- `pnpm preview`: serve the built output for local verification.
- `pnpm lint`: run ESLint with zero warnings allowed.
- `pnpm format`: run Prettier on `src/**/*.{ts,tsx,css}`.
- If PowerShell blocks scripts, run `pnpm.cmd <command>` (for example, `pnpm.cmd lint`).

## Coding Style & Naming Conventions
- Tech stack: React 18 + TypeScript + Tailwind CSS.
- Follow Prettier config: 2-space indentation, single quotes, no semicolons, trailing commas (`es5`), max line width 100.
- Use PascalCase for React component files (`Experience.tsx`), lowercase for data/locale modules (`experience.ts`, `skills.ts`).
- Prefer typed function components and hooks. Keep UI classes readable, and extract repeated layout patterns into shared CSS classes when needed.

## Testing Guidelines
- No dedicated unit/integration test framework is configured currently.
- Minimum quality gate for all changes: `pnpm lint` and `pnpm build`.
- For UI changes, manually verify at `sm (480px)`, `md (768px)`, and `lg (900px)`, in both themes and all supported languages (`en`, `zh`, `ja`).

## Commit & Pull Request Guidelines
- Recent history primarily uses Conventional Commit prefixes (`feat:`, `fix:`); keep using this pattern.
- Keep each commit focused on one logical change.
- PRs should include a concise summary, affected files/sections, verification steps performed, and screenshots/GIFs for UI updates.
- Link related issues or tasks when available.
