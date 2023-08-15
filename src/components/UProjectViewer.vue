<template>
  <div class="flex flex-wrap justify-center gap-10 pb-5">
    <div
      v-for="project in data"
      v-bind:key="project.title"
      class="card card-compact w-80 bg-base-100 shadow-xl"
    >
      <figure>
        <img
          src="https://media.discordapp.net/attachments/411507109138661397/1120735282883461170/image.png?width=1346&height=675"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <div class="badge badge-accent">New</div>
        <h2 class="card-title">
          {{ project.title }}
        </h2>
        <p>{{ project.description }}</p>
        <div class="card-actions justify-end">
          <a
            class="btn btn-primary"
            :href="project.source"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('button.source') }}
          </a>
          <a
            class="btn btn-secondary"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            :class="{ 'btn-disabled': !project.demo }"
          >
            {{ $t('button.demo') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/models/Project'

defineProps({
  data: {
    type: Array<Project>,
    default: []
  }
})
</script>
