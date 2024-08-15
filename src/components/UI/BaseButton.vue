<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  text: { type: String, required: true },
});
</script>
<template>
  <button
    type="button"
    class="heading-s block w-full text-white bg-purple hover:opacity-50 transition-opacity duration-300 py-6 lg:py-8 rounded-3xl"
  >
    {{ text }}
  </button>
</template>

<style scoped></style>
