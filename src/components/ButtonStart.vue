<script setup lang="ts">

</script>

<template>
<button class="button">
  <slot></slot>
</button>
</template>

<style scoped>
.button{
  border-radius: 10px;
  width: 111px;
  height: 39px;
  background: var(--color-bg);
  color: var(--color-fg);
  font-family: var(--font-family);
  font-weight: 500;
  font-size: 15px;
  line-height: 120%;
  text-align: center;
  cursor: pointer;

  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: center;
}

.button:hover{
  background: #202728;
}
</style>
