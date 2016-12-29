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
import {HeaderComponent} from "../header/header.component";
import {PointService} from "../point.service";
import {AdditionLevelComponent} from "../addition-level/addition-level.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SubtractionLevelComponent} from "../subtraction-level/subtraction-level.component";
import {AssetsService} from "../assets.service";

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    MAJA_ROUTING,
    DragulaModule,
  ],
  declarations: [
    MajaComponent,
    SortLevelComponent,
    MapComponent,
    LevelDotComponent,
    FirstLevelComponent,
    AdditionLevelComponent,
    SubtractionLevelComponent,
    HeaderComponent
  ],
  providers: [
    {provide: LevelService, useClass: LevelService},
    {provide: PointService, useClass: PointService},
    {provide: AssetsService, useClass: AssetsService}
  ]
})
export class MajaModule { }
