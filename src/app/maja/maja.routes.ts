import {Routes, RouterModule} from "@angular/router";
import {MajaComponent} from "./maja.component";
import {ModuleWithProviders} from "@angular/core";
import {FirstLevelComponent} from "../first-level/first-level.component";
import {AdditionLevelComponent} from "../addition-level/addition-level.component";
import {SubtractionLevelComponent} from "../subtraction-level/subtraction-level.component";

const MAJA_ROUTES: Routes = [
  {
    path: '',
    component: MajaComponent
  },
  {
    path: 'firstLevel/:index',
    component: FirstLevelComponent
  },
  {
    path: 'additionLevel/:index',
    component: AdditionLevelComponent
  },
  {
    path: 'subtractionLevel/:index',
    component: SubtractionLevelComponent
  }
];

export const MAJA_ROUTING: ModuleWithProviders = RouterModule.forChild(MAJA_ROUTES);
