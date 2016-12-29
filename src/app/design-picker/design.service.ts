import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {LevelService} from "../level.service";

export enum DesignStatus {
  UNLOCKED,
  LOCKED,
  CURRENT
}

export class Design {
  route: Array<string|number>;
  img: string;
  alt: string;
  status: DesignStatus;
  context: string;
  price: number;
}

@Injectable()
export class DesignService {

  private _designs: Design[] = [{
    route: ['/maja'],
    img: require('../../assets/maja_intro.jpg'),
    alt: 'Biene Maja Design',
    context: 'maja',
    status: DesignStatus.UNLOCKED,
    price: 300
  }, {
    route: ['/dschungel'],
    img: require('../../assets/dschungelbuch_intro.jpg'),
    alt: 'Dschungelbuch Design',
    context: 'dschungel',
    status: DesignStatus.UNLOCKED,
    price: 300
  }];

  constructor(private levelService: LevelService) {
  }

  get designs(): Observable<Design[]> {
    return Observable.of(this._designs);
  }

  public getDesigns(): Design[] {
    return this._designs;
  }

  public getContext():string {
    let currentDesign = this._designs.find((_design: Design) => {
      return _design.status === DesignStatus.CURRENT;
    });
    return currentDesign.context;
  }

  public lockDesign(design: Design): void {
    let found_design = this.findDesign(design);
    found_design.status = DesignStatus.LOCKED;
  }

  public unlockDesign(design: Design, points: number): void {
    if(points >= design.price){
      let found_design = this.findDesign(design);
      found_design.status = DesignStatus.UNLOCKED;
    }
  }

  public setDesignToCurrent(design: Design): void {
    let found_design = this.findDesign(design);
    found_design.status = DesignStatus.CURRENT;
    this.levelService.setContext(found_design.context);
  }

  public lockOtherDesigns(design: Design){
    let designs = this.extractDesign(design);
    for(let _design of designs){
      this.lockDesign(_design);
    }
  }

  private extractDesign(design: Design): Design[] {
    let designs = [...this.getDesigns()];
    let design_arr = designs.filter((_design) => {
      return _design !== design;
    });
    return design_arr;
  }

  private findDesign(design: Design) {
    let found_design = this._designs.find((_design) => {
      return _design === design;
    });
    return found_design;
  }
}
