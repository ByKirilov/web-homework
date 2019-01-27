import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ib-payment',
  templateUrl: './ib-payment.component.html',
  styleUrls: ['./ib-payment.component.css']
})
export class IbPaymentComponent implements OnInit {

  ndsValue = '';

  onClickValue(VAT: string) {
    this.ndsValue = VAT; // Надо явный каст сделать
  }

  eraseForm() {
    (<HTMLFormElement>document.querySelector('form._form')).reset();
  }

  constructor() { }

  ngOnInit() {
  }

}
