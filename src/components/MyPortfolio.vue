<script setup lang="ts">
import type { MeModel } from '@/models/Me'
import { defineProps } from 'vue'

// import WindowFrameVue from './WindowFrame.vue';
// import WorkTrace from './WorkTrace.vue';

import USkillsViewer from './USkillsViewer.vue'
import UContactForm from './UContactForm.vue'
import UMockupBrowser from './UMockupBrowser.vue'
import UProjectViewer from './UProjectViewer.vue'
import UWorkViewer from './UWorkViewer.vue'
import UProfile from './UProfile.vue'

defineProps<{
  data: MeModel
}>()
</script>

<template>
  <UMockupBrowser :title="`Portfolio - ${data.firstName} ${data.lastName}`">
    <template #default>
      <UProfile :data="data" />
      <!-- <div class="flex m-10 items-center">
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
                        <div class="flex flex-col gap-4">
                            <p class="text-justify">
                                {{ $t("profile.description") }}
                            </p>
                            <div class="flex gap-3 justify-between items-center">
                                <ULinkMenu :entries="data.links" />
                                <a class="btn btn-secondary" :href="data.cvUrl" target="_blank" rel="noopener noreferrer">
                                    {{ $t('button.cv') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
      <div class="divider"></div>
      <u-project-viewer :data="data.projects" toolbar />
      <div class="divider"></div>
      <div class="flex items-center justify-center">
        <USkillsViewer
          :data="data.skills"
        />
      </div>
      <div class="divider"></div>
      <div class="flex items-center justify-center my-5">
        <UWorkViewer :data="data.works" />
      </div>
      <div class="divider"></div>
      <div class="flex items-center justify-center my-5">
        <UContactForm :mail="data.email" />
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
</WindowFrameVue>-->
</template>