import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControllerComponent } from './controller/controller.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerDetailResolver } from './customer-detail/customer-detail.resolver';
import { CustomersComponent } from './customers/customers.component';
import { CustomersResolver } from './customers/customers.resolver';

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
        component: CustomersComponent,
        resolve: {
          customers: CustomersResolver
        }
      }
    ]
  },
  {
    path: '**',
    component: ControllerComponent,
    runGuardsAndResolvers: 'always'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CustomerDetailResolver, CustomersResolver]
})
export class AppRoutingModule {}
