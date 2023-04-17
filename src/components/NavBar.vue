<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.svg">
      </router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/products">Productos</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn" >
            <a data-bs-toggle="modal" class="btn btn-danger" data-bs-target="#logout">Logout</a>
          </li>
          <li v-else class="nav-item">
            <router-link class="nav-link px-3" to="/">Inicio de sesión</router-link>
          </li>
          <li class="nav-item">
            <input type="search" @keyup.enter = "buscarProducto" v-model="searchTerm" placeholder="Buscar producto">
            <button id="boton-buscador" class="btn" @click="buscarProducto">
              <i class="fa fa-search"></i>
            </button>
          </li>
        </ul>
      </div>
      <button type="button" class="btn position-relative" @click="mostrarCarro" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <i class="fa-solid fa-cart-shopping"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {{ contadorProductos }}
  </span>
</button>
    </div>
  </nav>
  <div class="container">
    <div v-for="(item, index) in items" :key="index">
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
import jsonData from '@/assets/data.json'
import {mapState, mapMutations} from 'vuex'


export default {
  name: "NavBar",
  components: {
  },
  data() {
    return {
      searchTerm: '',
      items: [],
      showLogoutConfirmation: false
    }
  },
  created() {
    this.items = jsonData
  },
  methods: {
    async search() {
      try {
        const filteredItems = this.items.filter(item => item.nombre.includes(this.searchTerm))
        this.items = filteredItems
        console.log(this.items);
      } catch (error) {
        console.error(error)
      }
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    },
    ...mapMutations(['mostrarCarro', 'contadorProductos', 'buscarProducto']),
    ...mapState(['contadorProductos']),
    ...mapState(['isLoggedIn'])
  }
}
</script>

<style scoped>
  img {
    min-height: 60px;
    widows: auto;
  }

  .bg-success {
    background-color: rgb(33, 33, 33)!important;
  }

  .btn {
    color: white
  }

  .btn:hover {
    color: #00f3ae;
  }
  a{
    cursor:pointer;
    color:white
  }
  a:hover{
    color:gray
  }
</style>