<script setup lang="ts">
import ConditionList from '@/components/ConditionList.vue';
import { useProfileStore } from '@/stores/profile.store.ts';
import { onMounted, ref } from 'vue';
import type { IUser } from '@/interfaces/profile.interface.ts';

const profileStore = useProfileStore();
const user = ref<IUser>({
  email: '',
  id: 0,
  last_login_at: new Date(),
  username: '',
});

onMounted(async () => {
  await profileStore.fetchUser();
  if (profileStore.user) {
    user.value = profileStore.user;
    return;
  }
});
</script>

<template>
  <div class="profile">
    <img src="/public/avatar.png" class="profile__avatar" alt="avatar" />
    <div class="profile-text">
      <div class="profile-name">Welcome! {{ user.username }}</div>
      <p class="profile-greeting">How are you today?</p>
    </div>
    <ConditionList />
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  flex-flow: column;
  gap: 30px;
  justify-content: flex-end;
}

.profile__avatar {
  height: 129px;
  width: 129px;
}

.profile-name {
  font-family: var(--font-family-second);
  font-weight: 500;
  font-size: 30px;
  color: #fff;
  text-transform: capitalize;
}

.profile-text {
  display: flex;
  flex-flow: column;
}

.profile-greeting {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
