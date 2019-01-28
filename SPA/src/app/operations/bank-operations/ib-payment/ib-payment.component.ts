import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ib-payment',
  templateUrl: './ib-payment.component.html',
  styleUrls: ['./ib-payment.component.css']
})
export class IbPaymentComponent implements OnInit {

  ndsValue = '';
  ibPayments: any[] = [];
  @ViewChild('f') ibPaymentForm: NgForm;

  onClickValue(VAT: string) {
    this.ndsValue = VAT; // Надо явный каст сделать
  }

  eraseForm() {
    (<HTMLFormElement>document.querySelector('form._form')).reset();
  }

  onSubmit(form: NgForm) {
    this.ibPayments.push(form.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
