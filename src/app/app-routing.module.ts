import { CreateLeaveComponent } from './components/leave/createleave/createleave.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'leave/create', pathMatch: 'full' },
  {path: 'leave/create', component: CreateLeaveComponent, pathMatch: 'full' }
  //{path: 'leave/all', component: ViewAllLeaveComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
