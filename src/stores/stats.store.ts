import { defineStore } from 'pinia';
import { API_ROUTES, httpClient } from '@/api.ts';

export const useStatsStore = defineStore('stats', () => {
  async function setFeeling(feeling: string) {
    await httpClient().post(API_ROUTES.stats, { type: feeling, value: 1 });
  }

  return { setFeeling };
});
