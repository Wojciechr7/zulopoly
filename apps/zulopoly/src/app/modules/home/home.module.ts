import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { BaseModule } from '@zulopoly/base';
import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [HomePageComponent, LoginComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    BaseModule,
  ]
})
export class HomeModule { }