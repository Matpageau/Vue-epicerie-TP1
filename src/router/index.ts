import { createRouter, createWebHistory } from 'vue-router';
import ClientPage from '../views/ClientPage.vue';
import GestionPage from '../views/GestionPage.vue';

const routes = [
    {path: '/', component: ClientPage},
    {path: '/gestion', component: GestionPage}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;