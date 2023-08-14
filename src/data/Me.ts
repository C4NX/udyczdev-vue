import { CompleteState } from "@/models/Work";
import AvatarPath from "../assets/avatar.png";
import CVPath from "../assets/docs/CV.pdf";
import { type MeModel } from "../models/Me";

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
    }, {
        name: "Blog",
        href: "https://blog.udycz.dev",
        icon: "ri-rss-fill"
    }],
    projects: [{
        title: "Portfolio",
        description: "My portfolio, made with VueJS / TailwindCSS / DaisyUI.",
        source: "https://github.com/C4NX/udyczdev-vue",
        tags: ["VueJS", "TailwindCSS", "DaisyUI"]
    }],
    works: [
        {
            title: "Pre-Bac",
            works: [
                {
                    id: "sti2d",
                    title: "STI2D",
                    year: "2018 - 2021",
                    company: "Lycée Jules Verne - Château-Thierry",
                    bannerUrl: "https://www.lpo-julesverne.fr/images/home_dir.jpg",
                    status: CompleteState.Completed,
                    url: "https://www.lpo-julesverne.fr",
                },
            ]
        },
        {
            title: "Post-Bac",
            works: [
                {
                    id: "butinfo",
                    title: "BUT Informatique",
                    year: "2021 - 2024",
                    company: "Université de Reims Champagne-Ardenne",
                    status: CompleteState.InProgress,
                    bannerUrl: "https://www.iut-rcc.fr/media-images/23796/vueaerienne-iut.jpg",
                    url: "https://iut-rcc.univ-reims.fr",
                },
                {
                    id: "stagemarne",
                    title: "Stage Dep. Marne",
                    year: "8 semaines - 2023",
                    company: "Département de la Marne",
                    status: CompleteState.Completed,
                    url: "https://www.marne.fr",
                }
            ],
        },
    ]
}

export default Me;