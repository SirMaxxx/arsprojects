import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { Customer, ControllerService } from '../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomersComponent implements OnInit {
  @Input() customers: Array<Customer>;

  constructor(private controllerService: ControllerService) {}

  ngOnInit() {}
}
