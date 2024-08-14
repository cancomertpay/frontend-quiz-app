<script setup>
import { quizzes } from './../../../data.json';
import TheOptionsList from './TheOptionsList.vue';

console.log(quizzes);
</script>

<template>
  <ul>
    <li v-for="(quiz, idx) in quizzes">
      <img
        :src="quiz.icon"
        :alt="quiz.title"
      />
      <div>
        {{ quiz.title }}
      </div>
      <TheOptionsList :questions="quiz.questions" />
    </li>
  </ul>
</template>
