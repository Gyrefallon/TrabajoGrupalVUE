export class AuthLogin {
    static usuarios = [
        {
        "id": 1,
<<<<<<< HEAD
        "email": "usuario1@mitienda.com",
        "password": "password",
        },
        {
        "id": 2,
        "email": "fran@gmail.com",
        "password": "123fran",
=======
        "email": "fran@gmail.com",
        "password": "123fran",
        },
        {
        "id": 2,
        "email": "betacor@gmail.com",
        "password": "123beta",
>>>>>>> master
        }  
    ];

    static getAllUsuarios() {
        return this.usuarios;
    }
}