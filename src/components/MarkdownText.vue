
<script setup lang="ts">
import { marked } from 'marked'
import sanitize from 'sanitize-html'
import { defineProps } from 'vue'

defineProps({
    text: {
        type: String,
        required: false
    },
    t: {
        type: String,
        required: false
    }
})
</script>

<template>
    <div v-html="sanitize(marked(t ? $t(t) : (text ?? ''), { breaks: true, gfm: true }))" class="markdown-text-list" />
</template>

<style>
.markdown-text-list ul {
    list-style-type: disc;
    margin-left: 2rem;
}

.markdown-text-list ol {
    list-style-type: decimal;
    margin-left: 2rem;
}
</style>