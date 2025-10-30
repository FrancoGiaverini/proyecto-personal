import { defineStore } from 'pinia'
import axios from 'axios'

export const useGamesStore = defineStore('gamesStore', {
  state: () => ({
    games: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchGames() {
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('http://localhost:5000/api/games')
        this.games = res.data.results 
      } catch (err) {
        console.error('Error al cargar juegos desde el backend:', err)
        this.error = 'No se pudieron obtener los juegos modernos.'
      } finally {
        this.loading = false
      }
    }
  }
})

