import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliciousHealthyComponent } from './delicious-healthy.component';

describe('DeliciousHealthyComponent', () => {
  let component: DeliciousHealthyComponent;
  let fixture: ComponentFixture<DeliciousHealthyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliciousHealthyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliciousHealthyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
