import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddQuestionsComponent } from './components/add-questions/add-questions.component';
import { ReviewAnswersComponent } from './components/review-answers/review-answers.component';
import { AnswerService } from './services/answer.service';

@NgModule({
  declarations: [
    AppComponent,
    AddQuestionsComponent,
    ReviewAnswersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AnswerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
