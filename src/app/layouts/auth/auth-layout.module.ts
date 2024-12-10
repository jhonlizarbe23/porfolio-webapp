import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthLayoutRoutes } from './auth-layout.routing';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);

// Angular material
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

/**
 * Components
 */
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecoverPasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // Angular material
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers:[
    {
      provide: LOCALE_ID, useValue: 'es-ES'
    }
  ]
})
export class AuthLayoutModule { }