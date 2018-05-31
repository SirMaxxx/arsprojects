import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Customer } from '../shared';
import { CustomerService } from '../shared';

@Injectable()
export class CustomersResolver implements Resolve<Array<Customer>> {
  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Customer>> {
    console.log('In the Customers resolver');

    return this.customerService.getCustomers().pipe(
      take(1),
      map(customer => {
        if (customer) {
          return customer;
        } else {
          console.log('No Customers Found - navigating to root');

          this.router.navigate(['/']);
          return null;
        }
      })
    );
  }
}
