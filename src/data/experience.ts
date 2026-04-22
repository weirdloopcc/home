import type { Lang } from '../i18n'

const DATE_LOCALES: Record<Lang, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
}

export interface ExperienceEntry {
  nameKey: string
  bullets: string[]
  start: { year: number; month: number }
  end: { year: number; month: number } | null
}

export const EXPERIENCES: ExperienceEntry[] = [
  {
    nameKey: 'exp.shicheng.name',
    bullets: ['exp.shicheng.b1', 'exp.shicheng.b2', 'exp.shicheng.b3'],
    start: { year: 2025, month: 4 },
    end: null,
  },
  {
    nameKey: 'exp.yuanshan.name',
    bullets: ['exp.yuanshan.b1', 'exp.yuanshan.b2', 'exp.yuanshan.b3'],
    start: { year: 2021, month: 3 },
    end: { year: 2025, month: 3 },
  },
]

export function formatDate(d: { year: number; month: number }, lang: Lang): string {
  return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    year: 'numeric',
    month: 'short',
  }).format(new Date(d.year, d.month - 1, 1))
}

export function yearsOfExp(): number {
  const now = new Date()
  const nowTotal = now.getFullYear() * 12 + (now.getMonth() + 1)
  const earliest = Math.min(...EXPERIENCES.map((e) => e.start.year * 12 + e.start.month))
  return Math.floor((nowTotal - earliest) / 12)
}
