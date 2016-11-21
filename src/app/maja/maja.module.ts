import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MajaComponent } from './maja.component';
import {Routes, RouterModule} from "@angular/router";
import {MAJA_ROUTING} from "./maja.routes";
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    MAJA_ROUTING,
  ],
  declarations: [
    MajaComponent]
})
export class MajaModule { }
