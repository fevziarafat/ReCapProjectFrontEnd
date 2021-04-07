import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponentComponent } from './date-component.component';

describe('DateComponentComponent', () => {
  let component: DateComponentComponent;
  let fixture: ComponentFixture<DateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
