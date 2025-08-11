<script setup lang="ts">
import InputString from '@/components/InputString.vue';
import { ref, watch } from 'vue';
import ButtonText from '@/components/ButtonText.vue';
import { useAuthStore } from '@/stores/auth.store.ts';
import { router } from '@/routes.ts';

const form = ref<{ username?: string; password?: string }>({});

const authStore = useAuthStore();

form.value = {
  username: authStore.profile?.username,
  password: ``,
};

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' });
      document.body.classList.remove('body__auth');
    }
  },
);

function onSubmit(event: Event) {
  event.preventDefault();
  // console.log(event);
  if (!form.value.username || !form.value.password) {
    return;
  }

  authStore.login(form.value);
  form.value = {}; //reset form
}
</script>

<template>
  <div class="auth-form">
    <form class="auth-form__form" @submit="onSubmit">
      <InputString v-model="form.username" placeholder="Имя" />
      <InputString v-model="form.password" placeholder="Пароль" />
      <ButtonText title="Войти в приложение" />
      {{ authStore.getToken }}
    </form>
  </div>
</template>

<style scoped>
.auth-form__form {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  gap: 54px;
}
</style>
