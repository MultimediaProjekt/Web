import { Component, OnInit } from '@angular/core';
import { IExcercise } from './model/excercise';
import {ExcerciseService} from "./services/excercise.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  excercises$: Observable;

  constructor (public excerciseService: ExcerciseService) {}

  ngOnInit(): void {
   this.excercises$ = this.excerciseService.getExcercises();
  }

}
