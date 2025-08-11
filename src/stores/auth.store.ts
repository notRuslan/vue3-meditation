import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { API_ROUTES, httpClient } from '@/api.ts';
import type {
  IResponseFailed,
  IResponseSuccess,
} from '@/interfaces/responses/auth/registerResponse.interface.ts';
import type { IRegisterRequest } from '@/interfaces/requests/auth/IRegisterRequest.ts';
import { ResponseStatus } from '@/interfaces/responses/CommonResponse.ts';
import type { ProfileAllData } from '@/interfaces/profile.interface.ts';
import type {
  ILoginResponseFailed,
  ILoginResponseSuccess,
} from '@/interfaces/responses/auth/loginResponse.interface.ts';
import type { ILoginRequest } from '@/interfaces/requests/auth/loginRequest.interface.ts';

const TOKEN_STORE_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const profile = ref<ProfileAllData>();

  const token = ref<string>();
  const respInfo = ref<{ status: ResponseStatus; message: string }>();

  const initialValue = localStorage.getItem(TOKEN_STORE_KEY);
  if (initialValue) {
    token.value = initialValue;
  }

  async function register(regProfile: IRegisterRequest) {
    const { data } = await httpClient().post<IResponseSuccess | IResponseFailed>(
      API_ROUTES.auth.register,
      regProfile,
    );

    if (data) {
      respInfo.value = {
        status: data.status,
        message: data.message ? data.message : '',
      };
    }

    if (data.status == ResponseStatus.Failed) {
      console.log(data.message);
      console.log(data.status);
      return;
    }
    profile.value = { ...data.data };
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value);

  async function login(credentials: ILoginRequest) {
    const { data } = await httpClient().post<ILoginResponseSuccess | ILoginResponseFailed>(
      API_ROUTES.auth.login,
      credentials,
    );
    if (data.status == ResponseStatus.Failed) {
      console.log(data.message);
      console.log(data.status);
      return;
    }
    token.value = data.data.token;
    setToken(data.data.token);
  }

  return { getToken, profile, respInfo, register, login, clearToken };
});
