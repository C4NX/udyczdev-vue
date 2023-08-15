import type MenuLink from './MenuLink'
import type { Project } from './Project'
import type SkillCategory from './SkillCategory'
import type WorkCategory from './WorkCategory'

export interface MeModel {
  firstName: string
  lastName: string
  email: string
  avatarUrl: string
  cvUrl: string
  job: string
  skills: SkillCategory[]
  links: MenuLink[]
  works: WorkCategory[]
  projects: Project[]
}
