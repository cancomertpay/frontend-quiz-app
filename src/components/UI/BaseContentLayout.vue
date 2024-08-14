<script setup></script>

<template>
  <section class="flex justify-between gap-28 my-20">
    <div class="flex-1">
      <slot name="title"></slot>
    </div>
    <div class="flex-1"><slot name="default"></slot></div>
  </section>
</template>
