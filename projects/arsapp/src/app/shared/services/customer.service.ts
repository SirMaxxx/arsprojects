import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '..';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getCustomer(id: string) {
    return this.http.get<Customer>(`${this.url}/customers/${id}`);
  }
  public getCustomers() {
    return this.http.get<Array<Customer>>(`${this.url}/customers`);
  }

  public updateCustomer(customer: Customer) {
    return this.http.patch(`${this.url}/customers/${customer.id}`, customer);
  }
}
