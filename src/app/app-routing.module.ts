import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '',   redirectTo: '/dashboard', pathMatch: 'full'},
  {
  path:'',
  loadChildren: () => import(`./Modules/user/user.module`).then(m => m.UserModule)
  },
  {
  path: '**', redirectTo: '/dashboard'//If dummy route or route did not match
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
