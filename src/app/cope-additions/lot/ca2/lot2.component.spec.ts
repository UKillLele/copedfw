import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent2 } from './lot2.component';

describe('Ca5Component', () => {
  let component: LotComponent2;
  let fixture: ComponentFixture<LotComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
