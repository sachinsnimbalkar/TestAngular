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
  @ViewChild(Slides) slides: Slides;
  //private i: number = 0;
  constructor(public injector: Injector, public nav: NavController, private badge: Badge, public DataService: GetDataProvider, public events: Events) {

  }
  ionViewDidLoad() {
   this.products = this.DataService.allProduct();
  this.categories = this.DataService.allCategory(); 
  this.DataService.allCategory().subscribe(res1 => {
      this.dataC = res1;
    });
       this.DataService.allProduct().subscribe(res2 => {
        this.data = res2;
   });
  //  for(this.i;; this.i++){
  //    if (this.dataC[this.i].SrNo==this.data[this.i].CatId){
  //       console.log("true");
  //       }
  //  }
}
   getItme(){
    for( let i=0;; this.i++){
       if (this.dataC[i].SrNo==this.data[i].CatId){
    return;
       }
  }
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

