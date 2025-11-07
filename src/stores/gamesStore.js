import { defineStore } from 'pinia';
import axios from 'axios';

export const useGamesStore = defineStore('gamesStore', {
  state: () => ({
    games: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchGames() {
      this.loading = true;
      this.error = null;

     
      const API_URL = import.meta.env.PROD
        ? 'https://us-central1-proyectofinalfrancogiaverini.cloudfunctions.net/api/games'
        : 'http://127.0.0.1:5001/proyectofinalfrancogiaverini/us-central1/api/games';

      try {
        const res = await axios.get(API_URL);
        this.games = res.data; 
      } catch (err) {
        console.error('Error al cargar juegos desde FreeToGame:', err);
        this.error = 'No se pudieron obtener los juegos modernos.';
      } finally {
        this.loading = false;
      }
    }
  }
});


