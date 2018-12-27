import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo12CartComponent } from './demo12-cart.component';

describe('Demo12CartComponent', () => {
  let component: Demo12CartComponent;
  let fixture: ComponentFixture<Demo12CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo12CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo12CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
