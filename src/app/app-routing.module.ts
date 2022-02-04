import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { ReviewAnswersComponent } from './components/review-answers/review-answers.component';

const routes: Routes = [
  {
    path : "",
    component : AddQuestionsComponent
  },
  {
    path : "answers",
    component : ReviewAnswersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
