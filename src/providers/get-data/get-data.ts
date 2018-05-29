import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/product.model';
import { CachcingServiceBase } from '../caching.service';
import { Category } from '../../model/category.model';

/*
  Generated class for the GetDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let count = 0;
@Injectable()
export class GetDataProvider extends CachcingServiceBase {
  public products: Observable<Product[]>;
  public categories: Observable<Category[]>;
  public constructor(private http: Http) {
    super();
  }

  // public allProduct(): Observable<Product[]> 
  // { 
   
  //    return this.cache<Product[]>(() => this.products,
  //     (val: Observable<Product[]>) => this.products = val,
  //     () => this.http
  //       .get("./assets/data/BJPProducts.json")
  //       .map((response) => response.json()
  //         .map((item) => {
  //           let model = new Product();
  //           model.updateFrom(item);
  //         return model;
  //         })));
  //       //  return this.cache<Product[]> 
  // }

public menuArry = [];

public allProduct()
  {  
     return this.http.get("./assets/data/BJPProducts.json").map(response =>
      response.json()
      .map((item) => 
      {
         return item;
         //return this.menuArry;
      }));

      
      
  }




//  public allProductbyID(catID)
//   { 
//       this.http
//         .get("./assets/data/BJPProducts.json")
//         .map((response) => response.json()
//           .map((item) => {
//             console.log(item);
//             if(item.CatId === catID)
//             {
              
//               conso

//             }
            
//           }));
        //  return this.cache<Product[]> 
  //}






  public allCategory(): Observable<Category[]> {
    return this.cache<Category[]>(() => this.categories,
      (val: Observable<Category[]>) => this.categories = val,
      () => this.http
        .get("./assets/data/BJPCategory.json")
        .map((response) => response.json()
          .map((item) => {
            let model = new Category();
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