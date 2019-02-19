import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent3 } from './lot3.component';

describe('Ca5Component', () => {
  let component: LotComponent3;
  let fixture: ComponentFixture<LotComponent3>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent3 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
