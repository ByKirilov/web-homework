import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {
  clientNumber = '+79095647899';
  clientSite = 'www.company.ru';
  clientMailAdress = 'manager@tochka.ru';
  clientCompanyInfo = 'www.company.ru/info';
  clientRequisites = 'www.company.ru/requisites';
  clientLogoPath = 'assets/scuns.jpg';

  @Input() clientCompanyName: string;

  constructor() { }

  ngOnInit() {
  }

}
