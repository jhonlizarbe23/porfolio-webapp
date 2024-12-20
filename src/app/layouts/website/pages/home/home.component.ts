import {Component, OnInit} from '@angular/core';
import {ProjectModel} from '../../models/projectModel.interface';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  responsiveOptions: any[] | undefined;
  assetsImagesUri: string = environment.assetImagesUri;

  // Models
  projectsList: Array<ProjectModel> = [];

  constructor(
  ) {
    this.projectsList = [
      {
        id: '1',
        uriImg: '/assets/images/mitsubishi-motors-logo.png',
        title:'Mitsubishi Motors',
        description: 'Cotización y reserva de autos',
        redirectLink: 'https://www.mitsubishi-motors.com.pe/'
      },
      {
        id: '2',
        uriImg: '/assets/images/fuso-logo.png',
        title:'FUSO',
        description: 'Cotización y reserva de autos',
        redirectLink: 'https://www.fuso.com.pe/'
      },
      {
        id: '3',
        uriImg: '/assets/images/peru-service-summit-logo.png',
        title:'Peru Service Summit',
        description: 'Plataforma de promoción para el comercio',
        redirectLink: 'https://peruservicesummit.com/'
      }
    ]
  }

  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

}
