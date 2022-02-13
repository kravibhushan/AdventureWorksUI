import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPersonComponent } from './nav-person.component';

describe('NavPersonComponent', () => {
  let component: NavPersonComponent;
  let fixture: ComponentFixture<NavPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
