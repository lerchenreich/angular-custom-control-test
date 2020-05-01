import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestInAppModuleComponent } from './test-in-appmodule/test-in-appmodule.component'

const routes: Routes = [
 // { path: 'test-in-appmodule' , component: TestInAppModuleComponent},
  { path: 'test-in-module1', loadChildren: () => import('./test-in-module1/test-in-module1.module').then(m => m.TestOutsideModule) },
  { path: 'test-in-module2', loadChildren: () => import('./test-in-module2/test-in-module2.module').then(m => m.TestInModule2Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
