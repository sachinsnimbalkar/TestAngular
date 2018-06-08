import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
 import { MapGeolocationPage } from './map-geolocation';

@NgModule({
  declarations: [
    MapGeolocationPage,
  ],
  imports: [
    IonicPageModule.forChild(MapGeolocationPage),
  ],
})
export class MapGeolocationPageModule {}
