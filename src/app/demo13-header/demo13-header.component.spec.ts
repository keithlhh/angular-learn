import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo13HeaderComponent } from './demo13-header.component';

describe('Demo13HeaderComponent', () => {
  let component: Demo13HeaderComponent;
  let fixture: ComponentFixture<Demo13HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo13HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo13HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
