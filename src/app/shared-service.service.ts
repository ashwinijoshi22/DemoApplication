import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  questionList = [
    {
      "text": "What is your name",
      "type": "text",
      "value": ""
    },
    {
      "text": "What is your email id",
      "type": "text",
      "value": ""
    },
    {
      "text": "What is your occupation",
      "type": "text",
      "value": ""
    },
    {
      "text": "What is your age",
      "type": "number",
      "value": ""
    },
    {
      "text": "What is your phone number",
      "type": "number",
      "value": ""
    }
  ]

  public selectedQuestionIndex = new BehaviorSubject(0);
  public selectedQuestion = new BehaviorSubject(this.questionList[0]);
  public isSubmit = new BehaviorSubject(false);

  constructor() {
  }

  changeQuestionIndex(index: number) {
    this.selectedQuestionIndex.next(index);
    this.selectedQuestion.next(this.questionList[index]);
  }

  changeIsSubmit(value: boolean) {
    this.isSubmit.next(value);
  }

  changeQuestionValue(index: number, value) {
    this.questionList[index].value = value;
  }
}
