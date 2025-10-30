import { render, screen } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from '../App.vue'

const routes = [
  { path: '/', component: { template: '<div>Home</div>' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

test('Navbar tiene el título RetroGamesDB', async () => {
  render(App, {
    global: {
      plugins: [router, createPinia()]
    }
  })

  const title = screen.getByText('RetroGamesDB')
  expect(title).toBeInTheDocument()
})
