<template>
    <div class="border border-black">
        <div class="max-w-4xl" v-for="work in works" v-bind:key="work.title">
            <div class="flex flex-row gap-2 items-center p-2">
                <complete-status-chip :state="work.status" />
                <a :href="work.url" class="text-black font-bold">
                    {{ work.title }} / {{ work.company }} ({{ work.year }})
                </a>
            </div>
            <div class="border-black border-l ml-4 pl-3 m-2 flex flex-col gap-4">
                <p class="text-justify">
                    {{ work.description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CompleteState } from '@/data/CompleteState';
import CompleteStatusChip from './CompleteStatusChip.vue';
import type { MeWorkModel } from '@/data/Me';

defineProps({
    works: {
        type: Array<MeWorkModel>,
        default: CompleteState.Completed
    }
})

</script>