import { Routes } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { RecoverPasswordComponent } from "./pages/recover-password/recover-password.component";

export const AuthLayoutRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'recover-password', component: RecoverPasswordComponent }
];