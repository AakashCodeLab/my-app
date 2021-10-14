import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App2view2Component } from './app2view2/app2view2.component';
import { App2view1Component } from './app2view1/app2view1.component';


const routes: Routes = [
  { path: 'app2/one', component: App2view1Component },
  { path: 'app2/two', component: App2view2Component },
  { path: 'app2', redirectTo: 'app2/one' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
