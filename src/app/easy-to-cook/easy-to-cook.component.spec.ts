import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyToCookComponent } from './easy-to-cook.component';

describe('EasyToCookComponent', () => {
  let component: EasyToCookComponent;
  let fixture: ComponentFixture<EasyToCookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyToCookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyToCookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
