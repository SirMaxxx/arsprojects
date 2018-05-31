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
  constructor(private cs: CustomerService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Customer>> {
    console.log('IN the resolver');

    return this.cs.getCustomers().pipe(
      take(1),
      map(customer => {
        if (customer) {
          return customer;
        } else {
          // id not found
          this.router.navigate(['/customers']);
          return null;
        }
      })
    );
  }
}
