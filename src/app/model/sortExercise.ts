import {IExercise} from "./exercise";
/**
 * Created by JWO on 19.12.2016.
 */
export class SortExercise implements IExercise {

  private list: number[];

  public constructor(length: number, max: number){
    this.list = this.getRandomArray(length, max);
  }

  public isFulFilled() {
    return this.isSortedList();
  }

  public getList(): number[]{
  return this.list;
}

  private isSortedList(): boolean {
    let last = 0;
    for (let item of this.list) {
      if (last >= item) {
        return false;
      }
      last = item;
    }
    return true;
  }

  private getRandomArray(length: number, max: number): number[] {
    let array = this.createArray(length, max);
    console.log("CREATED ARRAY", array);
    array = this.shuffle(array);
    console.log("SHUFFELED ARRAY", array);
    return array;
  }

  private createArray(length: number, max: number) {
    let array = [];
    for (let i = (max + 1 ) - length; array.length < length; i++) {
      array.push(i)
    }
    return array;
  }

  private shuffle(array: number[]): number[] {
    let a = [...array];
    for (let i = a.length; i; i--) {
      let j = Math.floor(Math.random() * i);
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
  }
}
