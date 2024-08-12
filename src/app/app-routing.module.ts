import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CableDesignComponent } from './cable-design/cable-design.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '',component:LoginComponent },
  { path: 'login',component:LoginComponent },
  { path: 'nav-bar',component:NavbarComponent },
  { path: 'cable-design',component:CableDesignComponent },
  { path: 'forgot-password',component:ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
