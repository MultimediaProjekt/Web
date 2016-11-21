import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MajaModule} from "./maja/maja.module";
import {DschungelbuchModule} from "./dschungelbuch/dschungelbuch.module";
import { APP_ROUTING} from "./app.routing";
import { DesignPickerComponent } from './design-picker/design-picker.component';
import {ModalModule} from "ng2-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    DesignPickerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
