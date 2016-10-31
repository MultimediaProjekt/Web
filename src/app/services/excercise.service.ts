import { Injectable } from '@angular/core';
import { IExcercise } from '../model/excercise';
import { Observable } from 'rxjs';
import {Calculation} from "../model/calculation";
import {Operator} from "../model/operator";

@Injectable()
export class ExcerciseService {

  private excercises: Calculation[];

  constructor() {
    this.excercises = <Calculation[]>[
      {firstNumber: 1, secondNumber: 1, operator: Operator.Plus }
    ];
  }

  /**
   * returns an rxjs observable of the excercises array ob objects
   * @returns {any}
   */
  public getExcercises ():Observable {
    return Observable.from(this.excercises);
  }
}
