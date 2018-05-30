import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Customer, ControllerService } from '../shared';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit, OnDestroy {
  public customer: Customer; // the customer we're currently dealing with
  public customers: Array<Customer>;
  public routeName: string; // the route determined frome
  public routeParams: Array<string>;

  public componentName: string;

  private getCustomerSubscription: Subscription;

  constructor(
    private controllerService: ControllerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log('Init controller coponent');
    this.routeName = this.determineRoute();
    console.log('Route name ', this.routeName);
    this.determineRouteParams();
  }
  ngOnDestroy() {
    if (this.getCustomerSubscription) {
      this.getCustomerSubscription.unsubscribe();
    }
  }
  private determineRoute(): string {
    if (this.route.snapshot.url.length === 0) {
      return 'customers'; // No params, show customer liet
    }
    return this.route.snapshot.url[0].path;
  }
  /**
   * Route Param rules:
   * customers gives a list of customers
   * customers?id= edits that customer
   */
  private determineRouteParams() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // (+) before `params.get()` turns the string into a number
      const id = params.get('id');
      if (id) {
        this.showCustomer(id);
      } else {
        this.showCustomerList();
      }
    });
  }

  private showCustomerList() {
    console.log('Showing customer list');

    this.getCustomerSubscription = this.controllerService
      .getCustomers()
      .pipe(take(1))
      .subscribe(customers => {
        console.log('Got customers ', customers);
        this.customers = customers;
      });
    this.componentName = 'Customers';
  }

  private showCustomer(id: string) {
    console.log('Showing customer detail');

    this.controllerService
      .getCustomer(id)
      .pipe(take(1))
      .subscribe(customer => {
        console.log('Got customer ', customer);
        this.customer = customer;
      });
    this.componentName = 'CustomerDetail';
  }

  public customerList() {
    console.log('customer list initiated');

    this.showCustomerList();
  }
}
