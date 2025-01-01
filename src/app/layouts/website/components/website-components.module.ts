import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// Angular material components
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from "@angular/router";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    DrawerComponent
  ],
  imports: [
    CommonModule,
    // Angular material
    MatTabsModule,
    RouterModule,
    MatChipsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    DrawerComponent
  ]
})
export class WebsiteComponentsModule { }
