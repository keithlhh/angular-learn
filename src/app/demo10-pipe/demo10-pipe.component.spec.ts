import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo10PipeComponent } from './demo10-pipe.component';

describe('Demo10PipeComponent', () => {
  let component: Demo10PipeComponent;
  let fixture: ComponentFixture<Demo10PipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo10PipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo10PipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
