<template>
  <footer class="footer bg-base-200 items-center p-4 flex justify-center">
    <div class="items-center grid-flow-col text-primary">
      {{ $t('footer.text') }} © {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>