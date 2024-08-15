<script setup></script>

<template>
  <section class="flex flex-col lg:flex-row justify-between gap-14 md:gap-20 lg:gap-28 my-10 lg:my-20">
    <div class="flex-1">
      <slot name="title"></slot>
    </div>
    <div class="flex-1"><slot name="default"></slot></div>
  </section>
</template>
