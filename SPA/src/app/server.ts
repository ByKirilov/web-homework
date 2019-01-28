import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Server {
    constructor(private http:Http) {}
    storePayments(payments : any[]) {
        return this.http.post('https://vovawebprofessional.firebaseio.com/', payments);
    }

    storeRequests(requests : any[]) {
        return this.http.post('https://vovawebprofessional.firebaseio.com/', requests);
    }

}