<template>
  <div class="home-page">
    <section class="hero">
      <div class="overlay">
        <h1>RetroGamesDB</h1>
        <p class="hero-intro">
          Bienvenido a RetroGamesDB. Revive la magia de los videojuegos retro y descubre las nuevas joyas del gaming moderno. Aquí podrás explorar catálogos, guías y datos interesantes sobre títulos que marcaron generaciones.
        </p>
        <div class="buttons">
          <router-link to="/games" class="btn">Juegos Clásicos</router-link>
          <router-link to="/modern-games" class="btn btn-secondary">Juegos Modernos</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hero {
  position: relative;
  background-image: url('/images/ciudad pixel.jpg');
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid #ff6600;
  padding-top: 80px;
}

.overlay {
  background: rgba(0, 0, 0, 0.6);
  padding: 2.5rem;
  text-align: center;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
}

.hero-intro {
  font-size: 1.2rem;
  margin: 1rem 0 1.5rem 0;
  line-height: 1.5;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.7);
}

.buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  padding: 0.7rem 1.5rem;
  background-color: #ff6600;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.btn:hover {
  background-color: #e65c00;
  transform: scale(1.05);
}

.btn-secondary {
  background-color: #333;
}

.btn-secondary:hover {
  background-color: #555;
}

@media (max-width: 768px) {
  .hero {
    height: auto;
    padding: 2rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .hero-intro {
    font-size: 1rem;
  }
}
</style>




