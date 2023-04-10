export class AuthLogin {
    static usuarios = [
        {
        "id": 1,
        "email": "usuario1@mitienda.com",
        "password": "password",
        },
        {
        "id": 2,
        "email": "fran@gmail.com",
        "password": "123fran",
        }  
    ];

    static getAllUsuarios() {
        return this.usuarios;
    }
}