import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { principalRoutingModule } from './principal-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    principalRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class PrincipalModule { }
