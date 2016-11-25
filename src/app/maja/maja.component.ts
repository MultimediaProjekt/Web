import {Component, OnInit, ViewContainerRef, ViewChild, AfterViewInit} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";

@Component({
  selector: 'app-maja',
  templateUrl: './maja.component.html',
  styleUrls: ['maja.component.scss']
})
export class MajaComponent implements OnInit, AfterViewInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  private viewContainerRef: ViewContainerRef;
  private list: number[];
  private showVideo = true;

  public constructor(viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
    this.list = [3,5,8,1,2,0,9,7,6,4];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.childModal.show();
  }

  private stopVideo(): void {
    this.childModal.hide();
    this.showVideo = false;
  }


}
