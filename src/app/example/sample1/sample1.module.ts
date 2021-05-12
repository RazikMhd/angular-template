import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Sample1RoutingModule } from './sample1-routing.module';
import { Sample1Component } from './sample1.component';


@NgModule({
  declarations: [
    Sample1Component
  ],
  imports: [
    CommonModule,
    Sample1RoutingModule
  ]
})
export class Sample1Module { }
