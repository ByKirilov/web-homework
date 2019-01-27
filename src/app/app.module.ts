import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { OperationsComponent } from './operations/operations.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { BankOperationsComponent } from './operations/bank-operations/bank-operations.component';
import { RequestComponent } from './operations/request/request.component';
import { PaymentComponent } from './operations/bank-operations/payment/payment.component';
import { IbPaymentComponent } from './operations/bank-operations/ib-payment/ib-payment.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
