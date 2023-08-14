import type Work from "./Work";

export default interface WorkCategory {
    title: string;
    works: Work[];
}