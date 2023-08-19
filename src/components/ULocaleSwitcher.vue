<template>
  <select v-model="$i18n.locale" class="select">
    <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
      {{ i18n.t('name', 1, { locale, default: locale }) }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const i18n = useI18n()
</script>
