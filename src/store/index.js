import { createStore } from 'vuex'

export default createStore({

    state: {
        carro: [],
        sumaTotal: 0,
        contadorProductos: 0,
        carroVisible: false,
    },

    mutations: {
        // agregarProducto(state, payload){
        //     state.carro.push(payload)
        // }

        anadirProducto(state, payload){
            const chequearExistencia = state.carro.some((element) => { 
                return payload.id === element.id
            })
            
            if(chequearExistencia){
                payload.cantidad ++ 
                state.sumaTotal += +payload.precio
            }else{
                state.carro.push(payload) 
                state.sumaTotal += +payload.precio
            }
            state.contadorProductos++
        },

        eliminarProducto(state, payload){
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
        }
        
    },
    
    action: {

    },    
    modules: {

    }

})
