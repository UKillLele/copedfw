import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent1 } from './lot1.component';

describe('Ca5Component', () => {
  let component: LotComponent1;
  let fixture: ComponentFixture<LotComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
