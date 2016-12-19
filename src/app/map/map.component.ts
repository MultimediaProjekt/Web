import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {LevelService, Level} from "../level.service";
import {Observable} from "rxjs";
import {LevelStatus} from "../level-status.enum";
import {ActivatedRoute, Router, Route} from "@angular/router";
import {ModalDirective} from "ng2-bootstrap";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  @Input() src: string = '../assets/maja/map.jpg';
  @Input() context: string = '/maja';
  private video = '';
  private showVideo = false;
  private levels$: Observable<Level[]>;
  private levelStatus = LevelStatus;
  private currentLevel: Level;

  constructor(public levelService: LevelService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.levels$ = this.levelService.levels;
    this.childModal.hide();
  }

  private showModal() {
    this.showVideo = true;
    this.childModal.show();
  }

  private stopVideo(){
    console.log("STOP", this.currentLevel);
    if(this.currentLevel.status === this.levelStatus.ACTIVE){
      this.levelService.finishLevel(this.currentLevel);
    }
    this.childModal.hide();
    this.showVideo = false;
  }

  private navigateOrShowVideo(level: Level){
    if(level.video) {
      this.currentLevel = level;
      this.showModal();
    } else {
      if(level.status === this.levelStatus.ACTIVE){
        this.router.navigate(level.route, {relativeTo: this.route});
      }
    }
  }

}
