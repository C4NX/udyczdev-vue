<template>
  <div class="bg-base-100 m-5 rounded-lg">
    <div class="flex items-center justify-end gap-2 m-2">
      <!-- <div class="text-primary text-lg font-bold border border-1 flex-1 rounded-md p-2">{{ title }}</div> -->
      <ULocaleSwitcher />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import ULocaleSwitcher from './ULocaleSwitcher.vue'

defineProps({
  title: {
    type: String,
    default: 'Mockup Browser'
  }
})
</script>
