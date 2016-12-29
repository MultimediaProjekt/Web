import { Component, OnInit } from '@angular/core';
import {DesignService, Design, DesignStatus} from "./design.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-design-picker',
  templateUrl: './design-picker.component.html',
  styleUrls: ['design-picker.component.scss']
})
export class DesignPickerComponent implements OnInit {

  private designs: Observable<Design[]>;
  private designStatus = DesignStatus;
  private designService: DesignService;
  private router: Router;
  private show = false;

  constructor(designService: DesignService, router: Router) {
    this.designService = designService;
    this.designs = this.designService.designs;
    this.router = router;
  }

  ngOnInit() {
  }

  public pickDesign(design: Design): void {
    this.designService.setDesignToCurrent(design);
    this.designService.lockOtherDesigns(design);
    this.router.navigate(design.route);
  }

}
