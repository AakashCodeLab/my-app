import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1view1Component } from './app1view1.component';

describe('App1view1Component', () => {
  let component: App1view1Component;
  let fixture: ComponentFixture<App1view1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1view1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1view1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
