import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicMasalaComponent } from './classic-masala.component';

describe('ClassicMasalaComponent', () => {
  let component: ClassicMasalaComponent;
  let fixture: ComponentFixture<ClassicMasalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicMasalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicMasalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
