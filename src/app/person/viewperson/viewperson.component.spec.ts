import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpersonComponent } from './viewperson.component';

describe('ViewpersonComponent', () => {
  let component: ViewpersonComponent;
  let fixture: ComponentFixture<ViewpersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
