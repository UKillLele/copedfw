import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent4 } from './lot4.component';

describe('Ca5Component', () => {
  let component: LotComponent4;
  let fixture: ComponentFixture<LotComponent4>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent4 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
