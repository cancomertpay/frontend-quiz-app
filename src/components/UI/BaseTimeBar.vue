<script setup>
import { useQuizStore } from './../../store/store.js';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const store = useQuizStore();
const { timer } = storeToRefs(store);

const timerPercentage = computed(() => {
  return (timer.value / 10) * 100;
});
</script>

<template>
  <div
    class="flex items-center justify-start w-full h-4 bg-white p-1 rounded-xl"
  >
    <div
      class="bg-purple h-2 rounded-xl transition-all duration-[100ms] linear"
      :style="{ width: `${timerPercentage}%` }"
    ></div>
  </div>
</template>
