import {Routes, RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {ModuleWithProviders} from "@angular/core";
import {DesignPickerComponent} from "./design-picker/design-picker.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: DesignPickerComponent
  },
  {
    path: 'dschungel',
    loadChildren: 'app/dschungelbuch/dschungelbuch.module#DschungelbuchModule'
  },
  {
    path: 'maja',
    loadChildren: 'app/maja/maja.module#MajaModule'
  }
];

export const appRoutingProviders: any[] = [];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
