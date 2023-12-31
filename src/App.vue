<template>
  <main class="flex-1">
    <div class="flex flex-col gap-3 justify-center items-center h-full">
      <PortfolioView :data="Portfolio" />
    </div>
  </main>
  <u-footer />
</template>

<script setup lang="ts">
import Portfolio from './data/Portfolio'
import 'floating-vue/dist/style.css'
import './assets/main.css'
import PortfolioView from './components/PortfolioView.vue'
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