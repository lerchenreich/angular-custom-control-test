import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestInModule2Component } from './test-in-module2.component';

const routes: Routes = [{ path: '', component: TestInModule2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestInModule2RoutingModule { }
