<template>
    <div class="mockup-browser border bg-base-300 max-w-6xl">
        <div class="mockup-browser-toolbar">
            <div class="input select-none">
                {{ title }}
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup lang="ts">

defineProps({
    title: {
        type: String,
        default: 'Mockup Browser'
    },
})

</script>