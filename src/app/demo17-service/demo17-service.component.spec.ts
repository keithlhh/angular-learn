import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo17ServiceComponent } from './demo17-service.component';

describe('Demo17ServiceComponent', () => {
  let component: Demo17ServiceComponent;
  let fixture: ComponentFixture<Demo17ServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo17ServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo17ServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
