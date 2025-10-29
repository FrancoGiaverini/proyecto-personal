<template>
  <nav class="navbar">
    <h1>RetroGamesDB</h1>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/games">Juegos Clásicos</router-link></li>
      <li><router-link to="/modern-games">Juegos Modernos</router-link></li> <!-- ✅ NUEVO -->
      <li><router-link to="/about">Acerca de</router-link></li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #111;
}

.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.navbar a {
  color: #f2f2f2;
  text-decoration: none;
  transition: color 0.3s;
}

.navbar a:hover {
  color: #ff6600;
}
</style>

