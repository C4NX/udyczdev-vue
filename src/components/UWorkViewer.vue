<template>
  <div class="bg-base-200 rounded-box p-5 w-2/3 flex flex-col gap-5">
    <h3 class="text-2xl font-bold">{{ $t('works.title') }}</h3>
    <div class="flex gap-2">
      <ul class="menu bg-base-200 w-56 rounded-box">
        <li v-for="category in data" v-bind:key="category.title">
          <h2 class="menu-title">{{ category.title }}</h2>
          <ul v-for="work in category.works" v-bind:key="work.title">
            <li>
              <a @click.prevent="selectedWork = work">{{ work.title }}</a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="border-l border-primary p-5 flex flex-col gap-5 flex-1" v-if="selectedWork">
        <img
          v-if="selectedWork.bannerUrl"
          :src="selectedWork.bannerUrl"
          alt="work"
          class="rounded-box w-auto h-60 object-cover"
        />
        <h4 class="text-center text-2xl font-bold">
          {{ selectedWork.title }} ({{ selectedWork.year }})
        </h4>
        <p class="text-justify">{{ $t(`works.${selectedWork.id}.description`) }}</p>
        <div class="flex justify-between items-center">
          <complete-status-chip :state="selectedWork.status" />
          <small class="text-end">{{ selectedWork.company }}</small>
        </div>
        <a
          class="btn btn-primary"
          :href="selectedWork.url"
          target="_blank"
          rel="noopener noreferrer"
        >
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

const selectedWork = ref<Work | undefined>(undefined)

defineProps({
  data: {
    type: Array<WorkCategory>,
    required: true
  }
})
</script>
