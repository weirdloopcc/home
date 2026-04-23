import { useEffect, useState } from 'react'
import { LangContext, ThemeContext, isLang, isTheme, type Lang, type Theme } from './i18n'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Footer from './components/Footer'

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (isTheme(stored)) return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function getInitialLang(): Lang {
  const stored = localStorage.getItem('lang')
  return isLang(stored) ? stored : 'en'
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())
  const [lang, setLang] = useState<Lang>(() => getInitialLang())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = lang
    localStorage.setItem('lang', lang)
  }, [lang])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={theme}>
      <LangContext.Provider value={lang}>
        <Nav theme={theme} lang={lang} onToggleTheme={toggleTheme} onSetLang={setLang} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Blog />
        </main>
        <Footer />
      </LangContext.Provider>
    </ThemeContext.Provider>
  )
}
