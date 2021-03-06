import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  companyFirstPhoto = 'assets/lake.jpg';
  firstPhotoPrice = 123;
  companySecondPhoto = 'assets/CatAws.jpg';
  secondPhotoPrice = 456;
  companyThirdPhoto = 'assets/road.jpg';
  thirdPhotoPrice = 789;

  interestingInfo = `Произведение искусства, будь то картина, скульптура или другой объект может стать
  главным декоративным элементом интерьера комнаты, такой предмет буквально диктует свои правила,
  и прочие элементы дизайна уже подбираются под него. Кроме того, арт-объект наверняка станет уникальной
  семейной ценностью, и следующие поколения уже совсем иначе будут обыгрывать его в интерьерах своих домов.
  Когда речь заходит непосредственно о покупке, разумеется, встает вопрос цены, и здесь нет абсолютно
  никаких стандартов, стоимость может отличаться в десятки и сотни раз.
  Что же определяет цену на произведение искусства? Галеристы и искусствоведы  объясняют,
  что нет определенных правил ценообразования,
  так как столь высокие материи в принципе невозможно оценивать по какой-либо системе, как,
  например, стоимость пары джинс. Такие аспекты, как имя автора, место, где вы совершаете покупку,
  стиль и редкость образца могут очень значительно повлиять на его цену.
  Материал взят с сайта http://polinov.ru `;

  @Input() companyName: string;

  constructor() { }

  ngOnInit() {
  }

}
