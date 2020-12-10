import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent {
    
    d = new Date();
    toggle = true;

    get myGetFunc(){
      return 5; 
    }

    changeFormat(){

      this.toggle = !this.toggle;
    }

}
