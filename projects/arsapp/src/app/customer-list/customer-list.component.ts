import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Customer, ControllerService } from '../shared';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
  // Although an Input parameter, the data can also be obtained via the router
  // So this gives us the best of both worlds!
  @Input() customers: Array<Customer>;
  @Input() mode = 'router';
  constructor(
    private controllerService: ControllerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // If we have a list of customers through @Input, we don't want to subscribe to the route event
    if (this.mode === 'router') {
      this.route.data.subscribe((data: { customers: Array<Customer> }) => {
        console.log('Got subscription data - ', data);
        this.customers = data.customers;
      });
    }
  }
}
