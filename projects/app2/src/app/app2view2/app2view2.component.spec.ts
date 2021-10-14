import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App2view2Component } from './app2view2.component';

describe('App2view2Component', () => {
  let component: App2view2Component;
  let fixture: ComponentFixture<App2view2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App2view2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App2view2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
