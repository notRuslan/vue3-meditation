<script setup lang="ts">
const { time } = defineProps<{ time: string }>();
</script>

<template>
  <div class="watches">
    <img src="/public/meditation.png" alt="" />
    <div class="watches__text">{{ time }}</div>
  </div>
</template>

<style scoped>
.watches {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.watches__text {
  position: absolute;
  font-size: 44px;
  color: var(--color-fg);
}
</style>
