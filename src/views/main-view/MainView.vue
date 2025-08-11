<script setup lang="ts">
import LogoIcon from '@/icons/LogoIcon.vue';
import MenuItem from '@/components/MenuItem.vue';
import PlayIcon from '@/icons/PlayIcon.vue';
import StatisticIcon from '@/icons/StatisticIcon.vue';
import ExitIcon from '@/icons/ExitIcon.vue';
</script>

<template>
  <header>
    <LogoIcon />
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <RouterLink active-class="active-link" :to="'/main/meditation'">
            <MenuItem text="Meditation">
              <PlayIcon />
            </MenuItem>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink active-class="active-link" :to="'/main/statistics'">
            <MenuItem text="Statistics">
              <StatisticIcon />
            </MenuItem>
          </RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink active-class="active-link" :to="'/'">
            <MenuItem text="Exit">
              <ExitIcon />
            </MenuItem>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 34px;
  margin: 0;
  padding: 0;
  background: var(--color-bg);
}

.nav-list li {
  list-style: none;
}

.nav-item {
  width: 200px;
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav-item a {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  cursor: pointer;
}

.nav-item a:hover,
.nav-item a.active-link {
  color: #fff;
}
</style>
