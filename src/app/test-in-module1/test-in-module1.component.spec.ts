import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInModule1Component } from './test-in-module1.component';

describe('TestOutsideComponent', () => {
  let component: TestInModule1Component;
  let fixture: ComponentFixture<TestInModule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInModule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInModule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
