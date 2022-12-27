import { createRouter, createWebHashHistory } from 'vue-router'
import template1Router from '@/modules/template1/router'
import HomeView from '@/views/HomeView'
const routes = [
  {
    path: "/",
    component: HomeView,
    // redirect: '/misxv1' //todo: pensar pagina principal o invitacion muestra
  },
  {
    path: '/misxv1',
    ...template1Router
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
