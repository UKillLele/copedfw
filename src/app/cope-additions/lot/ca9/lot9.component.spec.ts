import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent9 } from './lot9.component';

describe('Ca5Component', () => {
  let component: LotComponent9;
  let fixture: ComponentFixture<LotComponent9>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent9 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
