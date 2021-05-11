import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KaradComponent } from './karad.component';

describe('KaradComponent', () => {
  let component: KaradComponent;
  let fixture: ComponentFixture<KaradComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KaradComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KaradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
