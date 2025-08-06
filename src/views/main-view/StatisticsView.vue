<script setup lang="ts">
import StatCard from '@/components/StatCard.vue';

const cards1 = {
  iconFill: '#2B5B54',
  paramValue: 500,
  description: 'Минут медитации',
};
</script>

<template>
  <div class="stat-dashboard">
    <StatCard v-bind="cards1" />
    <StatCard v-bind="cards1" />
    <StatCard v-bind="cards1" />
    <StatCard v-bind="cards1" />
    <StatCard v-bind="cards1" />
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
