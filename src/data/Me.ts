import AvatarPath from "../assets/avatar.png";
import CVPath from "../assets/docs/CV.pdf";
import { CompleteState, type MeModel } from "../models/Me";

const Me : MeModel =  {
    firstName: "Alexis",
    lastName: "Udycz",
    email: "udycz.alexis@gmail.com",
    cvUrl: CVPath,
    job: "Développeur Web FullStack",
    avatarUrl: AvatarPath,
    links: [{
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/alexis-udycz/",
        icon: "ri-linkedin-fill"
    }, {
        name: "GitHub",
        href: "https://github.com/C4NX",
        icon: "ri-github-fill"
    }],
    projects: [{
        title: "Portfolio",
        description: "My portfolio, made with VueJS / TailwindCSS / DaisyUI.",
        source: "https://github.com/C4NX/udyczdev-vue",
        tags: ["VueJS", "TailwindCSS", "DaisyUI"]
    }],
    works: [{
        title: "Stage Développeur Web FullStack - Châlons-en-Champagne",
        year: "2023",
        company: "Département de la Marne",
        status: CompleteState.Completed,
        url: "https://www.marne.fr/",
        description: "Internship in the IT department of the Marne department. I worked on the development of an API First web application using react and symfony (from design to testing). The aim of this application is to set up a system for managing and monitoring departmental schemes within the Marne department."
    }, {
        title: "BUT Informatique - Reims",
        year: "2021 - 2024",
        company: "URCA",
        status: CompleteState.InProgress,
        url: "https://www.univ-reims.fr/",
        description: "2nd year / 3 years. Option: C#",
    }, {
        title: "BAC STI2D SIN - Château-Thierry",
        year: "2018 - 2021",
        company: "Lycée Jules Verne",
        status: CompleteState.Completed,
        url: "https://www.lpo-julesverne.fr/",
        description: "High school diploma STI2D, Option: SIN (Information and Digital Systems).",
    }]
}

export default Me;