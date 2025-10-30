<template>
  <div class="playing-page">
    <h1>Actualmente Jugando</h1>

    <div class="columns">
      <div
        class="column"
        v-for="(games, status) in columns"
        :key="status"
        @dragover.prevent
        @drop="onDrop(status)"
      >
        <h2>{{ statusTitles[status] }}</h2>

        <div class="games-list">
          <div
            v-for="(game, index) in games"
            :key="game.title + '-' + index"
            class="game-card"
            draggable="true"
            @dragstart="onDrag(game, status, index)"
          >
            <img :src="game.image" alt="game cover" />
            <div class="meta">
              <p class="title">{{ game.title }}</p>
              <p class="console" v-if="game.console">{{ game.console }}</p>
            </div>

            
            <button class="remove-btn" @click.stop="removeGame(status, index)" aria-label="Eliminar">✖</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const statusTitles = {
  pending: "Por comenzar 🎯",
  playing: "Jugando 🕹️",
  completed: "Completado ✅",
}


const columns = ref({
  pending: [],
  playing: [],
  completed: []
})

let dragged = ref(null)

function onDrag(game, status, index) {
  dragged.value = { game, from: status, index }
}

function onDrop(toStatus) {
  if (!dragged.value) return
  const { game, from, index } = dragged.value

 
  if (!columns.value[from] || !columns.value[toStatus]) {
    dragged.value = null
    return
  }


  if (columns.value[from][index] && columns.value[from][index].title === game.title) {
    columns.value[from].splice(index, 1)
  } else {
    
    const idx = columns.value[from].findIndex(g => g.title === game.title)
    if (idx !== -1) columns.value[from].splice(idx, 1)
  }

  
  columns.value[toStatus].push(game)

  dragged.value = null
  saveData()
}

function saveData() {
  try {
    localStorage.setItem("currentlyPlaying", JSON.stringify(columns.value))
  } catch (e) {
    console.error('Error guardando currentlyPlaying:', e)
  }
}

function loadData() {
  try {
    const saved = localStorage.getItem("currentlyPlaying")
    if (saved) {
      const parsed = JSON.parse(saved)
     
      columns.value.pending = Array.isArray(parsed.pending) ? parsed.pending : []
      columns.value.playing = Array.isArray(parsed.playing) ? parsed.playing : []
      columns.value.completed = Array.isArray(parsed.completed) ? parsed.completed : []
    }
  } catch (e) {
    console.error('Error leyendo currentlyPlaying:', e)
  }
}

function removeGame(status, index) {
  if (!columns.value[status]) return
  columns.value[status].splice(index, 1)
  saveData()
}

onMounted(loadData)
</script>

<style scoped>
.playing-page {
  padding: 2rem;
  color: #fff;
  background-color: #111;
  min-height: 100vh;
  box-sizing: border-box;
}

h1 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #ff6600;
  font-size: 1.9rem;
  text-shadow: 1px 1px 3px #000;
}

.columns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}


.column {
  background: #141414;
  border: 1px solid rgba(255,102,0,0.12);
  border-radius: 10px;
  padding: 0.8rem;
  min-width: 240px;
  max-width: 320px;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 4px 14px rgba(0,0,0,0.6);
}

.column h2 {
  text-align: center;
  color: #ff6600;
  margin: 0 0 0.6rem 0;
  font-size: 1.05rem;
}


.games-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  max-height: 60vh;
  overflow: auto;
  padding-right: 4px; 
}


.game-card {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: #1e1e1e;
  border-radius: 8px;
  padding: 0.45rem;
  position: relative; 
  cursor: grab;
  transition: transform 0.12s ease, background 0.12s ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.6);
}

.game-card:hover {
  transform: translateY(-2px);
  background: #262626;
}


.game-card img {
  width: 60px;
  height: 60px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
}

.meta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
}

.title {
  font-weight: 600;
  font-size: 0.95rem;
  margin: 0;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.console {
  font-size: 0.8rem;
  color: #cfcfcf;
  margin-top: 2px;
}


.remove-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  background: rgba(255, 68, 68, 0.95);
  color: white;
  border: none;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  z-index: 5;
  box-shadow: 0 2px 6px rgba(0,0,0,0.6);
}

.remove-btn:hover {
  background: rgba(255, 34, 34, 1);
}


@media (max-width: 900px) {
  .columns {
    gap: 0.6rem;
  }
  .column {
    min-width: 46%;
    max-width: 46%;
  }
}

@media (max-width: 520px) {
  .column {
    min-width: 100%;
    max-width: 100%;
  }
  .game-card img {
    width: 52px;
    height: 52px;
  }
  .title {
    font-size: 0.9rem;
  }
}
</style>
