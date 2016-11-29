import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajaComponent } from './maja.component';
import {Routes, RouterModule} from "@angular/router";
import {MAJA_ROUTING} from "./maja.routes";
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {BrowserModule} from "@angular/platform-browser";
import {DragulaModule} from "ng2-dragula/ng2-dragula";
import {SortLevelComponent} from "../sort-level/sort-level.component";
import {MapComponent} from "../map/map.component";
import {LevelDotComponent} from "../level-dot/level-dot.component";
import {FirstLevelComponent} from "../first-level/first-level.component";
import {LevelService} from "../level.service";

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    MAJA_ROUTING,
    DragulaModule,
  ],
  declarations: [
    MajaComponent,
    SortLevelComponent,
    MapComponent,
    LevelDotComponent,
    FirstLevelComponent
  ],
  providers: [
    {provide: LevelService, useClass: LevelService}
  ]
})
export class MajaModule { }
