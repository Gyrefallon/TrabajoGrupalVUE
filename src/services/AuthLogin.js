export class AuthLogin {
  static usuarios = [
    {
      "id": 1,
      "email": "fran@gmail.com",
      "password": "123fran",
      },
      {
      "id": 2,
      "email": "betacor@gmail.com",
      "password": "123beta",
      }  
  ];

  static getAllUsuarios() {
    return this.usuarios;
  }
}