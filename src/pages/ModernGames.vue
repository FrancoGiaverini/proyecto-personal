<template>
  <div class="modern-games-page">
    <h2>Juegos Modernos</h2>

    <div v-if="loading" class="loading">
      Cargando juegos modernos...
    </div>

    <div v-else class="games-grid">
      <GameCard 
        v-for="game in games" 
        :key="game.id" 
        :game="formatGame(game)" 
      />
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import GameCard from '../components/GameCard.vue'

const API_KEY = '99c8650ecbd845009e978527d576406c'
const games = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`https://api.rawg.io/api/games?key=${API_KEY}&dates=2020-01-01,2025-12-31&ordering=-rating&page_size=30`)
    
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} - ${res.statusText}`)
    }

    const data = await res.json()
    games.value = data.results
  } catch (err) {
    console.error('Error al cargar los juegos modernos:', err)
    error.value = 'No se pudieron cargar los juegos modernos. Es posible que haya un problema de CORS o de API.'
  } finally {
    loading.value = false
  }
})

// Formatea los datos de RAWG para usar tu modelo de GameCard
const formatGame = (game) => ({
  title: game.name,
  console: game.platforms?.map(p => p.platform.name).join(', ') || 'Varios',
  year: game.released?.split('-')[0] || 'Desconocido',
  rating: game.rating || 'N/A',
  description: game.slug,
  image: game.background_image || 'https://via.placeholder.com/220x300?text=No+Image',
  link: `https://www.google.com/search?q=${encodeURIComponent(game.name + ' guía')}`
})
</script>

<style scoped>
.modern-games-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.loading,
.error {
  text-align: center;
  color: #ff6600;
  font-weight: bold;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
}
</style>
