import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  clientNumber = '+79095647899';
  clientSite = 'www.company.ru';
  clientMailAdress = 'bla@blabla.ru';
  clientCompanyInfo = 'www.company.ru/info';
  clientRequisites = 'www.company.ru/requisites';
  clientLogoPath = 'assets/logo.jpg';

  @Input() clientCompanyName: string;

  constructor() { }

  ngOnInit() {
  }

}
