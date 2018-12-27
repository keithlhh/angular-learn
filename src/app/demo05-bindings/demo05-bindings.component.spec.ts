import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo05BindingsComponent } from './demo05-bindings.component';

describe('Demo05BindingsComponent', () => {
  let component: Demo05BindingsComponent;
  let fixture: ComponentFixture<Demo05BindingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo05BindingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo05BindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
