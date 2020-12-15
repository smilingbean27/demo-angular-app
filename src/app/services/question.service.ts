import { Injectable } from '@angular/core';
import { QuestionBase } from '../dynamic-form/extras/question-base';
import { DropdownQuestion } from '../dynamic-form/extras/dropdown-question';
import { TextBoxQuestion } from '../dynamic-form/extras/textbox-question';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {
    
    const questions: Array<QuestionBase<string>> = [

      new DropdownQuestion({
        key: 'colors',
        label: 'Colors',
        order: 3, 
        options: [
          { key: 'red', value: 'Red'}, 
          { key: 'blue', value: 'Blue'}, 
          { key: 'green', value: 'Green'}, 
        ]

      }),

      new TextBoxQuestion({
        key: 'userName',
        value: 'Bill Gates',
        label: 'Username',
        order: 1
      }),

      new TextBoxQuestion({
        key: 'emailaddress',
        value: 'something@gmail.com',
        label: 'Email Address',
        order: 2
      })
    ];

    console.log(questions);
    return questions;
  }
}