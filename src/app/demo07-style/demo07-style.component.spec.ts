import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo07StyleComponent } from './demo07-style.component';

describe('Demo07StyleComponent', () => {
  let component: Demo07StyleComponent;
  let fixture: ComponentFixture<Demo07StyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo07StyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo07StyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
