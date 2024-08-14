<script setup>
import { useQuizStore } from '../../store/store';
import { storeToRefs } from 'pinia';
import BaseContentLayout from '../UI/BaseContentLayout.vue';
import BaseButton from '../UI/BaseButton.vue';
// store
const store = useQuizStore();

// states
const { currentQuiz, quizScore } = storeToRefs(store);
const { playAgain } = store;
</script>
<template>
  <BaseContentLayout>
    <template #title>
      <span class="heading-l-regular text-start">Quiz completed</span>
      <br />
      <h1 class="heading-l-bold text-start">You scored...</h1>
    </template>
    <template #default>
      <template v-if="true">
        <div
          class="flex flex-col items-center justify-center gap-10 p-10 mb-10 bg-white dark:bg-navy rounded-3xl shadow-xl"
        >
          <div class="flex items-center gap-5">
            <img
              :src="currentQuiz.icon"
              :alt="currentQuiz.title"
            />
            <div class="heading-s">
              {{ currentQuiz.title }}
            </div>
          </div>
          <div class="heading-xl">
            {{ quizScore }}
          </div>
          <div class="body-m">out of {{ currentQuiz.questions.length }}</div>
        </div>
        <BaseButton
          text="Play Again"
          @click="playAgain"
        />
      </template>
    </template>
  </BaseContentLayout>
</template>
