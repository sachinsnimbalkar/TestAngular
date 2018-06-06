import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import { Product } from "../../model/product.model";
import { DeliveryOption } from "../../model/delivery-option.model";
import { ShoppingCart } from "../../model/shopping-cart.model";
import { StorageService, LocalStorageServie } from "../../providers/storage.service";
import { CartItem } from "../../model/cart-item.model";
import { DeliveryOptionsDataService } from '../../providers/delivery-options.service';
import { GetDataProvider } from "../../providers/get-data/get-data";
import { ShoppingCartService } from "../../providers/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";
import { Observer } from 'rxjs/Observer';
import { IonicPage, Slides, NavController, AlertController, LoadingController, Loading, Events } from 'ionic-angular';
import { HomePage } from '../home/home'

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html"
})
export class ShoppingCartComponent implements OnInit, OnDestroy {
  public products: Observable<Product[]>;
  public cart: Observable<ShoppingCart>;
  public itemCount: number;
  public cartArray = [];

  private cartSubscription: Subscription;

  public constructor(private productsService: GetDataProvider,
                     private shoppingCartService: ShoppingCartService) {
  }

  public emptyCart(): void {
    this.shoppingCartService.empty();
  }

  public ngOnInit(): void {
    this.products = this.productsService.allProduct();
    this.cart = this.shoppingCartService.get();
    console.log(this.cart);
    this.cartSubscription = this.cart.subscribe((cart) => {

      this.itemCount = cart.items.map((x) => x.Quantity).reduce((p, n) => p + n, 0);
      cart.items.forEach(element => {

        let CartArrayIndex = this.cartArray.findIndex(item => item.ProductId == element.ProductId);
        if (CartArrayIndex === -1) {
          this.cartArray.push(element);
        }
        else {
          for (let i = 0; i < this.cartArray.length; i++) {
            if (this.cartArray[i].ProductId === element.ProductId) {


              let itemIndex = cart.items.findIndex(ci => ci.ProductId == this.cartArray[i].ProductId);

              this.cartArray[CartArrayIndex].Quantity = cart.items[itemIndex].Quantity;

            }
          }
        }
      cart.items.forEach(element => {

        this.cartArray.push(element);
        
      });

      console.log("Product details: ",this.cartArray);
    });
  }

//add item to cart
  addProductToCart(product: CartItem, qty: number): void {

    console.log("Add Shooping cart item :", product, qty)
    this.shoppingCartService.addItemqty(product, qty);
  }


//Code to remove item from cart
  public removeProductFromCart(product: CartItem): void {

    console.log("Removig prdct :", product);

    this.shoppingCartService.removeItem(product);
  }

//check if item present in the cart or not
  public productInCart(product: Product): boolean {
    console.log("checking for product in cart...........");
    return Observable.create((obs: Observer<boolean>) => {
      const sub = this.shoppingCartService
        .get()
        .subscribe((cart) => {
          obs.next(cart.items.some((i) => i.ProductId === product.SrNo));
          obs.complete();
        });
      sub.unsubscribe();
    });
  }
  public ngOnDestroy(): void {
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }
}
