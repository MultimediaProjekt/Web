import {Component, OnInit, Input} from '@angular/core';
import {AssetsService, LevelType} from "../assets.service";

@Component({
  selector: 'app-level-dot',
  templateUrl: './level-dot.component.html',
  styleUrls: ['./level-dot.component.scss']
})
export class LevelDotComponent implements OnInit {

  @Input() type: LevelType;
  @Input() config: LevelConfig;
  @Input() active: boolean;
  @Input() finished: boolean;
  @Input() index = 0;

  private hover = false;

  constructor(
    private assetsService: AssetsService
  ) { }

  ngOnInit() {
  }

}

export interface LevelConfig{
  positionX: number;
  positionY: number;
}

