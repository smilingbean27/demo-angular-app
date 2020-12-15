import { Injectable } from '@angular/core';
import { QuestionBase } from './dynamic-form/question-base';
import { QuestionDropdown } from './dynamic-form/question-dropdown';
import { QuestionTextBox } from './dynamic-form/question-textbox';

import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  getQuestions() {
    
    const questions: Array<QuestionBase<string>> = [

      new QuestionDropdown({
        key: 'colors',
        label: 'Colors',
        order: 3, 
        options: [
          { key: 'red', value: 'Red'}, 
          { key: 'blue', value: 'Blue'}, 
          { key: 'green', value: 'Green'}, 
        ]

      }),

      new QuestionTextBox({
        key: 'userName',
        value: 'Bill Gates',
        label: 'Username',
        order: 1
      }),

      new QuestionTextBox({
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
