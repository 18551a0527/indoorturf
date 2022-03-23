import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MybookingComponent } from './mybooking/mybooking.component';

const routes: Routes = [
  {path:'home',component:DummyComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'mybooking',component:MybookingComponent},
  {path:'logout',component:DummyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
