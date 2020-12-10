import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent  {

   @Input() received: string = '';

   @Output() newNumEvent = new EventEmitter<string>();

   send(value: string){
     this.newNumEvent.emit(value);
    
   }

}
