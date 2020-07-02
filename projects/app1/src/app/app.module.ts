import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';


const providers = [];

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyLibModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    };
  }
}