import {Component, OnInit, Input} from '@angular/core';
import {Calculation} from "../model/calculation";
import {IExcercise} from "../model/excercise";

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  @Input() calculations: Calculation[] = [];

  constructor() { }

  ngOnInit() {
  }

}
