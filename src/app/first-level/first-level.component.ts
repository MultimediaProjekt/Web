import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";
import {Router, ActivatedRoute} from "@angular/router";
import {LevelService} from "../level.service";
import {LevelStatus} from "../level-status.enum";
import {DragulaService} from "ng2-dragula/components/dragula.provider";

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.scss']
})
export class FirstLevelComponent implements OnInit, AfterViewInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  private showVideo = true;
  private list: number[];
  private levelStatus = LevelStatus;
  private src: string;
  private index: number;

  constructor(public router: Router, public levelService: LevelService, private route: ActivatedRoute, public dragulaService: DragulaService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = +params['index'];
      if (this.index === 0) {
        this.list = [3, 5, 8, 4, 2, 1, 0, 9, 6, 7];
        this.src = '../assets/maja/level_1.mp4';
        this.dragulaService.setOptions('bag-one', {
          removeOnSpill: false
        });
      } else if (this.index === 1) {
        this.list = [13, 15, 18, 14, 20 , 11, 10, 19, 16, 17, 12];
        this.src = '../assets/maja/level_2.mp4';
      }
    });
  }

  ngAfterViewInit(): void {
    this.childModal.show();
  }

  private stopVideo(): void {
    this.childModal.hide();
    this.showVideo = false;
  }

  sorted(sorted: boolean): void {
    this.levelService.finishLevel(this.index);
    this.router.navigate(['/maja']);
  }
}
