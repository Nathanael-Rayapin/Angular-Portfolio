import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyCvComponent } from './view-my-cv.component';

describe('ViewMyCvComponent', () => {
  let component: ViewMyCvComponent;
  let fixture: ComponentFixture<ViewMyCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMyCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
