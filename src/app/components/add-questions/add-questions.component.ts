import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Options } from 'selenium-webdriver';
import { AnswerService } from 'src/app/services/answer.service';
import { ReviewAnswersComponent } from '../review-answers/review-answers.component';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.scss']
})
export class AddQuestionsComponent implements OnInit {
  @ViewChild(ReviewAnswersComponent) callAnswers : ReviewAnswersComponent;

  questionForm : FormGroup;

  answertype = true;

  message;

  answer;

  optionsAnswer = [];

  question_answer : FormGroup

  items;

  questions_list = [];

  questionAnswer = [];

  constructor(private _fb : FormBuilder, private _sendAnswer : AnswerService, private _router : Router) { }


  createForm(){
    this.questionForm = this._fb.group({
      question : ["", Validators.required],
      answer_type : ["", Validators.required],
      options : this._fb.array([this.createOption()])
  });

    this.question_answer = this._fb.group({
      items: this._fb.array([])
    });

}

createOption(){
  return new FormControl();
}

createItem(type, question, options): FormGroup {
  
  if (type === 'option1') {
    return this._fb.group({
      question,
      paragraph : '',
      type : "option1"
    });
  } else {
    return this._fb.group({
      question,
      option : this._fb.array(options),
      type : "option2"
    });
  }
}

saveAnswer(id, question, type){
  let obj = {
    _id : id,
    question : question,
    answer : type == 'option1' ? this.answer : this.optionsAnswer
  }

  this.questionAnswer.push(obj);

  this._sendAnswer.obj.next(this.questionAnswer);
}

addAnswer(answer){
  this.optionsAnswer.push(answer);
}

input(ans){
  this.answer = ans.value;
}


add(){
  if(this.questionForm.invalid){
    this.message = "Please select all the fields";
    return;
  }

  
  let obj = {
    question : this.questionForm.value.question,
    answertype : this.questionForm.value.answer_type,
    options : [
      this.questionForm.value.option_1,
      this.questionForm.value.option_2,
      this.questionForm.value.option_3
    ]
  }

  let array = [];

  
  this.questionForm.value.options.forEach(element => {
    array.push(new FormControl({name : element, value: false}));
  });

  

  this.questions_list.push(obj);


  this._sendAnswer.alreadyObj.next(this.questions_list);
  

  this.addItem(this.questionForm.value.answer_type,this.questionForm.value.question, array );

  this.message = "";
  this.questionForm.reset();
}

  ngOnInit(): void {
    this.createForm();

    this._sendAnswer.obj.subscribe(result => {
      console.log(result);
    })

this.createItem
    

  }

  addItem(type, question, options): void {
    this.items = this.question_answer.get('items') as FormArray;
    this.items.push(this.createItem(type, question, options));
    
  }

  addMoreFields(){
    const array = this.questionForm.get('options') as FormArray;
    array.push(this.createOption());
  }

  review(){
     this._sendAnswer.obj.next(this.question_answer.value);
     this._router.navigate(['/answers']);
  }

  changeCheckBox(check){
    var currentValue = check.value;
    check.setValue({...currentValue, value : !currentValue.value})
  }

}