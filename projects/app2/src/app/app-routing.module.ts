import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'one',
  loadChildren: () => import('./view1/view1.component').then(v => v.View1Component),
  },
  {
  path: 'two',
  loadChildren: () => import('./view2/view2.component').then(v => v.View2Component),
  },
  { path: '', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
