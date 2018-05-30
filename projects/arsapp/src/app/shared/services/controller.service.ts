import { Injectable } from '@angular/core';
import { CustomerService } from '..';
import { Observable, Subject } from 'rxjs';
import { Customer } from '..';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  private customers = new Array<Customer>();
  public customers$ = new Subject<Array<Customer>>();
  public customer$ = new Subject<Customer>();

  constructor(private customerService: CustomerService) {
    this.customers$ = new Subject();
  }

  public getCustomers(): Subject<Array<Customer>> {
    console.log('getCustomers - currently have ', this.customers.length);

    if (this.customers.length === 0) {
      this.customerService.getCustomers().subscribe(customers => {
        this.customers = customers;
        this.customers$.next(this.customers);
        console.log('next in subscribe ß with ', this.customers.length);
      });
    } else {
      console.log('next with ', this.customers.length);

      this.customers$.next(this.customers);
    }
    return this.customers$;
  }

  public getCustomer(id: string): Subject<Customer> {
    this.customerService.getCustomer(id).subscribe(c => {
      this.customer$.next(c);
    });
    return this.customer$;
  }

  updateCustomer(customer: Customer) {
    this.customerService.updateCustomer(customer).subscribe(r => {
      console.log('Result of update is ', r);
    });
    const index =
      this.customers && this.customers.findIndex(c => c.id === customer.id);
    if (index) {
      this.customers[index] = customer;
    } else {
      this.customers.push(customer);
    }
    this.customers$.next(this.customers);
  }
}
