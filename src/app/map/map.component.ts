import {Component, OnInit, Input} from '@angular/core';
import {LevelService, Level} from "../level.service";
import {Observable} from "rxjs";
import {LevelStatus} from "../level-status.enum";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() src: string = '../assets/maja/map.jpg';
  @Input() context: string = '/maja';
  private levels$: Observable<Level[]>;
  private levelStatus = LevelStatus;

  constructor(public levelService: LevelService) {
  }

  ngOnInit() {
    this.levels$ = this.levelService.levels;
  }

}
