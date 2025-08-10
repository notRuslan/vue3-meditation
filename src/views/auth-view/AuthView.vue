<script setup lang="ts">
import BigLogoIcon from '@/icons/BigLogoIcon.vue';

document.body.classList.add('body__auth');
</script>

<template>
  <main class="main-wrapper">
    <BigLogoIcon />
    <RouterView />
  </main>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  gap: 40px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
