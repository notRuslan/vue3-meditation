<script setup lang="ts">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <button class="button-text">
    {{ title }}
  </button>
</template>

<style scoped>
.button-text {
  border-radius: 10px;
  width: 321px;
  height: 61px;
  background: #7c9a92;
  cursor: pointer;
  border: none;

  font-weight: 500;
  font-size: 25px;
  color: var(--color-fg);
}
</style>
