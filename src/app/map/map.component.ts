import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() src: string = '../assets/maja/map.jpg';

  constructor() {
  }

  ngOnInit() {
  }

}
