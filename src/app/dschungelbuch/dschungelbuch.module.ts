import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DschungelbuchComponent } from './dschungelbuch.component';
import {Routes, RouterModule} from "@angular/router";
import {DSCHUNGELBUCH_ROUTING} from "./dschungelbuch.routes";

@NgModule({
  imports: [
    CommonModule,
    DSCHUNGELBUCH_ROUTING
  ],
  declarations: [DschungelbuchComponent]
})
export class DschungelbuchModule { }
