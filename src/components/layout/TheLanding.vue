<script setup>
import { useQuizStore } from './../../store/store.js';
import BaseContentLayout from '../UI/BaseContentLayout.vue';

const store = useQuizStore();

const { quizList, selectQuiz } = store;
</script>

<template>
  <BaseContentLayout>
    <template #title>
      <span class="heading-l-regular text-start">Welcome to the</span>
      <br />
      <h1 class="heading-l-bold text-start">Frontend Quiz!</h1>
      <p class="body-s mt-5">Pick a subject to get started.</p>
    </template>
    <template #default>
      <ul>
        <li
          v-for="quiz in quizList"
          :key="quiz"
          class="heading-s option-cart"
          @click="selectQuiz(quiz.title)"
        >
          <img
            :src="quiz.icon"
            :alt="quiz.title"
          />
          <p>{{ quiz.title }}</p>
        </li>
      </ul>
    </template>
  </BaseContentLayout>
</template>

<style scoped>
.option-cart {
  @apply flex items-center gap-5 bg-white dark:bg-navy hover:opacity-60 mb-5 p-4 rounded-3xl shadow-lg cursor-pointer transition-opacity duration-300;
}
</style>
