import {Injectable} from '@angular/core';

@Injectable()
export class AssetsService {

  private _context: string = 'maja';

  constructor() {
  }

  set context(value: string) {
    this._context = value;
  }

  public getNumberAssets(index: number) {
    if (this._context === 'maja') {
      switch (index) {
        case 1: {
          return require('../assets/maja/numbers/1.png');
        }
        case 2: {
          return require('../assets/maja/numbers/2.png');
        }
        case 3: {
          return require('../assets/maja/numbers/3.png');
        }
        case 4: {
          return require('../assets/maja/numbers/4.png');
        }
        case 5: {
          return require('../assets/maja/numbers/5.png');
        }
        case 6: {
          return require('../assets/maja/numbers/6.png');
        }
        case 7: {
          return require('../assets/maja/numbers/7.png');
        }
        case 8: {
          return require('../assets/maja/numbers/8.png');
        }
        case 9: {
          return require('../assets/maja/numbers/9.png');
        }
        case 10: {
          return require('../assets/maja/numbers/10.png');
        }
        case 11: {
          return require('../assets/maja/numbers/11.png');
        }
        case 12: {
          return require('../assets/maja/numbers/12.png');
        }
        case 13: {
          return require('../assets/maja/numbers/13.png');
        }
        case 14: {
          return require('../assets/maja/numbers/14.png');
        }
        case 15: {
          return require('../assets/maja/numbers/15.png');
        }
        case 16: {
          return require('../assets/maja/numbers/16.png');
        }
        case 17: {
          return require('../assets/maja/numbers/17.png');
        }
        case 18: {
          return require('../assets/maja/numbers/18.png');
        }
        case 19: {
          return require('../assets/maja/numbers/19.png');
        }
        case 20: {
          return require('../assets/maja/numbers/20.png');
        }
      }
    }
  }

  public getLevelDot(levelType: LevelType, hover = false, index = 0) {
    if (this._context === 'maja') {
      if (levelType === LevelType.HOME) {
        return hover ? require('../assets/maja/levelDots/home_hover.png') : require('../assets/maja/levelDots/home.png');
      }
      else if(levelType === LevelType.EXERCISE){
        switch (index) {
          case 1: {
            return hover ? require('../assets/maja/levelDots/level01_hover.png') : require('../assets/maja/levelDots/level01.png');
          }
          case 2: {
            return hover ? require('../assets/maja/levelDots/level02_hover.png') : require('../assets/maja/levelDots/level02.png');
          }
          case 3: {
            return hover ? require('../assets/maja/levelDots/level03_hover.png') : require('../assets/maja/levelDots/level03.png');
          }
          case 5: {
            return hover ? require('../assets/maja/levelDots/level04_hover.png') : require('../assets/maja/levelDots/level04.png');
          }
          case 6: {
            return hover ? require('../assets/maja/levelDots/level05_hover.png') : require('../assets/maja/levelDots/level05.png');
          }
          // case 7: {
          //   return hover ? require('../assets/maja/levelDots/level06_hover.png') : require('../assets/maja/levelDots/level06.png');
          // }
          // case 9: {
          //   return hover ? require('../assets/maja/levelDots/level07_hover.png') : require('../assets/maja/levelDots/level07.png');
          // }
          // case 10: {
          //   return hover ? require('../assets/maja/levelDots/level08_hover.png') : require('../assets/maja/levelDots/level08.png');
          // }
          // case 11: {
          //   return hover ? require('../assets/maja/levelDots/level09_hover.png') : require('../assets/maja/levelDots/level09.png');
          // }
          // case 13: {
          //   return hover ? require('../assets/maja/levelDots/level10_hover.png') : require('../assets/maja/levelDots/level10.png');
          // }
          // case 14: {
          //   return hover ? require('../assets/maja/levelDots/level11_hover.png') : require('../assets/maja/levelDots/level11.png');
          // }
          // case 15: {
          //   return hover ? require('../assets/maja/levelDots/level12_hover.png') : require('../assets/maja/levelDots/level12.png');
          // }
        }
      }else if (levelType === LevelType.VIDEO){
        return hover ? require('../assets/maja/levelDots/video_hover.png') : require('../assets/maja/levelDots/video.png');
      }
    }
  }

  public getLevelBackground() {
    if (this._context === 'maja') {
      return require('../assets/maja/level_maja.png');
    }
  }

}

export enum LevelType{
  HOME,
  EXERCISE,
  VIDEO
}

