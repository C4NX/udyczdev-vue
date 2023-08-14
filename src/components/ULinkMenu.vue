<template>
    <div class="bg-base-200 rounded-box m-4 p-5 flex flex-col gap-2">
        <h3 class="text-2xl">{{ $t("links.title") }}</h3>
        <ul class="menu">
            <li v-for="entry in entries" v-bind:key="entry.name">
                <a :href="entry.href" target="_blank" rel="noopener noreferrer">
                    <v-icon :name="entry.icon" fill="white" />
                    {{ entry.name }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type MenuLink from '@/models/MenuLink';

defineProps({
    entries: {
        type: Array<MenuLink>,
        default: []
    }
})

</script>