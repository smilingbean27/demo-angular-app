import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  fontSizePx = 16;
  numberToSend = '';
  receivedNumber = '';

  send(val: string){
    this.numberToSend = val;
  }

  receive(val: string){
     this.receivedNumber = val;
  }

}
