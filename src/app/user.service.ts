import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    {
      name: 'Anuj',
      online: true
    },
    {
      name: 'Priyanshi',
      online: false
    },
    {
      name: 'Yaddu',
      online: true
    }
]
  getUsers(){
    return this.users;
  }
  
}
