export default interface Work {
    id: string;
    title: string;
    year: string;
    company: string;
    status: CompleteState;
    url: string;
    bannerUrl?: string;
}

export enum CompleteState {
    NotStarted = 0,
    InProgress = 1,
    Completed = 2
}