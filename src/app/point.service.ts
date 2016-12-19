import { Injectable } from '@angular/core';

@Injectable()
export class PointService {

  public points = 0;

  constructor() { }

  public addPoints(points: number){
    this.points += points;
  }

  public substractPoints(points: number){
    this.points -= points;
  }

}
