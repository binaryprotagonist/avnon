import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor() { }


  obj = new BehaviorSubject(null);
  alreadyObj = new BehaviorSubject(null);
}
