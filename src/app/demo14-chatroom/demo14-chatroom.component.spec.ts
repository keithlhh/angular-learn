import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo14ChatroomComponent } from './demo14-chatroom.component';

describe('Demo14ChatroomComponent', () => {
  let component: Demo14ChatroomComponent;
  let fixture: ComponentFixture<Demo14ChatroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo14ChatroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo14ChatroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
