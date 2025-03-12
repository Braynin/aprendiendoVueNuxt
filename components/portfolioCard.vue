<template>
  <div>
  <div class="card">
    <img :src="imagen" :alt="titulo" class="cardImage"  @click="openModal"/>
    <div class="cardContent">
      <h3 class="cardTitle">{{ titulo }}</h3>
      <p class="cardDescription">{{ descripcion }}</p>
    </div>
  </div>
  <div v-if="modalOpen" class="modalOverlay" @click="closeModal">
      <div class="modalContent" @click="closeModal">
        <img :src="imagen" :alt="titulo" class="modalImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: {
    imagen: {
      type: String,
      required: true
    },
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      modalOpen: false
    }
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  background-color: black;
  border-radius: 4px;
  overflow: hidden;  
}

.cardImage {
  width: 100%;
  height: 250px;
  object-fit: cover;
  margin-bottom: 80px;
  cursor: pointer;
}

.cardContent {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: black;
  padding: 10px;
  transition: all 0.1s ease;
  pointer-events: auto; 
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

.cardContent:hover {
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}

.cardContent:hover .cardTitle  {
  font-size: 24px;
}
.cardContent:hover .cardDescription {
  font-size: 24px;
}

.cardTitle {
  font-size: 12px;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 1px;
  color: white;
}

.cardDescription {
  font-size: 12px;
  margin: 0px;
  color: #fed141;
}
.modalOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modalContent {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  padding: 10px;
  border-radius: 4px;
  width: 100%;
  height: 100%;
}

.modalImage {
  max-height: 70%;
  object-fit: contain;
}
@media (max-width: 500px) {
  .cardTitle {
    font-size: 20px;
  }

  .cardDescription {
    font-size: 20px;
  }
}
</style>
