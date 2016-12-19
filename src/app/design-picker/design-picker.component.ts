import { Component, OnInit } from '@angular/core';
import {DesignService, Design} from "./design.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-design-picker',
  templateUrl: './design-picker.component.html',
  styleUrls: ['design-picker.component.scss']
})
export class DesignPickerComponent implements OnInit {

  private designs: Observable<Design[]>
  private designService: DesignService;
  private router: Router;

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
