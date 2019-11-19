import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {PlpComponent} from "./plp/plp.component";
import {LoginGuardService} from "./util/service/guards/login.guard.service";


const routes: Routes = [
  {path: 'register', component: RegisterComponent, canActivate: [LoginGuardService]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuardService]},
  {path: 'plp', component: PlpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
