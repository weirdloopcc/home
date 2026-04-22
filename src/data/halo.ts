import { config } from '../config'
import type { Lang } from '../i18n'

const { base, cacheKey, cacheTtlMs } = config.blog
const DATE_LOCALES: Record<Lang, string> = {
  en: 'en-US',
  zh: 'zh-CN',
  ja: 'ja-JP',
}

export interface HaloPost {
  title: string
  excerpt: string
  tag: string
  date: string
  url: string
  cover?: string
}

function resolveUrl(url?: string): string | undefined {
  if (!url) return undefined
  try {
    return new URL(url, base).toString()
  } catch {
    return undefined
  }
}

function formatDate(iso: string | undefined, lang: Lang): string {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString(DATE_LOCALES[lang], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

interface CacheEntry {
  posts: HaloPost[]
  ts: number
}

function getCacheKey(lang: Lang): string {
  return `${cacheKey}:${lang}`
}

function readCache(lang: Lang): HaloPost[] | null {
  const langCacheKey = getCacheKey(lang)
  try {
    const raw = localStorage.getItem(langCacheKey)
    if (!raw) return null
    const entry: CacheEntry = JSON.parse(raw)
    if (Date.now() - entry.ts > cacheTtlMs) {
      localStorage.removeItem(langCacheKey)
      return null
    }
    return entry.posts
  } catch {
    return null
  }
}

function writeCache(lang: Lang, posts: HaloPost[]): void {
  const langCacheKey = getCacheKey(lang)
  try {
    localStorage.setItem(langCacheKey, JSON.stringify({ posts, ts: Date.now() }))
  } catch {
    // ignore quota errors
  }
}

export async function fetchRecentPosts(
  lang: Lang,
  size = config.blog.previewCount,
  signal?: AbortSignal
): Promise<HaloPost[]> {
  const cached = readCache(lang)
  if (cached) return cached

  const res = await fetch(
    `${base}/apis/api.content.halo.run/v1alpha1/posts?page=1&size=${size}&visible=PUBLIC`,
    { signal }
  )
  if (!res.ok) throw new Error(`Halo API ${res.status}`)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await res.json()
  if (!Array.isArray(data?.items)) throw new Error('Unexpected response shape')

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: HaloPost[] = data.items.map((item: any) => {
    const post = item.post ?? item
    const spec = post.spec ?? {}
    const status = post.status ?? post

    const permalink: string = status.permalink ?? spec.permalink ?? item.permalink ?? ''

    return {
      title: spec.title ?? item.title ?? '',
      excerpt: status.excerpt ?? spec.excerpt ?? item.excerpt ?? '',
      tag:
        item.tags?.[0]?.spec?.displayName ??
        item.tags?.[0]?.displayName ??
        item.categories?.[0]?.spec?.displayName ??
        '',
      date: formatDate(spec.publishTime ?? status.lastModifyTime ?? item.lastModifyTime, lang),
      url: resolveUrl(permalink) ?? base,
      cover: resolveUrl(spec.cover ?? item.cover),
    }
  })

  writeCache(lang, posts)
  return posts
}
