import {Injectable} from '@angular/core';
import {LevelStatus} from "./level-status.enum";
import {Observable} from "rxjs";

export interface Level {
  route: Array<string|number>;
  status: LevelStatus;
  title: string;
}

@Injectable()
export class LevelService {

  private _levels: Level[] = [{
    route: ['./firstLevel', 0],
    status: LevelStatus.ACTIVE,
    title: 'erstes Level'
  }, {
    route: ['./firstLevel', 1],
    status: LevelStatus.PENDING,
    title: 'erstes Level'
  }];

  constructor() {
  }

  get levels(): Observable<Level[]> {
    return Observable.of(this._levels);
  }

  public getLevels(): Level[] {
    return this._levels;
  }

  public finishLevel(index: number): void {
    this._levels[index].status = LevelStatus.FINISHED;
    this._levels[index + 1].status = LevelStatus.ACTIVE;
  }
}
