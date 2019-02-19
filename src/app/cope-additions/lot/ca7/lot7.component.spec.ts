import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotComponent7 } from './lot7.component';

describe('Ca5Component', () => {
  let component: LotComponent7;
  let fixture: ComponentFixture<LotComponent7>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotComponent7 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotComponent7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
