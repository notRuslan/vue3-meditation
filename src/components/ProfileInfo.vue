<script setup lang="ts">

import ConditionsItem from '@/components/ConditionsItem.vue'
import CalmIcon from '@/icons/profiler/CalmIcon.vue'
import RelaxIcon from '@/icons/profiler/RelaxIcon.vue'
</script>

<template>
<div class="profile">
  <img src="/public/avatar.png" class="profile__avatar" alt="avatar">
<div class="profile-name">Welcome. Nataly</div>
  <p class="profile-text">How are you today?</p>
</div>
  <div class="profile-icons">
<ConditionsItem text="Calm">
  <CalmIcon/>
</ConditionsItem>
    <ConditionsItem text="Calm">
      <RelaxIcon/>
    </ConditionsItem>
    <ConditionsItem text="Calm">
      <CalmIcon/>
    </ConditionsItem>
    <ConditionsItem text="Calm">
      <CalmIcon/>
    </ConditionsItem>


  </div>
</template>

<style scoped>

</style>
