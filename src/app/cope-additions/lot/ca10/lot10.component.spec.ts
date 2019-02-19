import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent10 } from './lot10.component';

describe('Ca5Component', () => {
  let component: LotComponent10;
  let fixture: ComponentFixture<LotComponent10>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent10 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
