import { useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useLang, useT, type Lang, type TranslationKey } from '../i18n'
import { EXPERIENCES, formatDate, yearsOfExp } from '../data/experience'
import Reveal from './reactbits/Reveal'

const NOW_LABELS: Record<Lang, string> = {
  en: 'Now',
  zh: '至今',
  ja: '現在',
}

export default function Experience() {
  const t = useT()
  const lang = useLang()
  const [active, setActive] = useState(0)

  return (
    <section id="experience" className="section-shell">
      {/* Header */}
      <div className="section-header lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border after:max-w-[60px]">
            003
          </div>
          <h2 className="font-heading text-[clamp(28px,3vw,42px)] font-bold tracking-tight leading-[1.1]">
            {t('exp.title')}
            <br />
            <em className="text-accent not-italic">{t('exp.title.em')}</em>
          </h2>
        </Reveal>
        <Reveal className="text-[15px] text-fg2 leading-[1.75]" delay={0.1}>
          {t('exp.desc', { years: yearsOfExp() })}
        </Reveal>
      </div>

      {/* Timeline */}
      <div className="flex flex-col gap-0.5 overflow-hidden">
        {EXPERIENCES.map((entry, i) => (
          <Reveal
            key={i}
            direction="vertical"
            reverse={true}
            distance={20}
            duration={0.45}
            delay={i * 0.07}
            className={`px-6 py-6 md:px-8 md:py-7 bg-bg2 border cursor-pointer relative overflow-hidden transition-[background-color,border-color] duration-300 ease-std focus-visible:outline-[2px] focus-visible:outline-accent focus-visible:outline-offset-2
              after:absolute after:left-0 after:top-0 after:bottom-0 after:w-[3px] after:bg-accent after:scale-y-0 after:transition-transform after:duration-[400ms] after:ease-std
              ${
                active === i
                  ? 'bg-bg3 border-[oklch(63%_0.22_22_/_0.3)] after:scale-y-100'
                  : 'border-border hover:after:scale-y-100'
              }`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setActive(i)
              }
            }}
            role="button"
            tabIndex={0}
            aria-expanded={active === i}
            aria-controls={`exp-details-${i}`}
          >
            <div className="flex justify-between items-start mb-2 sm:flex-col sm:gap-2">
              <div>
                <div className="font-heading text-[18px] font-semibold tracking-[-0.01em]">
                  {t(entry.nameKey as TranslationKey)}
                </div>
              </div>
              <div className="flex items-center gap-3">
                {!entry.end && (
                  <span className="font-mono text-[10px] text-accent2 bg-[oklch(72%_0.15_75_/_0.12)] border border-[oklch(72%_0.15_75_/_0.3)] px-2 py-0.5 rounded-[2px] tracking-[0.08em]">
                    {t('exp.current')}
                  </span>
                )}
                <span className="font-mono text-[11px] text-fg3 tracking-[0.08em] sm:whitespace-normal whitespace-nowrap">
                  {formatDate(entry.start, lang)} —{' '}
                  {entry.end ? formatDate(entry.end, lang) : NOW_LABELS[lang]}
                </span>
              </div>
            </div>
            <div className="font-mono text-[13px] text-accent2 mb-4 tracking-[0.04em]">
              {t('exp.role')}
            </div>
            <ul
              id={`exp-details-${i}`}
              className={`exp-bullets ${active === i ? 'exp-bullets-open' : ''}`}
            >
              {entry.bullets.map((key, j) => (
                <li
                  key={j}
                  className="text-[14px] text-fg2 leading-[1.7] py-1.5 flex items-baseline gap-2"
                >
                  <ChevronRight size={12} className="shrink-0 text-accent mt-[3px]" />
                  <span>{t(key as TranslationKey)}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
