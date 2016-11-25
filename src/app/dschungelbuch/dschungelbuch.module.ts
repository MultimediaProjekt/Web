import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DschungelbuchComponent } from './dschungelbuch.component';
import {Routes, RouterModule} from "@angular/router";
import {DSCHUNGELBUCH_ROUTING} from "./dschungelbuch.routes";
import {DragulaModule} from "ng2-dragula/ng2-dragula";

@NgModule({
  imports: [
    CommonModule,
    DSCHUNGELBUCH_ROUTING,
    DragulaModule
  ],
  declarations: [DschungelbuchComponent]
})
export class DschungelbuchModule { }
