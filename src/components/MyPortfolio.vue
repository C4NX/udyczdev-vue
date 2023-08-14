<script setup lang="ts">
import type { MeModel } from '@/models/Me';

// import WindowFrameVue from './WindowFrame.vue';
// import WorkTrace from './WorkTrace.vue';

import USkillsViewer from './USkillsViewer.vue'
import UContactForm from './UContactForm.vue';
import ULinkMenu from './ULinkMenu.vue';
import UMockupBrowser from './UMockupBrowser.vue';
import UProjectViewer from './UProjectViewer.vue';

defineProps<{
    data: MeModel
}>();

</script>


<template>
    <UMockupBrowser :title="`Portfolio - ${data.firstName} ${data.lastName}`">
        <template #default>
            <div class="flex m-10 items-center">
                <div class="flex flex-col gap-7">
                    <h1 class="text-5xl text-center"> {{ $t("profile.title") }}
                        <span class="text-primary">
                            {{ data.firstName }} {{ data.lastName }}
                        </span>
                    </h1>
                    <h2 class="text-2xl text-center">
                        {{ $t("profile.job") }}
                        <span class="text-secondary">
                            {{ data.job }}
                        </span>
                    </h2>
                    <div class="flex gap-10">
                        <div class="flex items-center justify-center gap-2">
                            <div class="avatar">
                                <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img :src="data.avatarUrl" alt="avatar" />
                                </div>
                            </div>
                        </div>
                        <p class="text-justify">
                            {{ $t("profile.description") }}
                        </p>
                    </div>
                    <div class="flex justify-end">
                        <a class="btn btn-secondary" :href="data.cvUrl" target="_blank" rel="noopener noreferrer">
                            {{ $t('button.cv') }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="divider"></div>
            <u-link-menu :entries="data.links" />
            <div class="divider"></div>
            <u-project-viewer :data="data.projects" />
            <div class="divider"></div>
            <div class="flex items-center justify-center">
                <USkillsViewer :data="[{
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
                }, {
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
                }]" />
            </div>
            <div class="divider"></div>
            <div class="flex items-center justify-center">
                <div>
                    TODO
                </div>
            </div>
            <div class="divider"></div>
            <div class="flex items-center justify-center">
                <UContactForm :mail='data.email' />
            </div>
        </template>
    </UMockupBrowser>
    <!-- <WindowFrameVue :title="`Portfolio - ${data.firstName} ${data.lastName}`">
        <div>
            <div class="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Warning: Invalid email address!</span>
            </div>
        </div>
        <section>
            <img :src="data.avatar" alt="avatar" class="w-32 h-32 rounded-full mx-auto" />
        </section>
    </WindowFrameVue>
    <WindowFrameVue title="Links">
        {{ t('hello') }}
    </WindowFrameVue>
    <WindowFrameVue title="Projects" />
    <WindowFrameVue title="Experiences">
    <WorkTrace :works="data.works" />
</WindowFrameVue>--></template>