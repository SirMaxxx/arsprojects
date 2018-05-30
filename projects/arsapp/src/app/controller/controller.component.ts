import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  ParamMap,
  Router
} from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ControllerService, Customer } from '../shared';

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

  private subscriptiontoGetCustomers: Subscription;
  private subscriptionToGetCustomer: Subscription;

  constructor(
    private controllerService: ControllerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit() {
    console.log('Init controller coponent');

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        console.log('Got a navigationEnd event');
        this.determineRoute();
      }
    });

    this.determineRoute();
  }
  public ngOnDestroy() {
    if (this.subscriptiontoGetCustomers) {
      this.subscriptiontoGetCustomers.unsubscribe();
    }
  }
  private determineRoute() {
    if (this.route.snapshot.url.length === 0) {
      this.routeName = 'customers'; // No params, show customer liet
    } else {
      this.routeName = this.route.snapshot.url[0].path;
    }
    this.determineRouteParams();
  }
  /**
   * Route Param rules:
   * customers gives a list of customers
   * customers?id= edits that customer
   */
  private determineRouteParams() {
    this.route.paramMap.pipe(take(1)).subscribe((params: ParamMap) => {
      // (+) before `params.get()` turns the string into a number
      const id = params.get('id');
      console.log('Got id and it was ', id);

      if (id) {
        this.showCustomer(id);
      } else {
        this.showCustomerList();
      }
    });
  }

  private showCustomerList() {
    console.log('Showing customer list');
    if (this.subscriptiontoGetCustomers) {
      this.subscriptiontoGetCustomers.unsubscribe();
    }
    this.subscriptiontoGetCustomers = this.controllerService
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
    if (this.subscriptionToGetCustomer) {
      this.subscriptionToGetCustomer.unsubscribe();
    }
    this.subscriptionToGetCustomer = this.controllerService
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
