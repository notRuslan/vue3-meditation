<script setup lang="ts">
import PauseIcon from '@/icons/player-button/PauseIcon.vue';
import BackspaceIcon from '@/icons/player-button/BackspaceIcon.vue';
import RepeatIcon from '@/icons/player-button/RepeatIcon.vue';
</script>

<template>
  <div class="payer__wrapper">
    <BackspaceIcon />
    <PauseIcon />
    <RepeatIcon />
  </div>
</template>

<style scoped>
.payer__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
