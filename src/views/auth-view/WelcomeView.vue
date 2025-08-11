<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function registration() {
  router.push({ name: 'register' });
}
</script>

<template>
  <div class="main-text">
    <div class="main-text__header">Добро пожаловать!</div>
    <div class="main-text__description">
      Медитируй и оставайся в фокусе,<br />
      чтобы быть счастливым.
    </div>
  </div>
  <ButtonText title="Войти в приложение" @click="registration" />
</template>

<style scoped>
.main-text {
  margin-top: -100px;
}

.main-text__header {
  font-family: var(--font-family-second);
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  color: var(--color-fg);
}

.main-text__description {
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  color: var(--color-fg);
}
</style>
