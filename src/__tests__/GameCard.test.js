import { render, screen } from '@testing-library/vue'
import GameCard from '../components/GameCard.vue'

const game = {
  title: 'Mario',
  console: 'NES',
  year: '1985',
  rating: 5,
  description: 'Demo',
  image: '',
  link: '#'
}

test('muestra título y consola del juego', () => {
  render(GameCard, { props: { game } })

  expect(screen.getAllByText('Mario')[0]).toBeInTheDocument()
  expect(screen.getByText('NES')).toBeInTheDocument()
})
