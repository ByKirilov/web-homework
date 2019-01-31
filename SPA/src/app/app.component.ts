import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'SPA';
  clientCompanyName = 'ИП Швецова Мария Валерьевна';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAuRNl10DFiWaH5GK8XMkRYp_Y2IHYRR6Q',
      authDomain: 'web-homework.firebaseapp.com'
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
