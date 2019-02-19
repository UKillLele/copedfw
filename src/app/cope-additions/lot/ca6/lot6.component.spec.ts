import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent6 } from './lot6.component';

describe('Ca5Component', () => {
  let component: LotComponent6;
  let fixture: ComponentFixture<LotComponent6>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent6 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent6);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
