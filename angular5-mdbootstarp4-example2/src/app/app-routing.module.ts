import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { HeadermainComponent } from './Headermain/Headermain.component';
import { FootermainComponent } from './Footermain/Footermain.component';
import { FooterretailComponent } from './footerretail/footerretail.component';
import { KnowledgecenterComponent } from './Knowledgecenter/Knowledgecenter.component';
import { LicenseComponent } from './license/license.component';
import { RatesComponent } from './rates/rates.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'rates',
    component: RatesComponent
  },
  {
    path: 'headermain',
    component: HeadermainComponent
  },
  {
    path: 'footermain',
    component: FootermainComponent
  },
  {
    path: 'footerretail',
    component: FooterretailComponent
  },
  {
    path: 'knowledgecenter',
    component: KnowledgecenterComponent
  },
  {
    path: 'license',
    component: LicenseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
