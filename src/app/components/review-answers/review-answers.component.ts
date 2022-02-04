import { Component, OnInit, ViewChild } from '@angular/core';
import { AnswerService } from 'src/app/services/answer.service';
import { AddQuestionsComponent } from '../add-questions/add-questions.component';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.scss']
})
export class ReviewAnswersComponent implements OnInit {

  questions_Answer_list = [];

  showMessage = false;

  constructor(private _sendAnswer : AnswerService) { }

  ngOnInit(): void {
    this._sendAnswer.obj.subscribe(result => console.log(this.questions_Answer_list = result?.items));

  }

}
