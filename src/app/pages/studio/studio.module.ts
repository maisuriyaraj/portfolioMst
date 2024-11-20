import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    StudioComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
