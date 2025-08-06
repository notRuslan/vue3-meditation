<script setup lang="ts">
const {text} = defineProps<{text: string}>();
</script>

<template>
<slot>

</slot>
  <div>{{text}}</div>
</template>

<style scoped>

</style>
