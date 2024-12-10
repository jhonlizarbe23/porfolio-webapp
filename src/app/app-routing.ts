import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { WebsiteLayoutComponent } from './layouts/website/website-layout.component';
import {AuthLayoutComponent} from "./layouts/auth/auth-layout.component";

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: WebsiteLayoutComponent, children:[
      {
        path: '',
        loadChildren: () => import('../app/layouts/website/website-layout.module').then(x => x.WebsiteLayoutModule)
      }
    ]
  },
  {
    path: 'auth', component: AuthLayoutComponent, children:[
      {
        path: '',
        loadChildren: () => import('../app/layouts/auth/auth-layout.module').then(x => x.AuthLayoutModule)
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: []
})
export class AppRoutingModule { }
