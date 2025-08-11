import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { IUser } from '@/interfaces/profile.interface.ts';
import { API_ROUTES, httpClient } from '@/api.ts';
import type { IProfileResponse } from '@/interfaces/responses/profile/profileResponse.interface.ts';

export const useProfileStore = defineStore('profile', () => {
  const user = ref<IUser>();

  async function fetchUser() {
    const { data } = await httpClient().get<IProfileResponse>(API_ROUTES.profile);

    user.value = data.data.user;
  }

  return { user, fetchUser };
});
