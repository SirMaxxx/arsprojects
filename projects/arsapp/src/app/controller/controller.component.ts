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
  public customers: Array<Customer>;

  constructor(private controllerService: ControllerService) {}

  public ngOnInit() {
    console.log('Init controller component - should only see this once');
    // experiment follows
    this.controllerService.getCustomers().subscribe(c => {
      this.customers = c;
    });
  }
}
