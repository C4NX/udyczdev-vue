<script setup lang="ts">
import type { MeModel } from '@/models/Me'
import { computed, type PropType } from 'vue'
import ULinkMenu from './ULinkMenu.vue'
import MarkdownText from '@/components/MarkdownText.vue'
import { OhVueIcon } from 'oh-vue-icons'

const props = defineProps({
  data: {
    type: Object as PropType<MeModel>,
    required: true
  }
})

// 🎉 Yeah my birthday !
const yearsOld = computed(() => new Date().getFullYear() - props.data.birthdayDate.getFullYear())
const fullname = computed(() => `${props.data.firstName} ${props.data.lastName}`)

</script>

<template>
  <div class="flex flex-col m-10 items-center gap-5 animate-fade animate-once">
    <div class="flex flex-col gap-7">
      <h1 class="text-5xl text-center">
        {{ $t('profile.title') }}
        <span class="text-primary"> {{ fullname }} </span>
      </h1>
      <h2 class="text-2xl text-center">
        {{ $t('profile.job') }}
        <span class="text-secondary">
          {{ data.job }}
        </span>
      </h2>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex items-center justify-center gap-5 flex-col sm:flex-row">
        <div class="avatar p-2">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img :src="data.avatarUrl" alt="avatar" />
          </div>
        </div>
        <div class="flex gap-2 flex-col">
          <MarkdownText t="profile.description" :td="{ yearsOld, fullname }" class-name="text-justify" />
          <div class="flex flex-nowrap gap-2 content-center">
            <OhVueIcon name="ri-map-pin-2-line" fill="currentColor" />
            <a :href="data.locationUrl" target="_blank" rel="noopener noreferrer" class="link link-secondary">
              {{ data.location }}
            </a>
          </div>
        </div>
      </div>
      <div class="flex gap-3 justify-between items-center flex-col sm:flex-row">
        <ULinkMenu :entries="data.links" />

        <a class="btn btn-secondary" :href="data.cvUrl" target="_blank" rel="noopener noreferrer">
          {{ $t('action.cv') }}
        </a>
      </div>
    </div>
  </div>
</template>