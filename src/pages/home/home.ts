import { Component } from '@angular/core';
import {  IonicPage, NavController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { GetDataProvider } from '../../providers/get-data/get-data';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/product.model';
import{Badge} from '@ionic-native/badge';
import { Observer } from 'rxjs/Observer';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  [x: string]: any;
public products:Observable<Product[]>;
private count: number = 0;

  constructor(public nav: NavController,private badge:Badge,public DataService:GetDataProvider,public events: Events) {

  }
  ionViewDidLoad(){

    this.products = this.DataService.all();   // this.DataService.getlocalData();

  }
  viewCart(){
    console.log ("view to cart");
  }
  openFilters(){
    this.nav.push('FilterPage');
  }
  listView(){
    this.nav.push('');
  }
  mapView(){
    this.nav.push('GeolocationMapPage');
  }


  public addProductToCart(product: Product): void {
    this.shoppingCartService.addItem(product, 1);
  }

  public removeProductFromCart(product: Product): void {
    this.shoppingCartService.addItem(product, -1);
  }

  public productInCart(product: Product): boolean {
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
                      .get()
                      .subscribe((cart) => {
                        obs.next(cart.items.some((i) => i.productId === product.Price));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }
  // public ngOnInit(): void {
  //  this.products = this.productsService.all();
  // }

  // public updateTabBadge(): void {
  //   this.events.publish('cart:updated', ++this.count);
  // }

  
  
 // openFilters(){}
  }


