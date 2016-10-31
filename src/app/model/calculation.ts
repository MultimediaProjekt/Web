import { IExcercise } from './excercise';
import { Operator } from './operator';

/**
 * Eine Calculation ist eine einfache Rechenoperation, die mit 2 Werten und einer Basis Rechenoperation arbeitet
 */
export class Calculation implements IExcercise {

  /**
   * Creates an instance of Calculation and creates public fields
   * @param firstNumber
   * @param secondNumber
   * @param operator
   * @param result
   */
  constructor (public firstNumber: number, public secondNumber: number,
               public operator: Operator) {}

  /**
   * Returns the result of an calculation
   * @returns {number} which is the result of the calculation
   */
  public calculate ():number {
    switch (this.operator) {
      case Operator.Divide: {
        return this.firstNumber / this.secondNumber;
      } case Operator.Multiply: {
          return this.firstNumber * this.secondNumber;
      } case Operator.Plus: {
          return this.firstNumber + this.secondNumber;
      } case Operator.Substract: {
          return this.firstNumber - this.secondNumber;
      }
    }
  }

  /**
   * Checks if an input result is correct
   * @param result
   * @returns {boolean}
   */
  public isCorrectResult (result: number | string):boolean {
    let _res:number = +result;
    return _res === this.calculate();
  }

  public getOperator ():string {
    switch (this.operator){
      case Operator.Substract: {
          return '-';
      } case Operator.Divide: {
          return '/';
      } case Operator.Plus: {
          return '+';
      } case Operator.Multiply: {
          return '*';
      }
    }
  }

}
