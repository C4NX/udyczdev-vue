<template>
  <div class="bg-base-200 rounded-box p-5 w-2/3 flex flex-col gap-5">
    <h3 class="text-2xl">{{ $t("skills.title") }}</h3>
    <div class="flex gap-4 flex-col-reverse sm:flex-row">
      <ul class="menu">
        <li v-for="category in data" v-bind:key="category.id">
          <a @click.prevent="selectedCategory = category">
            <v-icon :name="category.icon" fill="white" />
            {{ $t(`skills.category.${category.id}`) }}
          </a>
        </li>
      </ul>
      <div class="flex-1">
        <p v-if="!selectedCategory">
          {{ $t('skills.select') }}
        </p>
        <Transition enter-from-class="opacity-0" leave-to-class="opacity-0" enter-active-class="transition duration-300"
          leave-active-class="transition duration-300" appear>
          <div class="flex flex-wrap gap-5" v-if="selectedCategory">
            <p v-if="!selectedCategory.skills.length">
              {{ $t('skills.empty') }}
            </p>
            <div v-for="skill in selectedCategory.skills" v-bind:key="skill.id" class="avatar indicator">
              <a :href="skill.href" target="_blank" rel="noopener noreferrer">
                <span class="indicator-item indicator-bottom indicator-center badge badge-secondary">{{ skill.name ??
                  $t(`skills.name.${skill.id}`) }}</span>
                <span v-if="skill.detail" class="indicator-item indicator-center badge badge-info">{{ skill.detail
                }}</span>
                <div class="w-20 h-20 rounded-lg">
                  <img :src="skill.logo" />
                </div>
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import type SkillCategory from '@/models/SkillCategory'
import { ref } from 'vue';

const selectedCategory = ref<SkillCategory | undefined>()

defineProps({
  data: {
    type: Array<SkillCategory>,
    default: []
  }
})

</script>