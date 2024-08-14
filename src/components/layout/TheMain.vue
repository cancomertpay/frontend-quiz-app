<script setup>
import { storeToRefs } from 'pinia';
import { useQuizStore } from '../../store/store';
import TheLanding from './TheLanding.vue';
import TheQuiz from './TheQuiz.vue';
import TheScore from '../quiz/TheScore.vue';

const store = useQuizStore();
const { currentQuiz, currentQuestionIndex } = storeToRefs(store);
</script>

<template>
  <component
    :is="
      !currentQuiz
        ? TheLanding
        : currentQuestionIndex + 1 === currentQuiz.questions.length
        ? TheScore
        : TheQuiz
    "
  ></component>
</template>
