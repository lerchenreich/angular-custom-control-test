import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInAppModuleComponent } from './test-in-appmodule.component';

describe('TestInsideComponent', () => {
  let component: TestInAppModuleComponent;
  let fixture: ComponentFixture<TestInAppModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInAppModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInAppModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
