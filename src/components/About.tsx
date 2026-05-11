import { useT } from '../i18n'
import { yearsOfExp } from '../data/experience'
import Reveal from './reactbits/Reveal'

export default function About() {
  const t = useT()
  const years = yearsOfExp()

  return (
    <section
      id="about"
      className="section-shell section-header lg:grid-cols-[1fr_2fr] mb-0 items-start"
    >
      <Reveal className="lg:sticky lg:top-20">
        <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border after:max-w-[60px]">
          001
        </div>
        <h2 className="font-heading text-[clamp(28px,3vw,42px)] font-bold tracking-tight leading-[1.1]">
          {t('about.title')}
          <br />
          <em className="text-accent not-italic">{t('about.title.em')}</em>
        </h2>
      </Reveal>

      <Reveal
        delay={0.1}
        className="[&_p]:text-[16px] [&_p]:text-fg2 [&_p]:leading-[1.85] [&_p]:mb-5 [&_p_strong]:text-fg [&_p_strong]:font-semibold"
      >
        <p>
          {t('about.p1.pre')} <strong>{years}+</strong> {t('about.p1.post')}
        </p>
        <p>
          {t('about.p2.pre')} <strong>{t('about.p2.highlight1')}</strong> {t('about.p2.mid')}{' '}
          <strong>{t('about.p2.highlight2')}</strong> {t('about.p2.post')}
        </p>
        <p>
          {t('about.p3.pre')} <strong>{t('about.p3.highlight')}</strong> {t('about.p3.post')}
        </p>
        <div className="mt-8 p-6 border border-border border-l-[3px] border-l-accent bg-bg2 rounded">
          <p className="font-mono text-[14px] text-fg2 leading-[1.7] !mb-0">{t('about.quote')}</p>
        </div>
      </Reveal>
    </section>
  )
}
