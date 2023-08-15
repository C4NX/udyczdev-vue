<template>
  <div class="bg-base-200 w-full p-5 rounded-box flex gap-2 items-center" v-if="toolbar">
    <span>
      Tags
    </span>
    <div class="flex flex-1 gap-2 flex-wrap">
      <button v-for="tag in data.flatMap(x => x.tags).filter(x => x)!" v-bind:key="tag?.title"
        :class="['badge', getProjectTagColor(tag!.color)]" @click="toogleTag(tag)">
        <v-icon :name="`ri-checkbox-${isTagSelected(tag!) ? 'circle-fill' : 'blank-circle-fill'}`"></v-icon>
        {{ tag!.title }}</button>
    </div>
  </div>
  <div class="flex flex-wrap justify-center gap-10 pb-5">
    <div v-for="project in projects" v-bind:key="project.id" class="card card-compact w-80 bg-base-100 shadow-xl">
      <figure v-if="project.coverUrl">
        <img :src="project.coverUrl" :alt="project.title" />
      </figure>
      <div class="card-body">
        <div class="flex justify-evenly">
          <div v-for="tag in project.tags" v-bind:key="tag.title" :class="['badge', getProjectTagColor(tag.color)]">{{
            tag.title }}</div>
        </div>
        <h2 class="card-title">
          {{ project.title }}
        </h2>
        <p>{{ $t(`projects.${project.id}.description`) }}</p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" :href="project.source" target="_blank" rel="noopener noreferrer">
            {{ $t('button.source') }}
          </a>
          <a class="btn btn-secondary" :href="project.demo" target="_blank" rel="noopener noreferrer"
            :class="{ 'btn-disabled': !project.demo }">
            {{ $t('button.demo') }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Project, type ProjectTag, getProjectTagColor } from '@/models/Project'
import { ref } from 'vue';

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

const isTagSelected = (tag: ProjectTag) => {
  return toolbar_tags.value?.map(x => x.id).includes(tag?.id)
}

const refreshProjects = () => {
  projects.value = props.data.filter(x => {
    if (toolbar_tags.value.length > 0) {
      return x.tags?.map(x => x.id).some(x => toolbar_tags.value.map(x => x.id).includes(x))
    }
    return true
  })
  console.log(`refreshed projects: ${projects.value.length}/${props.data.length}`)
}

const toogleTag = (tag: ProjectTag | undefined) => {
  if (!tag)
    return;
  if (isTagSelected(tag)) {
    toolbar_tags.value = toolbar_tags.value.filter(x => x.id !== tag.id)
  } else {
    toolbar_tags.value.push(tag)
  }

  refreshProjects()
}

</script>
