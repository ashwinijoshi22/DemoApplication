import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {
  selectedQuestionIndex;
  questionList;
  isSubmit;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.selectedQuestionIndex.subscribe(index => this.selectedQuestionIndex = index + 1);
    this.sharedService.isSubmit.subscribe(value => this.isSubmit = value);
    this.questionList = this.sharedService.questionList;
  }

}
