import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { ShoppingCart } from "../model/shopping-cart.model";
import { Product } from "../model/product.model";
import { DeliveryOption } from "../model/delivery-option.model";
import { LocalStorageServie } from "./storage.service";
import { DeliveryOptionsDataService } from "./delivery-options.service";
import { CartItem } from "../model/cart-item.model";
import { GetDataProvider } from "./get-data/get-data";


const CART_KEY = "cart";

@Injectable()
export class ShoppingCartService {
  private storage: Storage;
  private subscriptionObservable: Observable<ShoppingCart>;
  private subscribers: Array<Observer<ShoppingCart>> = new Array<Observer<ShoppingCart>>();
  private products: Product[];
  private deliveryOptions: DeliveryOption[];

  public constructor(private storageService : LocalStorageServie,
                     private productService: GetDataProvider,
                     private deliveryOptionsService: DeliveryOptionsDataService) {
    this.storage = this.storageService.get();
    this.productService.allProduct().subscribe((products) => this.products = products);
    this.deliveryOptionsService.all().subscribe((options) => this.deliveryOptions = options);

    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscribers.push(observer);
      observer.next(this.retrieve());
      return () => {
        this.subscribers = this.subscribers.filter((obs) => obs !== observer);
      };
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public removeItem(product: Product,quantity: number) :void
  {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.ProductId === product.SrNo);

    console.log(item);
    if(quantity === -1)
    {
      let index = cart.items.indexOf(item);
      if(index !== -1)
      {
          cart.items.splice(index,1);
      }

    }

    cart.itemsTotal = cart.itemsTotal - item.Price;
    
    this.storage.removeItem(CART_KEY);
    this.dispatch(cart);

  }


  public addItem(product: Product, quantity: number): void {
    const cart = this.retrieve();
    let item = cart.items.find((p) => p.ProductId === product.SrNo);
    if (item === undefined) {
      item = new CartItem();
      item.ProductId = product.SrNo;
      item.ProductName = product.ProductName; 
      item.Price = product.Price; 
      cart.items.push(item);
    }


    item.Quantity += quantity;
    cart.items = cart.items.filter((cartItem) => cartItem.Quantity > 0);
    if (cart.items.length === 0) {
      cart.deliveryOptionId = undefined;
    }

    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  public empty(): void {
    const newCart = new ShoppingCart();
    this.save(newCart);
    this.dispatch(newCart);
  }

  public setDeliveryOption(deliveryOption: DeliveryOption): void {
    const cart = this.retrieve();
    cart.deliveryOptionId = deliveryOption.id;
    this.calculateCart(cart);
    this.save(cart);
    this.dispatch(cart);
  }

  private calculateCart(cart: ShoppingCart): void {
    cart.itemsTotal = cart.items
                          .map((item) => item.Quantity * this.products.find((p) => p.SrNo === item.ProductId).Price)
                          .reduce((previous, current) => previous + current, 0);
    cart.deliveryTotal = cart.deliveryOptionId ?
                          this.deliveryOptions.find((x) => x.id === cart.deliveryOptionId).price :
                          0;
    cart.grossTotal = cart.itemsTotal + cart.deliveryTotal;
  }

  private retrieve(): ShoppingCart {
    const cart = new ShoppingCart();
    const storedCart = this.storage.getItem(CART_KEY);
    if (storedCart) {
      cart.updateFrom(JSON.parse(storedCart));
    }

    return cart;
  }

  private save(cart: ShoppingCart): void {
    this.storage.setItem(CART_KEY, JSON.stringify(cart));
  }

  private dispatch(cart: ShoppingCart): void {
    this.subscribers
        .forEach((sub) => {
          try {
            sub.next(cart);
          } catch (e) {
            // we want all subscribers to get the update even if one errors.
          }
        });
  }
}
