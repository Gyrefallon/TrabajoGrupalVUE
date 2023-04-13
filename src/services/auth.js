export class UserService {
    static users = [{
      id: 1,
      email: 'john@example.com',
      password: 'password'}
    ]


    static getAllUsers() {
        return this.users;
      }
}
