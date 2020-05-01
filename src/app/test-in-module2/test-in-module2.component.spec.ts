import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInModule2Component } from './test-in-module2.component';

describe('TestInModule2Component', () => {
  let component: TestInModule2Component;
  let fixture: ComponentFixture<TestInModule2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInModule2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInModule2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
