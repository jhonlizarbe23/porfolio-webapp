import { Component } from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.scss']
})
export class ExperiencePageComponent {

  assetsImagesUri: string = environment.assetImagesUri;

}
