<script setup>
import { defineProps, ref } from 'vue';
const props = defineProps({
  letter: String,
})
const isHovered = ref(false)
const isActive = ref(false)

const handleHover = () => {
  isHovered.value = true
}
const handleLeave = () => {
  isHovered.value = false
}
const handleClick = () => {
  isActive.value = !isActive.value
}
</script>

<template>
  <div
    class="flex items-center p-4 gap-8 rounded-3xl border-2 border-transparent shadow-lg font-bold cursor-pointer transition-all duration-500"
    :class="{ 'border-purple': isActive }" @mouseover="handleHover" @mouseleave="handleLeave" @click="handleClick">
    <span class="bg-light-grey text-grey-navy px-4 py-2 rounded-lg text-[28px] transition-colors"
      :class="{ 'bg-[#F6E7FF] text-purple': !isActive && isHovered, 'bg-purple !text-white': isActive }">{{ letter
      }}</span>
  </div>
</template>
