<template>
	<NavBar @show-logout-modal="showLogoutConfirmation = true"/>
	<LogoutConfirmation/>
    <div class="container">
			<div class="row g-3">
				<div v-for="fila in productos" :key="fila.id" class="card col-md-3">
					<div class="card-body">
						<img :src= "fila.imagen" class="card-img-top" alt="placa">
							<h2 class="card-title">{{ fila.nombre }}</h2>
							<h6 class="card-text">Precio: {{ fila.precio.toLocaleString('clp') }}</h6>
							<h6 class="card-text">Stock: {{ fila.stock }}</h6>
							<a class="btn btn-primary" @click="anadirProducto(fila)">Añadir al Carrito</a>
					</div>
				</div>
			</div>
    </div>
	<CarroCompra/>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import { Products } from "@/services/products.js";
import CarroCompra from "@/components/CarroCompras.vue";
import NavBar from "@/components/NavBar.vue";
import LogoutConfirmation from '@/components/LogoutConfirmation.vue'


export default {
	name: "ProductsCards",
	data: function() {
		return {
			productos: Products.getAllProducts(),
		}
	},
	components: {
		CarroCompra,
		NavBar,
		LogoutConfirmation
	},
	computed: {
    ...mapState(['carro', 'sumaTotal']),
     },
     methods: {
        ...mapMutations(['anadirProducto']),
    },
	
};
</script>
  
<style scoped>

.card {
	border: 0;
}
  .card-body {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid rgba(226, 223, 223, 0.488);

  }

  .card img {
	max-height: 100px;
	width: auto;
	overflow: hidden;
	object-fit: scale-down;
	margin: 1em;
  }

  h2 {
	font-size: 1rem;
	font-weight: 700;
  }

  .btn {
	background-color: rgb(39, 39, 39)!important;
	border: 0!important;
  }

  .btn:hover {
	cursor: pointer;
	color: #00f3ae;
	background-color: rgb(48, 48, 48)!important;


  }
</style>