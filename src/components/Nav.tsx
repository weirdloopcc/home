import { useEffect, useRef, useState } from 'react'
import { Sun, Moon, Languages, ChevronDown, Menu, X } from 'lucide-react'
import { LANGUAGES, type Lang, useT } from '../i18n'

interface NavProps {
  theme: 'dark' | 'light'
  lang: Lang
  onToggleTheme: () => void
  onSetLang: (lang: Lang) => void
}

const LANG_LABELS: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
}

export default function Nav({ theme, lang, onToggleTheme, onSetLang }: NavProps) {
  const t = useT()
  const [open, setOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  const navLinkCls =
    'font-mono text-[11px] text-fg2 no-underline tracking-[0.08em] uppercase transition-colors duration-300 ease-std hover:text-accent'

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-bg border-b border-border transition-[background-color] duration-300 ease-std">
      {/* 顶栏 — 固定高度 */}
      <div className="h-14 lg:h-16 flex items-center justify-between px-4 md:px-6 lg:px-12 backdrop-blur-md">
        <a
          href="#hero"
          className="font-mono text-[15px] text-accent font-bold tracking-[0.04em] no-underline shrink-0"
        >
          weirdloop<span className="text-fg3 font-normal">.cc</span>
        </a>

        {/* 桌面端导航链接 */}
        <ul className="hidden md:flex gap-6 items-center list-none">
          <li>
            <a href="#about" className={navLinkCls}>
              {t('nav.about')}
            </a>
          </li>
          <li>
            <a href="#skills" className={navLinkCls}>
              {t('nav.skills')}
            </a>
          </li>
          <li>
            <a href="#experience" className={navLinkCls}>
              {t('nav.experience')}
            </a>
          </li>
          <li>
            <a href="#projects" className={navLinkCls}>
              {t('nav.projects')}
            </a>
          </li>
          <li>
            <a href="#blog" className={navLinkCls}>
              {t('nav.blog')}
            </a>
          </li>
        </ul>

        {/* 控制按钮 */}
        <div className="flex items-center gap-0.5 shrink-0">
          {/* 语言下拉 */}
          <div ref={dropdownRef} className="relative flex items-center">
            <button
              className="bg-none border-none text-fg2 cursor-pointer px-2.5 py-1.5 font-mono text-[11px] tracking-[0.06em] transition-[color,background-color] duration-300 ease-std flex items-center gap-1.5 leading-none rounded hover:text-accent hover:bg-accent-glow"
              onClick={() => setOpen((v) => !v)}
              aria-label="Select language"
              aria-expanded={open}
            >
              <Languages size={14} aria-hidden="true" />
              {LANG_LABELS[lang]}
              <ChevronDown
                size={12}
                aria-hidden="true"
                style={{
                  transition: 'transform 0.2s',
                  transform: open ? 'rotate(180deg)' : 'none',
                }}
              />
            </button>
            {open && (
              <div className="absolute top-[calc(100%+6px)] right-0 bg-bg2 border border-border rounded overflow-hidden min-w-[110px] shadow-[0_8px_24px_oklch(0%_0_0_/_0.2)] z-[200] p-1">
                {LANGUAGES.map((l) => (
                  <button
                    key={l.value}
                    className={`block w-full bg-none border-none text-fg2 cursor-pointer px-3 py-2 font-mono text-[12px] tracking-[0.04em] text-left rounded-sm transition-[color,background-color] duration-300 ease-std hover:text-accent hover:bg-accent-glow ${lang === l.value ? 'text-accent bg-accent-glow font-semibold' : ''}`}
                    onClick={() => {
                      onSetLang(l.value)
                      setOpen(false)
                    }}
                  >
                    {LANG_LABELS[l.value]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 主题切换 */}
          <button
            className="bg-none border-none text-fg2 cursor-pointer w-8 p-0 flex justify-center items-center py-1.5 transition-[color,background-color] duration-300 ease-std rounded hover:text-accent hover:bg-accent-glow"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={15} aria-hidden="true" />
            ) : (
              <Moon size={15} aria-hidden="true" />
            )}
          </button>

          {/* 汉堡按钮 — 仅移动端 */}
          <button
            className="md:hidden bg-none border-none text-fg2 cursor-pointer w-8 p-0 flex justify-center items-center py-1.5 transition-[color,background-color] duration-300 ease-std rounded hover:text-accent hover:bg-accent-glow"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 — 在顶栏下方展开，有完整背景色 */}
      {menuOpen && (
        <div className="md:hidden bg-bg border-t border-border px-4 md:px-6 lg:px-12 pb-3 shadow-[0_8px_24px_oklch(0%_0_0_/_0.15)]">
          {[
            ['#about', t('nav.about')],
            ['#skills', t('nav.skills')],
            ['#experience', t('nav.experience')],
            ['#projects', t('nav.projects')],
            ['#blog', t('nav.blog')],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="block font-mono text-[13px] text-fg2 no-underline tracking-[0.06em] py-3.5 border-b border-border last:border-0 uppercase hover:text-accent transition-colors duration-300 ease-std"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
