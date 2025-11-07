<template>
  <div class="card" @click="flipped = !flipped">
    <div class="card-inner" :class="{ flipped }">
      <div class="card-front">
        <img :src="game.image" :alt="game.title" loading="lazy" />
        <h3>{{ game.title }}</h3>
        <p>{{ game.console }}</p>
        <button @click.stop="addToCurrentlyPlaying">Agregar a Actualmente Jugando</button>
      </div>

      <div class="card-back">
        <h3>{{ game.title }}</h3>
        <p>Año: {{ game.year }}</p>
        <p>Rating: {{ game.rating }}</p>
        <p>{{ game.description }}</p>
        <a :href="game.link" target="_blank">Ver guía</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({ game: Object })
const flipped = ref(false)

function addToCurrentlyPlaying() {
  const stored = JSON.parse(localStorage.getItem('currentlyPlaying')) || {
    pending: [],
    playing: [],
    completed: []
  }

  const alreadyExists = Object.values(stored).some(arr =>
    arr.some(g => g.title === props.game.title)
  )

  if (alreadyExists) {
    alert('⚠️ Este juego ya está en tu lista de “Actualmente Jugando”.')
    return
  }

  stored.pending.push(props.game)
  localStorage.setItem('currentlyPlaying', JSON.stringify(stored))
  alert(`🎮 ${props.game.title} agregado a "Por comenzar".`)
}
</script>

<style scoped>
.card {
  perspective: 1000px;
  width: 100%;
  height: 340px;
  cursor: pointer;
  position: relative;
  z-index: 1; 
}

.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  box-sizing: border-box;
}

.card-front {
  background-color: #222;
  color: #f2f2f2;
}

.card-front img {
  width: 90%;
  height: 150px;
  object-fit: contain;
  border-radius: 5px;
  margin-bottom: 0.5rem;
}

.card-front button {
  margin-top: 0.5rem;
  background: #ff6600;
  color: #fff;
  border: none;
  padding: 0.4rem 0.8rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: 0.3s;
}

.card-front button:hover {
  background: #ff8533;
}

.card-back {
  background-color: #333;
  color: #f2f2f2;
  transform: rotateY(180deg);
  text-align: center;
}

.card-back a {
  color: #ff6600;
  text-decoration: none;
  font-weight: bold;
  margin-top: 0.5rem;
  display: inline-block;
}
</style>

