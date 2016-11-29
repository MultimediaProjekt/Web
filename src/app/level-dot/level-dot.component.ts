import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-level-dot',
  templateUrl: './level-dot.component.html',
  styleUrls: ['./level-dot.component.scss']
})
export class LevelDotComponent implements OnInit {

  @Input() positionX: number;
  @Input() positionY: number;
  @Input() active: boolean;
  @Input() finished: boolean;

  constructor() { }

  ngOnInit() {
  }

}
