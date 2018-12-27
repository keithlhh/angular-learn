import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo09LianxiComponent } from './demo09-lianxi.component';

describe('Demo09LianxiComponent', () => {
  let component: Demo09LianxiComponent;
  let fixture: ComponentFixture<Demo09LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo09LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo09LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
