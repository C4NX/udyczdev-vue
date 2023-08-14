<template>
  <div class="flex bg-base-200 rounded-box p-5 gap-4 w-2/3 flex-col-reverse sm:flex-row">
    <ul class="menu">
      <li v-for="category in data" v-bind:key="category.id">
        <a @click.prevent="selectedCategory = category">
          <v-icon :name="category.icon" fill="white" />
          {{ category.name }}
        </a>
      </li>
    </ul>
    <div class="flex-1">
      <p v-if="!selectedCategory">
        Please select a category.
      </p>
      <div class="flex flex-wrap gap-5" v-else>
        <p v-if="!selectedCategory.skills.length">No skills found.</p>
        <div v-for="skill in selectedCategory.skills" v-bind:key="skill.id" class="avatar indicator">
          <a :href="skill.href" target="_blank" rel="noopener noreferrer">
            <span class="indicator-item indicator-bottom indicator-center badge badge-secondary">{{ skill.name }}</span>
            <span v-if="skill.detail" class="indicator-item indicator-center badge badge-info">{{ skill.detail }}</span>
            <div class="w-20 h-20 rounded-lg">
              <img :src="skill.logo" />
            </div>
          </a>
        </div>
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