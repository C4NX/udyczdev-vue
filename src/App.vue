<template>
  <main class="flex-1">
    <div class="flex flex-col gap-3 justify-center items-center h-full">
      <MyPortfolio :data="Me" />
    </div>
  </main>
  <!-- <footer class="flex justify-center">
    <span class=" text-green-100 hover:font-bold">
      Made with
      <span class="text-red-500">&hearts;</span>
      by Udycz Alexis (2023)
    </span>
  </footer> -->
  <u-footer/>
</template>

<script setup lang="ts">
import Me from './data/Me'
import 'floating-vue/dist/style.css'
import './assets/main.css'
import MyPortfolio from './components/MyPortfolio.vue'
import UFooter from './components/UFooter.vue'
</script>

<style>
#app {
  background-image: url('./assets/background.svg');
  background-size: cover;
  background-position: zero center;
  display: flex;
  flex-direction: column;
}
</style>
