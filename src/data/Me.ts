import { CompleteState } from '@/models/Work'
import AvatarPath from '../assets/avatar.png'
import { type MeModel } from '../models/Me'
import CVPath from '../assets/docs/CV.pdf'
import BlogCoverPath from '../assets/projects/blog.png'
import PortfolioCoverPath from '../assets/projects/portfolio.png'
import OuterWildsCoopCoverPath from '../assets/projects/outerwild-coop.png'
import { 
  skill_tailwind, 
  skill_boostrap, 
  skill_daisyui, 
  skill_react, 
  skill_vue, 
  skill_materialui,
  skill_symfony, 
  skill_api_platform, 
  skill_aspnetcore, 
  skill_flask, 
  skill_phpstorm, 
  skill_vscode, 
  skill_git, 
  skill_github, 
  skill_gitlab, 
  skill_sqldeveloper, 
  skill_docker,
  skill_nginx, 
  skill_oracledb, 
  skill_mariadb, 
  skill_mongodb, 
  skill_unity, 
  skill_windows, 
  skill_linux 
} from './Skills'
import { tag_javascript_typescript, tag_gohugo, tag_csharp } from './Tags'

const Me: MeModel = {
  firstName: 'Alexis',
  lastName: 'Udycz',
  email: 'udycz.alexis@gmail.com',
  cvUrl: CVPath,
  job: 'Développeur Web FullStack',
  birthdayDate: new Date(2003, 10, 16),
  location: 'Reims, France',
  locationUrl: 'https://maps.app.goo.gl/Xiah48NUZh3aN5JL9',
  avatarUrl: AvatarPath,
  skills: [
    {
      id: 'frameworks-css',
      name: 'Frameworks CSS',
      icon: 'ri-css3-fill',
      skills: [
        skill_tailwind,
        skill_boostrap,
        skill_daisyui
      ]
    },
    {
      id: 'frameworks-front',
      name: 'Frameworks Front',
      icon: 'ri-code-s-fill',
      skills: [
        skill_react,
        skill_vue,
        skill_materialui
      ]
    }, {
      id: 'frameworks-back',
      name: 'Frameworks Back',
      icon: 'ri-code-s-fill',
      skills: [
        skill_symfony,
        skill_api_platform,
        skill_aspnetcore,
        skill_flask
      ]
    },
    {
      id: 'software',
      name: 'Software',
      icon: 'ri-code-s-fill',
      skills: [
        skill_phpstorm,
        skill_vscode,
        skill_git,
        skill_github,
        skill_gitlab,
        skill_sqldeveloper,
        skill_docker,
        skill_nginx
      ]
    },
    {
      id: 'databases',
      name: 'Databases',
      icon: 'ri-database-2-fill',
      skills: [
        skill_oracledb,
        skill_mariadb,
        skill_mongodb
      ]
    },
    {
      id: 'game-engines',
      name: 'Game Engines',
      icon: 'ri-gamepad-fill',
      skills: [
        skill_unity
      ]
    },
    {
      id: 'os',
      name: 'Operating Systems',
      icon: 'ri-windows-fill',
      skills: [
        skill_windows,
        skill_linux
      ]
    },
  ],
  links: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/alexis-udycz/',
      icon: 'ri-linkedin-fill'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/C4NX',
      icon: 'ri-github-fill'
    },
    {
      name: 'Blog',
      href: 'https://blog.udycz.dev',
      icon: 'ri-rss-fill'
    },
    {
      "name": "Services",
      "href": "https://status.udycz.dev",
      "icon": "ri-server-fill"
    }
  ],
  projects: [
    {
      id: 'portfolio',
      title: 'Portfolio',
      source: 'https://github.com/C4NX/udyczdev-vue',
      coverUrl: PortfolioCoverPath,
      demo: 'https://udycz.dev',
      tags: [tag_javascript_typescript]
    },
    /* {
      id: "homelab",
      title: "HomeLab",
      tags: [tag_devops],
    }, */
    {
      id: 'blog',
      title: 'Blog',
      coverUrl: BlogCoverPath,
      demo: 'https://blog.udycz.dev',
      tags: [tag_gohugo, tag_javascript_typescript]
    },
    {
      id: 'outerwild-coop',
      title: 'Outer Wilds Coop',
      coverUrl: OuterWildsCoopCoverPath,
      source: 'https://github.com/C4NX/OuterWildsCoop',
      tags: [tag_csharp]
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
