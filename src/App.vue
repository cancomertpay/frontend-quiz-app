<script setup>
import { useThemeStore } from './store/store.js';
import { storeToRefs } from 'pinia';

import TheHeader from './components/layout/TheHeader.vue';
import TheMain from './components/layout/TheMain.vue';

const store = useThemeStore();

const { themeClass } = storeToRefs(store);
</script>

<template>
  <section
    :class="themeClass"
    class="min-h-screen"
  >
    <div
      class="block bg-light-grey dark:bg-dark-navy text-dark-navy dark:text-white min-h-screen p-5 md:px-16 lg:py-20 lg:px-40 select-none transition-colors overflow-hidden"
    >
      <TheHeader />
      <TheMain />
    </div>
  </section>
</template>
