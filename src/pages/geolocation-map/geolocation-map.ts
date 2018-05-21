
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import {  Platform } from 'ionic-angular';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

declare var google;
let map: any;
let infowindow: any;
let arrstores = [{
  "lat": 39.71004,
  ",": ",",
  "lng": -104.829,
  "name": "Store 311"
},
{
  "lat": 39.67946,
  ",": ",",
  "lng": -104.876,
  "name": "Store 313"
},
{
  "lat": 39.63946,
  ",": ",",
  "lng": -104.789,
  "name": "Store 315"
},
{
  "lat": 40.02017,
  ",": ",",
  "lng": -105.253,
  "name": "Store 317"
},
{
  "lat": 40.5752,
  ",": ",",
  "lng": -105.099,
  "name": "Store 62"
},
{
  "lat": 39.9878,
  ",": ",",
  "lng": -104.803,
  "name": "Store 319"
},
{
  "lat": 40.40811,
  ",": ",",
  "lng": -105.074,
  "name": "Store 64"
},
{
  "lat": 40.41347,
  ",": ",",
  "lng": -104.692,
  "name": "Store 65"
},
{
  "lat": 39.91376,
  ",": ",",
  "lng": -105.069,
  "name": "Store 321"
},
{
  "lat": 39.88473,
  ",": ",",
  "lng": -104.946,
  "name": "Store 66"
},
{
  "lat": 39.81282,
  ",": ",",
  "lng": -105.128,
  "name": "Store 67"
},
{
  "lat": 38.88975,
  ",": ",",
  "lng": -104.714,
  "name": "Store 69"
},
{
  "lat": 41.13659,
  ",": ",",
  "lng": -104.805,
  "name": "Store 70"
},
{
  "lat": 38.79837,
  ",": ",",
  "lng": -104.758,
  "name": "Store 326"
},
{
  "lat": 32.21995,
  ",": ",",
  "lng": -110.809,
  "name": "Store 71"
},
{
  "lat": 38.84752,
  ",": ",",
  "lng": -104.85,
  "name": "Store 328"
},
{
  "lat": 46.84853,
  ",": ",",
  "lng": -114.019,
  "name": "Store 73"
},
{
  "lat": 39.82666,
  ",": ",",
  "lng": -104.916,
  "name": "Store 330"
},
{
  "lat": 39.73981,
  ",": ",",
  "lng": -104.966,
  "name": "Store 332"
},
{
  "lat": 39.67744,
  ",": ",",
  "lng": -105.025,
  "name": "Store 334"
},
{
  "lat": 39.7664,
  ",": ",",
  "lng": -104.905,
  "name": "Store 336"
},
{
  "lat": 39.67219,
  ",": ",",
  "lng": -104.96,
  "name": "Store 338"
},
{
  "lat": 39.59575,
  ",": ",",
  "lng": -104.877,
  "name": "Store 340"
},
{
  "lat": 40.04926,
  ",": ",",
  "lng": -105.047,
  "name": "Store 342"
},
{
  "lat": 39.8492,
  ",": ",",
  "lng": -105.025,
  "name": "Store 344"
},
{
  "lat": 40.12178,
  ",": ",",
  "lng": -104.941,
  "name": "Store 346"
},
{
  "lat": 40.4218,
  ",": ",",
  "lng": -104.743,
  "name": "Store 350"
},
{
  "lat": 40.07069,
  ",": ",",
  "lng": -105.2,
  "name": "Store 352"
},
{
  "lat": 39.74047,
  ",": ",",
  "lng": -105.068,
  "name": "Store 354"
},
{
  "lat": 39.68229,
  ",": ",",
  "lng": -105.1,
  "name": "Store 356"
},
{
  "lat": 39.60875,
  ",": ",",
  "lng": -105.108,
  "name": "Store 358"
},
{
  "lat": 39.58013,
  ",": ",",
  "lng": -104.959,
  "name": "Store 360"
},
{
  "lat": 40.17785,
  ",": ",",
  "lng": -105.116,
  "name": "Store 362"
},
{
  "lat": 39.98767,
  ",": ",",
  "lng": -105.13,
  "name": "Store 364"
},
{
  "lat": 39.78536,
  ",": ",",
  "lng": -104.808,
  "name": "Store 368"
},
{
  "lat": 39.53863,
  ",": ",",
  "lng": -104.771,
  "name": "Store 370"
},
{
  "lat": 38.27217,
  ",": ",",
  "lng": -104.621,
  "name": "Store 373"
},
{
  "lat": 32.25228,
  ",": ",",
  "lng": -110.944,
  "name": "Store 377"
},
{
  "lat": 39.83292,
  ",": ",",
  "lng": -105.053,
  "name": "Store 379"
},
{
  "lat": 27.89369,
  ",": ",",
  "lng": -82.5044,
  "name": "Store 982"
},
{
  "lat": 26.32562,
  ",": ",",
  "lng": -81.8049,
  "name": "Store 985"
},
{ 
  "lat": 18.559658,
  ",": ",",
  "lng": 73.779938,
  "name": "Store Balewadi"
},
{ 
  "lat": 16.4200137,
  ",": ",",
  "lng": 73.557363,
  "name": "Store ML"
},
{ 
  "lat": 18.4974828,
  ",": ",",
  "lng": 73.9344789,
  "name": "Hadapsar+Bus+Stop"
},
{ 
  "lat": 18.4990294,
  ",": ",",
  "lng": 73.9268399,
  "name": "Vaibhav+Theater"
},
{ 
  "lat": 18.5015933,
  ",": ",",
  "lng": 73.8959409,
  "name": "INOX"
},
{ 
  "lat": 18.5083693,
  ",": ",",
  "lng": 73.8959409,
  "name": "Croma+Krome+Mall"
},
{ 
  "lat": 18.5202316,
  ",": ",",
  "lng": 73.8903833,
  "name": "Department Of Sainik Welfare"
},
{ 
  "lat": 18.5174645,
  ",": ",",
  "lng": 73.8818432,
  "name": "National War Memorial Southern Command"
},
{ 
  "lat": 18.5233446,
  ",": ",",
  "lng": 73.8701058,
  "name": "Sassoon General Hospital"
},,
{ 
  "lat": 18.5240646,
  ",": ",",
  "lng": 73.8677639,
  "name": "Dr. Babasaheb Ambedkar Sanskrutik Bhavan"
},,
{ 
  "lat": 18.5259123,
  ",": ",",
  "lng": 73.8658435,
  "name": "Aurora Towers Premises Society"
},,
{ 
  "lat": 18.5265506,
  ",": ",",
  "lng": 73.8642234,
  "name": "HP Petroleum P Pancharatna Service Station"
},
{ 
  "lat": 18.5296114,
  ",": ",",
  "lng": 73.8507057,
  "name": "Nexa Sale Department"
},
{ 
  "lat": 18.5310547,
  ",": ",",
  "lng": 73.8380838,
  "name": "Manorama Ogale Memorial Hospital"
},
{ 
  "lat": 18.5310547,
  ",": ",",
  "lng": 73.8380838,
  "name": "E-SQUARE"
},
{ 
  "lat": 18.5461096,
  ",": ",",
  "lng": 73.8180937,
  "name": "Vrindavan Lawns"
},
{ 
  "lat": 18.5466324,
  ",": ",",
  "lng": 73.816905,
  "name": "NEXA Aundh Baner Sai Service Pune"
}  ,
{ 
    "lat": 18.4478378,
    ",": ",",
    "lng": 73.8566469,
    "name": "shivshrushti"
  }
   ,
{ 
    "lat": 18.4493135,
    ",": ",",
    "lng": 73.851422,
    "name": "VRL+Travels"
  }  ,
{ 
    "lat": 18.4508096,
    ",": ",",
    "lng":73.8457786 ,
    "name": "Raj+Market"
  } ,
{ 
    "lat":18.4508096 ,
    ",": ",",
    "lng": 73.8457786,
    "name": "D+Mart+Ambegaon"
  }
                 ,
{ 
    "lat": 18.45198,
    ",": ",",
    "lng":73.8409828 ,
    "name": "Abhinav+Educational+Society"
  }
                 ,
{ 
    "lat":18.4543309 ,
    ",": ",",
    "lng":73.83314 ,
    "name": "Ishanya+Hyundai"
  }
                 ,
{ 
    "lat": 18.4553181,
    ",": ",",
    "lng":73.8298034 ,
    "name": "CNG+Pump"
  }
                 ,
{ 
    "lat":18.4578318 ,
    ",": ",",
    "lng": 73.8240849,
    "name": "Navale+Flyover"
  }
                 ,
{ 
    "lat":18.4626759 ,
    ",": ",",
    "lng": 73.8187741,
    "name": "HDFC+Bank+ATM"
  }
                 ,
{ 
    "lat": 18.4657391,
    ",": ",",
    "lng":18.4657391 ,
    "name": "Shree+Mata+Kumjai+Temple"
  }
                 ,
{ 
    "lat": 18.4703286,
    ",": ",",
    "lng": 73.8122188,
    "name": "Vision+Cricket+Academy"
  }
                 ,
{ 
    "lat":18.4732084 ,
    ",": ",",
    "lng":73.809322 ,
    "name": "Mutha River"
  }
                 ,
{ 
    "lat":18.4777672 ,
    ",": ",",
    "lng": 73.805803,
    "name": "Late+Pruthak+Barate+Garden"
  }
                 ,
{ 
    "lat": 18.4818476,
    ",": ",",
    "lng": 73.8017153,
    "name": "Lodha+Hospital"
  }
                 ,
{ 
    "lat":18.4858364 ,
    ",": ",",
    "lng": 73.7956857,
    "name": "Domino's+Pizza"
  }
                 ,
{ 
    "lat":18.5052904 ,
    ",": ",",
    "lng": 73.7884437,
    "name": "Shringeri+Shankar+Math"
  }
                 ,
{ 
    "lat":18.5057787 ,
    ",": ",",
    "lng": 73.784474,
    "name": "Chandni Chowk"
  }
                 ,
{ 
    "lat":18.509248 ,
    ",": ",",
    "lng":73.7742173 ,
    "name": "Amit+Cricket+Ground"
  }
                 ,
{ 
    "lat":18.5149351 ,
    ",": ",",
    "lng": 73.7695529,
    "name": "OverHeadTank"
  }
                 ,
{ 
    "lat": 18.5223203,
    ",": ",",
    "lng":73.7712481 ,
    "name": "Divyash+Lawns"
  }
                 ,
{ 
    "lat": 18.5256164,
    ",": ",",
    "lng": 73.7756147,
    "name": "Savera+Resto"
  }
                 ,
{ 
    "lat": 18.5315878,
    ",": ",",
    "lng": 73.7795093,
    "name": "Shiv+Mandir+Pashan+Lake"
  }   ,
{ 
    "lat":18.5371826 ,
    ",": ",",
    "lng": 73.78055,
    "name": "Yash+Enviro+Technologies"
  }
                 ,
{ 
    "lat":18.5414447 ,
    ",": ",",
    "lng": 73.7765267,
    "name": "Rangla+Punjab"
  }
                 ,
{ 
    "lat": 18.5460728,
    ",": ",",
    "lng": 73.7738874,
    "name": "Audi+Pune"
  }
                 ,
{ 
    "lat": 18.5516265,
    ",": ",",
    "lng": 73.7722995,
    "name": "Shivam+Hyundai+Pune"
  }
                 ,
{ 
    "lat": 18.5585022,
    ",": ",",
    "lng": 73.768759,
    "name": "Yaara+Di+Haaveli"
  } ];

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

  constructor(public nav: NavController, public platform: Platform,private http: HttpClient) {
    platform.ready().then(() => {
      this.initMap();
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

      infowindow = new google.maps.InfoWindow();
      
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: { lat: location.coords.latitude, lng: location.coords.longitude },
        radius: 1000,
        type: ['store']
      }, (results, status) => {
        // if (status === google.maps.places.PlacesServiceStatus.OK)
        //{
        //   for (var i = 0; i < results.length; i++) {
        //     this.createMarker(results[i]);
        //   }
        //}
        var remark:any;
        // var arr=[{
        //   "userId": 1068680,
        //   "id": 1055650,
        //   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //   "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
        //   }];
        for(var i=0;i<arrstores.length;i++)
        {var dist:any;
          dist=this.calcCrow(location.coords.latitude,location.coords.longitude, arrstores[i].lat,arrstores[i].lng).toFixed(1);
       
                if( dist< 3)
                {
                    remark=arrstores[i].lat+","+arrstores[i].lng+","+arrstores[i].name;
                      // var body = JSON.stringify(remark);
                      // var headerOptions = new Headers({'Content-Type':'application/json'});
                      // var requestOptions:any = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
                      // this.http.post('http://localhost:58651/api/Employees',body,requestOptions);
                    alert ("Send Offer from Store Name"+ arrstores[i].name)
                    //console.log(location);
                    //this.createMarker(location);

                }
        }
    });
    }, (error) => {
      console.log(error);
    }, options);
  }
    toRad(Value) 
    {
        return Value * Math.PI / 180;
    }
   calcCrow(lat1, lon1, lat2, lon2): number
    {
      var R = 6371; // km
      var dLat = this.toRad(lat2-lat1);
      var dLon = this.toRad(lon2-lon1);
      var lat1: any = this.toRad(lat1);
      var lat2: any = this.toRad(lat2);

      var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d :number;
      d= R * c;
      return d;
    }

    // Converts numeric degrees to radians
    

        
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
