import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  name = 'Visitor';
  numberToSend = 0;
  receivedNumber = 0;

  send(num: number){
    this.numberToSend = num;
  }

  receive(num: number){
     console.log(num);
     this.receivedNumber = num;
  }
}
