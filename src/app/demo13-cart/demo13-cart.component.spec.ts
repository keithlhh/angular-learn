import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13CartComponent } from './demo13-cart.component';

describe('Demo13CartComponent', () => {
  let component: Demo13CartComponent;
  let fixture: ComponentFixture<Demo13CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13CartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
