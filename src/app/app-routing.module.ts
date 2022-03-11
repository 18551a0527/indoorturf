import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'home',component:DummyComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mybooking',component:DummyComponent},
  {path:'home',component:DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
