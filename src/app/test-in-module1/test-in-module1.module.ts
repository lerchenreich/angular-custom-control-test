import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MaterialModule} from '../../material-module';

import { TestInModule1RoutingModule } from './test-in-module1-routing.module';
import { TestInModule1Component } from './test-in-module1.component';

@NgModule({
  declarations: [TestInModule1Component ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TestInModule1RoutingModule,
  ]
})
export class TestOutsideModule { }
