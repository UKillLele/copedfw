import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent8 } from './lot8.component';

describe('Ca5Component', () => {
  let component: LotComponent8;
  let fixture: ComponentFixture<LotComponent8>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent8 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
