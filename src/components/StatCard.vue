<script setup lang="ts">
import WavesIcon from '@/icons/statistics/WavesIcon.vue';
import { toRefs } from 'vue';

const {
  iconFill = '#2B5B54',
  paramValue = 0,
  description = '',
  bgColor = '#ffffff',
} = defineProps<{
  iconFill: string;
  bgColor: string;
  paramValue: number;
  description: string;
}>();
</script>

<template>
  <div class="card">
    <div class="card-header">{{ paramValue }}</div>
    <WavesIcon class="card-icon" :iconFill="iconFill" />
    <div class="card-text">{{ description }}</div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-flow: column;
  border-radius: 20px;
  width: 300px;
  height: 200px;
  background-color: v-bind(bgColor);
  justify-content: space-between;
}

.card-header {
  font-weight: 700;
  font-size: 80px;
  text-align: right;
  color: #fff;
  padding-right: 23px;
}

.card-icon {
  align-self: center;
}

.card-text {
  position: absolute;
  bottom: 25px;
  left: 20px;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
}
</style>
