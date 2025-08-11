<script setup lang="ts">
import RelaxIcon from '@/icons/profiler/RelaxIcon.vue';
import ConditionsItem from '@/components/ConditionsItem.vue';
import CalmIcon from '@/icons/profiler/CalmIcon.vue';
import { useStatsStore } from '@/stores/stats.store.ts';
import FocusIcon from '@/icons/profiler/FocusIcon.vue';
import AnxiousIcon from '@/icons/profiler/AnxiousIcon.vue';

const statsStore = useStatsStore();

function setCondition(e: Event, condition: string) {
  e.preventDefault();
  statsStore.setFeeling(condition);
}
</script>

<template>
  <div class="icons-list">
    <ConditionsItem text="Calm" @click="setCondition($event, 'feeling_calm')">
      <CalmIcon />
    </ConditionsItem>
    <ConditionsItem text="Relax" @click="setCondition($event, 'feeling_relax')">
      <RelaxIcon />
    </ConditionsItem>
    <ConditionsItem text="Focus" @click="setCondition($event, 'feeling_focus')">
      <FocusIcon />
    </ConditionsItem>
    <ConditionsItem text="Anxious" @click="setCondition($event, 'feeling_anxious')">
      <AnxiousIcon />
    </ConditionsItem>
  </div>
</template>

<style scoped>
.icons-list {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
