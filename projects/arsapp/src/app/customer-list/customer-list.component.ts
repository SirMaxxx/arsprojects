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
  selector: 'app-customers',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerListComponent implements OnInit {
  @Input() customers: Array<Customer>;

  constructor(
    private controllerService: ControllerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: { customers: Array<Customer> }) => {
      console.log('Got subscription data - ', data);
      this.customers = data.customers;
    });
  }
}
