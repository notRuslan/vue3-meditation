<script setup lang="ts">
const data = defineModel<string>();
</script>

<template>
  <input class="default-string" v-model="data" />
</template>

<style scoped>
.default-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  background: transparent;
  font-size: 18px;
  min-width: 306px;
  padding: 10px;
}

.default-string::placeholder {
  color: var(--color-inactive);
}
</style>
