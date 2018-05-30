import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  {
    path: 'customers/*',
    component: ControllerComponent,
    runGuardsAndResolvers: 'always'
  },

  {
    path: '**',
    component: ControllerComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
