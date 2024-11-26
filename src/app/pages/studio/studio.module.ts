import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudioRoutingModule } from './studio-routing.module';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { StudioComponent } from './studio.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonComponentsModule } from '../../modules/common-components.module';


@NgModule({
  declarations: [
    StudioComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    StudioRoutingModule
  ],
})
export class StudioModule { }
