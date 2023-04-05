<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue Router</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/products">Productos</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/login">Login</router-link>
          </li>
          <li class="nav-item">
            <input type="text" class="m-1 px-4" v-model="input" placeholder="Buscar productos" />
            <button>Buscar</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>

</style>