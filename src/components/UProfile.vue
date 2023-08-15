<template>
  <div class="flex flex-col m-10 items-center gap-10 animate-fade animate-once">
    <div class="flex flex-col gap-7">
      <h1 class="text-5xl text-center">
        {{ $t('profile.title') }}
        <span class="text-primary"> {{ data.firstName }} {{ data.lastName }} </span>
      </h1>
      <h2 class="text-2xl text-center">
        {{ $t('profile.job') }}
        <span class="text-secondary">
          {{ data.job }}
        </span>
      </h2>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex gap-10">
        <div class="flex items-center justify-center gap-10">
          <div class="avatar p-2">
            <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img :src="data.avatarUrl" alt="avatar" />
            </div>
          </div>
          <p class="text-justify">
            {{ $t('profile.description') }}
          </p>
        </div>
      </div>
      <div class="flex gap-3 justify-between items-center">
        <ULinkMenu :entries="data.links" />
        <a class="btn btn-secondary" :href="data.cvUrl" target="_blank" rel="noopener noreferrer">
          {{ $t('button.cv') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { MeModel } from '@/models/Me'
import type { PropType } from 'vue'

import ULinkMenu from './ULinkMenu.vue'

defineProps({
  data: {
    type: Object as PropType<MeModel>,
    required: true
  }
})
</script>
