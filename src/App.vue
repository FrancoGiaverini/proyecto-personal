<template>
  <div id="app">
    <Navbar />

    <main>
      <router-view />
    </main>

    <footer>
      RetroGamesDB © 2025 - Todos los derechos reservados
    </footer>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #f2f2f2;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  padding: 1rem;
  box-sizing: border-box;
}

footer {
  background-color: #111;
  text-align: center;
  padding: 1rem 0;
  color: #888;
}
</style>
