<template>
  <div class="portfolio-page">
    <p v-if="$store.state.welcomeMessage" class="welcome-text">
      {{ $store.state.welcomeMessage }}
    </p>
    <h1>NUESTRO PORTAFOLIO</h1>
    <div class="cards-container">
    <PortfolioCard
      v-for="(item, index) in portfolioItems"
      :key="index"
      :imagen="item.imagen"
      :titulo="item.titulo"
      :descripcion="item.descripcion"
    />
    </div>
  </div>
</template>

<script>
import PortfolioCard from '../components/portfolioCard.vue'
import portfolio from '../assets/portafolio.json' // ruta donde guardaste el JSON

export default {
  components: {
    PortfolioCard
  },
  data() {
    return {
      portfolioItems: portfolio
    }
  }
}
</script>

<style scoped>
.welcome-text {
  color: #fed141;
}
.portfolio-page {
  margin-top: 100px;
  margin-bottom: 50px;
  padding-right: 250px;
  padding-left: 250px;

}
h1 {
  color: white;
}
.cards-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 80px;
  
  background-color: #ff4f4f; /* ejemplo */
}

@media (max-width: 500px) {
  .portfolio-page {
    padding-right: 50px;
    padding-left: 50px;
  }
  .cards-container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
