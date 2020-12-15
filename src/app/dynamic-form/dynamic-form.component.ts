import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray} from '@angular/forms';
import { QuestionBase } from './question-base';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit{
  questions: Array<QuestionBase<string>> =[];
  formGroup: FormGroup;

  ngOnInit(): void {
   
  }

  get formArray(){
    return this.formGroup.get('formArray') as FormArray;
  }

  constructor(private questionService: QuestionService) { 
     this.questions = questionService.getQuestions();
     this.formGroup = new FormGroup({
      formArray : new FormArray([])
    })
  }

}
