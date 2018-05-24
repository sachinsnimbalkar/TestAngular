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

  constructor(public injector: Injector, public nav: NavController, private badge: Badge, public DataService: GetDataProvider, public events: Events) {
  }
  ionViewDidLoad() {
    this.products = this.DataService.allProduct();
    this.categories = this.DataService.allCategory(); 
    //this.DataService.allCategory().subscribe(val => console.log(val));
  this.DataService.allCategory().subscribe(res1 => {
      //console.log(res1);
      this.dataC = res1;
    });
       this.DataService.allProduct().subscribe(res2 => {
     //  console.log(res2);
        this.data = res2;
   });
  //  for(let i;; i++){
  //     if (this.dataC[i].SrNo==this.data[i].CatId){
  //       console.log("true");
  //       }
  // }
}
  
  // private initializeCategories(): void {

  //   // Select it by defaut
  //   this.selectedCategory = this.categories[0];

  //   // Check which arrows should be shown
  //   this.showLeftButton = false;
  //  // this.showRightButton = this.categories.length > 3;
  // }

  // public filterData(categoryId: number): void {
  //   // Handle what to do when a category is selected
  // }

  // // Method executed when the slides are changed
  // public slideChanged(): void {
  //   let currentIndex = this.slides.getActiveIndex();
  //   this.showLeftButton = currentIndex !== 0;
  //   this.showRightButton = currentIndex !== Math.ceil(this.slides.length() / 3);
  // }

  // // Method that shows the next slide
  // public slideNext(): void {
  //   this.slides.slideNext();
  // }

  // // Method that shows the previous slide
  // public slidePrev(): void {
  //   this.slides.slidePrev();
  // }
   getItme(){
    for(let i=0;; i++){
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

