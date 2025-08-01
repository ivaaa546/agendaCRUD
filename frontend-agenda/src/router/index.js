import { createRouter, createWebHistory } from 'vue-router'
import AgendaView from '../views/AgendaView.vue'

const routes = [
  {
    path: '/Agenda',
    name: 'Agenda',
    component: AgendaView
  }
  // Puedes agregar más rutas luego, por ejemplo:
  // { path: '/about', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

