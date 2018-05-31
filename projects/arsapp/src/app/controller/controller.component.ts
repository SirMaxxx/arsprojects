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
export class ControllerComponent implements OnInit {
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
    console.log('Init controller coponent - should only see this once');
  }
}
