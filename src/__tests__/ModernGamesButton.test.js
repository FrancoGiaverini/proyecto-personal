import { render, screen } from '@testing-library/vue'
import ModernGames from '../pages/ModernGames.vue'
import { createPinia } from 'pinia'

test('Botón "Cargar Juegos Modernos" existe', () => {
  render(ModernGames, {
    global: { plugins: [createPinia()] }
  })

  const button = screen.getByText('Cargar Juegos Modernos')
  expect(button).toBeInTheDocument()
})
