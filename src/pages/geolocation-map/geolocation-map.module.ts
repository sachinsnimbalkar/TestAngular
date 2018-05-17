import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeolocationMapPage } from './geolocation-map';

@NgModule({
  declarations: [
    GeolocationMapPage,
  ],
  imports: [
    IonicPageModule.forChild(GeolocationMapPage),
  ],
})
export class GeolocationMapPageModule {}
