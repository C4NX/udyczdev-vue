<template>
  <footer class="footer items-center p-4 bg-neutral text-neutral-content flex justify-center">
    <div class="items-center grid-flow-col">
      {{ $t('footer.text') }} © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>