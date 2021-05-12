import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample3RoutingModule } from './sample3-routing.module';
import { Sample3Component } from './sample3.component';


@NgModule({
  declarations: [
    Sample3Component
  ],
  imports: [
    CommonModule,
    Sample3RoutingModule
  ]
})
export class Sample3Module { }
