import { CompleteState } from '@/models/Work'
import AvatarPath from '../assets/avatar.png'
import type Portfolio from '../models/Portfolio'
import BlogCoverPath from '../assets/projects/blog.png'
import PortfolioCoverPath from '../assets/projects/portfolio.png'
import OuterWildsCoopCoverPath from '../assets/projects/outerwild-coop.png'
import skills from './Skills'
import tags from './Tags'
import { RiRssFill } from 'oh-vue-icons/icons/ri'
import { Css3Fill, CodeFill, Database2Fill, GamepadFill, WindowsFill, LinkedinFill, GithubFill, ServerFill } from '../config/icons'

const Me: Portfolio = {
  firstName: 'Alexis',
  lastName: 'Udycz',
  email: 'udycz.alexis@gmail.com',
  cvUrl: "files/CV/latest.pdf",
  job: 'Développeur Web FullStack',
  birthdayDate: new Date(2003, 10, 16),
  location: 'Reims, France',
  locationUrl: 'https://maps.app.goo.gl/Xiah48NUZh3aN5JL9',
  avatarUrl: AvatarPath,
  skills: [
    {
      id: 'frameworks-css',
      name: 'Frameworks CSS',
      icon: Css3Fill.name,
      skills: [
        skills.tailwind,
        skills.boostrap,
        skills.daisyui
      ]
    },
    {
      id: 'frameworks-front',
      name: 'Frameworks Front',
      icon: CodeFill.name,
      skills: [
        skills.react,
        skills.vue,
        skills.materialui
      ]
    }, {
      id: 'frameworks-back',
      name: 'Frameworks Back',
      icon: ServerFill.name,
      skills: [
        skills.symfony,
        skills.api_platform,
        skills.aspnetcore,
        skills.flask
      ]
    },
    {
      id: 'software',
      name: 'Software',
      icon: CodeFill.name,
      skills: [
        skills.phpstorm,
        skills.vscode,
        skills.git,
        skills.github,
        skills.gitlab,
        skills.sqldeveloper,
        skills.docker,
        skills.nginx
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: Database2Fill.name,
      skills: [
        skills.oracledb,
        skills.mariadb,
        skills.mongodb
      ]
    },
    {
      id: 'game-engines',
      name: 'Game Engines',
      icon: GamepadFill.name,
      skills: [
        skills.unity
      ]
    },
    {
      id: 'os',
      name: 'Operating Systems',
      icon: WindowsFill.name,
      skills: [
        skills.windows,
        skills.linux
      ]
    },
  ],
  links: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexis-udycz/',
      icon: LinkedinFill.name
    },
    {
      name: 'GitHub',
      href: 'https://github.com/C4NX',
      icon: GithubFill.name
    },
    {
      name: 'Blog',
      href: 'https://blog.udycz.dev',
      icon: RiRssFill.name
    },
    {
      "name": "Services",
      "href": "https://status.udycz.dev",
      "icon": ServerFill.name
    }
  ],
  projects: [
    {
      id: 'portfolio',
      title: 'Portfolio',
      source: 'https://github.com/C4NX/udyczdev-vue',
      coverUrl: PortfolioCoverPath,
      demo: 'https://udycz.dev',
      tags: [tags.javascript_typescript]
    },
    /* {
      id: "homelab",
      title: "HomeLab",
      tags: [tags.devops],
    }, */
    {
      id: 'blog',
      title: 'Blog',
      coverUrl: BlogCoverPath,
      demo: 'https://blog.udycz.dev',
      tags: [tags.gohugo, tags.javascript_typescript]
    },
    {
      id: 'outerwild-coop',
      title: 'Outer Wilds Coop',
      coverUrl: OuterWildsCoopCoverPath,
      source: 'https://github.com/C4NX/OuterWildsCoop',
      tags: [tags.csharp]
    }
  ],
  works: [
    {
      title: 'Pre-Bac',
      works: [
        {
          id: 'sti2d',
          title: 'Bacalauréat Technologique STI2D',
          titleSmall: '[BAC] STI2D',
          year: '2018 - 2021',
          company: 'Lycée Jules Verne - Château-Thierry',
          bannerUrl: 'https://www.lpo-julesverne.fr/images/home_dir.jpg',
          status: CompleteState.Completed,
          url: 'https://www.lpo-julesverne.fr'
        }
      ]
    },
    {
      title: 'Post-Bac',
      works: [
        {
          id: 'butinfo',
          title: '[BUT] Informatique',
          year: '2021 - 2024',
          company: 'Université de Reims Champagne-Ardenne',
          status: CompleteState.InProgress,
          bannerUrl: 'https://www.iut-rcc.fr/media-images/23796/vueaerienne-iut.jpg',
          url: 'https://www.iut-rcc.fr/'
        },
      ]
    },
    {
      title: 'Stages & Alternances',
      works: [
        {
          id: 'stagemarne',
          title: 'Stage Département de la Marne',
          titleSmall: '[Stage] Dep. Marne',
          year: '8 semaines - 2023',
          company: 'Département de la Marne - Châlons-en-Champagne',
          status: CompleteState.Completed,
          url: 'https://www.marne.fr'
        },
        {
          id: 'alternance-credit-agricole-nord-est',
          title: 'Alternance au Crédit Agricole Nord-Est',
          titleSmall: '[Alt] Crédit Agricole',
          year: '2023',
          company: 'Siège Crédit Agricole Nord-Est - Reims',
          //TODO: Change banner to internal image
          bannerUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnordeststartup.fr%2Fwp-content%2Fuploads%2F2017%2F12%2FCANE-2-1200x569.png&f=1&nofb=1&ipt=5452e1173eb4c68403d709d5b4d4d4a7fcf232056a914dec3e1fe55814948ca7&ipo=images",
          status: CompleteState.InProgress,
          url: 'https://www.ca-nord-est.fr'
        }
      ]
    },
  ]
}

export default Me
