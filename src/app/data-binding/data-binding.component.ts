import { Component} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

   componentName = "Data-Binding";
   disabledField = false;
   count = 0;
   
   onClick(){
     this.disabledField = !this.disabledField;
     this.count = this.count+1;
   }

   
}
