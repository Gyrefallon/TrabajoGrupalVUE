<template>
  <NavBar />
  <Products />
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Bienvenidos" /> -->
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "@/components/NavBar";
import  Products from "@/components/ProductsCards";
export default {
  name: 'HomeView',
  components: {
    NavBar,
    Products,
    // HelloWorld
   
  }
}
</script>
