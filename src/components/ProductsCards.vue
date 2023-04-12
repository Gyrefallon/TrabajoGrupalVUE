<template>
		<!-- Buscar productos    -->
		<div class="seccion__buscar">
				<input id="inputBuscador" v-model="inputBuscador" v-on:keyup.enter="buscarProducto()" type="Buscar" class="form-control rounded" placeholder="Buscar" aria-label="Buscar" aria-describedby="search-addon"  />
				<button type="button" class="btn-buscar" v-on:click="buscarProducto()">Buscar</button>
			</div>
    <div class="container">
			<div class="row">
				<div v-for="fila in productos" :key="fila.nombre" class="card col-md-2" style="width: 18rem;">
					<img :src= "fila.imagen" class="card-img-top" alt="placa">
					<div class="card-body">
							<h5 class="card-title">{{ fila.nombre }}</h5>
							<h6 class="card-text">{{ fila.descripcion }}</h6>
							<a href="#" class="btn btn-primary">Añadir al Carrito</a>
					</div>
				</div>
			</div>
    </div>
	
</template>

<script>
import { Products } from "@/services/Products.js";

export default {
	name: "ProductsCards",
	data: function() {
		return {
			productos: Products.getAllProducts(),
			productosTotal: Products.getAllProducts(),
			inputBuscador: '',
		};
	},
	methods: {
	buscarProducto: function () {
		if (this.inputBuscador === '') {
			this.productos = this.productosTotal;
		} else {

			const searchTerm = this.inputBuscador.toLowerCase();
			this.productos = this.productosTotal.filter(element => {
				const name1 = element.nombre.toLowerCase();
				const description1 = element.descripcion.toLowerCase();


				return name1.includes(searchTerm) || description1.includes(searchTerm);
			})
		}

	}
}
};
</script>
  
<style scoped>
  
</style>