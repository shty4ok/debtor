import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {MainComponent} from './main/main.component';
import {Guard} from './guard';


const routes: Routes = [
  {
    path: '', component: AuthComponent
  },
  {
    path: 'main', component: MainComponent, canActivate: [Guard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
