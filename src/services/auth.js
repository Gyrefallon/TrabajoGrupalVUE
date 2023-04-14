export class UserService {
    static users = [{
      id: 1,
      email: 'a@a.com',
      password: 'password'}
    ]


    static getAllUsers() {
        return this.users;
      }
}
