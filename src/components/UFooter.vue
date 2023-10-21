<script setup lang="ts">
// TODO: Change to props ?
import Me from '@/data/Me'
</script>

<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content flex justify-center">
    <p>
      {{ $t('footer.text', { year: new Date().getFullYear(), fullname: `${Me.lastName} ${Me.firstName}` }) }}
    </p>
  </footer>
</template>