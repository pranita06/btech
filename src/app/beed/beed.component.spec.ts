import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeedComponent } from './beed.component';

describe('BeedComponent', () => {
  let component: BeedComponent;
  let fixture: ComponentFixture<BeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
