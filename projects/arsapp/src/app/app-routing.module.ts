import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailResolver } from './customer-detail/customer-detail.resolver';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersResolver } from './customer-list/customer-list.resolver';

const routes: Routes = [
  {
    path: 'customers',
    component: ControllerComponent,
    runGuardsAndResolvers: 'always',
    children: [
      {
        path: ':id',
        component: CustomerDetailComponent,
        resolve: {
          customer: CustomerDetailResolver
        }
      },
      {
        path: '',
        component: CustomerListComponent,
        resolve: {
          customers: CustomersResolver
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full',
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CustomerDetailResolver, CustomersResolver]
})
export class AppRoutingModule {}
