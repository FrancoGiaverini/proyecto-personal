import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    games: [],
    consoles: [],
    favorites: [],
  }),
  actions: {
    addFavorite(game) {
      if (!this.favorites.includes(game)) {
        this.favorites.push(game)
      }
    },
    removeFavorite(game) {
      this.favorites = this.favorites.filter(f => f !== game)
    },
  },
})
