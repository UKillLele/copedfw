import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent5 } from './lot5.component';

describe('Ca5Component', () => {
  let component: LotComponent5;
  let fixture: ComponentFixture<LotComponent5>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent5 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
