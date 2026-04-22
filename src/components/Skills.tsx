import { Server, Monitor, Package, Bot } from 'lucide-react'
import { useT } from '../i18n'
import Reveal from './reactbits/Reveal'

const tagCls =
  'font-mono text-[13px] text-fg2 px-3 py-1.5 border border-border rounded-[2px] transition-[color,border-color,background-color] duration-300 ease-std bg-bg hover:text-accent hover:border-accent hover:bg-accent-glow'
const tagPrimaryCls = `${tagCls} text-accent border-[oklch(63%_0.22_22_/_0.35)]`

export default function Skills() {
  const t = useT()

  return (
    <section id="skills" className="section-shell">
      {/* Intro */}
      <div className="section-header lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border after:max-w-[60px]">
            002
          </div>
          <h2 className="font-heading text-[clamp(28px,3vw,42px)] font-bold tracking-tight leading-[1.1]">
            {t('skills.title')}
            <br />
            <em className="text-accent not-italic">{t('skills.title.em')}</em>
          </h2>
        </Reveal>
        <Reveal className="text-[15px] text-fg2 leading-[1.75]" delay={0.1}>
          {t('skills.desc')}
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0.5">
        {[
          {
            icon: <Server size={12} />,
            titleKey: 'skills.cat.backend',
            delay: 0.1,
            tags: [
              { label: 'Java', primary: true },
              { label: 'Spring Boot', primary: true },
              { label: 'MyBatis' },
              { label: 'MySQL' },
              { label: 'Redis' },
              { label: 'RabbitMQ' },
              { label: 'Kafka' },
              { label: 'Python' },
              { label: 'Rust' },
            ],
          },
          {
            icon: <Monitor size={12} />,
            titleKey: 'skills.cat.frontend',
            delay: 0.2,
            tags: [
              { label: 'React', primary: true },
              { label: 'Vue', primary: true },
              { label: 'TypeScript' },
              { label: 'JavaScript' },
              { label: 'HTML / CSS' },
            ],
          },
          {
            icon: <Package size={12} />,
            titleKey: 'skills.cat.devops',
            delay: 0.3,
            tags: [
              { label: 'Docker', primary: true },
              { label: 'Linux', primary: true },
              { label: 'Git' },
              { label: 'CI/CD' },
            ],
          },
        ].map(({ icon, titleKey, delay, tags }) => (
          <Reveal
            key={titleKey}
            className="bg-bg2 p-8 border border-border relative overflow-hidden transition-[background-color] duration-300 ease-std group hover:bg-bg3 before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-std hover:before:scale-x-100"
            delay={delay}
          >
            <div className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-5 flex items-center gap-2">
              {icon}
              {t(titleKey as Parameters<ReturnType<typeof useT>>[0])}
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map(({ label, primary }) => (
                <span key={label} className={primary ? tagPrimaryCls : tagCls}>
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
        ))}

        {/* AI row — full width */}
        <Reveal
          className="lg:col-span-3 bg-bg2 p-8 border border-border relative overflow-hidden transition-[background-color] duration-300 ease-std group hover:bg-bg3 before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-300 before:ease-std hover:before:scale-x-100"
          delay={0.1}
        >
          <div className="font-mono text-[11px] text-accent tracking-[0.12em] uppercase mb-5 flex items-center gap-2">
            <Bot size={12} />
            {t('skills.cat.ai')}
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Claude Code', primary: true },
              { label: 'OpenAI Codex', primary: true },
              { label: 'Prompt Engineering' },
              { label: 'AI Pair Programming' },
              { label: 'LLM Integration' },
            ].map(({ label, primary }) => (
              <span key={label} className={primary ? tagPrimaryCls : tagCls}>
                {label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
