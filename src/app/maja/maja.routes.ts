import {Routes, RouterModule} from "@angular/router";
import {MajaComponent} from "./maja.component";
import {ModuleWithProviders} from "@angular/core";
const MAJA_ROUTES: Routes = [
  {
    path: '',
    component: MajaComponent
  }
];

export const MAJA_ROUTING: ModuleWithProviders = RouterModule.forChild(MAJA_ROUTES);
