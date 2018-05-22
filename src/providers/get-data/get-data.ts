import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/product.model';
import { CachcingServiceBase } from '../caching.service';

/*
  Generated class for the GetDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let count = 0;
@Injectable()
export class GetDataProvider extends CachcingServiceBase {
  public products: Observable<Product[]>;

  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<Product[]>
   {
    return this.cache<Product[]>(() => this.products,
                                 (val: Observable<Product[]>) => this.products = val,
                                 () => this.http
                                           .get("./assets/data/BJPProducts.json")
                                           .map((response) => response.json()
                                                                      .map((item) => {
                                                                        let model = new Product();
                                                                        model.updateFrom(item);
                                                                        return model;
                                                                      })));
                                                                    }


  // getRemoteData(){
  //   this.http.get('').map(res=>res.json()).subscribe(data=>{
  //       console.log(data);
  //   });

//   getlocalData(){
//     // this.http.get('../assets/data/BJPProducts.json').map(res => res.json()).subscribe(data=>{
//     //     console.log(data);
//     // });
//     return this.http.get('../assets/data/BJPProducts.json')
//     .map(res => res.json());
// }
// getCategory(){
//   // this.http.get('../assets/data/BJPProducts.json').map(res => res.json()).subscribe(data=>{
//   //     console.log(data);
//   // });
//   return this.http.get('../assets/data/BJPCategory.json')
//   .map(res => res.json());
// }
}