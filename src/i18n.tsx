import { createContext, useContext } from 'react'
import { nav } from './locales/nav'
import { hero } from './locales/hero'
import { about } from './locales/about'
import { skills } from './locales/skills'
import { experience } from './locales/experience'
import { projects } from './locales/projects'
import { blog } from './locales/blog'
import { footer } from './locales/footer'

export type Lang = 'en' | 'zh' | 'ja'
export type Theme = 'dark' | 'light'

const LANG_VALUES: readonly Lang[] = ['en', 'zh', 'ja']
const THEME_VALUES: readonly Theme[] = ['dark', 'light']

export const LangContext = createContext<Lang>('en')
export const ThemeContext = createContext<Theme>('dark')

export function isLang(value: string | null): value is Lang {
  return value !== null && (LANG_VALUES as readonly string[]).includes(value)
}

export function isTheme(value: string | null): value is Theme {
  return value !== null && (THEME_VALUES as readonly string[]).includes(value)
}

export function useLang(): Lang {
  return useContext(LangContext)
}

export function useTheme(): Theme {
  return useContext(ThemeContext)
}

export const LANGUAGES: { value: Lang; label: string }[] = [
  { value: 'zh', label: '中' },
  { value: 'en', label: 'EN' },
  { value: 'ja', label: '日' },
]

export const TRANSLATIONS = {
  en: {
    ...nav.en,
    ...hero.en,
    ...about.en,
    ...skills.en,
    ...experience.en,
    ...projects.en,
    ...blog.en,
    ...footer.en,
  },
  zh: {
    ...nav.zh,
    ...hero.zh,
    ...about.zh,
    ...skills.zh,
    ...experience.zh,
    ...projects.zh,
    ...blog.zh,
    ...footer.zh,
  },
  ja: {
    ...nav.ja,
    ...hero.ja,
    ...about.ja,
    ...skills.ja,
    ...experience.ja,
    ...projects.ja,
    ...blog.ja,
    ...footer.ja,
  },
} as const

export type TranslationKey = keyof (typeof TRANSLATIONS)['en']

export function useT() {
  const lang = useLang()
  return (key: TranslationKey, params?: Record<string, string | number>): string => {
    const active = TRANSLATIONS[lang] ?? TRANSLATIONS.en
    let str = (active[key] ?? TRANSLATIONS.en[key]) as string
    if (typeof str !== 'string') return key
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(v))
      }
    }
    return str
  }
}
