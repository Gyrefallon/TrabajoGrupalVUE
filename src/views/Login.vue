<template>
<<<<<<< HEAD
    <div class="container">
        <div class="row mt-5 justify-content-center">
            <div class="col-md-3">
                <div class="card shadow-lg">
                    <div class="card-header bg-success text-white">
                        <p class="h3">Ingreso</p>
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
=======
    <div class="login">
        <h1 class="title">Iniciar Sesión</h1>
        <form action class="form" @submit.prevent="login">
            <label class="form-label" for="#email">Email:</label>
            <input v-model="email" class="form-input" type="email" id="email" required placeholder="Email">
            <label class="form-label" for="#password">Password:</label>
            <input v-model="password" class="form-input" type="password" id="password" placeholder="Password">
            <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
            <input class="form-submit" type="submit" value="Login">
        </form>
>>>>>>> master
    </div>
</template>

<script>
import { AuthLogin } from "@/services/AuthLogin";
<<<<<<< HEAD
import router from "../router";


export default {
    name: 'LoginVue',
    data: function () {
        return {
            usuarios: [],
            user: {
                email: '',
                password: ''
            }
        };
    },
    created: async function () {
        try {
            let response = await AuthLogin.getAllUsuarios();
            this.usuarios = response;
        } catch (error) {
            this.errorMessage = error;
        }
    },
    methods: {
        valida: function () {
            let loggin = false
            let encontro = this.usuarios.map(element => element.email).indexOf(this.user.email)
            console.log(encontro)
            if (encontro !== -1) {
                if (this.user.password === this.usuarios[encontro].password) {
                    loggin = true
                } else {
                    loggin = false
                }
            } else {
                loggin = false
            }
            if (loggin) {
                console.log('Usuario Logueado')
                router.push('/home')
            } else {
                console.log('Usuario NO Logueado')
            }
        }
=======

export default {
    name: "LoginUser",
    components: {},
    data: function () {
        return {
            usuarios: AuthLogin.getAllUsers(),
            email: "",
            password: "",

        };
>>>>>>> master
    }
};
</script>

<<<<<<< HEAD
<style>
</style>
=======
<style scoped></style>

>>>>>>> master
