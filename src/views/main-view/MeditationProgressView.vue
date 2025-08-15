<script setup lang="ts">
import BackspaceIcon from '@/icons/player-button/BackspaceIcon.vue';
import RepeatIcon from '@/icons/player-button/RepeatIcon.vue';
import PauseIcon from '@/icons/player-button/PauseIcon.vue';
import StartIcon from '@/icons/player-button/StartIcon.vue';
import RecordedIcon from '@/icons/player-button/RecordedIcon.vue';
import MeditationWatch from '@/components/MeditationWatches.vue';
import { computed, onUnmounted, ref } from 'vue';
import { useStatsStore } from '@/stores/stats.store.ts';

const isStarted = ref<boolean>(false);
const isRecording = ref<boolean>(false);
const timeInSeconds = ref<number>(60);

const statsStore = useStatsStore();

// Переменная для хранения ID интервала, чтобы его можно было остановить
let timer: ReturnType<typeof setInterval> | undefined;

// Вычисляемое свойство для форматирования времени в "мм:сс"
const formattedTime = computed(() => {
  const minutes = Math.floor(timeInSeconds.value / 60);
  const seconds = timeInSeconds.value % 60;

  // Добавляем ведущий ноль, если число меньше 10
  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(seconds).padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}`;
});

// Функция для запуска таймера
const startTimer = () => {
  if (isStarted.value) return; // Защита от запуска нескольких таймеров
  isStarted.value = true;
  timer = setInterval(() => {
    timeInSeconds.value++;
  }, 1000);
};

// Функция для остановки (паузы) таймера
const pauseTimer = () => {
  isStarted.value = false;
  clearInterval(timer);
};

// Функция для сброса таймера
const resetTimer = () => {
  pauseTimer(); // Сначала останавливаем таймер
  timeInSeconds.value = 0; // Затем сбрасываем время
};

// Очищаем интервал при размонтировании компонента, чтобы избежать утечек памяти
onUnmounted(() => {
  clearInterval(timer);
});

function onRecord() {
  isRecording.value = !isRecording.value;

  const meditationInMinutes: number = Math.round(timeInSeconds.value / 60);
  if (meditationInMinutes > 0) {
    statsStore.setDuration(timeInSeconds.value);
  }
  resetTimer();
  isRecording.value = !isRecording.value;
}
</script>

<template>
  <div class="meditation">
    <MeditationWatch :time="formattedTime" />
    <div class="meditation__info">
      <h2 class="meditation__info-title">Ежедневная</h2>
      <div class="meditation__info-text">Стандартная медитация для ежедневной осознанности</div>
    </div>
    <div class="payer__wrapper">
      <BackspaceIcon @click="resetTimer" />
      <PauseIcon v-if="isStarted" @click="pauseTimer" />
      <StartIcon v-if="!isStarted" @click="startTimer" />
      <RepeatIcon v-if="!isRecording" @click="onRecord" />
      <RecordedIcon v-if="isRecording" />
    </div>
  </div>
</template>

<style scoped>
.meditation {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}

.meditation__picture {
  width: 250px;
  height: 250px;
}

.meditation__info {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

.meditation__info-title {
  font-family: var(--font-family-second);
  font-weight: 500;
  font-size: 35px;
  color: #fff;
}

.meditation__info-text {
  font-size: 25px;
  text-align: center;
  color: var(--color-fg);
  opacity: 0.5;
}

.payer__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
</style>
