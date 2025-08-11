<script setup lang="ts">
import InputString from '@/components/InputString.vue';
import { ref, watch } from 'vue';
import ButtonText from '@/components/ButtonText.vue';
import { useAuthStore } from '@/stores/auth.store.ts';
import { useRouter } from 'vue-router';

const form = ref<{ email?: string; username?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

function onSubmit(event: Event) {
  event.preventDefault();
  // console.log(event);
  if (!form.value.email || !form.value.username || !form.value.password) {
    return;
  }

  authStore.register(form.value);
  form.value = {}; //reset form
}

watch(
  () => authStore.respInfo,
  () => {
    if (authStore.respInfo) {
      if (authStore.respInfo.status === 'success') {
        form.value = {};
        router.push({ name: 'login' });
      }
    }
  },
);
</script>

<template>
  <div class="auth-form">
    <form class="auth-form__form" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Электронная почта" />
      <InputString v-model="form.username" placeholder="Имя" />
      <InputString v-model="form.password" placeholder="Пароль" />
      <ButtonText title="Создать аккаунт" />
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
