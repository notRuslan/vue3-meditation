import { defineStore } from 'pinia';
import { API_ROUTES, httpClient } from '@/api.ts';

export const useStatsStore = defineStore('stats', () => {
  async function setFeeling(feeling: string) {
    await httpClient().post(API_ROUTES.stats, { type: feeling, value: 1 });
  }

  async function setDuration(value: number) {
    await httpClient().post(API_ROUTES.stats, { duration: value });
  }

  return { setFeeling, setDuration };
});
