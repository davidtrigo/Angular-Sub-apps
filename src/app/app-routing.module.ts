import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module').then( module => module.App1SharedModule )
  },
  {
    path: 'app2',
    loadChildren: () => import('../../projects/app2/src/app/app.module').then( module => module.App2SharedModule)
  },
  
];

@NgModule( {
  imports: [
    RouterModule.forRoot(
      routes
     
    )
  ],
  exports: [RouterModule]
} )
export class AppRoutingModule {
}
