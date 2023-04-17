<template>
	<NavBar @show-logout-modal="showLogoutConfirmation = true"/>
	<LogoutConfirmation/>
    <div class="container">
			<div class="row g-3">
				<div v-for="fila in productos" :key="fila.id" class="card col-md-3" @click="mostrarDescripcion(fila)" >
					<div class="card-body" data-bs-toggle="modal" data-bs-target="#descripcionProducto">
						<img :src= "fila.imagen" class="card-img-top" alt="placa">
							<h2 class="card-title">{{ fila.nombre }}</h2>
							<h6 class="card-text">Precio: ${{ parseInt(fila.precio).toLocaleString('es') }}</h6>
							<h6 class="card-text">Stock: {{ fila.stock }}</h6>
					</div>
					<a class="btn btn-primary" @click="anadirProducto(fila)">Añadir al Carrito</a>
				</div>
			</div>
    </div>
	<CarroCompra/>
	<!-- Modal -->
	<div class="modal fade" id="descripcionProducto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
		<div class="modal-header">
			<h1 class="modal-title fs-5" id="exampleModalLabel"> {{ tituloActual }}</h1>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			{{ descripcionActual }}

		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
		</div>
		</div>
	</div>
	</div>
</template>

<script>

import {mapState, mapMutations} from 'vuex'
import CarroCompra from "@/components/CarroCompras.vue";
import NavBar from "@/components/NavBar.vue";
import LogoutConfirmation from '@/components/LogoutConfirmation.vue'


export default {
	name: "ProductsCards",
	components: {
		CarroCompra,
		NavBar,
		LogoutConfirmation
	},
	data() {
		return {
			descripcionActual: '',
			tituloActual: '',
		}
	},
	computed: {
    ...mapState(['carro', 'sumaTotal', 'productos']),
     },
     methods: {
        ...mapMutations(['anadirProducto']),
		mostrarDescripcion(producto) {
			this.descripcionActual = producto.descripcion
			this.tituloActual = producto.nombre
		}
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