import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { MaterialModule} from '../material-module';
import { TestInAppModuleComponent } from './test-in-appmodule/test-in-appmodule.component'
import { CodeControlComponent} from './controls/lookup/lookup-control.components'

@NgModule({
  declarations: [
    AppComponent,
    CodeControlComponent,
    //TestInAppModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
