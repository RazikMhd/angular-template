import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample2RoutingModule } from './sample2-routing.module';
import { Sample2Component } from './sample2.component';


@NgModule({
  declarations: [
    Sample2Component
  ],
  imports: [
    CommonModule,
    Sample2RoutingModule
  ]
})
export class Sample2Module { }
