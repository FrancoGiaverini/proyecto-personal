<template>
  <div class="card" @click="flipped = !flipped">
    <div class="card-inner" :class="{ flipped }">
      <div class="card-front">
        <img :src="game.image" :alt="game.title" loading="lazy" />
        <h3>{{ game.title }}</h3>
        <p>{{ game.console }}</p>
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
</script>

<style scoped>
.card {
  perspective: 1000px;
  width: 100%;
  height: 300px;
  cursor: pointer;
  position: relative;
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
