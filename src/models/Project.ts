/**
 * Represents a project in the portfolio.
 */
export interface Project {
  id: string,
  title: string
  source?: string
  coverUrl?: string
  demo?: string
  tags?: ProjectTag[]
}

/**
 * Represents a tag for a project.
 */
export interface ProjectTag {
  id: string,
  title: string
}