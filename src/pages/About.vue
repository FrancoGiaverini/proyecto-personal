<template>
  <div class="about-page">
    <section class="hero">
      <h1>Acerca de RetroGamesDB</h1>
    </section>

    <section class="content">
      <h2>Nuestra Historia</h2>
      <p>
        Desde los primeros juegos de 8 bits hasta los lanzamientos más recientes, los videojuegos han marcado generaciones. 
        En RetroGamesDB, recopilamos información, guías y curiosidades para que cada jugador pueda redescubrir esos momentos inolvidables y conocer las novedades del gaming moderno.
      </p>

      <h2>Qué ofrecemos</h2>
      <ul>
        <li>Catálogos completos de juegos clásicos y modernos</li>
        <li>Guías y tips para cada título</li>
        <li>Información sobre consolas y plataformas</li>
        <li>Actualizaciones constantes con nuevos juegos</li>
      </ul>
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}


.hero {
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('/images/ciudad pixel.jpg'); 
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  border-bottom: 3px solid #ff6600;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
}

.hero h1 {
  font-size: 3rem;
  margin: 0;
}


.content {
  position: relative;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  color: #f2f2f2;
  text-shadow: 1.5px 1.5px 4px rgba(0,0,0,0.8);
}

.content h2 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.7);
}

.content p,
.content ul li {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.content ul {
  padding-left: 1.5rem;
  list-style-type: disc;
}


@media (max-width: 768px) {
  .hero {
    height: 30vh;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .content h2 {
    font-size: 1.5rem;
  }

  .content p,
  .content ul li {
    font-size: 0.95rem;
  }
}
</style>



