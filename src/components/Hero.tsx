import { ArrowRight, Download } from 'lucide-react'
import { GitHubDark, GitHubLight, XDark, XLight } from 'developer-icons'
import { useT, TRANSLATIONS, useLang, useTheme } from '../i18n'
import { EXPERIENCES, yearsOfExp } from '../data/experience'
import Reveal from './reactbits/Reveal'
import TextType from './reactbits/TextType'

function downloadCV() {
  const content = `WEIRDLOOP.CC — FULL STACK ENGINEER\n${'═'.repeat(40)}\n\nCONTACT\nGitHub: https://github.com/weirdloopcc\nX: https://x.com/weirdloopcc\n\nEXPERIENCE\n\nJava Engineer — Shanghai Shicheng Software (Apr 2025 – Present)\n• Developed scalable backend services and RESTful APIs\n• Collaborated across full SDLC from design to deployment\n• Code reviews and modular refactoring for performance\n\nJava Engineer — Beijing Yuanshan Intelligent Tech (Mar 2021 – Mar 2025)\n• Backend API development for core business systems\n• Developed enterprise Low-Code Platform\n• System architecture design and industrial intelligence modules\n\nSKILLS\nBackend: Java, Spring Boot, Python, Rust\nFrontend: React, Vue, TypeScript\nDevOps: Docker, Linux, MySQL, Redis\nAI: Claude Code, OpenAI Codex\n`
  const blob = new Blob([content], { type: 'text/plain' })
  const a = document.createElement('a')
  const url = URL.createObjectURL(blob)
  a.href = url
  a.download = 'weirdloop-cv.txt'
  a.click()
  setTimeout(() => URL.revokeObjectURL(url), 0)
}

export default function Hero() {
  const t = useT()
  const lang = useLang()
  const theme = useTheme()

  const GH = theme === 'dark' ? GitHubLight : GitHubDark
  const X = theme === 'dark' ? XLight : XDark

  return (
    <section
      id="hero"
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-screen pt-20 md:pt-24 pb-16 md:pb-20 max-w-[1200px] mx-auto px-4 md:px-6 lg:px-12"
    >
      <Reveal className="text-center lg:text-left">
        <div className="font-mono text-[12px] text-accent tracking-[0.15em] uppercase mb-5 flex items-center gap-2.5 justify-center lg:justify-start before:inline-block before:w-6 before:h-px before:bg-accent">
          {t('hero.tag')}
        </div>
        <h1 className="font-heading text-[clamp(42px,5vw,72px)] font-bold leading-[1.05] tracking-tight mb-4">
          Weird<span className="text-accent">loop</span>.cc
        </h1>
        <div className="font-mono text-[16px] text-fg2 mb-8 min-h-[24px]">
          <TextType
            as="span"
            text={Array.from(TRANSLATIONS[lang].typing as readonly string[])}
            typingSpeed={85}
            deletingSpeed={55}
            pauseDuration={1800}
            initialDelay={500}
          />
        </div>
        <p className="text-[15px] text-fg2 leading-[1.75] mb-10 max-w-[480px] mx-auto lg:mx-0">
          {t('hero.bio')}
        </p>
        <div className="flex gap-4 flex-wrap flex-col sm:flex-row justify-center lg:justify-start">
          <a
            href="mailto:weirdloop.cc@gmail.com"
            className="bg-accent text-white font-mono text-[13px] font-medium tracking-[0.06em] px-7 py-3 rounded cursor-pointer inline-flex items-center justify-center gap-2 no-underline transition-[background-color,transform,box-shadow] duration-300 ease-std hover:bg-[oklch(68%_0.22_22)] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_var(--accent-glow)]"
          >
            {t('hero.cta1')} <ArrowRight size={14} />
          </a>
          <a
            href="#"
            className="bg-transparent text-fg font-mono text-[13px] tracking-[0.06em] px-7 py-3 border border-border rounded cursor-pointer inline-flex items-center justify-center gap-2 no-underline transition-[border-color,color,transform] duration-300 ease-std hover:border-accent hover:text-accent hover:-translate-y-0.5"
            onClick={(e) => {
              e.preventDefault()
              downloadCV()
            }}
          >
            <Download size={14} /> {t('hero.cta2')}
          </a>
        </div>
      </Reveal>

      <Reveal className="flex flex-col items-center gap-6" delay={0.2}>
        {/* Avatar — 180px on mobile, 280px on desktop */}
        <div className="relative w-[180px] h-[180px] lg:w-[280px] lg:h-[280px] rounded-full animate-avatar-float will-change-transform">
          <div className="absolute inset-[-3px] rounded-full bg-[conic-gradient(var(--accent),var(--accent2),var(--accent))] animate-ring-breathe will-change-[opacity]" />
          <div className="absolute inset-[2px] rounded-full bg-bg" />
          <img
            src="/avatar.jpg"
            alt="Weirdloop.cc"
            className="absolute inset-[6px] rounded-full object-cover z-[1] w-[calc(100%-12px)] h-[calc(100%-12px)]"
          />
        </div>

        {/* Stats */}
        <div className="flex gap-5 lg:gap-8">
          <div className="text-center">
            <div className="font-heading text-[22px] lg:text-[28px] font-bold text-fg leading-none">
              {yearsOfExp()}
              <span className="text-accent">+</span>
            </div>
            <div className="font-mono text-[10px] text-fg3 tracking-[0.1em] uppercase mt-1">
              {t('hero.stat1')}
            </div>
          </div>
          <div className="text-center">
            <div className="font-heading text-[22px] lg:text-[28px] font-bold text-fg leading-none">
              {EXPERIENCES.length}
            </div>
            <div className="font-mono text-[10px] text-fg3 tracking-[0.1em] uppercase mt-1">
              {t('hero.stat2')}
            </div>
          </div>
          <div className="text-center">
            <div className="font-heading text-[22px] lg:text-[28px] font-bold text-fg leading-none">
              5<span className="text-accent">+</span>
            </div>
            <div className="font-mono text-[10px] text-fg3 tracking-[0.1em] uppercase mt-1">
              {t('hero.stat3')}
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://github.com/weirdloopcc"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] text-fg3 no-underline px-4 py-2 border border-border rounded tracking-[0.06em] transition-[color,border-color] duration-300 ease-std flex items-center gap-1.5 hover:text-accent hover:border-accent"
          >
            <GH size={16} /> GitHub
          </a>
          <a
            href="https://x.com/weirdloopcc"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[12px] text-fg3 no-underline px-4 py-2 border border-border rounded tracking-[0.06em] transition-[color,border-color] duration-300 ease-std flex items-center gap-1.5 hover:text-accent hover:border-accent"
          >
            <X size={14} /> X / Twitter
          </a>
        </div>
      </Reveal>
    </section>
  )
}
