<script setup>
import { ref } from 'vue';
import { useQuizStore } from '../../store/store';
import { storeToRefs } from 'pinia';

// store
const store = useQuizStore();

// states
const { questionStatus, currentQuestion, selectedOption, timer, isSubmitted } =
  storeToRefs(store);

const { selectOption } = store;

// local states
const isHovered = ref({
  A: false,
  B: false,
  C: false,
  D: false,
});

// methods
const handleHover = (e) => {
  const id = e.target.id;
  isHovered.value[id] = true;
};
const handleLeave = (e) => {
  const id = e.target.id;
  isHovered.value[id] = false;
};
</script>

<template>
  <ul>
    <li
      v-for="(option, index) in currentQuestion.options"
      :key="index"
    >
      <div
        :id="String.fromCharCode(65 + index)"
        class="option-cart"
        :class="{
          '!border-purple':
            selectedOption === option && questionStatus === 'SELECTION_ACTIVE',
          '!border-green':
            selectedOption === option && questionStatus === 'PICKED_CORRECTLY',
          '!border-red':
            selectedOption === option &&
            questionStatus === 'PICKED_INCORRECTLY',
        }"
        @mouseover="handleHover"
        @mouseleave="handleLeave"
        @click="selectOption(option)"
      >
        <div class="flex items-center gap-8 flex-1">
          <span
            class="option-letter heading-s"
            :class="{
              '!bg-[#F6E7FF] !text-purple':
                selectedOption !== option &&
                isHovered[String.fromCharCode(65 + index)],
              '!bg-purple !text-white':
                selectedOption === option &&
                questionStatus === 'SELECTION_ACTIVE',
              '!bg-green !text-white':
                selectedOption === option &&
                questionStatus === 'PICKED_CORRECTLY',
              '!bg-red !text-white':
                selectedOption === option &&
                questionStatus === 'PICKED_INCORRECTLY',
            }"
            >{{ String.fromCharCode(65 + index) }}</span
          >
          <span class="heading-s">
            {{ option }}
          </span>
        </div>
        <div class="block !w-[40px] !h-[40px]">
          <img
            v-if="
              currentQuestion.answer === option &&
              (questionStatus === 'PICKED_CORRECTLY' ||
                questionStatus === 'PICKED_INCORRECTLY' ||
                questionStatus === 'TIME_EXPIRED')
            "
            src="/assets/images/icon-correct.svg"
            alt="correct"
            class="w-full h-full"
          />
          <img
            v-else-if="
              questionStatus === 'PICKED_INCORRECTLY' &&
              selectedOption === option
            "
            src="/assets/images/icon-incorrect.svg"
            alt="incorrect"
            class="w-full h-full"
          />
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.option-cart {
  @apply flex items-center justify-between bg-white dark:bg-navy mb-5 p-4 rounded-3xl border-2 border-transparent shadow-lg font-bold cursor-pointer transition-all duration-500;
}
.option-letter {
  @apply bg-light-grey dark:bg-white text-grey-navy px-4 py-2 rounded-lg transition-all duration-500;
}
</style>
