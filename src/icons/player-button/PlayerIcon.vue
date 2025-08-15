<script setup lang="ts"></script>

<template>
  <div class="icon__wrapper">
    <slot></slot>
  </div>
</template>

<style scoped>
.icon__wrapper {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
}
</style>
