import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { APP_ROUTING} from "./app.routing";
import { DesignPickerComponent } from './design-picker/design-picker.component';
import {DesignService} from "./design-picker/design.service";
import {LevelService} from "./level.service";
import {HeaderComponent} from "./header/header.component";
import {PointService} from "./point.service";

@NgModule({
  declarations: [
    AppComponent,
    DesignPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
  ],
  providers: [
    {provide: DesignService, useClass: DesignService},
    {provide: LevelService, useClass: LevelService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
