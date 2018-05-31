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
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements OnInit {
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
