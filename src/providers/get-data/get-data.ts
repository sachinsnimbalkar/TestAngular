import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GetDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetDataProvider {

  constructor(public http: Http) {
    console.log('Hello GetDataProvider Provider');
  }
  // getRemoteData(){
  //   this.http.get('').map(res=>res.json()).subscribe(data=>{
  //       console.log(data);
  //   });

  getlocalData(){
    // this.http.get('../assets/data/BJPProducts.json').map(res => res.json()).subscribe(data=>{
    //     console.log(data);
    // });
    return this.http.get('../assets/data/BJPCategory.json')
    .map(res => res.json());
}
}