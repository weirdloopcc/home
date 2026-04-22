import { useEffect, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { useLang, useT } from '../i18n'
import { BLOG_POSTS } from '../data/blog'
import { fetchRecentPosts, type HaloPost } from '../data/halo'
import { config } from '../config'
import Reveal from './reactbits/Reveal'

export default function Blog() {
  const t = useT()
  const lang = useLang()
  const [posts, setPosts] = useState<HaloPost[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetchRecentPosts(lang, config.blog.previewCount, controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setPosts(data.length > 0 ? data : null)
        }
      })
      .catch((err) => {
        if (controller.signal.aborted) return
        console.error('[Blog] fetch failed:', err)
        setPosts(null)
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [lang])

  const fallback: HaloPost[] = BLOG_POSTS.map((p) => ({
    title: p.title,
    excerpt: p.excerpt,
    tag: p.tag ?? '',
    date: p.date ?? '',
    url: config.blog.base,
    cover: undefined,
  }))

  const displayPosts = posts ?? fallback

  const cardBase =
    'p-8 bg-bg2 border border-border transition-[background-color] duration-300 ease-std cursor-pointer relative block no-underline text-fg hover:bg-bg3'

  return (
    <section id="blog" className="section-shell">
      {/* Header */}
      <div className="section-header lg:grid-cols-[1fr_2fr]">
        <Reveal>
          <div className="font-mono text-[11px] text-accent tracking-[0.15em] uppercase mb-4 flex items-center gap-3 after:flex-1 after:h-px after:bg-border after:max-w-[60px]">
            005
          </div>
          <h2 className="font-heading text-[clamp(28px,3vw,42px)] font-bold tracking-tight leading-[1.1]">
            {t('blog.title')}
            <br />
            <em className="text-accent not-italic">{t('blog.title.em')}</em>
          </h2>
        </Reveal>
        <Reveal className="text-[15px] text-fg2 leading-[1.75]" delay={0.1}>
          {t('blog.desc')}
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5">
        {loading
          ? [0, 1, 2].map((i) => (
              <Reveal key={i} className={cardBase} delay={i * 0.07}>
                <div className="bg-bg3 rounded-[2px] animate-blog-shimmer w-[35%] h-[18px] mb-3" />
                <div className="bg-bg3 rounded-[2px] animate-blog-shimmer w-[65%] h-[14px] mb-2.5" />
                <div className="bg-bg3 rounded-[2px] animate-blog-shimmer w-[88%] h-5 mb-1.5" />
                <div className="bg-bg3 rounded-[2px] animate-blog-shimmer w-[75%] h-5" />
              </Reveal>
            ))
          : displayPosts.map((post, i) => (
              <Reveal
                as="a"
                key={i}
                className={`${cardBase} ${i === 0 ? 'md:col-span-2 md:grid md:grid-cols-[2fr_1fr] md:gap-8 md:items-center' : ''}`}
                scale={i === 0 ? 0.98 : 0.97}
                delay={i * 0.07}
                href={post.url}
                target="_blank"
                rel="noreferrer"
              >
                <div>
                  {post.tag && (
                    <span className="inline-block font-mono text-[10px] text-accent bg-accent-glow border border-[oklch(63%_0.22_22_/_0.25)] px-2 py-0.5 rounded-[2px] tracking-[0.08em] mb-3">
                      {post.tag}
                    </span>
                  )}
                  <div className="font-mono text-[11px] text-fg3 tracking-[0.08em] mb-3">
                    {post.date || t('blog.comingSoon')}
                  </div>
                  <div
                    className={`font-heading font-semibold tracking-[-0.01em] mb-3 leading-[1.3] ${i === 0 ? 'text-[26px]' : 'text-[20px]'}`}
                  >
                    {post.title}
                  </div>
                  <div className="text-[14px] text-fg2 leading-[1.7]">{post.excerpt}</div>
                </div>
                {i === 0 && (
                  <div className="bg-bg3 border border-border rounded h-[120px] flex items-center justify-center font-mono text-[10px] text-fg3 tracking-[0.08em]">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt={post.title}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      '[ cover image ]'
                    )}
                  </div>
                )}
              </Reveal>
            ))}
      </div>

      <div className="text-center mt-10">
        <a
          href={config.blog.base}
          target="_blank"
          rel="noreferrer"
          className="bg-transparent text-fg font-mono text-[13px] tracking-[0.06em] px-7 py-3 border border-border rounded cursor-pointer inline-flex items-center gap-2 no-underline transition-[border-color,color,transform] duration-300 ease-std hover:border-accent hover:text-accent hover:-translate-y-0.5"
        >
          {t('blog.viewAll')} <ExternalLink size={13} />
        </a>
      </div>
    </section>
  )
}
