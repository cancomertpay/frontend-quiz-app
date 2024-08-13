<script setup>
import { defineEmits, inject } from "vue"
import MoonIcon from "./MoonIcon.vue"
import SunIcon from "./SunIcon.vue"

const isDarkMode = inject("isDarkMode")
const emits = defineEmits(["toggle-theme"])

const handleClick = () => {
  emits('toggle-theme')
}
</script>

<template>
  <div class="flex items-center justify-center gap-8 bg-light-grey dark:bg-dark-navy px-20 py-5 rounded-3xl">
    <div class="inline-flex items-center justify-center space-x-4">
      <!-- Sun Icon -->
      <SunIcon :theme-color="isDarkMode ? '#FFF' : '#626C7F'" />

      <!-- Radio Switcher -->
      <div class="relative inline-block w-16 h-8">
        <!-- Hidden Checkbox -->
        <input type="checkbox" class="sr-only peer" id="theme-switcher" @click="handleClick">

        <!-- Switch Background -->
        <label for="theme-switcher"
          class="block bg-purple rounded-full h-full w-full cursor-pointer transition-colors duration-300">
          <!-- Switch Knob -->
          <span class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"
            :class="{ 'translate-x-8': isDarkMode }"></span>
        </label>
      </div>

      <!-- Moon Icon -->
      <MoonIcon :theme-color="isDarkMode ? '#FFF' : '#626C7F'" />
    </div>
    <span class="text-navy dark:text-white">{{ isDarkMode ? "Toggle on Light" : "Toggle on Dark" }}</span>
  </div>
</template>
