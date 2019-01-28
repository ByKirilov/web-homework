import { Component, OnInit, Input, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  NDSvalue = '';
  requests: any[] = [];

  @Input() clientName: string;
  @ViewChild('f') requestForm: NgForm;

  onSubmit(form: NgForm) {
    this.requests.push(form.value);
  }


  clearForm() {
    (<HTMLFormElement>document.querySelector('form.column')).reset();
  }

  onClickValue(Text: string) {
    this.NDSvalue = Text;
  }

  // submitForm() {

  // }

  constructor() { }

  ngOnInit() {
  }

}
