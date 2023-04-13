<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue Router</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/products">Productos</router-link>
          </li>
          <li class="nav-item">
          <input id="search" type="search" v-model="searchTerm" @keyup="search" />
          <label class="label-icon" for="search"><i class="material-icons">Buscar</i></label>
          <i class="material-icons">close</i>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link class="nav-link px-3" to="/" @click.prevent="showLogoutModal">Logout</router-link>
          </li>
        </ul>
      </div>
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

export default {
  name: "NavBar",
  data() {
    return {
      searchTerm: '',
      items: []
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
    },
    showLogoutModal() {
      this.$emit('show-logout-modal')
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.state.isLoggedIn
    }
  }
}
</script>

<style scoped>

</style>