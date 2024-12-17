import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { WebsiteLayoutComponent } from './layouts/website/website-layout.component';
import { WebsiteComponentsModule } from './layouts/website/components/website-components.module';
import {AuthLayoutComponent} from "./layouts/auth/auth-layout.component";
import {MatSlideToggle} from "@angular/material/slide-toggle";
import {MatIconButton} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    WebsiteLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    WebsiteComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    MatSlideToggle,
    MatIconButton,
    MatSidenavModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
