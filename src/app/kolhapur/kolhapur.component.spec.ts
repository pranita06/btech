import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KolhapurComponent } from './kolhapur.component';

describe('KolhapurComponent', () => {
  let component: KolhapurComponent;
  let fixture: ComponentFixture<KolhapurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KolhapurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KolhapurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
