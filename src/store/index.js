import { createStore } from 'vuex'
import { Products } from "@/services/products.js";


export default createStore({

    state: {
        carro: [],
        sumaTotal: 0,
        contadorProductos: 0,
        carroVisible: false,
        isLoggedin: false,
        productos: Products.getAllProducts(),
    },
    mutations: {
        // agregarProducto(state, payload){
        //     state.carro.push(payload)
        // }
        anadirProducto(state, payload) {
            const chequearExistencia = state.carro.some((element) => {
            return payload.id === element.id
            })
            if (chequearExistencia) {
                payload.cantidad++
                state.sumaTotal += +payload.precio
            } else {
                state.carro.push(payload)
                state.sumaTotal += +payload.precio
            }
            state.contadorProductos++

        },
        eliminarProducto(state, payload) {
            // console.log(state.carro)
            // state.carro = state.carro.filter((element)=>{
            //     return element.id != payload.id;
            // })
            // state.sumaTotal -= payload.precio * payload.cantidad
            // console.log(state.carro)
            state.carro = state.carro.filter(x => x.id != payload.id)
            state.sumaTotal -= (payload.precio * payload.cantidad)
            state.contadorProductos -= payload.cantidad
            payload.cantidad = 1;
        },
        mostrarCarro(state) {
            state.carroVisible = !state.carroVisible
        },
        buscarAlgo(state, payload) {
            console.log(state.carroVisible)
            console.log(payload.target.value)
        },
        setIsLoggedIn(state, value) {
            state.isLoggedIn = value
        },
        buscarProducto(state, payload) {
            if (payload.searchTerm == '') {
                state.productos = Products.getAllProducts()
            } else {
                const inputBuscador = payload.searchTerm.toLowerCase();
                const productos = Products.getAllProducts();
                const productosFiltrados = productos.filter(producto => {
                    const name1 = producto.nombre.toLowerCase();
                    return name1.includes(inputBuscador)
                });
                state.productos = productosFiltrados
            }
        },
        vaciarCarro(state) {
            state.carro = [];
            state.sumaTotal = 0,
            state.productos.forEach(element => {
                element.cantidad = 1;
            });
            
            state.contadorProductos = 0;
        }
    },
    action: {
    },
    modules: {
    }
})
