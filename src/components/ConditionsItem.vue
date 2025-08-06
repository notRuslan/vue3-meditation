<script setup lang="ts">
const {text} = defineProps<{text: string}>();
</script>

<template>
  <div class="icon">
  <slot>

  </slot>
  </div>
  <div>{{text}}</div>
</template>

<style scoped>

</style>
