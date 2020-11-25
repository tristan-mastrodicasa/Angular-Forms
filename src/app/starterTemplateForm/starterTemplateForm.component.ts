import { Component, OnInit } from '@angular/core';

import { Customer } from './customer.type';

@Component({
    selector: 'starter-template-form',
    templateUrl: './starterTemplateForm.component.html',
    styleUrls: ['./starterTemplateForm.component.css'],
})
export class StarterTemplateFormComponent implements OnInit {
    customer: Customer;
    message: string;

    constructor() { }

    ngOnInit() {
        this.customer = {
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Main',
            city: 'Calgary',
            province: 'Alberta',
            country: 'Canada',
            postalCode: 'A1A 1A1',
            phoneNumber: '111-222-3333',
            email: 'jdoe@email.com'
        };
    }

    onSubmit() {
      this.message = '<b>First Name:</b> ' + this.customer.firstName + '<br>';
      this.message += '<b>Last Name:</b> ' + this.customer.lastName + '<br>';
      this.message += '<b>Address:</b> ' + this.customer.address + '<br>';
      this.message += '<b>City:</b> ' + this.customer.city + '<br>';
      this.message += '<b>Province:</b> ' + this.customer.province + '<br>';
      this.message += '<b>Country:</b> ' + this.customer.country + '<br>';
      this.message += '<b>Postal Code:</b> ' + this.customer.postalCode + '<br>';
      this.message += '<b>Phone Number:</b> ' + this.customer.phoneNumber + '<br>';
      this.message += '<b>Email:</b> ' + this.customer.email + '<br>';
    }

}
