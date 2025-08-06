<script setup lang="ts">
const { iconFill = '#2B5B54' } = defineProps<{ iconFill: string }>();
</script>

<template>
  <svg width="300" height="98" viewBox="0 0 300 98" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M65.2089 12C32.3155 -3.49998 15.0987 3.00001 0.254883 7.50002L0.254882 79.9177C3.71845 94.3835 11.5939 98 15.0987 98L284 98C296.122 93.8669 300 84.337 300 80.0317L300 12.5C279.961 2.16728 218.63 2.50003 190.733 23C163.5 -2.49997 83 -6.99999 65.2089 12Z"
      :fill="iconFill"
    />
  </svg>
</template>

<style scoped></style>
