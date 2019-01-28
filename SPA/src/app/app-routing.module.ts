import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {MainPageComponent} from './main-page/main-page.component';
import {BankOperationsComponent} from './main-page/operations/bank-operations/bank-operations.component';
import {PaymentComponent} from './main-page/operations/bank-operations/payment/payment.component';
import {IbPaymentComponent} from './main-page/operations/bank-operations/ib-payment/ib-payment.component';
import {RequestComponent} from './main-page/operations/request/request.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';

const appRoutes: Routes = [
    { path: '', component: MainPageComponent, children: [
            { path: '', component: BankOperationsComponent,
                children: [
                    { path: '', component: PaymentComponent },
                    { path: 'ib-operations', component: IbPaymentComponent }]},
            { path: 'request', component: RequestComponent }]},
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
