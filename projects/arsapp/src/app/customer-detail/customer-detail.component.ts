import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Customer, ControllerService } from '../shared';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerDetailForm: FormGroup;
  @Input() customer: Customer = null;
  constructor(
    private fb: FormBuilder,
    private controllerService: ControllerService
  ) {}

  ngOnInit() {
    this.getCustomerToEdit();
  }

  private getCustomerToEdit() {
    this.createForm();
  }
  private createForm() {
    this.customerDetailForm = this.fb.group({
      id: [this.customer.id, Validators.required],
      name: [this.customer.name, Validators.required],
      address: [this.customer.address, Validators.required],
      email: [this.customer.email, Validators.required],
      phone: [this.customer.phone, Validators.required],
      active: [this.customer.active, Validators.required]
    });
  }

  clicked() {
    console.log('I have been clicked');
    const f = this.customerDetailForm.value;
    const customer: Customer = {
      id: f.id,
      active: f.active,
      name: f.name,
      address: f.address,
      email: f.email,
      phone: f.phone
    };
    this.controllerService.updateCustomer(customer);
  }
}
