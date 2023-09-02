<template>
  <div class="mockup-browser border bg-base-300 max-w-6xl">
    <div class="mockup-browser-toolbar !hidden sm:!inline-flex">
      <div class="input select-none">
        {{ title }}
      </div>
    </div>
    <div class="flex items-center w-100 justify-center m-4 sm:absolute sm:right-3 sm:top-3 sm:m-0">
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
