import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-angular-looping',
  templateUrl: './angular-looping.component.html',
  styleUrls: ['./angular-looping.component.scss']
})

export class AngularLoopingComponent {
  
  users: Array<{name: string, online: boolean}> =[];
  constructor(private userSerivce: UserService ){
  
    this.users = userSerivce.getUsers();
    console.log(this.users);
  }


}
