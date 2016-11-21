import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DschungelbuchComponent} from "./dschungelbuch.component";
const DSCHUNGELBUCH_ROUTES: Routes = [
  {
    path: '',
    component: DschungelbuchComponent
  }
];

export const DSCHUNGELBUCH_ROUTING: ModuleWithProviders = RouterModule.forChild(DSCHUNGELBUCH_ROUTES);
