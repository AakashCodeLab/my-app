import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { App1view2Component } from './app1view2.component';

describe('App1view2Component', () => {
  let component: App1view2Component;
  let fixture: ComponentFixture<App1view2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App1view2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App1view2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
