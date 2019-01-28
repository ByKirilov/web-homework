import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ClientInfoComponent } from './main-page/client-info/client-info.component';
import { OperationsComponent } from './main-page/operations/operations.component';
import { CompanyInfoComponent } from './main-page/company-info/company-info.component';
import { BankOperationsComponent } from './main-page/operations/bank-operations/bank-operations.component';
import { RequestComponent } from './main-page/operations/request/request.component';
import { PaymentComponent } from './main-page/operations/bank-operations/payment/payment.component';
import { IbPaymentComponent } from './main-page/operations/bank-operations/ib-payment/ib-payment.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientInfoComponent,
    OperationsComponent,
    CompanyInfoComponent,
    BankOperationsComponent,
    RequestComponent,
    PaymentComponent,
    IbPaymentComponent,
    SigninComponent,
    SignupComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
