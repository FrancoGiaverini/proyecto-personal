<template>
  <div class="playing-page">
    <h1>Actualmente jugando 🎮</h1>

    <div class="columns">
      <div 
        v-for="(column, key) in columns" 
        :key="key" 
        class="column"
        @dragover.prevent
        @drop="onDrop(key)"
      >
        <h2>{{ column.title }}</h2>

        <div class="game-list">
          <div
            v-for="(game, index) in column.games"
            :key="game.title"
            class="game-card"
            draggable="true"
            @dragstart="onDragStart(game, key, index)"
          >
            <img :src="game.image" alt="" />
            <p>{{ game.title }}</p>

            
            <button class="remove-btn" @click="removeGame(key, index)">✖</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue'

const draggedGame = ref(null)

const columns = reactive({
  backlog: { title: 'Por comenzar', games: [] },
  playing: { title: 'Jugando', games: [] },
  done: { title: 'Completado', games: [] },
})


onMounted(() => {
  const saved = localStorage.getItem('playingColumns')
  if (saved) Object.assign(columns, JSON.parse(saved))
})


const saveToLocalStorage = () => {
  localStorage.setItem('playingColumns', JSON.stringify(columns))
}


const onDragStart = (game, fromKey, fromIndex) => {
  draggedGame.value = { game, fromKey, fromIndex }
}


const onDrop = (toKey) => {
  if (!draggedGame.value) return

  const { game, fromKey, fromIndex } = draggedGame.value
  columns[fromKey].games.splice(fromIndex, 1)
  columns[toKey].games.push(game)

  draggedGame.value = null
  saveToLocalStorage()
}


const removeGame = (key, index) => {
  columns[key].games.splice(index, 1)
  saveToLocalStorage()
}
</script>

<style scoped>
.playing-page {
  padding: 2rem;
  color: #f2f2f2;
  text-align: center;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.column {
  flex: 1;
  min-width: 280px;
  max-width: 320px;
  background: #1e1e1e;
  border: 2px solid #ff6600;
  border-radius: 10px;
  padding: 1rem;
  transition: 0.3s;
}

.column h2 {
  color: #ff6600;
  margin-bottom: 1rem;
}

.game-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}


.game-card {
  background: #2a2a2a;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: transform 0.2s;
  position: relative;
}

.game-card:hover {
  transform: scale(1.03);
}

.game-card img {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  object-fit: cover;
}


.remove-btn {
  position: absolute;
  top: 4px;
  right: 6px;
  background: none;
  border: none;
  color: #ff4444;
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.2s;
}

.remove-btn:hover {
  color: #ff0000;
}
</style>


