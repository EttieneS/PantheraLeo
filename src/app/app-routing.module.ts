import { CreateLeaveComponent } from './components/leave/createleave/createleave.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllComponent } from './components/leave/viewall/viewall.component';

const routes: Routes = [
  {path: '', redirectTo: 'leave/create', pathMatch: 'full' },
  {path: 'leave/create', component: CreateLeaveComponent, pathMatch: 'full' },
  {path: 'leave/viewall', component: ViewAllComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
