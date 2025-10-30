import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Consoles from '../pages/Consoles.vue'
import Games from '../pages/Games.vue'
import ModernGames from '../pages/ModernGames.vue'
import About from '../pages/About.vue'
import CurrentlyPlaying from '../pages/CurrentlyPlaying.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/consoles', name: 'consoles', component: Consoles },
  { path: '/games', name: 'games', component: Games },
  { path: '/modern-games', name: 'modern-games', component: ModernGames },
  { path: '/about', name: 'about', component: About },
  { path: '/currently-playing', name: 'currently-playing', component: CurrentlyPlaying }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router


