import { render, screen } from '@testing-library/vue'
import ModernGames from '../pages/ModernGames.vue'
import { createPinia } from 'pinia'

test('Contenedor de juegos modernos está en el DOM', () => {
  render(ModernGames, {
    global: { plugins: [createPinia()] }
  })

  const container = screen.getByText('Juegos Modernos')
  expect(container).toBeInTheDocument()
})
