<template>
  <!-- <div class="mockup-browser border bg-base-300 max-w-6xl">
    <div class="mockup-browser-toolbar">
      <div class="input select-none">
        {{ title }}
      </div>
      <ULocaleSwitcher />
    </div>
    <slot />
  </div> -->
  <div class="bg-gray-800 m-5 rounded-lg">
    <div class="flex items-center justify-between gap-2 m-2">
      <div class="text-white text-lg font-bold border border-1 flex-1 rounded-md p-2">{{ title }}</div>
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
