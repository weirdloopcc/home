import { ArrowUpRight } from 'lucide-react'
import { useT } from '../i18n'
import { PERSONAL_PROJECTS } from '../data/projects'
import Reveal from './reactbits/Reveal'

const cardCls =
  'p-8 bg-bg2 border border-border transition-[background-color,transform,box-shadow] duration-300 ease-std cursor-pointer relative overflow-hidden min-h-[220px] flex flex-col justify-between hover:bg-bg3 hover:-translate-y-1 hover:shadow-[0_12px_40px_oklch(0%_0_0_/_0.3)]'
const numCls =
  'font-mono text-[48px] font-bold text-border leading-none mb-6 transition-colors duration-300 ease-std group-hover:text-accent-glow'

export default function Projects() {
  const t = useT()

  return (
    <section id="projects" className="section-shell">
      {/* Header */}
      <div className="section-header lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border after:max-w-[60px]">
            004
          </div>
          <h2 className="font-heading text-[clamp(28px,3vw,42px)] font-bold tracking-tight leading-[1.1]">
            {t('projects.title')}
            <br />
            <em className="text-accent not-italic">{t('projects.title.em')}</em>
          </h2>
        </Reveal>
        <Reveal className="text-[15px] text-fg2 leading-[1.75]" delay={0.1}>
          {t('projects.desc')}
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
        {PERSONAL_PROJECTS.map(({ num, titleKey, descKey, stack, delay }) => (
          <Reveal key={num} className={`${cardCls} group`} delay={delay} scale={0.97}>
            <div className={numCls}>{num}</div>
            <div>
              <div className="font-heading text-[17px] font-semibold mb-2 tracking-[-0.01em]">
                {t(titleKey as Parameters<ReturnType<typeof useT>>[0])}
              </div>
              <div className="text-[13px] text-fg2 leading-[1.6] mb-4 flex-1">
                {t(descKey as Parameters<ReturnType<typeof useT>>[0])}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] text-fg3 px-2 py-0.5 border border-border rounded-[2px] tracking-[0.06em]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}

        {/* More on GitHub */}
        <Reveal
          className={`${cardCls} items-center justify-center flex-col gap-2`}
          delay={0.25}
          scale={0.97}
          style={{ borderStyle: 'dashed' }}
        >
          <div className="font-mono text-[32px] text-border">+</div>
          <div className="font-mono text-[11px] text-fg3 tracking-[0.1em]">
            {t('projects.moreOnGithub')}
          </div>
          <a
            href="https://github.com/weirdloopcc"
            target="_blank"
            rel="noreferrer"
            className="mt-2 bg-transparent text-fg font-mono text-[11px] tracking-[0.06em] px-4 py-2 border border-border rounded cursor-pointer inline-flex items-center gap-1.5 no-underline transition-[border-color,color,transform] duration-300 ease-std hover:border-accent hover:text-accent hover:-translate-y-0.5"
          >
            {t('projects.viewAll')} <ArrowUpRight size={13} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
