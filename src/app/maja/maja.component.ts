import {Component, OnInit, ViewContainerRef, ViewChild, AfterViewInit} from '@angular/core';
import {ModalDirective} from "ng2-bootstrap/ng2-bootstrap";
import {LevelService} from "../level.service";
import {LevelStatus} from "../level-status.enum";

@Component({
  selector: 'app-maja',
  templateUrl: './maja.component.html',
  styleUrls: ['maja.component.scss']
})
export class MajaComponent implements OnInit, AfterViewInit {

  @ViewChild('childModal') public childModal: ModalDirective;
  private viewContainerRef: ViewContainerRef;
  private showVideo = false;

  public constructor(viewContainerRef: ViewContainerRef, private levelService: LevelService) {
    // You need this small hack in order to catch application root view container ref
  }

  ngOnInit(): void {
    if(this.levelService.getLevels()[0].status === LevelStatus.ACTIVE){
      this.showVideo = true;
    }
  }

  ngAfterViewInit(): void {
    if(this.showVideo){
      this.childModal.show();
    }
  }

  private stopVideo(): void {
    this.childModal.hide();
    this.showVideo = false;
  }


}
