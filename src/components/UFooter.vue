<script setup lang="ts">
import Portfolio from '@/data/Portfolio'
</script>

<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content flex justify-center">
    <p>
      {{ $t('footer.text', { year: new Date().getFullYear(), fullname: `${Portfolio.lastName} ${Portfolio.firstName}` }) }}
    </p>
  </footer>
</template>