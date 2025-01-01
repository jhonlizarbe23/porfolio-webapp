import { Component } from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-formation-page',
  templateUrl: './formation-page.component.html',
  styleUrls: ['./formation-page.component.scss']
})
export class FormationPageComponent {

  assetsImagesUri: string = environment.assetImagesUri;

}
