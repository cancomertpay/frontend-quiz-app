<!-- <script setup></script>
<template>
  <div
    class="block bg-light-grey dark:bg-dark-navy text-dark-navy dark:text-white min-h-screen p-5 md:px-16 lg:py-20 lg:px-40 select-none transition-colors overflow-hidden"
  ></div>
</template>

<style scoped>
</style> -->

<script setup>
import { useThemeStore } from './../../store/store.js';
import { storeToRefs } from 'pinia';
import BasePatternBackground from './BasePatternBackground.vue';

const store = useThemeStore();

const { themeClass } = storeToRefs(store);
</script>
<template>
  <section
    :class="themeClass"
    class="min-h-screen"
  >
    <div
      class="block relative bg-light-grey dark:bg-dark-navy text-dark-navy dark:text-white min-h-screen p-5 md:px-16 lg:py-20 lg:px-40 select-none transition-colors overflow-hidden"
    >
      <BasePatternBackground />
      <div class="relative z-10">
        <slot name="header"></slot>
        <slot name="main"></slot>
      </div>
    </div>
  </section>
</template>
