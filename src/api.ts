import axios from 'axios';
import { useAuthStore } from '@/stores/auth.store.ts';

export const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
});

export const API_ROUTES = {
  meditations: `meditations`,
  auth: {
    register: 'auth/register',
    login: 'auth/login',
  },
  profile: 'profile',
  stats: 'stats',
};

export function httpClient(hasAuth: boolean = true) {
  if (!hasAuth) {
    return axios.create({
      baseURL: 'http://localhost:3000/api',
      timeout: 10000,
    });
  }
  const authStore = useAuthStore();

  return axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${authStore.getToken}`,
    },
  });
}
