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
import {SharedData} from  '../../providers/sharedData.service';
import {ShoppingCartService} from '../../providers/shopping-cart.service';
import { ToastController } from 'ionic-angular';
import {ShoppingCart} from '../../model/shopping-cart.model'
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component'



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

  //private cartdata : Observable<ShoppingCart>;
  //private itemscount:
  @ViewChild(Slides) slides: Slides;
  //private i: number = 0;
  constructor(private toastCtrl: ToastController,public injector: Injector, public nav: NavController, private badge: Badge, public DataService: GetDataProvider, public events: Events,public shareData:SharedData,public shoppingCartService: ShoppingCartService) {

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
    console.log("In view cart");
    this.nav.push(ShoppingCartComponent);
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


 addProductToCart(product: Product,qty:number): void{
   console.log(product,qty)
      this.shoppingCartService.addItem(product, qty);
      //notification to add cart ..........
      this.presentToast(product,qty);
  }

//toast call
presentToast(product: Product,qty:number) {
  let toast = this.toastCtrl.create({
    message: qty+' '+product.ProductName+'Added  to your cart',
    duration: 3000,
    position: 'top'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}



  // public removeProductFromCart()/*(product: Product): void*/ {
  //  // this.shoppingCartService.addItem(product, -1);
  // }

  
  //  public productInCart(): boolean {
  //   return Observable.create((obs: Observer<boolean>) => {
  //     const sub = this.shoppingCartService
  //                     .get()
  //                     .subscribe((cart) => {
  //                       //obs.next(cart.items.some((i) => i.productId === product.SrNo));
  //                       this.cartData.push(cart.items);
  //                      console.log("CartData :", this.cartData);
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

