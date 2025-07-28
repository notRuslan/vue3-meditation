<script setup lang="ts">

import ButtonStart from '@/components/ButtonStart.vue'
import ButtonBeginSmallIcon from '@/icons/ButtonBeginSmallIcon.vue'
</script>

<template>
<div class="card-item">
  <div class="card-header">
    Короткая
  </div>
  <div class="card-text">
    Базовая медитация на 5 минут для успокоения сознания
  </div>
<div class="card-footer">
<ButtonStart>
Begin
  <ButtonBeginSmallIcon />
</ButtonStart>
  <div class="card-time">
    10 min
  </div>
</div>
</div>
</template>

<style scoped>
.card-item{
  background: #f7f3f0;
  border-radius: 20px;
  max-width: 339px;
  min-height: 170px;
  padding: 22px 30px;
}

.card-header{
  font-weight: 500;
  font-family: var(--second-family);
  font-size: 25px;
  color: #000;
}

.card-text{
  font-weight: 500;
  font-size: 15px;
  color: #000;
  margin-bottom: 16px;
}

.card-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
}

.card-time{
  font-size: 15px;
  color: var(--color-secondary);
  opacity: 0.75;
}
</style>
