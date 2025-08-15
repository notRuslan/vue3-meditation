import { defineStore } from 'pinia';
import { API_ROUTES, httpClient } from '@/api.ts';
import type { ISummary } from '@/interfaces/stats.interface.ts';
import { ref } from 'vue';

export const useStatsStore = defineStore('stats', () => {
  const summary = ref<ISummary | undefined>();

  async function setFeeling(feeling: string) {
    await httpClient().post(API_ROUTES.stats, { type: feeling, value: 1 });
  }

  async function setDuration(value: number) {
    await httpClient().post(API_ROUTES.stats, { type: 'duration_min', value: value });
  }

  async function getStatistics() {
    const { data } = await httpClient().get(API_ROUTES.stats);
    summary.value = data.data.summary;
  }

  async function getSummary() {
    await getStatistics();
  }

  return { summary, setFeeling, setDuration, getSummary };
});
