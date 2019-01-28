import { Component, OnInit, Input} from '@angular/core';
import { Server } from '../../server';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  NDSvalue = '';

  @Input() clientName: string;


  clearForm() {
    (<HTMLFormElement>document.querySelector('form.column')).reset();
  }

  onClickValue(Text: string) {
    this.NDSvalue = Text;
  }

  // submitForm() {

  // }

  constructor(private server: Server) { }

  ngOnInit() {
  }

}
