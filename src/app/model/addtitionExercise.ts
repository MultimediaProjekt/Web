import {IExercise} from "./exercise";

export class AdditionExercise implements IExercise {

  private _firstNumber: number;
  private _secondNumber: number;
  private _result: number;

  constructor(firstNumber: number, secondNumber: number){
    this._firstNumber = firstNumber;
    this._secondNumber = secondNumber;
  }

  public isFulFilled() {
    return this._result === (this._firstNumber + this._secondNumber);
  };

  get secondNumber(): number {
    return this._secondNumber;
  }
  get firstNumber(): number {
    return this._firstNumber;
  }

  get result(): number {
    return this._result;
  }

  set result(value: number) {
    this._result = value;
  }

}
