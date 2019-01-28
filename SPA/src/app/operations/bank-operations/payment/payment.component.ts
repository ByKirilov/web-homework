import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  /* Тут должна быть инициализация Firebase */
  // Initialize Firebase
  // TODO: Replace with your project's customized code snippet
  // var config = {
  //   apiKey: "<API_KEY>",
  //   authDomain: "<PROJECT_ID>.firebaseapp.com",
  //   databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  //   projectId: "<PROJECT_ID>",
  //   storageBucket: "<BUCKET>.appspot.com",
  //   messagingSenderId: "<SENDER_ID>",
  // };
  // firebase.initializeApp(config);

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
