import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Sample3Component } from './sample3.component';

const routes: Routes = [{path:"",component:Sample3Component}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sample3RoutingModule { }
