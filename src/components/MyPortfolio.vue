<script setup lang="ts">
import type Portfolio from '../models/Portfolio'
import USkillsViewer from './USkillsViewer.vue'
import UContactForm from './UContactForm.vue'
import UMockupBrowser from './UMockupBrowser.vue'
import UProjectViewer from './UProjectViewer.vue'
import UWorkViewer from './UWorkViewer.vue'
import UProfile from './UProfile.vue'
import { ENV_WIP_BANNER } from '@/config/env'
import { OhVueIcon } from 'oh-vue-icons'

defineProps<{
  data: Portfolio
}>()
</script>

<template>
  <UMockupBrowser :title="`udycz.dev - Portfolio`">
    <template #default>
      <div class="m-5" v-if="ENV_WIP_BANNER">
        <div class="alert alert-warning">
          <OhVueIcon name="ri-alert-line" fill="currentColor" />
          <span><strong>Warning</strong>: {{ $t('wip') }}</span>
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