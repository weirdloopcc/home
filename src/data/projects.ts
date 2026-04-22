export interface ProjectEntry {
  num: string
  titleKey: string
  descKey: string
  stack: string[]
  delay: number
}

export const PERSONAL_PROJECTS: ProjectEntry[] = [
  {
    num: '01',
    titleKey: 'projects.item.01.title',
    descKey: 'projects.item.01.desc',
    stack: ['Java', 'Spring Boot', 'JSON Schema'],
    delay: 0,
  },
  {
    num: '02',
    titleKey: 'projects.item.02.title',
    descKey: 'projects.item.02.desc',
    stack: ['Python', 'Claude API', 'OpenAI'],
    delay: 0.05,
  },
  {
    num: '03',
    titleKey: 'projects.item.03.title',
    descKey: 'projects.item.03.desc',
    stack: ['Rust', 'Tokio', 'Systems'],
    delay: 0.1,
  },
  {
    num: '04',
    titleKey: 'projects.item.04.title',
    descKey: 'projects.item.04.desc',
    stack: ['React', 'TypeScript', 'CSS Grid'],
    delay: 0.15,
  },
  {
    num: '05',
    titleKey: 'projects.item.05.title',
    descKey: 'projects.item.05.desc',
    stack: ['Python', 'SQLite', 'Click'],
    delay: 0.2,
  },
]
