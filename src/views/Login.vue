<template>
    <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-md-3">
                <div class="card shadow-lg">
                    <div class="card-header bg-success text-white">
                        <p class="h3">Iniciar sesión</p>
                    </div>
                    <div class="card-body bg-light">
                        <form @submit.prevent="valida()">
                            <div class="mb-2">
                                <input v-model="user.email" class="form-control" placeholder="Email" type="email">
                            </div>
                            <div class="mb-2">
                                <input v-model="user.password" class="form-control" placeholder="Password" type="password">
                            </div>
                            <div class="mb-2">
                                <input class="btn btn-success" type="submit" value="Ingresar">
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { UserService } from "@/services/auth.js";
import router from "../router"
import { mapMutations } from 'vuex'

export default {
    name: "LoginUser",
    components: {},
    data: function () {
        return {
            usuarios: [],
            user:{
                email: "",
                password: ""
            },
            errorMessage: ''
        };
    },
    created: async function() {
        try{
            let response = await UserService.getAllUsers();
            this.usuarios = response;
        }catch(error){
            this.errorMessage = error;
        }
    },
    methods:{
        ...mapMutations(['setIsLoggedIn']),
    valida : function (){
        let logon = false
        let encontrar = this.usuarios.map(element => element.email).indexOf(this.user.email);
      // Compara las credenciales ingresadas con las credenciales almacenadas en el archivo JSON
      if (encontrar !== -1) {
        if (this.user.password === this.usuarios[encontrar].password) {
                    logon = true
                } else {
                    logon = false
                }
      } else {
        // Si las credenciales no son válidas, muestra un mensaje de error
        this.errorMessage = 'Credenciales incorrectas'
        logon = false
      }if(logon){
        alert("Bienvenido");
        router.push("/products");
        this.setIsLoggedIn(true);
      }else{
        alert("Usuario y/o contraseña erroneos")
      }
    },

  }
};
</script>

<style scoped>

.h3 {
    margin-top: .5em!important
}
.card-header {
    background-color: rgb(33, 33, 33)!important;
}

.btn-success {
	background-color: rgb(39, 39, 39) !important;
	border: 0 !important;
}

.btn-success:hover {
	cursor: pointer;
	color: #00f3ae;
	background-color: rgb(48, 48, 48) !important;


}
</style>

