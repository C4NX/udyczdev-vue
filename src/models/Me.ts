import type MenuLink from "./MenuLink";
import type { Project } from "./Project";

export interface MeModel {
    firstName: string;
    lastName: string;
    email: string;
    avatarUrl: string;
    cvUrl: string;
    job: string;
    links: MenuLink[];
    works: MeWorkModel[];
    projects: Project[];
}

export interface MeWorkModel {
    title: string;
    year: string;
    company: string;
    status: CompleteState;
    url: string;
    description: string;
}

export enum CompleteState {
    NotStarted = 0,
    InProgress = 1,
    Completed = 2
}