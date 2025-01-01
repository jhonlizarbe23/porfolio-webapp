import { Component } from '@angular/core';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-certifications-page',
  templateUrl: './certifications-page.component.html',
  styleUrls: ['./certifications-page.component.scss']
})
export class CertificationsPageComponent {

  assetsImagesUri: string = environment.assetImagesUri;

  onDownloadFile(path: string, filename: string){
    let pathLink = document.createElement('a');
    pathLink.download = filename;
    pathLink.href = path;
    pathLink.target = '_blank';
    pathLink.click();
  }

}
