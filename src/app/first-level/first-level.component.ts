import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap";

@Component({
  selector: 'app-first-level',
  templateUrl: './first-level.component.html',
  styleUrls: ['./first-level.component.scss']
})
export class FirstLevelComponent implements OnInit, AfterViewInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  private showVideo = true;
  private list: number[];

  constructor() {
    this.list = [3,5,8,4,2,1,0,9,6,7];
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.childModal.show();
  }

  private stopVideo(): void {
    this.childModal.hide();
    this.showVideo = false;
  }

  sorted(sorted: boolean): void {
    console.log("LIST IST SORTIERT");
  }
}
