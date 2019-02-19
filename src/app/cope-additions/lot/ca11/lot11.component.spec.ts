import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent11 } from './lot11.component';

describe('Ca5Component', () => {
  let component: LotComponent11;
  let fixture: ComponentFixture<LotComponent11>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent11 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
