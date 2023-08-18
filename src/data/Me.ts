import { CompleteState } from '@/models/Work'
import AvatarPath from '../assets/avatar.png'
import { type MeModel } from '../models/Me'
import { ProjectTagColor, type ProjectTag } from '@/models/Project'

import CVPath from '../assets/docs/CV.pdf'
import BlogCoverPath from '../assets/projects/blog.png'
import PortfolioCoverPath from '../assets/projects/portfolio.png'
import OuterWildsCoopCoverPath from '../assets/projects/outerwild-coop.png'

const tag_javascript_typescript : ProjectTag = {
  id: 'javascript-typescript',
  title: 'JavaScript/TypeScript',
  color: ProjectTagColor.Primary
}

const tag_gohugo : ProjectTag = {
  id: 'gohugo',
  title: 'GoHugo',
  color: ProjectTagColor.Primary
}

const tag_csharp : ProjectTag = {
  id: 'csharp',
  title: 'C#',
  color: ProjectTagColor.Primary
}

import logo_windows from '../assets/logos/windows.svg'
const skill_windows = {
  id: 'windows',
  name: 'Windows',
  logo: logo_windows,
  href: 'https://www.microsoft.com/fr-fr/windows'
}

import logo_linux from '../assets/logos/linux.svg'
const skill_linux = {
  id: 'linux',
  name: 'Linux',
  logo: logo_linux,
  href: 'https://www.linux.org/'
}

import logo_tailwind from '../assets/logos/tailwind.svg'
const skill_tailwind = {
  id: 'tailwind',
  name: 'Tailwind CSS',
  logo: logo_tailwind,
  href: 'https://tailwindcss.com/'
}

import logo_boostrap from '../assets/logos/bootstrap.svg'
const skill_boostrap = {
  id: 'bootstrap',
  name: 'Bootstrap',
  logo: logo_boostrap,
  href: 'https://getbootstrap.com/'
}

import logo_daisyui from '../assets/logos/daisyui.svg'
const skill_daisyui = {
  id: 'daisyui',
  name: 'DaisyUI',
  logo: logo_daisyui,
  href: 'https://daisyui.com/'
}

import logo_symfony from '../assets/logos/symfony.png'
const skill_symfony = {
  id: 'symfony',
  name: 'Symfony',
  logo: logo_symfony,
  href: 'https://symfony.com/'
}

import logo_react from '../assets/logos/react.svg'
const skill_react = {
  id: 'react',
  name: 'React',
  logo: logo_react,
  href: 'https://reactjs.org/'
}

import logo_vue from '../assets/logos/vue-js.svg'
const skill_vue = {
  id: 'vue',
  name: 'Vue',
  logo: logo_vue,
  href: 'https://vuejs.org/'
}

import logo_api_platform from '../assets/logos/api-platform.png'
const skill_api_platform = {
  id: 'api-platform',
  name: 'API Platform',
  logo: logo_api_platform,
  href: 'https://api-platform.com/'
}

import logo_materialui from '../assets/logos/mui.svg'
const skill_materialui = {
  id: 'materialui',
  name: 'Material UI',
  logo: logo_materialui,
  href: 'https://material-ui.com/'
}

import logo_aspnetcore from '../assets/logos/aspnetcore.png'
const skill_aspnetcore = {
  id: 'aspnetcore',
  name: 'ASP.NET Core',
  logo: logo_aspnetcore,
  href: 'https://dotnet.microsoft.com/apps/aspnet'
}

import logo_flask from '../assets/logos/flask.png'
const skill_flask = {
  id: 'flask',
  name: 'Flask',
  logo: logo_flask,
  href: 'https://flask.palletsprojects.com/'
}

import logo_phpstorm from '../assets/logos/phpstorm.png'
const skill_phpstorm = {
  id: 'phpstorm',
  name: 'PhpStorm',
  logo: logo_phpstorm,
  href: 'https://www.jetbrains.com/fr-fr/phpstorm/'
}

import logo_vscode from '../assets/logos/vscode.svg'
const skill_vscode = {
  id: 'vscode',
  name: 'VSCode',
  logo: logo_vscode,
  href: 'https://code.visualstudio.com/'
}

import logo_git from '../assets/logos/git.png'
const skill_git = {
  id: 'git',
  name: 'Git',
  logo: logo_git,
  href: 'https://git-scm.com/'
}

import logo_github from '../assets/logos/github.svg'
const skill_github = {
  id: 'github',
  name: 'GitHub',
  logo: logo_github,
  href: 'https://github.com'
}

import logo_gitlab from '../assets/logos/gitlab.svg'
const skill_gitlab = {
  id: 'gitlab',
  name: 'GitLab',
  logo: logo_gitlab,
  href: 'https://gitlab.com'
}

import logo_docker from '../assets/logos/docker.png'
const skill_docker = {
  id: 'docker',
  name: 'Docker',
  logo: logo_docker,
  href: 'https://www.docker.com/'
}

import logo_nginx from '../assets/logos/nginx.svg'
const skill_nginx = {
  id: 'nginx',
  name: 'NGINX',
  logo: logo_nginx,
  href: 'https://www.nginx.com/'
}

import logo_unity from '../assets/logos/unity.svg'
const skill_unity = {
  id: 'unity',
  name: 'Unity',
  logo: logo_unity,
  href: 'https://unity.com/'
}


const Me: MeModel = {
  firstName: 'Alexis',
  lastName: 'Udycz',
  email: 'udycz.alexis@gmail.com',
  cvUrl: CVPath,
  job: 'Développeur Web FullStack',
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
        skill_docker,
        skill_nginx
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
    {
      id: 'blog',
      title: 'Blog',
      coverUrl: BlogCoverPath,
      demo: 'https://blog.udycz.dev',
      tags: [tag_gohugo, tag_javascript_typescript]
    },
    {
      id: 'outerwild-coop',
      title: 'Outer Wilds Coop (Mod)',
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
          title: 'STI2D',
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
          title: 'BUT Informatique',
          year: '2021 - 2024',
          company: 'Université de Reims Champagne-Ardenne',
          status: CompleteState.InProgress,
          bannerUrl: 'https://www.iut-rcc.fr/media-images/23796/vueaerienne-iut.jpg',
          url: 'https://www.iut-rcc.fr/'
        },
        {
          id: 'stagemarne',
          title: 'Stage Dep. Marne',
          year: '8 semaines - 2023',
          company: 'Département de la Marne - Châlons-en-Champagne',
          status: CompleteState.Completed,
          url: 'https://www.marne.fr'
        }
      ]
    }
  ]
}

export default Me
