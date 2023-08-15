import { CompleteState } from '@/models/Work'
import AvatarPath from '../assets/avatar.png'
import CVPath from '../assets/docs/CV.pdf'
import { type MeModel } from '../models/Me'
import { ProjectTagColor } from '@/models/Project'

const Me: MeModel = {
  firstName: 'Alexis',
  lastName: 'Udycz',
  email: 'udycz.alexis@gmail.com',
  cvUrl: CVPath,
  job: 'Développeur Web FullStack',
  avatarUrl: AvatarPath,
  skills: [
    {
      id: 'os',
      name: 'Operating Systems',
      icon: 'ri-windows-fill',
      skills: [
        {
          id: 'windows',
          name: 'Windows',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1200px-Windows_logo_-_2012.svg.png',
          href: 'https://www.microsoft.com/fr-fr/windows'
        },
        {
          id: 'linux',
          name: 'Linux',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png',
          href: 'https://www.linux.org/'
        }
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks CSS',
      icon: 'ri-css3-fill',
      skills: [
        {
          id: 'tailwind',
          name: 'Tailwind CSS',
          logo: 'https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png',
          href: 'https://tailwindcss.com/'
        },
        {
          id: 'bootstrap',
          name: 'Bootstrap',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
          href: 'https://getbootstrap.com/'
        },
        {
          id: 'daisyui',
          name: 'DaisyUI',
          logo: 'https://daisyui.com/images/daisyui-logo/daisyui-logomark-1024-1024.png',
          href: 'https://daisyui.com/'
        }
      ]
    }
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
      tags: [{
        id: 'vuejs',
        title: 'Vuejs',
        color: ProjectTagColor.Primary
      }, {
        id: 'tailwindcss',
        title: 'Tailwind CSS',
        color: ProjectTagColor.Secondary
      }]
    },
    {
      id: 'blog',
      title: 'Blog',
      source: '#',
      tags: [{
        id: 'hugo',
        title: 'Hugo',
        color: ProjectTagColor.Primary
      }]
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
          url: 'https://iut-rcc.univ-reims.fr'
        },
        {
          id: 'stagemarne',
          title: 'Stage Dep. Marne',
          year: '8 semaines - 2023',
          company: 'Département de la Marne',
          status: CompleteState.Completed,
          url: 'https://www.marne.fr'
        }
      ]
    }
  ]
}

export default Me
