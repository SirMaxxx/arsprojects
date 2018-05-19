import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Array<Customer>>;

  constructor(private customerService: CustomerService) {}

  ngOnInit() {
    this.customers$ = this.customerService.getCustomers();
  }
}
