<template>
  <div class="bg-base-200 rounded-box p-5 w-4/5 sm:w-2/3 flex flex-col gap-5">
    <h3 class="text-2xl font-bold">{{ $t('works.title') }}</h3>
    <div class="flex flex-col sm:flex-row gap-2">
      <ul class="menu bg-base-200 w-56 rounded-box">
        <li v-for="category in data" v-bind:key="category.title">
          <h2 class="menu-title">{{ category.title }}</h2>
          <ul v-for="work in category.works" v-bind:key="work.id">
            <li>
              <a @click.prevent="selectedWork = work">{{ work.titleSmall ?? work.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="border-t sm:border-l sm:border-t-0 border-primary p-5 flex flex-col gap-5 flex-1" v-if="selectedWork">
        <img v-if="selectedWork.bannerUrl" :src="selectedWork.bannerUrl" alt="work"
          class="rounded-box w-auto h-32 sm:h-60 object-cover" />
        <h4 class="text-center text-2xl font-bold">
          {{ selectedWork.title }} ({{ selectedWork.year }})
        </h4>
        <MarkdownText :t="`works.${selectedWork.id}.description`" />
        <div class="flex justify-between items-center flex-col-reverse gap-4 sm:flex-row sm:gap-0">
          <complete-status-chip :state="selectedWork.status" />
          <small class="text-center sm:text-end">{{ selectedWork.company }}</small>
        </div>
        <a class="btn btn-primary" :href="selectedWork.url" target="_blank" rel="noopener noreferrer">
          {{ $t('button.visitwork') }}
        </a>
      </div>
      <p v-else>
        {{ $t('works.select') }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type Work from '@/models/Work'
import type WorkCategory from '@/models/WorkCategory'
import { ref } from 'vue'
import CompleteStatusChip from './CompleteStatusChip.vue'

import MarkdownText from './MarkdownText.vue'

const selectedWork = ref<Work | undefined>(undefined)

defineProps({
  data: {
    type: Array<WorkCategory>,
    required: true
  }
})
</script>
