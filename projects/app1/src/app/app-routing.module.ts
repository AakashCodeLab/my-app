import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1view1Component } from './app1view1/app1view1.component';
import { App1view2Component } from './app1view2/app1view2.component';


const routes: Routes = [
  { path: 'app1/one', component: App1view1Component },
  { path: 'app1/two', component: App1view2Component },
  { path: 'app1', redirectTo: 'app1/one' },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
