import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Router } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { HeadermainComponent } from './Headermain/Headermain.component';
import { FootermainComponent } from './Footermain/Footermain.component';
import { KnowledgecenterComponent } from './Knowledgecenter/Knowledgecenter.component';
import { LicenseComponent } from './license/license.component';
import { RatesComponent } from './rates/rates.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterretailComponent } from './footerretail/footerretail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FormsComponent,
    RatesComponent,
    FootermainComponent,
    HeadermainComponent,
    ContactusComponent,
    KnowledgecenterComponent,
    LicenseComponent,
    FooterretailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
