<script setup lang="ts">
import type { MeModel } from '@/models/Me'
import USkillsViewer from './USkillsViewer.vue'
import UContactForm from './UContactForm.vue'
import UMockupBrowser from './UMockupBrowser.vue'
import UProjectViewer from './UProjectViewer.vue'
import UWorkViewer from './UWorkViewer.vue'
import UProfile from './UProfile.vue'
import { ENV_WIP_BANNER } from '@/config/env'

defineProps<{
  data: MeModel
}>()
</script>

<template>
  <UMockupBrowser :title="`udycz.dev - Portfolio`">
    <template #default>
      <div class="m-5" v-if="ENV_WIP_BANNER">
        <div class="alert alert-warning">
          <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span><strong>Warning</strong>: This page is still under development, some information or
            features may be missing.</span>
        </div>
      </div>
      <UProfile :data="data" />
      <div class="divider"></div>
      <u-project-viewer :data="data.projects" toolbar />
      <div class="divider"></div>
      <div class="flex items-center justify-center">
        <USkillsViewer :data="data.skills" />
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
</template>
