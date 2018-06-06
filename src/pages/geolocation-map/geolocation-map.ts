
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
//import { Device } from '@ionic-native/device';

declare var google;
var map;
var infowindow: any;
var arrstores = [{
  "lat4": 39.71004,
  ",": ",",
  "lng4": -104.829,
  "name": "Store 311"
},
{
  "lat4": 39.67946,
  ",": ",",
  "lng4": -104.876,
  "name": "Store 313"
},
{
  "lat4": 39.63946,
  ",": ",",
  "lng4": -104.789,
  "name": "Store 315"
},
{
  "lat4": 40.02017,
  ",": ",",
  "lng4": -105.253,
  "name": "Store 317"
},
{
  "lat4": 40.5752,
  ",": ",",
  "lng4": -105.099,
  "name": "Store 62"
},
{
  "lat4": 39.9878,
  ",": ",",
  "lng4": -104.803,
  "name": "Store 319"
},
{
  "lat4": 40.40811,
  ",": ",",
  "lng4": -105.074,
  "name": "Store 64"
},
{
  "lat4": 40.41347,
  ",": ",",
  "lng4": -104.692,
  "name": "Store 65"
},
{
  "lat4": 39.91376,
  ",": ",",
  "lng4": -105.069,
  "name": "Store 321"
},
{
  "lat4": 39.88473,
  ",": ",",
  "lng4": -104.946,
  "name": "Store 66"
},
{
  "lat4": 39.81282,
  ",": ",",
  "lng4": -105.128,
  "name": "Store 67"
},
{
  "lat4": 38.88975,
  ",": ",",
  "lng4": -104.714,
  "name": "Store 69"
},
{
  "lat4": 41.13659,
  ",": ",",
  "lng4": -104.805,
  "name": "Store 70"
},
{
  "lat4": 38.79837,
  ",": ",",
  "lng4": -104.758,
  "name": "Store 326"
},
{
  "lat4": 32.21995,
  ",": ",",
  "lng4": -110.809,
  "name": "Store 71"
},
{
  "lat4": 38.84752,
  ",": ",",
  "lng4": -104.85,
  "name": "Store 328"
},
{
  "lat4": 46.84853,
  ",": ",",
  "lng4": -114.019,
  "name": "Store 73"
},
{
  "lat4": 39.82666,
  ",": ",",
  "lng4": -104.916,
  "name": "Store 330"
},
{
  "lat4": 39.73981,
  ",": ",",
  "lng4": -104.966,
  "name": "Store 332"
},
{
  "lat4": 39.67744,
  ",": ",",
  "lng4": -105.025,
  "name": "Store 334"
},
{
  "lat4": 39.7664,
  ",": ",",
  "lng4": -104.905,
  "name": "Store 336"
},
{
  "lat4": 39.67219,
  ",": ",",
  "lng4": -104.96,
  "name": "Store 338"
},
{
  "lat4": 39.59575,
  ",": ",",
  "lng4": -104.877,
  "name": "Store 340"
},
{
  "lat4": 40.04926,
  ",": ",",
  "lng4": -105.047,
  "name": "Store 342"
},
{
  "lat4": 39.8492,
  ",": ",",
  "lng4": -105.025,
  "name": "Store 344"
},
{
  "lat4": 40.12178,
  ",": ",",
  "lng4": -104.941,
  "name": "Store 346"
},
{
  "lat4": 40.4218,
  ",": ",",
  "lng4": -104.743,
  "name": "Store 350"
},
{
  "lat4": 40.07069,
  ",": ",",
  "lng4": -105.2,
  "name": "Store 352"
},
{
  "lat4": 39.74047,
  ",": ",",
  "lng4": -105.068,
  "name": "Store 354"
},
{
  "lat4": 39.68229,
  ",": ",",
  "lng4": -105.1,
  "name": "Store 356"
},
{
  "lat4": 39.60875,
  ",": ",",
  "lng4": -105.108,
  "name": "Store 358"
},
{
  "lat4": 39.58013,
  ",": ",",
  "lng4": -104.959,
  "name": "Store 360"
},
{
  "lat4": 40.17785,
  ",": ",",
  "lng4": -105.116,
  "name": "Store 362"
},
{
  "lat4": 39.98767,
  ",": ",",
  "lng4": -105.13,
  "name": "Store 364"
},
{
  "lat4": 39.78536,
  ",": ",",
  "lng4": -104.808,
  "name": "Store 368"
},
{
  "lat4": 39.53863,
  ",": ",",
  "lng4": -104.771,
  "name": "Store 370"
},
{
  "lat4": 38.27217,
  ",": ",",
  "lng4": -104.621,
  "name": "Store 373"
},
{
  "lat4": 32.25228,
  ",": ",",
  "lng4": -110.944,
  "name": "Store 377"
},
{
  "lat4": 39.83292,
  ",": ",",
  "lng4": -105.053,
  "name": "Store 379"
},
{
  "lat4": 27.89369,
  ",": ",",
  "lng4": -82.5044,
  "name": "Store 982"
},
{
  "lat4": 26.32562,
  ",": ",",
  "lng4": -81.8049,
  "name": "Store 985"
},
{
  "lat4": 18.559658,
  ",": ",",
  "lng4": 73.779938,
  "name": "Store Balewadi"
},
{
  "lat4": 16.4200137,
  ",": ",",
  "lng4": 73.557363,
  "name": "Store ML"
},
{
  "lat4": 18.4974828,
  ",": ",",
  "lng4": 73.9344789,
  "name": "Hadapsar+Bus+Stop"
},
{
  "lat4": 18.4990294,
  ",": ",",
  "lng4": 73.9268399,
  "name": "Vaibhav+Theater"
},
{
  "lat4": 18.5015933,
  ",": ",",
  "lng4": 73.8959409,
  "name": "INOX"
},
{
  "lat4": 18.5083693,
  ",": ",",
  "lng4": 73.8959409,
  "name": "Croma+Krome+Mall"
},
{
  "lat4": 18.5202316,
  ",": ",",
  "lng4": 73.8903833,
  "name": "Department Of Sainik Welfare"
},
{
  "lat4": 18.5174645,
  ",": ",",
  "lng4": 73.8818432,
  "name": "National War Memorial Southern Command"
},
{
  "lat4": 18.5233446,
  ",": ",",
  "lng4": 73.8701058,
  "name": "Sassoon General Hospital"
},
{
  "lat4": 18.5240646,
  ",": ",",
  "lng4": 73.8677639,
  "name": "Dr. Babasaheb Ambedkar Sanskrutik Bhavan"
},
{
  "lat4": 18.5259123,
  ",": ",",
  "lng4": 73.8658435,
  "name": "Aurora Towers Premises Society"
},
{
  "lat4": 18.5265506,
  ",": ",",
  "lng4": 73.8642234,
  "name": "HP Petroleum P Pancharatna Service Station"
},
{
  "lat4": 18.5296114,
  ",": ",",
  "lng4": 73.8507057,
  "name": "Nexa Sale Department"
},
{
  "lat4": 18.5310547,
  ",": ",",
  "lng4": 73.8380838,
  "name": "Manorama Ogale Memorial Hospital"
},
{
  "lat4": 18.5310547,
  ",": ",",
  "lng4": 73.8380838,
  "name": "E-SQUARE"
},
{
  "lat4": 18.5461096,
  ",": ",",
  "lng4": 73.8180937,
  "name": "Vrindavan Lawns"
},
{
  "lat4": 18.5466324,
  ",": ",",
  "lng4": 73.816905,
  "name": "NEXA Aundh Baner Sai Service Pune"
},
{
  "lat4": 18.4478378,
  ",": ",",
  "lng4": 73.8566469,
  "name": "shivshrushti"
}
  ,
{
  "lat4": 18.4493135,
  ",": ",",
  "lng4": 73.851422,
  "name": "VRL+Travels"
},
{
  "lat4": 18.4508096,
  ",": ",",
  "lng4": 73.8457786,
  "name": "Raj+Market"
},
{
  "lat4": 18.4508096,
  ",": ",",
  "lng4": 73.8457786,
  "name": "D+Mart+Ambegaon"
},
{
  "lat4": 18.45198,
  ",": ",",
  "lng4": 73.8409828,
  "name": "Abhinav+Educational+Society"
},
{
  "lat4": 18.4543309,
  ",": ",",
  "lng4": 73.83314,
  "name": "Ishanya+Hyundai"
},
{
  "lat4": 18.4553181,
  ",": ",",
  "lng4": 73.8298034,
  "name": "CNG+Pump"
},
{
  "lat4": 18.4578318,
  ",": ",",
  "lng4": 73.8240849,
  "name": "Navale+Flyover"
},
{
  "lat4": 18.4626759,
  ",": ",",
  "lng4": 73.8187741,
  "name": "HDFC+Bank+ATM"
},
{
  "lat4": 18.4657391,
  ",": ",",
  "lng4": 18.4657391,
  "name": "Shree+Mata+Kumjai+Temple"
},
{
  "lat4": 18.4703286,
  ",": ",",
  "lng4": 73.8122188,
  "name": "Vision+Cricket+Academy"
},
{
  "lat4": 18.4732084,
  ",": ",",
  "lng4": 73.809322,
  "name": "Mutha River"
},
{
  "lat4": 18.4777672,
  ",": ",",
  "lng4": 73.805803,
  "name": "Warje+Pruthak+Barate+Garden"
},
{
  "lat4": 18.4818476,
  ",": ",",
  "lng4": 73.8017153,
  "name": "Lodha+Hospital"
},
{
  "lat4": 18.4858364,
  ",": ",",
  "lng4": 73.7956857,
  "name": "Domino's+Pizza"
},
{
  "lat4": 18.5052904,
  ",": ",",
  "lng4": 73.7884437,
  "name": "Shringeri+Shankar+Math"
},
{
  "lat4": 18.5057787,
  ",": ",",
  "lng4": 73.784474,
  "name": "Chandni Chowk"
},
{
  "lat4": 18.509248,
  ",": ",",
  "lng4": 73.7742173,
  "name": "Amit+Cricket+Ground"
},
{
  "lat4": 18.5149351,
  ",": ",",
  "lng4": 73.7695529,
  "name": "OverHeadTank"
},
{
  "lat4": 18.5223203,
  ",": ",",
  "lng4": 73.7712481,
  "name": "Divyash+Lawns"
},
{
  "lat4": 18.5256164,
  ",": ",",
  "lng4": 73.7756147,
  "name": "Savera+Resto"
},
{
  "lat4": 18.5315878,
  ",": ",",
  "lng4": 73.7795093,
  "name": "Shiv+Mandir+Pashan+Lake"
},
{
  "lat4": 18.5371826,
  ",": ",",
  "lng4": 73.78055,
  "name": "Yash+Enviro+Technologies"
},
{
  "lat4": 18.5414447,
  ",": ",",
  "lng4": 73.7765267,
  "name": "Rangla+Punjab"
},
{
  "lat4": 18.5460728,
  ",": ",",
  "lng4": 73.7738874,
  "name": "Audi+Pune"
},
{
  "lat4": 18.5516265,
  ",": ",",
  "lng4": 73.7722995,
  "name": "Shivam+Hyundai+Pune"
},
{
  "lat4": 18.5585022,
  ",": ",",
  "lng4": 73.768759,
  "name": "Yaara+Di+Haaveli"
}];

