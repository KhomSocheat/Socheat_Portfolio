<template>
  <Navbar />
  <router-view />
</template>
<script setup>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import Navbar from './components/Navbar.vue';

const { locale } = useI18n();

// Update body lang attribute when locale changes
watch(locale, (newLocale) => {
  document.body.setAttribute('lang', newLocale);
}, { immediate: true });
</script>
