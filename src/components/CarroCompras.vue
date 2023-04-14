<template>
    <section id="carro-de-compras" >
         <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Carro de Compras</h1>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p v-if="carro.length==0"> El carro está vacío</p>
        <div v-else>
            <div class="titulos-carro">
            <div>Producto</div>
            <div>Cantidad</div>
        </div>
        
        <ul v-for="producto in carro" :key="producto.id" >
            <li>{{ producto.nombre }}</li>
            <li>{{ producto.cantidad }}</li>
            <button @click="eliminarProducto(producto)" class="trash"><i class="fa-solid fa-trash-can"></i></button>
        </ul>
        <h3 class="suma">Total de la compra: ${{ sumaTotal.toLocaleString('clp') }}</h3>
        </div>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    </section>
</template>
<script>
import {mapState, mapMutations} from 'vuex'

export default {
    data() {
        return {
            productos: [
                {nombre: "producto01", cantidad: 1, id:"001"},
                {nombre: "producto02", cantidad: 2, id:"002"},
            ]
        }
    },
    computed: {
    ...mapState(['carro', 'sumaTotal', 'carroVisible']),
     },
     methods: {
        ...mapMutations(['eliminarProducto'])
    },
    watch: {},
    props: {}
}
</script>

<style scoped>

* {
    padding: 0;
    margin: 0;
}


h2 {
    font-size: .9rem;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
    background-color: rgb(234, 234, 234);
    padding: 1em;

}

#carro-de-compras {
    padding: 2em;
}

#carro-de-compras ul {
    list-style: none;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    text-align: center;
    align-items: center;
}

#carro-de-compras ul li {
    font-size: .8rem;
    margin: 1em;
}

.modal-title {
    text-align: center!important;
    display: block;
}

#carro-de-compras h3 {
    margin-top: 1em;
    font-size: 1.2rem;
}

.trash{
    all:unset
}
.fa-trash-can:hover {
    color: #00f3ae;
}

.suma {
    font-size: 1rem!important;
    font-weight: 700;
}

.titulos-carro {
    font-weight: 700;
    background-color: rgb(244, 243, 243);
    padding: 5px;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 5px;
}

</style>