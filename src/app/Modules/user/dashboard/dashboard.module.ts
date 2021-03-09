import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

//import shared module
import { SharedModule } from 'src/app/Core/Shared/shared.module'

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
