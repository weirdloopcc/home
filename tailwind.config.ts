import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '900px',
    },
    extend: {
      colors: {
        bg: 'var(--bg)',
        bg2: 'var(--bg2)',
        bg3: 'var(--bg3)',
        fg: 'var(--fg)',
        fg2: 'var(--fg2)',
        fg3: 'var(--fg3)',
        accent: 'var(--accent)',
        accent2: 'var(--accent2)',
        'accent-glow': 'var(--accent-glow)',
        border: 'var(--border)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
      },
      transitionTimingFunction: {
        std: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'avatar-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'ring-breathe': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        'blog-shimmer': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        'avatar-float': 'avatar-float 5s ease-in-out infinite',
        'ring-breathe': 'ring-breathe 5s ease-in-out infinite',
        'blog-shimmer': 'blog-shimmer 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
