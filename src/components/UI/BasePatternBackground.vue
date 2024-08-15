<script setup></script>

<template>
  <div class="absolute top-0 left-0 z-0">
    <!-- lg -->
    <div class="hidden lg:block">
      <!-- dark -->
      <div class="hidden dark:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="960"
          fill="none"
          viewBox="0 0 1440 960"
        >
          <circle
            cx="-50.5"
            cy="75.5"
            r="416.5"
            stroke="#2D3949"
            stroke-width="144"
          />
          <circle
            class="xl:hidden"
            cx="1388.5"
            cy="840.5"
            r="416.5"
            stroke="#2D3949"
            stroke-width="144"
          />
        </svg>
      </div>
      <!-- light -->
      <div class="block dark:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="960"
          fill="none"
          viewBox="0 0 1440 960"
        >
          <g
            stroke="#edf1f9"
            stroke-width="144"
          >
            <circle
              cx="-50.5"
              cy="75.5"
              r="416.5"
            />
            <circle
              cx="1388.5"
              cy="840.5"
              r="416.5"
            />
          </g>
        </svg>
      </div>
    </div>

    <!-- md -->
    <div class="hidden md:block">
      <!-- dark -->
      <div class="hidden dark:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="438"
          height="531"
          fill="none"
          viewBox="0 0 438 531"
        >
          <circle
            cx="-50.5"
            cy="42.5"
            r="416.5"
            stroke="#2D3949"
            stroke-width="144"
          />
        </svg>
      </div>
      <!-- light -->
      <div class="dark:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="438"
          height="531"
          fill="none"
          viewBox="0 0 438 531"
        >
          <circle
            cx="-50.5"
            cy="42.5"
            r="416.5"
            stroke="#EDF1F9"
            stroke-width="144"
          />
        </svg>
      </div>
    </div>

    <!-- sm -->
    <div class="md:hidden">
      <!-- dark -->
      <div class="hidden dark:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="812"
          fill="none"
          viewBox="0 0 375 812"
        >
          <circle
            cx="-113.5"
            cy="323.5"
            r="416.5"
            stroke="#2D3949"
            stroke-width="144"
          />
        </svg>
      </div>
      <!-- light -->
      <div class="dark:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="812"
          fill="none"
          viewBox="0 0 375 812"
        >
          <circle
            cx="-113.5"
            cy="323.5"
            r="416.5"
            stroke="#EDF1F9"
            stroke-width="144"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
