import { Component } from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss']
})
export class SkillsPageComponent {

  assetsImagesUri: string = environment.assetImagesUri;

}
