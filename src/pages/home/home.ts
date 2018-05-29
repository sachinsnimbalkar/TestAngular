import { Component, Injector, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { GetDataProvider } from '../../providers/get-data/get-data';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/product.model';
import { Badge } from '@ionic-native/badge';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import { Category } from '../../model/category.model';
import {SharedData} from  '../../providers/sharedData.service'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
  [x: string]: any;
  public products: Observable<Product[]>;
  public categories: Observable<Category[]>;
  private count: number = 0;
  result;
  @ViewChild(Slides) slides: Slides;
  //private i: number = 0;
  constructor(public injector: Injector, public nav: NavController, private badge: Badge, public DataService: GetDataProvider, public events: Events,public shareData:SharedData) {

  }

  public ProductArray = [];

  ionViewDidLoad() {
    this.DataService.allProduct().subscribe(result => {
      this.result = result;
      this.shareData.setData(this.result);
      console.log(this.result);
    });

    this.categories = this.DataService.allCategory();

  }
  public menuList = [];
  getItem(category) {

    //this.DataService.allProductbyID(categories.SrNo);
    //console.log("cat:", category);
    this.menuList.length = 0;
    //this.result.length = 0;
    
    let dataItem = this.shareData.getData();

for(var i=0; i < dataItem.length; i++){
  

      if (dataItem[i].CatId === category.SrNo) {
        this.menuList.push(dataItem[i]);
        console.log(this.menuList);
        
      }
     
    }
     this.result = this.menuList;
  
  }

  viewCart() {
    console.log("view to cart");
  }
  openFilters() {
    this.nav.push('FilterPage');
  }
  listView() {
    this.nav.push('');
  }
  mapView() {
    this.nav.push('GeolocationMapPage');
  }


  // public addProductToCart()/*(product: Product): void*/ {
  // //  this.shoppingCartService.addItem(product, 1);
  // }

  // public removeProductFromCart()/*(product: Product): void*/ {
  //  // this.shoppingCartService.addItem(product, -1);
  // }

  //  public productInCart(product: Product): boolean {
  //   return Observable.create((obs: Observer<boolean>) => {
  //     const sub = this.shoppingCartService
  //                     .get()
  //                     .subscribe((cart) => {
  //                       obs.next(cart.items.some((i) => i.productId === product.SrNo));
  //                       obs.complete();
  //                     });
  //    sub.unsubscribe();
  //   });
  // }
  // public ngOnInit(): void {
  //  this.products = this.productsService.all();
  // }
  // public ngOnDestroy():void {
  //   this.sub.unsubscribe();
  // }
  // public updateTabBadge(): void {
  //   this.events.publish('cart:updated', ++this.count);
  // }



  // openFilters(){}
}

