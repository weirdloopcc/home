# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server (localhost:5173)
pnpm build        # tsc type-check + vite build
pnpm lint         # eslint, zero warnings allowed
pnpm format       # prettier over src/**/*.{ts,tsx,css}
pnpm preview      # preview production build
```

Pre-commit hook runs prettier via lint-staged on staged `src/` files.

## Architecture

Single-page personal portfolio. No routing — all sections are anchor-scroll on one page.

**Entry:** `index.html` → `src/main.tsx` → `src/App.tsx`

**State in App.tsx:**
- `theme` (`'dark' | 'light'`) — persisted in `localStorage`, applied as `data-theme` attribute on `<html>`. An inline `<script>` in `index.html` sets this synchronously before React mounts to prevent flash.
- `lang` (`Lang`) — persisted in `localStorage`.

Both are shared via React contexts defined in `src/i18n.tsx`:
- `LangContext` + `useLang()` — consumed by every component via `useT()` for translated strings
- `ThemeContext` + `useTheme()` — consumed by components that need theme-aware brand icons

**Translations:** All strings live in `src/i18n.tsx` as a `TRANSLATIONS` object with `en`, `zh`, `ja` keys. `useT()` returns a lookup function `t(key)`. To add a string, add it to all three language blocks.

**Styling:** Tailwind CSS utility classes throughout all components. CSS variables in `src/styles/base.css` handle theming — `:root` is dark-default, `[data-theme='light']` overrides. Tailwind colors reference these variables (e.g. `bg-bg` → `var(--bg)`). Custom screens: `sm=480px`, `md=768px`, `lg=900px`. `src/index.css` contains `@tailwind` directives + `@layer base/components` overrides (body styles, noise texture, exp-bullets animation, TextType classes).

**Icons:**
- `developer-icons` — brand/tech logos (GitHub, X, React, etc.). Theme-aware: use `*Light` variant in dark mode, `*Dark` variant in light mode, selected via `useTheme()`.
- `lucide-react` — UI icons (Sun, Moon, Languages, Mail, Server, etc.) and anything not in developer-icons.
- Icon sizes set via `size` prop directly on the icon component.
