
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {  Platform } from 'ionic-angular';

declare var google;
let map: any;
let infowindow: any;
let locationsArray = [{'name':'KFC_store', 'lat':18.5776469,'lng': 73.773247},
{'name':'domino_store', 'lat':18.5777267, 'lng':73.773247},
{'name':'mac-D_store', 'lat':18.5778064, 'lng': 73.773247}];

let options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};
@IonicPage()
@Component({
  selector: 'page-geolocation-map',
  templateUrl: 'geolocation-map.html',
})

export class GeolocationMapPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, public platform: Platform) {
    platform.ready().then(() => {
      this.initMap();
    });
  }
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: { lat: 18.5671061, lng: 73.7671353 },
        zoom: 15
      });

      infowindow = new google.maps.InfoWindow();
      
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: 18.5671061, lng: 73.7671353 },
        radius: 1000,
        type: ['store']
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            this.createMarker(results[i]);
          }
        }
      });
    }, (error) => {
      console.log(error);
    }, options);
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var image = {
      url: place.icon,
      size: new google.maps.Size(71, 71),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(17, 34),
      scaledSize: new google.maps.Size(25, 25)
    };
    var marker = new google.maps.Marker({
      map: map,
      position: placeLoc,
      icon: image
    });
    console.log(place);
    google.maps.event.addListener(marker, 'click', function () {
      // infowindow.setContent(place.name);
      // infowindow.open(map, this);
      infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.vicinity + '</div>');
      infowindow.open(map, this);
    });
  }
}
