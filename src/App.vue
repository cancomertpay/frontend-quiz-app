<script setup>
import { ref, provide, watch, computed } from 'vue';
import { useThemeStore } from './store/store.js';
import { storeToRefs } from 'pinia';

import TheHeader from './components/layout/TheHeader.vue';
import TheQuizList from './components/quiz/TheQuizList.vue';
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
      class="bg-light-grey dark:bg-dark-navy text-dark-navy dark:text-white min-h-screen py-20 px-40 select-none transition-colors"
    >
      <TheHeader />
      <TheMain />
    </div>
  </section>
</template>
