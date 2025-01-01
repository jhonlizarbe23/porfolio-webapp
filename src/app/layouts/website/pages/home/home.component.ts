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
        uriImg: this.assetsImagesUri + '/mitsubishi-motors-logo.png',
        title:'Mitsubishi Motors',
        description: 'Cotización y reserva de autos',
        redirectLink: 'https://www.mitsubishi-motors.com.pe/'
      },
      {
        id: '2',
        uriImg: this.assetsImagesUri + '/fuso-logo.png',
        title:'FUSO',
        description: 'Cotización y reserva de autos',
        redirectLink: 'https://www.fuso.com.pe/'
      },
      {
        id: '3',
        uriImg: this.assetsImagesUri + '/peru-service-summit-logo.png',
        title:'Peru Service Summit',
        description: 'Plataforma de promoción para el comercio',
        redirectLink: 'https://peruservicesummit.com/'
      },
      {
        id: '4',
        uriImg: this.assetsImagesUri + '/masigas-logo.png',
        title:'Osinergmin',
        description: 'Plataforma de gestión de gas natural y minería',
        redirectLink: 'https://masigas.osinergmin.gob.pe/gnr-web/pages/public/consultaSolicitud'
      },
      {
        id: '5',
        uriImg: this.assetsImagesUri + '/new-logo-legalius.jpg',
        title:'Legalius',
        description: 'Abogados Asesoría Fiscal y Laboral ',
        redirectLink: 'https://legalius.es/'
      },
      {
        id: '6',
        uriImg: this.assetsImagesUri + '/logo-tax-legal-solutions.jpg',
        title:'Tax Legal Solutions',
        description: 'Abogados Asesoría Fiscal y Laboral ',
        redirectLink: 'https://taxlegalsolutions.es/'
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
