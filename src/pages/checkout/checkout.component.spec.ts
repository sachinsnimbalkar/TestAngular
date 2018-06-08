import { async, inject, TestBed } from "@angular/core/testing";
import { HttpModule } from "@angular/http";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import * as sinon from "sinon";
import { CheckoutComponent } from "./checkout.component";
import { Product } from "../../model/product.model";
import { DeliveryOption } from "../../model/delivery-option.model";
import { DeliveryOptionsDataService } from "../../providers/delivery-options.service";
import { ShoppingCart } from "../../model/shopping-cart.model";
import { ShoppingCartService } from "../../providers/shopping-cart.service";
import { StorageService, LocalStorageServie } from "../../providers/storage.service";
import { CartItem } from "../../model/cart-item.model";
import { GetDataProvider } from "../../providers/get-data/get-data";

const PRODUCT_1 = new Product();
PRODUCT_1.ProductName = "Product 1";
PRODUCT_1.SrNo = "1";
PRODUCT_1.Price = 1;
PRODUCT_1.ProdDesc= "desc1";

const PRODUCT_2 = new Product();
PRODUCT_2.ProductName = "Product 2";
PRODUCT_2.SrNo = "2";
PRODUCT_2.Price = 2;
PRODUCT_2.ProdDesc = "desc2";

const DELIVERY_OPT_1 = new DeliveryOption();
DELIVERY_OPT_1.name = "Delivery Option 1";
DELIVERY_OPT_1.id = "1";
DELIVERY_OPT_1.price = 1;

const DELIVERY_OPT_2 = new DeliveryOption();
DELIVERY_OPT_2.name = "Delivery Option 2";
DELIVERY_OPT_2.id = "2";
DELIVERY_OPT_2.price = 2;

class MockProductDataService extends GetDataProvider {
  // public all(): Observable<Product[]> {
  //   //return Observable.from([[PRODUCT_1, PRODUCT_2]]);
  // }
}

// tslint:disable-next-line:max-classes-per-file
class MockDeliveryOptionsDataService extends DeliveryOptionsDataService {
  // public all(): Observable<DeliveryOption[]> {
  //  // return Observable.from([[DELIVERY_OPT_1, DELIVERY_OPT_2]]);
  // }
}

// tslint:disable-next-line:max-classes-per-file
class MockShoppingCartService {
  public unsubscriveCalled: boolean = false;
  public emptyCalled: boolean = false;

  private subscriptionObservable: Observable<ShoppingCart>;
  private subscriber: Observer<ShoppingCart>;
  private cart: ShoppingCart = new ShoppingCart();

  public constructor() {
    this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
      this.subscriber = observer;
      observer.next(this.cart);
      return () => this.unsubscriveCalled = true;
    });
  }

  public get(): Observable<ShoppingCart> {
    return this.subscriptionObservable;
  }

  public empty(): void {
    this.emptyCalled = true;
  }

  public dispatchCart(cart: ShoppingCart): void {
    this.cart = cart;
    if (this.subscriber) {
      this.subscriber.next(cart);
    }
  }
}

describe("CheckoutComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckoutComponent
      ],
      imports: [
        HttpModule
      ],
      providers: [
        { provide: GetDataProvider, useClass: MockProductDataService },
        { provide: DeliveryOptionsDataService, useClass: MockDeliveryOptionsDataService },
        { provide: StorageService, useClass: LocalStorageServie },
        { provide: ShoppingCartService, useClass: MockShoppingCartService }
      ]
    }).compileComponents();
  }));

  it("should create the component", async(() => {
    const fixture = TestBed.createComponent(CheckoutComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it("should display all the products in the cart",
    async(inject([ShoppingCartService], (service: MockShoppingCartService) => {
      const newCart = new ShoppingCart();
      const cartItem = new CartItem();
      cartItem.productId = PRODUCT_1.SrNo;
      cartItem.quantity = 2;
      newCart.grossTotal = 3;
      newCart.items = [cartItem];
      service.dispatchCart(newCart);
      const fixture = TestBed.createComponent(CheckoutComponent);
      fixture.detectChanges();

      const component = fixture.debugElement.componentInstance;
      const compiled = fixture.debugElement.nativeElement;
      const productElements = compiled.querySelectorAll(".checkout_row");

      expect(productElements.length).toEqual(1);
      expect(productElements[0].querySelector(".js-product-name").textContent).toEqual(PRODUCT_1.ProductName);
      expect(productElements[0].querySelector(".js-product-desc").textContent).toContain(PRODUCT_1.ProdDesc);
      expect(productElements[0].querySelector(".js-product-costs").textContent)
        .toContain(`${cartItem.quantity} x £${PRODUCT_1.Price}`);
      expect(productElements[0].querySelector(".js-product-total").textContent)
        .toContain(PRODUCT_1.Price * cartItem.quantity);
    })));

  it("should display all the delivery options",
    async(inject([ShoppingCartService], (service: MockShoppingCartService) => {
      const fixture = TestBed.createComponent(CheckoutComponent);
      fixture.detectChanges();

      const component = fixture.debugElement.componentInstance;
      const compiled = fixture.debugElement.nativeElement;
      const deliveryOptions = compiled.querySelectorAll(".delivery-option");

      expect(deliveryOptions.length).toEqual(2);
      expect(deliveryOptions[0].querySelector(".js-option-name").textContent).toEqual(DELIVERY_OPT_1.name);
      expect(deliveryOptions[0].querySelector(".js-option-price").textContent).toContain(DELIVERY_OPT_1.price);
      expect(deliveryOptions[1].querySelector(".js-option-name").textContent).toEqual(DELIVERY_OPT_2.name);
      expect(deliveryOptions[1].querySelector(".js-option-price").textContent).toContain(DELIVERY_OPT_2.price);
    })));
});
