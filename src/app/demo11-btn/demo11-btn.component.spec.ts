import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo11BtnComponent } from './demo11-btn.component';

describe('Demo11BtnComponent', () => {
  let component: Demo11BtnComponent;
  let fixture: ComponentFixture<Demo11BtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo11BtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo11BtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
