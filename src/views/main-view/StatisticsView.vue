<script setup lang="ts">
import StatCard from '@/components/StatCard.vue';
import { onMounted, ref } from 'vue';
import type { Cards, ISummary } from '@/interfaces/stats.interface.ts';
import { useStatsStore } from '@/stores/stats.store.ts';

const statsStore = useStatsStore();
// const paramList = ['total_anxiety', 'total_calm', 'total_focus', 'total_minutes', 'total_relax'];

const cards = ref<Cards>({
  total_minutes: {
    iconFill: '#2B5B54',
    bgColor: '#69b09c',
    paramValue: 0,
    description: 'Минут медитации',
  },
  total_calm: {
    iconFill: '#2b5b33',
    bgColor: '#69b069',
    paramValue: 0,
    description: 'Спокойных дней',
  },
  total_focus: {
    iconFill: '#595b2b',
    bgColor: '#9cb069',
    paramValue: 0,
    description: 'Фокусированных дней',
  },
  total_anxiety: {
    iconFill: '#5b2b2c',
    bgColor: '#b0696a',
    paramValue: 0,
    description: 'Тревожных дней',
  },
  total_relax: {
    iconFill: '#2b505b',
    bgColor: '#69a1b0',
    paramValue: 0,
    description: 'Расслабленных дней',
  },
});

// Если порядок важен, определим его здесь
const cardOrder: Array<keyof Cards> = [
  'total_minutes',
  'total_calm',
  'total_relax',
  'total_focus',
  'total_anxiety',
];

onMounted(async () => {
  await statsStore.getSummary();

  if (!statsStore.summary) {
    return;
  }
  
  // Получаем ключи из summary и явно указываем TypeScript, что это ключи типа ISummary
  const summaryKeys = Object.keys(statsStore.summary) as Array<keyof ISummary>;

  for (const key of summaryKeys) {
    // Теперь TypeScript знает, что 'key' — это один из ключей ISummary и Cards
    // Проверка `key in cards.value` — это более современный аналог hasOwnProperty
    if (key in cards.value) {
      cards.value[key].paramValue = statsStore.summary[key];
    }
  }
});
</script>

<template>
  <div class="stat-dashboard">
    <StatCard v-for="cardKey in cardOrder" :key="cardKey" v-bind="cards[cardKey]" />
  </div>
</template>

<style scoped>
.stat-dashboard {
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: flex-start;
  padding-left: 15%;
}
</style>
