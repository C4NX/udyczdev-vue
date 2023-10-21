<script setup lang="ts">
import { type Project, type ProjectTag } from '@/models/Project'
import { OhVueIcon } from 'oh-vue-icons';
import { ref, watch } from 'vue';

const props = defineProps({
  data: {
    type: Array<Project>,
    default: []
  },
  toolbar: {
    type: Boolean,
    default: false
  }
})

const toolbar_tags = ref<ProjectTag[]>([])
const projects = ref<Project[]>(props.data)

const getAllTags = () => {
  const allTags = new Set<ProjectTag>();

  props.data.forEach(item => {
    if (Array.isArray(item.tags)) {
      item.tags.forEach(tag => {
        if (tag) {
          allTags.add(tag);
        }
      });
    }
  });

  return Array.from(allTags);
}

const isTagSelected = (tag: ProjectTag) => {
  return toolbar_tags.value?.map(x => x.id).includes(tag?.id)
}

const isTagColored = (tag: ProjectTag) => {
  return !toolbar_tags.value || toolbar_tags.value.length === 0 || isTagSelected(tag)
}

const refreshProjects = () => {
  projects.value = props.data.filter(x => {
    if (toolbar_tags.value.length > 0) {
      return x.tags?.map(x => x.id).some(x => toolbar_tags.value.map(x => x.id).includes(x))
    }
    return true
  })
}

const toogleTag = (tag: ProjectTag | undefined) => {
  if (!tag) {
    return;
  }

  if (isTagSelected(tag)) {
    toolbar_tags.value = toolbar_tags.value.filter(x => x.id !== tag.id)
  } else {
    toolbar_tags.value.push(tag)
  }

  refreshProjects()
}

watch(() => props.data, () => {
  projects.value = props.data
  refreshProjects()
})

</script>


<template>
  <div class="flex flex-col gap-6 p-5">
    <h3 class="text-3xl font-bold text-center">
      {{ $t('projects.title') }}
    </h3>
    <div class="bg-base-200 px-4 py-5 rounded-box flex gap-2 items-center" v-if="toolbar">
      <div class="flex flex-1 gap-2 flex-wrap p-2">
        <button v-for="tag in getAllTags()" v-bind:key="tag.title"
          :class="['badge badge-lg', isTagColored(tag) ? 'badge-accent' : 'badge-ghost']" @click="toogleTag(tag)">
          {{ tag.title }}</button>
      </div>
    </div>
    <div class="flex flex-wrap justify-center gap-10 pb-5">
      <div v-for="project in projects" v-bind:key="project.id" class="card card-compact w-80 bg-base-100 shadow-xl">
        <figure v-if="project.coverUrl">
          <img :src="project.coverUrl" :alt="project.title" />
        </figure>
        <div class="card-body">
          <div class="flex items-center gap-3 flex-wrap">
            <h2 class="card-title">
              {{ project.title }}
            </h2>
            <div class="flex gap-3 justify-center items-center">
              <div v-for="tag in project.tags" v-bind:key="tag.title" class="badge badge-accent">{{
                tag.title }}</div>
            </div>
          </div>
          <p>{{ $t(`projects.${project.id}.description`) }}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" :class="{ 'btn-disabled': !project.source }" :href="project.source" target="_blank"
              rel="noopener noreferrer">
              {{ $t('action.source') }}
              <OhVueIcon name="ri-github-line" fill="currentColor" />
            </a>
            <a class="btn btn-secondary" :href="project.demo" target="_blank" rel="noopener noreferrer"
              :class="{ 'btn-disabled': !project.demo }">
              {{ $t('action.demo') }}
              <OhVueIcon name="ri-play-line" fill="currentColor" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>