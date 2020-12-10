import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-app';
  name = 'Visitor';
  numberToSend = '';
  receivedNumber = '';

  send(val: string){
    this.numberToSend = val;
  }

  receive(val: string){
     this.receivedNumber = val;
  }
}
