<template>
  <ul class="menu menu-horizontal bg-base-200 rounded-box">
    <li v-for="entry in entries" v-bind:key="entry.name">
      <a :href="entry.href" target="_blank" rel="noopener noreferrer">
        <v-icon :name="entry.icon" fill="white" />
        {{ entry.name }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type MenuLink from '@/models/MenuLink'

defineProps({
  entries: {
    type: Array<MenuLink>,
    default: []
  }
})
</script>
