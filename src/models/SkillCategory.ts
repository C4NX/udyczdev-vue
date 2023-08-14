import type Skill from "./Skill";

export default interface SkillCategory {
    id: string;
    name: string;
    icon: string;
    skills: Skill[];
}