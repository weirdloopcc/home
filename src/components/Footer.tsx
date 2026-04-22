import { useT } from '../i18n'

export default function Footer() {
  const t = useT()

  return (
    <footer className="border-t border-border py-7 md:py-8 lg:py-10 px-4 md:px-6 lg:px-12 flex flex-col gap-3 items-center text-center lg:flex-row lg:justify-between lg:gap-0 lg:text-left lg:items-center max-w-[1200px] mx-auto">
      <div className="font-mono text-[12px] text-fg3 tracking-[0.06em]">
        © 2026 <span className="text-accent">Weirdloop.cc</span> — All rights reserved.
      </div>
      <div className="font-mono text-[12px] text-fg3 tracking-[0.06em]">{t('footer.built')}</div>
    </footer>
  )
}
