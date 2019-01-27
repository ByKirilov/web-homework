import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IbPaymentComponent } from './ib-payment.component';

describe('IbPaymentComponent', () => {
  let component: IbPaymentComponent;
  let fixture: ComponentFixture<IbPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IbPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IbPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
