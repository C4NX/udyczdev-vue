export interface Project {
  id: string,
  title: string
  source?: string
  coverUrl?: string
  demo?: string
  tags?: ProjectTag[]
}

export interface ProjectTag {
  id: string,
  title: string,
  color: ProjectTagColor
}

export enum ProjectTagColor {
  Neutral = 'neutral',
  Primary = 'primary',
  Secondary = 'secondary',
  Accent = 'accent',
  Ghost = 'ghost',
}

export function getProjectTagColor(color: ProjectTagColor): string {
  return `badge-${color}`
}