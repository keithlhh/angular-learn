import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14InputComponent } from './demo14-input.component';

describe('Demo14InputComponent', () => {
  let component: Demo14InputComponent;
  let fixture: ComponentFixture<Demo14InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo14InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
