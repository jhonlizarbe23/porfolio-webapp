import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { WebsiteLayoutRoutes } from './website-layout.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatTabsModule} from "@angular/material/tabs";
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { FormationPageComponent } from './pages/formation-page/formation-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { CertificationsPageComponent } from './pages/certifications-page/certifications-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import {MatChipsModule} from "@angular/material/chips"
import {MatButtonModule} from '@angular/material/button';
import {MatMiniFabButton} from '@angular/material/button';

import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    HomeComponent,
    ExperiencePageComponent,
    FormationPageComponent,
    SkillsPageComponent,
    CertificationsPageComponent,
    ProjectsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(WebsiteLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatChipsModule,
    CarouselModule,
    MatButtonModule,
    MatMiniFabButton
  ]
})
export class WebsiteLayoutModule {

}
