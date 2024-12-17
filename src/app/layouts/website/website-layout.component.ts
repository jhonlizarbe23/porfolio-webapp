import {AfterViewInit, Component, ElementRef, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-website-layout',
  templateUrl: './website-layout.component.html',
  styleUrls: ['./website-layout.component.scss']
})
export class WebsiteLayoutComponent {

  openDrawer: boolean = false;
  darkModeSwitch: boolean = false;

  handleEventDrawer(event: boolean) {
    this.openDrawer = event;
  }

  handleEventSwitchMode(event: boolean){
    this.darkModeSwitch = event;
  }

  onCloseMenu(){
    this.openDrawer = false;
  }

}
