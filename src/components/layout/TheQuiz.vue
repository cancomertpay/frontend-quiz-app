<script setup>
// pinia
import { useQuizStore } from '../../store/store';
import { storeToRefs } from 'pinia';

// components
import BaseContentLayout from '../UI/BaseContentLayout.vue';
import BaseMultipleSelection from './../UI/BaseMultipleSelection.vue';
import BaseButton from './../UI/BaseButton.vue';

// store
const store = useQuizStore();

// states
const { currentQuiz, usersAnswer, currentQuestion, currentQuestionIndex } =
  storeToRefs(store);

// methods
const { submitAnswer, nextQuestion } = store;
</script>

<template>
  <BaseContentLayout>
    <template #title>
      <div class="body-s mb-10">
        Question {{ currentQuestionIndex + 1 }} of
        {{ currentQuiz.questions.length }}
      </div>
      <div
        class="heading-m"
        v-if="currentQuestion"
      >
        {{ currentQuestion.question }}
      </div>
    </template>
    <template #default>
      <BaseMultipleSelection />
      <BaseButton
        v-if="!usersAnswer"
        text="Submit Answer"
        @click="submitAnswer"
      />
      <BaseButton
        v-else-if="currentQuestionIndex + 1 < currentQuiz.questions.length"
        text="Next Question"
        @click="nextQuestion"
      />
    </template>
  </BaseContentLayout>
</template>
