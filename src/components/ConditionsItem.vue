<script setup lang="ts">
const { text } = defineProps<{ text: string }>();
</script>

<template>
  <div class="condition">
    <div class="profile-icon">
      <slot></slot>
    </div>
    <div class="profile-icon__text">{{ text }}</div>
  </div>
</template>

<style scoped>
.condition {
  display: flex;
  flex-flow: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
}

.profile-icon {
  display: flex;
  flex-flow: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  padding: 13px;
  border-radius: 20px;
}

.profile-icon.active,
.profile-icon:hover {
  background: #69b09c;
}

.profile-icon__text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 12px;
  color: #fff;
}
</style>
