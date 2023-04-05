<template>
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
    </div>
</template>

<script>
import { AuthLogin } from "@/services/AuthLogin";

export default { 
    name: "LoginUser",
    components: {},
    data: function () {
        return {
            usuarios: AuthLogin.getAllUsers(),
            email: "",
            password: "",
    
        };
    }
};
</script>

<style scoped></style>

