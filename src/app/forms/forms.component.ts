import { Component } from '@angular/core';
import { FormControl, FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent{
  
  formGroup = new FormGroup({
    formArray : new FormArray([]),
    formElement : new FormControl('')
  })
  

  get formArray(){
    return this.formGroup.get('formArray') as FormArray;
  }

  addToFormArray(){
    this.formArray.push(new FormControl(''));
    console.log(this.formArray);
  }

}
