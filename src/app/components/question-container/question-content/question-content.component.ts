import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {
  selectedQuestion;
  selectedQuestionIndex;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.selectedQuestion.subscribe(question => this.selectedQuestion = question);
    this.sharedService.selectedQuestionIndex.subscribe(index => this.selectedQuestionIndex = index);
  }

  handleValueChange (event) {
    this.sharedService.changeQuestionValue(this.selectedQuestionIndex, event.target.value);
  }

}
