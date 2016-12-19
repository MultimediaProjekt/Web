import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

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
  price: number;
}

@Injectable()
export class DesignService {

  private _designs: Design[] = [{
    route: ['/maja'],
    img: require('../../assets/maja_intro.jpg'),
    alt: 'Biene Maja Design',
    status: DesignStatus.UNLOCKED,
    price: 0
  }, {
    route: ['/dschungel'],
    img: require('../../assets/dschungelbuch_intro.jpg'),
    alt: 'Dschungelbuch Design',
    status: DesignStatus.LOCKED,
    price: 0
  }];

  constructor() {
  }

  get designs(): Observable<Design[]> {
    return Observable.of(this._designs);
  }

  public getDesigns(): Design[] {
    return this._designs;
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
