<script setup>
// pinia
import { useQuizStore } from '../../store/store';
import { storeToRefs } from 'pinia';

// components
import BaseContentLayout from '../UI/BaseContentLayout.vue';
import BaseMultipleSelection from './../UI/BaseMultipleSelection.vue';
import BaseButton from './../UI/BaseButton.vue';
import BaseTimeBar from './../UI/BaseTimeBar.vue';

// store
const store = useQuizStore();

// states
const {
  currentQuiz,
  usersAnswer,
  currentQuestion,
  currentQuestionIndex,
  questionStatus,
} = storeToRefs(store);

// methods
const { submitAnswer, nextQuestion } = store;
</script>

<template>
  <BaseContentLayout>
    <template #title>
      <div class="flex flex-col justify-between h-full pb-28">
        <div>
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
        </div>
        <BaseTimeBar />
      </div>
    </template>
    <template #default>
      <BaseMultipleSelection />
      <BaseButton
        v-if="
          questionStatus === 'PICKED_CORRECTLY' ||
          questionStatus === 'PICKED_INCORRECTLY' ||
          questionStatus === 'TIME_EXPIRED'
        "
        text="Next Question"
        @click="nextQuestion"
      />
      <BaseButton
        v-else
        text="Submit Answer"
        @click="submitAnswer"
      />

      <div class="min-h-10 min-w-10 mt-10">
        <div
          v-if="questionStatus === 'NOTHING_SELECTED'"
          class="flex items-center justify-center gap-5"
        >
          <img
            src="/assets/images/icon-incorrect.svg"
            alt="Incorrect"
          />
          <p class="body-m text-red">Please select an answer</p>
        </div>
      </div>
    </template>
  </BaseContentLayout>
</template>
