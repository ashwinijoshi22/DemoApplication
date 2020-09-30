import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-question-footer',
  templateUrl: './question-footer.component.html',
  styleUrls: ['./question-footer.component.css']
})
export class QuestionFooterComponent implements OnInit {
  selectedQuestionIndex;
  questionList;
  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.sharedService.selectedQuestionIndex.subscribe(index => this.selectedQuestionIndex = index);
    this.questionList = this.sharedService.questionList;
  }

  handlePrev() {
    if(this.selectedQuestionIndex > 0){
      this.sharedService.changeQuestionIndex(this.selectedQuestionIndex - 1);
    }
  }

 handleNext() {
    if(this.selectedQuestionIndex < (this.questionList.length - 1)) {
      this.sharedService.changeQuestionIndex(this.selectedQuestionIndex + 1);
   }
  }

  handleSubmit() {
    this.sharedService.changeIsSubmit(true);
  }

}
