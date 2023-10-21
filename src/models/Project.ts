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
  title: string
}