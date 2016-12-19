import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {SortExercise} from "../model/sortExercise";

@Component({
  selector: 'app-sort-level',
  templateUrl: './sort-level.component.html',
  styleUrls: ['./sort-level.component.scss']
})
export class SortLevelComponent implements OnInit {

  @Input() exercise: SortExercise;
  private list: number[];
  @Output() sorted = new EventEmitter();

  constructor(private dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.list = this.exercise.getList();
    this.dragulaService.out.subscribe((value) => {
      console.log("SORT", this.exercise.isFulFilled(), this.exercise);
      if (this.exercise.isFulFilled()){
        this.sorted.emit(true);
      }
    });
  }

}
