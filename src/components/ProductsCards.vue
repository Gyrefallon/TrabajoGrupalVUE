<template>
    <div class="container">
			<div class="row">
				<div v-for="fila in productos" :key="fila.id" class="card col-md-3">
					<img :src= "fila.imagen" class="card-img-top" alt="placa">
					<div class="card-body">
							<h5 class="card-title">{{ fila.nombre }}</h5>
							<h6 class="card-text">Precio: {{ fila.precio }}</h6>
							<h6 class="card-text">Stock: {{ fila.stock }}</h6>
							<a class="btn btn-primary" @click="anadirProducto(fila)">Añadir al Carrito</a>
					</div>
				</div>
			</div>
    </div>
	<CarroCompra></CarroCompra>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import { Products } from "@/services/products.js";
import CarroCompra from "@/components/CarroCompras.vue";

export default {
	name: "ProductsCards",
	data: function() {
		return {
			productos: Products.getAllProducts()
		};
	},
	components: {
		CarroCompra
	},
	computed: {
    ...mapState(['carro']),
    ...mapState(['sumaTotal'])    
     },
     methods: {
        ...mapMutations(['anadirProducto']),
    },
};
</script>
  
<style scoped>
  .card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  }

  .card img {
	max-height: 100px;
	width: auto;
	overflow: hidden;
	object-fit: scale-down;
	margin: 1em;
  }
</style>