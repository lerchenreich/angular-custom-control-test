import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestInModule1Component } from './test-in-module1.component';

const routes: Routes = [{ path: '', component: TestInModule1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestInModule1RoutingModule { }
