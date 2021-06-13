import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamingYummyComponent } from './steaming-yummy.component';

describe('SteamingYummyComponent', () => {
  let component: SteamingYummyComponent;
  let fixture: ComponentFixture<SteamingYummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamingYummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamingYummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
