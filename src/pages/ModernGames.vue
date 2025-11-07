<template>
  <div class="modern-games-page">
    <h2>Juegos Modernos</h2>

    <button @click="loadGames" class="load-btn">
      Cargar Juegos Modernos
    </button>

    <div v-if="gamesStore.loading" class="loading">
      Cargando juegos modernos...
    </div>

    <div v-else class="games-grid">
      <GameCard 
        v-for="game in gamesStore.games" 
        :key="game.id || game.slug" 
        :game="formatGame(game)" 
      />
    </div>

    <div v-if="gamesStore.error" class="error">
      {{ gamesStore.error }}
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from '../stores/gamesStore.js'
import { onMounted } from 'vue'
import GameCard from '../components/GameCard.vue'

const gamesStore = useGamesStore()

onMounted(() => {
 
})

const loadGames = () => {
  gamesStore.fetchGames()
}


const formatGame = (game) => ({
  title: game.title,
  console: game.platform || 'Varios',
  year: game.release_date?.split('-')[0] || 'Desconocido',
  rating: game.publisher || 'N/A',
  description: game.short_description,
  image: game.thumbnail || 'https://via.placeholder.com/220x300?text=No+Image',
  link: game.game_url || '#'
});
</script>

<style scoped>
.modern-games-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.load-btn {
  background-color: #ff6600;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;       
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.load-btn:hover {
  background-color: #e55a00;
}

.loading,
.error {
  text-align: center;
  font-weight: bold;
  color: #ff6600;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}

@media (max-width: 400px) {
  .load-btn {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }
}
</style>
