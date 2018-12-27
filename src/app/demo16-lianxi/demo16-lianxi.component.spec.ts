import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo16LianxiComponent } from './demo16-lianxi.component';

describe('Demo16LianxiComponent', () => {
  let component: Demo16LianxiComponent;
  let fixture: ComponentFixture<Demo16LianxiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Demo16LianxiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Demo16LianxiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
