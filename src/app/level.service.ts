import {Injectable} from '@angular/core';
import {LevelStatus} from "./level-status.enum";
import {Observable} from "rxjs";
import {SortExercise} from "./model/sortExercise";
import {IExercise} from "./model/exercise";

export interface Level {
  route: Array<string|number>;
  status: LevelStatus;
  title: string;
  exercise: IExercise,
  video?: string,
}

@Injectable()
export class LevelService {

  private _levels: Level[] = [
    {
      route: [],
      status: LevelStatus.FINISHED,
      title: null,
      exercise: null,
      video: '../assets/maja/level_1.mp4',
    },
    {
      route: ['./firstLevel',1],
      status: LevelStatus.ACTIVE,
      title: 'erstes Level',
      exercise: new SortExercise(10, 10)
    },{
      route: ['./firstLevel', 2],
      status: LevelStatus.PENDING,
      title: 'erstes Level',
      exercise: new SortExercise(10, 10)
    },{
      route: ['./firstLevel', 3],
      status: LevelStatus.PENDING,
      title: 'erstes Level',
      exercise: new SortExercise(10, 10)
    },
    {
      route: [],
      status: LevelStatus.PENDING,
      title: null,
      exercise: null,
      video: '../assets/maja/level_2.mp4',
    },{
      route: ['./firstLevel', 5],
      status: LevelStatus.PENDING,
      title: 'erstes Level',
      exercise: new SortExercise(10, 20)
    }
  ];

  constructor() {
  }

  get levels(): Observable<Level[]> {
    return Observable.of(this._levels);
  }

  public getLevels(): Level[] {
    return this._levels;
  }

  public finishLevelByExercise(exercise: IExercise): void {
    for(let i = 0, length = this.getLevels().length; i < length; i++){
      if(this.getLevels()[i].exercise === exercise){
        this._levels[i].status = LevelStatus.FINISHED;
        this._levels[i+ 1].status = LevelStatus.ACTIVE;
      }
    }
  }

  public finishLevel(level: Level): void {
    for(let i = 0, length = this.getLevels().length; i < length; i++){
      if(this.getLevels()[i] === level){
        this._levels[i].status = LevelStatus.FINISHED;
        this._levels[i+ 1].status = LevelStatus.ACTIVE;
      }
    }
  }
}
