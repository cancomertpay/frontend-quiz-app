<script setup>
import { useThemeStore } from '../../store/store.js';
import { storeToRefs } from 'pinia';

import MoonIcon from './MoonIcon.vue';
import SunIcon from './SunIcon.vue';

const store = useThemeStore();

const { isDarkMode } = storeToRefs(store);
const { toggleTheme } = store;
</script>

<template>
  <div
    class="inline-flex items-center justify-center gap-8"
  >
    <div class="inline-flex items-center justify-center space-x-2 md:space-x-4">
      <!-- Sun Icon -->
      <SunIcon class="w-[14px] h-[14px] md:w-[21px] md:h-[21px]" :theme-color="isDarkMode ? '#FFF' : '#626C7F'" />

      <!-- Radio Switcher -->
      <div class="relative inline-block w-[34px] h-[20px] md:w-16 md:h-8">
        <!-- Hidden Checkbox -->
        <input
          type="checkbox"
          class="sr-only peer"
          id="theme-switcher"
          @click="toggleTheme"
        />

        <!-- Switch Background -->
        <label
          for="theme-switcher"
          class="block bg-purple rounded-full h-full w-full cursor-pointer transition-colors duration-300"
        >
          <!-- Switch Knob -->
          <span
            class="absolute left-1 md:left-1 top-1 w-3 h-3 md:w-6 md:h-6 bg-white rounded-full shadow-md transition-transform duration-300"
            :class="{ 'translate-x-3 md:translate-x-8': isDarkMode }"
          ></span>
        </label>
      </div>

      <!-- Moon Icon -->
      <MoonIcon class="w-[14px] h-[14px] md:w-[21px] md:h-[21px]" :theme-color="isDarkMode ? '#FFF' : '#626C7F'" />
    </div>
  </div>
</template>
