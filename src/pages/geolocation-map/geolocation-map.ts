
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { GetDataProvider } from '../../providers/get-data/get-data';
import { Offer } from '../../model/offer.model';
import { Observable } from 'rxjs/Observable';
import { SharedData } from '../../providers/sharedData.service';
//import { Store } from '../../model/store.model';

declare var google;
var map;
var infowindow: any;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

var arroffer = [];
@IonicPage()
@Component({
  selector: 'page-geolocation-map',
  templateUrl: 'geolocation-map.html',
})
// private device: Device
export class GeolocationMapPage {
  @ViewChild('map') mapElement: ElementRef;
  public arroffers: Observable<Offer[]>;
  result;
  stores;
  constructor(public navCtrl: NavController, public platform: Platform, private http: Http,
    public DataService: GetDataProvider, public shareData: SharedData) {
    platform.ready().then(() => {
                            
    });
    
  }  
  ngOnInit() {
    this.DataService.allStores().subscribe(stores => {
      this.stores = stores;
      this.shareData.setData(this.stores);
      //console.log(this.stores);
    });  
    this.DataService.allOffers().subscribe(result => {
      this.result = result;
      this.shareData.setData(this.result);
      this.loadMap();
      //console.log(this.result);                
    });
  } 
  static toRad(Value) {
    return Value * Math.PI / 180;
  }
  static calcCrow(lat1, lon1, lat2, lon2): number {
    var R = 6371; // km
    var dLat = this.toRad(lat2 - lat1);
    var dLon = this.toRad(lon2 - lon1);
    var lat1: any = this.toRad(lat1);
    var lat2: any = this.toRad(lat2);

    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d: number;
    d = R * c;
    return d;
  }
  static createMarker(place, placename) {
    var placeLoc = place;
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
      icon: image,
      animation: google.maps.Animation.BOUNCE
    });
    var circle = new google.maps.Circle({
      center: place,
      radius: 300,
      strokeColor: "#E16D65",
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: "#E16D65",
      fillOpacity: 0
    });
    circle.setMap(map);
    var direction = 1;
    var rMin = 150, rMax = 300;
    setInterval(function () {
      var radius = circle.getRadius();
      if ((radius > rMax) || (radius < rMin)) {
        direction *= -1;
      }
      circle.setRadius(radius + direction * 10);
    }, 50);
    console.log(place);
    google.maps.event.addListener(marker, 'click', function () {
      var image='https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png';
      
      infowindow.setContent('<div><strong>' + placename + '</strong>' +'</div>');
      infowindow.open(map, this);
    });
  }
  showOffers(mylocation): void {
    //console.log("In show offers:" + JSON.stringify(mylocation));
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(
      {
        location: mylocation,
        radius: 1000,
        type: ['store']
      }, (results, status) => {

        var remark: any;
        var lat5: number = 0;
        var lng5: number = 0;
        //var myarray = [];

        for (var i = 0; i < this.stores.length; i++) {
          var dist: any;
          dist = GeolocationMapPage.calcCrow(mylocation.lat, mylocation.lng, this.stores[i].lat4, this.stores[i].lng4).toFixed(1);

          if (dist < 3) {
            //myarray.push(dist, i);
            var location1 = new google.maps.LatLng(this.stores[i].lat4, this.stores[i].lng4);
            GeolocationMapPage.createMarker(location1, this.stores[i].name);
          }
        }
        // var arr_dist = myarray[0];
        // var arr_index = myarray[1];
        // for (var j = 2; j < myarray.length;) {
        //   if (arr_dist > myarray[j]) {
        //     arr_dist = myarray[j];
        //     j++;
        //     arr_index = myarray[j];
        //     j++;
        //   }
        //   else {
        //     j = j + 2;
        //   }
        // }
        //console.log("Minimum distance:" + arr_dist + ", Index:" + arr_index);
        // let location1 = new google.maps.LatLng(arrstores[arr_index].lat4, arrstores[arr_index].lng4);
        // GeolocationMapPage.createMarker(location1, arrstores[arr_index].name);
      });

  }
  //initMap() {}
  loadMap(){
    console.log("Stores from jsondata:-"+this.stores);
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        },
        zoom: 15,
        mapTypeId:'hybrid'
      });
      
      var mylocation = { lat: location.coords.latitude, lng: location.coords.longitude };
      infowindow = new google.maps.InfoWindow();
      //https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png
      var image = 'https://maps.gstatic.com/mapfiles/ms2/micons/cabs.png';
      var marker = new google.maps.Marker({
        map: map,
        position: mylocation,
        draggable: true,
        icon: image
      });

      this.showOffers(mylocation);
      //drag marker and function logic
      marker.addListener('dragend', (event) => {
        mylocation = { lat: event.latLng.lat(), lng: event.latLng.lng() }
        this.showOffers(mylocation);

      })
    }, (error) => {
      console.log(error);
    }, options);
  }
  drawcircle(mylocation) {
    var circle = new google.maps.Circle({
      center: mylocation,
      radius: 300,
      strokeColor: "#6588e1",
      strokeOpacity: 1,
      strokeWeight: 3,
      fillColor: "#6588e1",
      fillOpacity: 0
    });
    circle.setMap(map);
  }
}