import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';

import { MaterialModule } from 'src/app/shared/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { TilesWidget11Component } from 'src/app/shared/components/tiles-widget11/tiles-widget11.component';
import { TilesWidget12Component } from 'src/app/shared/components/tiles-widget12/tiles-widget12.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TilesWidget11Component,
    TilesWidget12Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    InlineSVGModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
       ])
  ],
})
export class DashboardModule {}
