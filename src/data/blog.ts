export interface BlogPost {
  tag: string
  date: string
  title: string
  excerpt: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    tag: 'Deep Dive',
    date: 'Coming Soon',
    title: "Why I'm Learning Rust as a Java Engineer",
    excerpt:
      "The mental model shifts, the borrow checker revelations, and what systems programming teaches you about every other language you've written.",
  },
  {
    tag: 'Engineering',
    date: 'Coming Soon',
    title: 'Building a Low-Code Platform: What I Learned',
    excerpt: 'Lessons from years of building no-code/low-code infrastructure in production.',
  },
  {
    tag: 'AI + Dev',
    date: 'Coming Soon',
    title: 'Claude Code in My Daily Workflow',
    excerpt: "How AI-assisted coding changed how I approach problems — and what it still can't do.",
  },
]
