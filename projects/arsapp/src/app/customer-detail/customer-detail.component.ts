import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from '../shared';

import { CustomerService } from '../shared';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  customerDetailForm: FormGroup;
  @Input() customer: Customer;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id).subscribe(customer => {
      this.customer = customer;
      this.createForm();
    });
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
    console.log('button clicked');
  }
}
