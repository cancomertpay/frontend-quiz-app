<script setup>
import { storeToRefs } from 'pinia';
import { useQuizStore } from '../../store/store';
import ThemeSwitcher from './../theme/ThemeSwitcher.vue';

const store = useQuizStore();
const { currentQuiz } = storeToRefs(store);
</script>

<template>
  <header class="flex w-full items-center justify-between py-5">
    <div class="flex items-center gap-5">
      <img
        :src="currentQuiz?.icon"
        :alt="currentQuiz?.title"
      />
      <h2 class="heading-s">{{ currentQuiz?.title }}</h2>
    </div>
    <div class="text-end"><ThemeSwitcher /></div>
  </header>
</template>
