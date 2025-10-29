import { createRouter, createWebHistory } from 'vue-router'

// Importamos las páginas existentes
import Home from '../pages/Home.vue'
import Consoles from '../pages/Consoles.vue'
import Games from '../pages/Games.vue'
import ModernGames from '../pages/ModernGames.vue' // ✅ NUEVA IMPORTACIÓN
import About from '../pages/About.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/consoles', name: 'consoles', component: Consoles },
  { path: '/games', name: 'games', component: Games },
  { path: '/modern-games', name: 'modern-games', component: ModernGames }, // ✅ NUEVA RUTA
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
