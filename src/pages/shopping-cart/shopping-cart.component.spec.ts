// import { async, inject, TestBed } from "@angular/core/testing";
// import { Product } from "../../model/product.model";
// import { DeliveryOption } from "../../model/delivery-option.model";
// import { ShoppingCart } from "../../model/shopping-cart.model";
// import { StorageService, LocalStorageServie } from "../../providers/storage.service";
// import { CartItem } from "../../model/cart-item.model";
// import { DeliveryOptionsDataService } from '../../providers/delivery-options.service';
// import { GetDataProvider } from "../../providers/get-data/get-data";
// import { ShoppingCartService } from "../../providers/shopping-cart.service";
// import { Observable } from "rxjs/Observable";
// import { Observer } from "rxjs/Observer";
// import * as sinon from "sinon";
// import { ShoppingCartComponent } from "./shopping-cart.component";

// class MockShoppingCartService {
//   public unsubscriveCalled: boolean = false;
//   public emptyCalled: boolean = false;
//   private subscriptionObservable: Observable<ShoppingCart>;
//   private subscriber: Observer<ShoppingCart>;
//   private cart: ShoppingCart = new ShoppingCart();

//   public constructor() {
//     this.subscriptionObservable = new Observable<ShoppingCart>((observer: Observer<ShoppingCart>) => {
//       this.subscriber = observer;
//       observer.next(this.cart);
//       return () => this.unsubscriveCalled = true;
//     });
//   }

//   public get(): Observable<ShoppingCart> {
//     return this.subscriptionObservable;
//   }

//   public empty(): void {
//     this.emptyCalled = true;
//   }

//   public dispatchCart(cart: ShoppingCart): void {
//     this.cart = cart;
//     if (this.subscriber) {
//       this.subscriber.next(cart);
//     }
//   }
// }

// describe("ShoppingCartComponent", () => {
//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         ShoppingCartComponent
//       ],
//       providers: [
//         { provide: GetDataProvider, useValue: sinon.createStubInstance(GetDataProvider) },
//         { provide: DeliveryOptionsDataService, useValue: sinon.createStubInstance(DeliveryOptionsDataService) },
//         { provide: StorageService, useClass: LocalStorageServie },
//         { provide: ShoppingCartService, useClass: MockShoppingCartService }
//       ]
//     }).compileComponents();
//   }));

//   it("should create the component", async(() => {
//     const fixture = TestBed.createComponent(ShoppingCartComponent);
//     const component = fixture.debugElement.componentInstance;
//     expect(component).toBeTruthy();
//   }));

//   it("should render gross total of shopping cart",
//     async(inject([ShoppingCartService], (service: MockShoppingCartService) => {
//       const fixture = TestBed.createComponent(ShoppingCartComponent);
//       fixture.detectChanges();
//       const compiled = fixture.debugElement.nativeElement;
//       expect(compiled.querySelector(".js-cart-total").textContent).toContain("£0.00");

//       const newCart = new ShoppingCart();
//       newCart.grossTotal = 1.5;
//       service.dispatchCart(newCart);
//       fixture.detectChanges();
//       expect(compiled.querySelector(".js-cart-total").textContent).toContain("£1.50");
//     })));

//   it("should empty the cart when empty shopping cart button pressed",
//     async(inject([ShoppingCartService], (service: MockShoppingCartService) => {
//       const newCart = new ShoppingCart();
//       const cartItem = new CartItem();
//       cartItem.quantity = 1;
//       newCart.grossTotal = 1.5;
//       newCart.items = [cartItem];
//       service.dispatchCart(newCart);
//       const fixture = TestBed.createComponent(ShoppingCartComponent);
//       fixture.detectChanges();
//       fixture.debugElement.nativeElement.querySelector(".js-btn-empty-cart").click();
//       expect(service.emptyCalled).toBeTruthy();
//     })));
// });
