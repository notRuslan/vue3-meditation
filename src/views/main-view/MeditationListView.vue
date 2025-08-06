<script setup lang="ts">

import MeditationCardList from '@/components/MeditationCardList.vue'
import ProfileInfo from '@/components/ProfileInfo.vue'
</script>

<template>


  <div class="main">
    <ProfileInfo />

    <MeditationCardList/>

  </div>
</template>

<style scoped>
.main{
  color: #ffffff;
}
</style>
