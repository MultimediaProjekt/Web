import {Component, OnInit, Input} from '@angular/core';

export interface LevelConfig{
  positionX: number;
  positionY: number;
}

@Component({
  selector: 'app-level-dot',
  templateUrl: './level-dot.component.html',
  styleUrls: ['./level-dot.component.scss']
})
export class LevelDotComponent implements OnInit {

  @Input() config: LevelConfig;
  @Input() active: boolean;
  @Input() finished: boolean;

  constructor() { }

  ngOnInit() {
  }

}
