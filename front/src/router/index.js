import Presentation from '../components/Presentation.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PresentationView from '../views/PresentationView.vue';
import ServicesView from '../views/ServicesView.vue';
import ReservationSessionView from '../views/ReservationSessionView.vue';
import PaymentView from '../views/PaymentView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/presentation',
    name: 'Presentation',
    component: PresentationView,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: ReservationSessionView
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentView
  },
  // Autres routes...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
