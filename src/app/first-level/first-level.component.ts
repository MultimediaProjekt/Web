import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";
import {LevelService} from "../level.service";
import {LevelStatus} from "../level-status.enum";
import {DragulaService} from "ng2-dragula/components/dragula.provider";
import {PointService} from "../point.service";
import {SortExercise} from "../model/sortExercise";
import {AssetsService} from "../assets.service";

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.scss']
})
export class FirstLevelComponent implements OnInit {

  private levelStatus = LevelStatus;
  private index: number;
  private exercise: SortExercise;

  constructor(public router: Router,
              public levelService: LevelService,
              private route: ActivatedRoute,
              public dragulaService: DragulaService,
              private pointService: PointService,
              private assetsService: AssetsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['index'];
      this.exercise = <SortExercise>this.levelService.getLevels()[this.index].exercise;
    });
  }

  sorted(sorted: boolean): void {
    this.levelService.finishLevelByExercise(this.exercise);
    this.pointService.addPoints(100);
    this.router.navigate(['/maja']);
  }
}
