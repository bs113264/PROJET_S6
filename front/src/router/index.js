import Presentation from '../components/Presentation.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Services from '../components/Services.vue';

const routes = [
  {
    path: '/presentation',
    name: 'Presentation',
    component: Presentation,
  },

  {
    path: '/services',
    name: 'Services',
    component: Services,
  },
  // Autres routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
