<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content flex justify-center">
    <div class="items-center grid-flow-col">
      <a :href="source.href" target="_blank" rel="noopener noreferrer">
        <v-icon :name="icon" fill="white" scale="1.5" />
      </a>
      <p>
        {{ $t('footer.text') }}
      </p>
    </div>
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a
        v-for="link in socials"
        :key="link.name"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon :name="link.icon" fill="white" scale="1.5" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import type MenuLink from '@/models/MenuLink'
import type { PropType } from 'vue'

defineProps({
  source: {
    type: Object as PropType<MenuLink>,
    default: () => ({
      name: 'GitHub',
      href: 'https://github.com',
      icon: 'ri-github-fill'
    })
  },
  icon: {
    type: String,
    default: 'ri-github-fill'
  },
  socials: {
    type: Array<MenuLink>,
    default: []
  }
})
</script>
