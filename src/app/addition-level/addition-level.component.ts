import { Component, OnInit } from '@angular/core';
import {Route, Router, ActivatedRoute} from "@angular/router";
import {AdditionExercise} from "../model/addtitionExercise";
import {LevelService} from "../level.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-addition-level',
  templateUrl: './addition-level.component.html',
  styleUrls: ['./addition-level.component.scss']
})
export class AdditionLevelComponent implements OnInit {

  private index;
  private exercise: AdditionExercise;
  private formGroup: FormGroup;

  constructor(public router: Router,
              public levelService: LevelService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstNumber: new FormControl([0, Validators.required]),
      secondNumber: new FormControl([0, Validators.required]),
      result: new FormControl([0, Validators.required])
    });
    this.route.params.subscribe(params => {
      this.index = +params['index'];
      this.exercise = <AdditionExercise>this.levelService.getLevels()[this.index].exercise;
      this.formGroup.controls['firstNumber'].setValue(this.exercise.firstNumber);
      this.formGroup.controls['secondNumber'].setValue(this.exercise.secondNumber);
    });

    this.formGroup.controls['result'].valueChanges
      .distinctUntilChanged()
      .subscribe((value) => {
        this.exercise.result = value;
        if(this.exercise.isFulFilled()){
          this.levelService.finishLevelByExercise(this.exercise);
          this.router.navigate(['/maja']);
        }
    });
  }

}
