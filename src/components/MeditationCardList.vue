<script setup lang="ts">

import CardItem from '@/components/CardItem.vue'
import { useMeditationsStore } from '@/stores/meditation.store.ts'
import { onMounted } from 'vue'
const store = useMeditationsStore();

onMounted(() => {
  store.getMeditations();
});
</script>


<template>
  <div class="card-list">
  <CardItem v-for="card in store.meditations" :key="card.id"
    v-bind="card"
  />

  </div>
</template>

<style scoped>
.card-list{
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  max-width: 704px;
}
</style>
