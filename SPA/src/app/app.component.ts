import { Component } from '@angular/core';
import { Server } from './server';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor (private server : Server) {}
  title = 'SPA';
  clientCompanyName = 'ИП Швецова Мария Валерьевна';
}
