import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../shared';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerDetailForm: FormGroup;
  @Input() customer: Customer;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.customerDetailForm = this.fb.group({
      id: [this.customer.id, Validators.requiredTrue],
      name: [this.customer.name, Validators.required],
      address: [this.customer.address, Validators.required],
      email: [this.customer.email, Validators.required],
      phone: [this.customer.phone, Validators.required],
      active: [this.customer.active]
    });
  }

  clicked() {
    console.log('button clicked');
  }
}
