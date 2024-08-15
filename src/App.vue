<script setup>


import TheHeader from './components/layout/TheHeader.vue';
import TheMain from './components/layout/TheMain.vue';
import BaseAppContainer from './components/UI/BaseAppContainer.vue';

</script>

<template>
  <BaseAppContainer>
    <template #header><TheHeader /></template>
    <template #main><TheMain /></template>
  </BaseAppContainer>
</template>
