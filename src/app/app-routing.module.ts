import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';


const routes: Routes = [
  {
    path: 'sample1',
    loadChildren: () => import('./example/sample1/sample1.module').then(mod => mod.Sample1Module),
    canActivate: [NgxPermissionsGuard],
    data: {
      permissions: {
        only: 'SAMPLE1',
        redirectTo:'sample3'
      }
    }
  }, 
  {
    path: 'sample2',
    loadChildren: () => import('./example/sample2/sample2.module')
      .then(mod => mod.Sample2Module)
  },  {
    path: 'sample3',
    loadChildren: () => import('./example/sample3/sample3.module')
      .then(mod => mod.Sample3Module)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
