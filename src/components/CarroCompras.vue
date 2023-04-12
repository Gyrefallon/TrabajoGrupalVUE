<template>
    <section id="carro-de-compras">
        <h2>Carro de Compras</h2>

        <div class="titulos-carro">
            <div>Producto</div>
            <div>Cantidad</div>
        </div>
        
        <ul v-for="producto in carro" :key="producto.id" >
            <li>{{ producto.nombre }}</li>
            <li>{{ producto.cantidad }}</li>
            <button @click="eliminarProducto(producto)">&#128465;</button>
        </ul>
        <h3>Suma Total: {{ sumaTotal.toLocaleString('clp') }}</h3>
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
    ...mapState(['carro']),
    ...mapState(['sumaTotal'])    
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

button {
    all: unset;
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
}

#carro-de-compras ul li {
    margin: 5px;
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