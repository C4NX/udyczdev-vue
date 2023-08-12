<script setup lang="ts">
    defineProps<{
        title: string
    }>()
</script>

<template>
    <div>
        <p class="text-xl">
            {{ title }}
        </p>
        <div>
            <slot />
        </div>
    </div>
</template>