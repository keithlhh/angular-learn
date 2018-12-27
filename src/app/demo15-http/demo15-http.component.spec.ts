import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo15HttpComponent } from './demo15-http.component';

describe('Demo15HttpComponent', () => {
  let component: Demo15HttpComponent;
  let fixture: ComponentFixture<Demo15HttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo15HttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo15HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
