<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
  options: { type: Array, required: true },
  answer: { type: String, required: true },
});

</script>

<template>
  <div
    :id="String.fromCharCode(65 + index)"
    class="option-cart"
    :class="{
      '!border-purple': selectedOption === option,
      '!border-green': selectedOption === option && selectedOption === answer,
      '!border-red': selectedOption === option && selectedOption !== answer,
    }"
    @mouseover="handleHover"
    @mouseleave="handleLeave"
    @click="handleClick(option)"
  >
    <div class="flex items-center gap-8">
      <span
        class="option-letter heading-s"
        :class="{
          '!bg-[#F6E7FF] !text-purple':
            selectedOption !== option &&
            isHovered[String.fromCharCode(65 + index)],
          '!bg-purple !text-white': selectedOption === option,
          '!bg-green !text-white':
            selectedOption === option && selectedOption === answer,
          '!bg-red !text-white':
            selectedOption === option && selectedOption !== answer,
        }"
        >{{ String.fromCharCode(65 + index) }}</span
      >
      <span class="heading-s">
        {{ option }}
      </span>
    </div>
    <img
      v-if="selectedOption === option && selectedOption === answer"
      src="./../../assets/images/icon-correct.svg"
      alt="correct"
    />
    <img
      v-else-if="selectedOption === option && selectedOption !== answer"
      src="./../../assets/images/icon-incorrect.svg"
      alt="incorrect"
    />
  </div>
</template>

<style scoped>
.option-cart {
  @apply flex items-center justify-between bg-white dark:bg-navy mb-5 p-4 rounded-3xl border-2 border-transparent shadow-lg font-bold cursor-pointer transition-all duration-500;
}
.option-letter {
  @apply bg-light-grey dark:bg-white text-grey-navy px-4 py-2 rounded-lg transition-all duration-500;
}
</style>
