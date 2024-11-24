import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { StudioComponent } from './studio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    StudioComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    StudioRoutingModule
  ]
})
export class StudioModule { }
