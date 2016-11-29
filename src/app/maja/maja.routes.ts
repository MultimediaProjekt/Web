import {Routes, RouterModule} from "@angular/router";
import {MajaComponent} from "./maja.component";
import {ModuleWithProviders} from "@angular/core";
import {FirstLevelComponent} from "../first-level/first-level.component";
const MAJA_ROUTES: Routes = [
  {
    path: '',
    component: MajaComponent
  },
  {
    path: 'firstLevel/:index',
    component: FirstLevelComponent
  }
];

export const MAJA_ROUTING: ModuleWithProviders = RouterModule.forChild(MAJA_ROUTES);
