<script setup>
import { defineProps, ref } from 'vue';
import BaseOption from './../UI/BaseOption.vue';
const props = defineProps({
  questions: { type: Array, required: true },
});
</script>

<template>
  <ul>
    <li
      v-for="(question, index) in questions"
      :key="index"
    >
      <div>{{ question.question }}</div>
      <BaseOption
        :options="question.options"
        :answer="question.answer"
      />
    </li>
  </ul>
</template>
