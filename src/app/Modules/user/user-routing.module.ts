import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../../Core/Shared/header/header.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component: HeaderComponent,
    loadChildren: () => import(`./dashboard/dashboard.module`).then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
