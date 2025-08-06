<script setup lang="ts">
import RelaxIcon from '@/icons/profiler/RelaxIcon.vue';
import ConditionsItem from '@/components/ConditionsItem.vue';
import CalmIcon from '@/icons/profiler/CalmIcon.vue';
</script>

<template>
  <div class="icons-list">
    <ConditionsItem text="Calm">
      <CalmIcon />
    </ConditionsItem>
    <ConditionsItem text="Relax">
      <RelaxIcon />
    </ConditionsItem>
    <ConditionsItem text="Focus">
      <CalmIcon />
    </ConditionsItem>
    <ConditionsItem text="Anxious">
      <CalmIcon />
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
