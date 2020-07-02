import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { MyLibModule } from 'projects/my-lib/src/public-api';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const providers = [];


@NgModule( {
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
  
  ],
  imports: [AppRoutingModule,  MyLibModule],
  providers: [],
  bootstrap: [AppComponent]
} )
export class AppModule {
}


@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers
    };
  }
}
