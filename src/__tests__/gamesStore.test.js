import { setActivePinia, createPinia } from 'pinia'
import { useGamesStore } from '../stores/gamesStore'

test('gamesStore tiene estado inicial correcto', () => {
  setActivePinia(createPinia())
  const store = useGamesStore()

  expect(store.games).toEqual([])
  expect(store.loading).toBe(false)
  expect(store.error).toBeNull()
})