var options = {
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
  public arroffers: Observable<Offer[]>;
  result;
  storearray = [];
  constructor(public navCtrl: NavController, public platform: Platform, private http: Http,
    public DataService: GetDataProvider, public shareData: SharedData) {

   platform.ready().then(() => {
      this.DataService.allOffers().subscribe(result => {
        this.result = result;
        this.shareData.setData(this.result);
        console.log(this.result);
      });
      this.initMap();
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
      infowindow.setContent('<div><strong>' + placename + '</strong><br>' +
        'Place ID: ' + place.place_id + '<br>' +
        place.vicinity + '</div>');
      infowindow.open(map, this);
    });
  }
  showOffers(mylocation): void {
    console.log("In show offers:" + JSON.stringify(mylocation));
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
        var myarray = [];

        for (var i = 0; i < arrstores.length; i++) {
          var dist: any;
          dist = GeolocationMapPage.calcCrow(mylocation.lat, mylocation.lng, arrstores[i].lat4, arrstores[i].lng4).toFixed(1);

          if (dist < 3) {

            myarray.push(i, dist);
            var location1 = new google.maps.LatLng(arrstores[i].lat4, arrstores[i].lng4);
            GeolocationMapPage.createMarker(location1, arrstores[i].name);
          }
        }
        var arr_dist = myarray[1];
        var arr_index = myarray[0];

        for (var j = 2; j < myarray.length;) {
          if (arr_dist > myarray[j]) {
            arr_dist = myarray[j];
            j++;
            arr_index = myarray[j];
            j++;
          }
          else {
            j = j + 2;
          }
        }
        for (var k = 0; k < myarray.length; k++) {
          this.storearray.push(arrstores[myarray[k]].name);
          k++;
          this.storearray.push(myarray[k]);
        }
 

        //storedetails.push(arrstores[arr_index].name,arr_dist)


        console.log("Minimum distance:" + arr_dist + ", Index:" + arr_index);
        //alert("Storedetails:-" + JSON.stringify(this.storearray));
        // let location1 = new google.maps.LatLng(arrstores[arr_index].lat4, arrstores[arr_index].lng4);
        // GeolocationMapPage.createMarker(location1, arrstores[arr_index].name);

      });

  }
  
  initMap() {
    navigator.geolocation.getCurrentPosition((location) => {
      map = new google.maps.Map(this.mapElement.nativeElement, {
        center: {
          lat: location.coords.latitude,
          lng: location.coords.longitude
        },
        zoom: 15
      });
      var mylocation = { lat: location.coords.latitude, lng: location.coords.longitude };
      infowindow = new google.maps.InfoWindow();
      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
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
