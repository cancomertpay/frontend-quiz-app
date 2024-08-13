<script setup>
import { ref, provide, watch, computed } from 'vue';
import BaseThemeSwitcher from './components/UI/BaseThemeSwitcher.vue';
import BaseMultipleSelection from './components/UI/BaseMultipleSelection.vue';

// Initialize theme
const savedTheme = localStorage.getItem("theme");

const isDarkMode = ref(
  savedTheme ? savedTheme === "dark" : window.matchMedia('(prefers-color-scheme: dark)').matches
);

// Function to toggle theme
const toggleTheme = () => {
  // Toggle the theme
  isDarkMode.value = !isDarkMode.value;

  // Update local storage
  localStorage.setItem("theme", isDarkMode.value ? "dark" : "light");
};

// Watch for changes to `isDarkMode` and update local storage accordingly
watch(isDarkMode, (newValue) => {
  localStorage.setItem("theme", newValue ? "dark" : "light");
});

// Provide `isDarkMode` to other components
provide("isDarkMode", isDarkMode);

// Reactive class for body or root element
const themeClass = computed(() => (isDarkMode.value ? 'dark' : ''));
</script>

<template>
  <!-- Apply dark mode class to a parent element -->
  <div :class="themeClass" class="min-h-screen">
    <div class="underline text-4xl text-dark-navy dark:text-white">Hello</div>
    <BaseThemeSwitcher @toggle-theme="toggleTheme" />
    <BaseMultipleSelection letter="A" />
  </div>
</template>
