import { Component, OnInit } from '@angular/core';
import {SubtractionExercise} from "../model/subtractionExercise";
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";
import {LevelService} from "../level.service";

@Component({
  selector: 'app-subtraction-level',
  templateUrl: './subtraction-level.component.html',
  styleUrls: ['./subtraction-level.component.scss']
})
export class SubtractionLevelComponent implements OnInit {

  private index;
  private exercise: SubtractionExercise;
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
      this.exercise = <SubtractionExercise>this.levelService.getLevels()[this.index].exercise;
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
