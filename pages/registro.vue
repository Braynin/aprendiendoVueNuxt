<template>
  <div class="form-container">
    <div class="form-card">
      <h2>FORMULARIO DE REGISTRO</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <input
            type="text"
            v-model="form.nombre"
            placeholder="Nombre"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            v-model="form.correo"
            placeholder="Correo"
            required
          />
        </div>
        <button type="submit" class="btn-submit">ENVIAR</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: "",
        correo: ""
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$store.commit('setWelcomeMessage', 'Bienvenido a Picnic ' + this.form.nombre + ' te registraste con el correo ' + this.form.correo); 
      this.$router.push('/');
    }
  }
} 
</script>

<style scoped>

.form-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.form-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  height: 300px;
  width: 500px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.form-card h2 {
  margin-bottom: 1.5rem;
  font-weight: bold;
  color: red;
}


.form-group {
  margin-bottom: 1rem;
}

.form-group input {
  width: 340px;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
}


.btn-submit {
  display: inline-block;
  width: 150px;
  padding: 20px;
  background-color: red; 
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.btn-submit:hover {
  background-color: #d40000;
}
@media (max-width: 500px) {
  .form-card {
    width: 300px;
  }

  .form-group input {
    width: 250px;
  } 
  
  }
</style>
