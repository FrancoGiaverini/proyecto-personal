<template>
  <nav class="navbar">
    <h1>RetroGamesDB</h1>

    <button class="menu-toggle" @click="toggleMenu">
      ☰
    </button>

    <ul :class="{ open: menuOpen }">
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/games">Juegos Clásicos</router-link></li>
      <li><router-link to="/modern-games">Juegos Modernos</router-link></li>
      <li><router-link to="/currently-playing">Actualmente Jugando</router-link></li> 
      <li><router-link to="/about">Acerca de</router-link></li>
      
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #111;
  position: relative;
}

.navbar h1 {
  font-size: 1.5rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: #f2f2f2;
  font-size: 1.8rem;
  cursor: pointer;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar li {
  flex: 0 0 auto;
}

.navbar a {
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover,
.router-link-active {
  color: #ff6600;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar ul {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #111;
    flex-direction: column;
    width: 200px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
    border-radius: 0 0 10px 10px;
  }

  .navbar ul.open {
    max-height: 500px; 
  }

  .navbar li {
    margin: 0.5rem 0;
  }
}
</style>





