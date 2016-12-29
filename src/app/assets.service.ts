import { Injectable } from '@angular/core';

@Injectable()
export class AssetsService {

  private _context: string = 'maja';

  constructor() { }

  set context(value: string) {
    this._context = value;
  }

  public getNumberAssets(index: number) {
    if(this._context === 'maja'){
      switch (index){
        case 1:{
          return require('../assets/maja/numbers/1.png');
        }
        case 2:{
          return require('../assets/maja/numbers/2.png');
        }
        case 3:{
          return require('../assets/maja/numbers/3.png');
        }
        case 4:{
          return require('../assets/maja/numbers/4.png');
        }
        case 5:{
          return require('../assets/maja/numbers/5.png');
        }
        case 6:{
          return require('../assets/maja/numbers/6.png');
        }
        case 7:{
          return require('../assets/maja/numbers/7.png');
        }
        case 8:{
          return require('../assets/maja/numbers/8.png');
        }
        case 9:{
          return require('../assets/maja/numbers/9.png');
        }
        case 10:{
          return require('../assets/maja/numbers/10.png');
        }
      }
    }
  }

  public getLevelBackground(){
    if(this._context === 'maja'){
      return require('../assets/maja/level_maja.png');
    }
  }

}
