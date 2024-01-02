import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ConsignmentComponent } from './components/consignment/consignment.component';
import { SidenavComponent } from './components/sidenav/sidenav.component'
@NgModule({
  declarations: [
    AppComponent,
    ConsignmentComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
