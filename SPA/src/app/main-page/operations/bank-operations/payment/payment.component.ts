import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  payments: any[] = [];

  @ViewChild('f') paymentForm: NgForm;

  onSubmit(form: NgForm) {
    this.payments.push(form.value);
    console.log(this.payments);
  }

  constructor() { }

  ngOnInit() {
  }

}
