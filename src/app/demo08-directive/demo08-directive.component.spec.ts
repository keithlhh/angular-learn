import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo08DirectiveComponent } from './demo08-directive.component';

describe('Demo08DirectiveComponent', () => {
  let component: Demo08DirectiveComponent;
  let fixture: ComponentFixture<Demo08DirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo08DirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo08DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
