import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {SortExercise} from "../model/sortExercise";
import {AssetsService} from "../assets.service";

@Component({
  selector: 'app-sort-level',
  templateUrl: './sort-level.component.html',
  styleUrls: ['./sort-level.component.scss']
})
export class SortLevelComponent implements OnInit {

  @Input() exercise: SortExercise;
  private list: number[];
  @Output() sorted = new EventEmitter();

  constructor(
    private dragulaService: DragulaService,
    private assetsService: AssetsService) {
    dragulaService.drag.subscribe((value) => {
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      this.onOut(value.slice(1));
    });
  }

  private hasClass(el: any, name: string) {
    return new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)').test(el.className);
  }

  private addClass(el: any, name: string) {
    if (!this.hasClass(el, name)) {
      el.className = el.className ? [el.className, name].join(' ') : name;
    }
  }

  private removeClass(el: any, name: string) {
    if (this.hasClass(el, name)) {
      el.className = el.className.replace(new RegExp('(?:^|\\s+)' + name + '(?:\\s+|$)', 'g'), '');
    }
  }

  private onDrag(args) {
    let [e, el] = args;
    this.removeClass(e, 'ex-moved');
  }

  private onDrop(args) {
    let [e, el] = args;
    this.addClass(e, 'ex-moved');
  }

  private onOver(args) {
    let [e, el, container] = args;
    this.addClass(el, 'ex-over');
  }

  private onOut(args) {
    let [e, el, container] = args;
    this.removeClass(el, 'ex-over');
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
