<template>
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
			productos: Products.getAllProducts()
		};
	}
};
</script>
  
<style scoped>
  
</style>