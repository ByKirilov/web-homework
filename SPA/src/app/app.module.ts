import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { OperationsComponent } from './operations/operations.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { BankOperationsComponent } from './operations/bank-operations/bank-operations.component';
import { RequestComponent } from './operations/request/request.component';
import { PaymentComponent } from './operations/bank-operations/payment/payment.component';
import { IbPaymentComponent } from './operations/bank-operations/ib-payment/ib-payment.component';

const operationsRoutes: Routes = [
  { path: '', component: BankOperationsComponent,
    children: [
        { path: '', component: PaymentComponent },
      { path: 'ib-operations', component: IbPaymentComponent }]},
  { path: 'request', component: RequestComponent }
];


// const bankOperationsRoutes: Routes = [
//   { path: 'payment', component: PaymentComponent },
//   { path: 'ib-payment', component: IbPaymentComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    OperationsComponent,
    CompanyInfoComponent,
    BankOperationsComponent,
    RequestComponent,
    PaymentComponent,
    IbPaymentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(operationsRoutes),
    // RouterModule.forRoot(bankOperationsRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
