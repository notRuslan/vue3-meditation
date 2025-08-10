<script setup lang="ts">
import InputString from '@/components/InputString.vue';
import { ref } from 'vue';
import ButtonText from '@/components/ButtonText.vue';

const form = ref<{ email?: string; name?: string; password?: string }>({});

function onSubmit() {}
</script>

<template>
  <div class="auth-form">
    <form class="auth-form__form" @submit="onSubmit">
      <InputString v-model="form.email" placeholder="Электронная почта" />
      <InputString v-model="form.name" placeholder="Имя" />
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
