import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MaterialModule} from '../../material-module';
import { TestInModule2RoutingModule } from './test-in-module2-routing.module';
import { TestInModule2Component } from './test-in-module2.component';


@NgModule({
  declarations: [TestInModule2Component],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    TestInModule2RoutingModule
  ]
})
export class TestInModule2Module { }
