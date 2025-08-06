import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes:[
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue'),
    },
    {
      path: '/',
      component: ()=>import('./views/main-view/MainView.vue'),
      children: [
        {
          path: '',
          component: ()=>import('./views/main-view/MeditationListView.vue'),
          name: 'main,'
        },
        {
          path: 'meditation',
          component: ()=>import('./views/main-view/MeditationProgressView.vue'),
          name: 'meditation,'
        },
        {
          path: 'statistics',
          component: ()=>import('./views/main-view/StatisticsView.vue'),
          name: 'statistics,'
        },
      ]
    }
  ],
  history: createWebHistory(),
});

