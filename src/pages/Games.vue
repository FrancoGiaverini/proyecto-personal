<template>
  <div class="games-page">
    <div class="console-buttons">
      <button 
        v-for="c in consoles" 
        :key="c" 
        @click="selectedConsole = c"
        :class="{ active: selectedConsole === c }"
      >
        {{ c }}
      </button>
    </div>

    <div class="games-grid">
      <GameCard 
        v-for="game in filteredGames" 
        :key="game.title" 
        :game="game" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import GameCard from '../components/GameCard.vue'
import games from '../assets/games.json'

const consoles = ['Todos', ...new Set(games.map(g => g.console))]
const selectedConsole = ref('Todos')

const filteredGames = computed(() => {
  if (selectedConsole.value === 'Todos') return games
  return games.filter(g => g.console === selectedConsole.value)
})
</script>

<style scoped>
.games-page {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.console-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem; /* Separa los botones de las cards */
}

.console-buttons button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #333;
  color: #f2f2f2;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.console-buttons button.active,
.console-buttons button:hover {
  background-color: #ff6600;
}

.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem; /* Espacio extra arriba de la grilla */
}
</style>
