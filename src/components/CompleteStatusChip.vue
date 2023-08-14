<template>
    <!-- <div class="rounded-lg border-1 flex items-center hover:scale-110 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <v-icon :name="toIcon(state)" scale="2" :fill="toColor(state)" class="m-1" />
        <span class="flex-1">{{ text }}</span>
    </div> -->
    <div class="center relative inline-block select-none whitespace-nowrap rounded-l py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white hover:scale-110 transform transition-all duration-200"
        :style="{
            'background-color': toColor(state)
        }">
        <div class="absolute top-2/4 left-1 h-5 w-5 -translate-y-2/4">
            <oh-vue-icon :name="toIcon(state)" fill="white" />
        </div>
        <div class="ml-4 mt-px">{{ toText(state) }}</div>
    </div>
</template>

<script setup lang="ts">
import { CompleteState } from '@/data/CompleteState';
import { OhVueIcon } from 'oh-vue-icons';
import type { PropType } from 'vue';

const toIcon = (state: CompleteState) => {
    switch (state) {
        case CompleteState.NotStarted:
            return 'ri-radio-button-line';
        case CompleteState.InProgress:
            return 'ri-checkbox-blank-circle-line';
        case CompleteState.Completed:
            return 'ri-checkbox-circle-line';
        default:
            return 'ri-question-fill';
    }
};

const toColor = (state: CompleteState) => {
    switch (state) {
        case CompleteState.NotStarted:
            return 'black';
        case CompleteState.InProgress:
            return 'blue';
        case CompleteState.Completed:
            return 'green';
        default:
            return 'red';
    }
};

const toText = (state: CompleteState) => {
    switch (state) {
        case CompleteState.NotStarted:
            return 'Not Started';
        case CompleteState.InProgress:
            return 'In Progress';
        case CompleteState.Completed:
            return 'Completed';
        default:
            return 'Unknown';
    }
};

defineProps({
    state: {
        type: Number as PropType<CompleteState>,
        default: CompleteState.NotStarted
    },
});
</script>