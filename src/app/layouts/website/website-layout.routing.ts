import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import {ExperiencePageComponent} from "./pages/experience-page/experience-page.component";
import {FormationPageComponent} from "./pages/formation-page/formation-page.component";
import {SkillsPageComponent} from "./pages/skills-page/skills-page.component";
import {CertificationsPageComponent} from "./pages/certifications-page/certifications-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";

export const WebsiteLayoutRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'experiencia-laboral', component: ExperiencePageComponent },
    { path: 'formacion', component: FormationPageComponent },
    { path: 'skills', component: SkillsPageComponent },
    { path: 'certificaciones', component: CertificationsPageComponent }
  ];
