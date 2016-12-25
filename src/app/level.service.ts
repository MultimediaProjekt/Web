import {Injectable} from '@angular/core';
import {LevelStatus} from "./level-status.enum";
import {Observable} from "rxjs";
import {SortExercise} from "./model/sortExercise";
import {IExercise} from "./model/exercise";
import {DesignService} from "./design-picker/design.service";
import {AdditionExercise} from "./model/addtitionExercise";

export interface Level {
  route: Array<string|number>;
  status: LevelStatus;
  title: string;
  exercise: IExercise,
  video?: string,
}

@Injectable()
export class LevelService {

  private context = 'maja';

  private _levels: Level[] = [
    {
      route: [],
      status: LevelStatus.FINISHED,
      title: null,
      exercise: null,
      video: `../assets/${this.context}/level_1.mp4`,
    },
    {
      route: ['./firstLevel', 1],
      status: LevelStatus.PENDING,
      title: 'erstes Level',
      exercise: new SortExercise(10, 10)
    }, {
      route: ['./firstLevel', 2],
      status: LevelStatus.PENDING,
      title: 'zweites Level',
      exercise: new SortExercise(10, 10)
    }, {
      route: ['./firstLevel', 3],
      status: LevelStatus.PENDING,
      title: 'drittes Level',
      exercise: new SortExercise(10, 10)
    }, {
      route: [],
      status: LevelStatus.PENDING,
      title: null,
      exercise: null,
      video: `../assets/${this.context}/level_2.mp4`,
    }, {
      route: ['./firstLevel', 5],
      status: LevelStatus.PENDING,
      title: 'viertes Level',
      exercise: new SortExercise(10, 20)
    }, {
      route: ['./firstLevel', 6],
      status: LevelStatus.PENDING,
      title: 'fünftes Level',
      exercise: new SortExercise(10, 20)
    }, {
      route: ['./firstLevel', 7],
      status: LevelStatus.PENDING,
      title: 'sechstes Level',
      exercise: new SortExercise(10, 20)
    }, {
      route: [],
      status: LevelStatus.PENDING,
      title: null,
      exercise: null,
      video: `../assets/${this.context}/level_3.mp4`,
    }, {
      route: ['./additionLevel', 9],
      status: LevelStatus.ACTIVE,
      title: 'siebtes Level',
      exercise: new AdditionExercise(10, 5)
    }, {
      route: ['./additionLevel', 10],
      status: LevelStatus.ACTIVE,
      title: 'achtes Level',
      exercise: new AdditionExercise(3, 8)
    }, {
      route: ['./additionLevel', 11],
      status: LevelStatus.ACTIVE,
      title: 'neuntes Level',
      exercise: new AdditionExercise(14, 3)
    }
  ];

  constructor() {
  }

  get levels(): Observable<Level[]> {
    return Observable.of(this._levels);
  }

  public setContext(context: string) {
    for (let i = 0, length = this._levels.length; i < length; i++) {
      if (this._levels[i].video) {
        this._levels[i].video = this._levels[i].video.replace(this.context, context);
      }
    }
    this.context = context;
  }

  public getLevels(): Level[] {
    return this._levels;
  }

  public finishLevelByExercise(exercise: IExercise): void {
    for (let i = 0, length = this.getLevels().length; i < length; i++) {
      if (this.getLevels()[i].exercise === exercise) {
        this._levels[i].status = LevelStatus.FINISHED;
        this._levels[i + 1].status = LevelStatus.ACTIVE;
      }
    }
  }

  public finishLevel(level: Level): void {
    for (let i = 0, length = this.getLevels().length; i < length; i++) {
      if (this.getLevels()[i] === level) {
        this._levels[i].status = LevelStatus.FINISHED;
        this._levels[i + 1].status = LevelStatus.ACTIVE;
      }
    }
  }
}
