import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent  {

   @Input() received: number = 0;

   @Output() newNumEvent = new EventEmitter<number>();

   send(value: number){
     this.newNumEvent.emit(value);
    
   }

}
