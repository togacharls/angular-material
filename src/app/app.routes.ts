import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { DashboardGuard } from './dashboard/dashboard.guard';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [DashboardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouters {}
