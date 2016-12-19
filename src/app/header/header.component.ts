import { Component, OnInit } from '@angular/core';
import {PointService} from "../point.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public points: number;

  constructor(private pointService: PointService) { }

  ngOnInit() {
   this.points = this.pointService.points;
  }

}
