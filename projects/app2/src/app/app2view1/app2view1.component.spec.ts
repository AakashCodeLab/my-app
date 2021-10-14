import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2view1Component } from './app2view1.component';

describe('App2view1Component', () => {
  let component: App2view1Component;
  let fixture: ComponentFixture<App2view1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2view1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2view1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
