// import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
// import { Product } from "../../model/product.model";
// import { DeliveryOption } from "../../model/delivery-option.model";
// import { ShoppingCart } from "../../model/shopping-cart.model";
// import { StorageService, LocalStorageServie } from "../../providers/storage.service";
// import { CartItem } from "../../model/cart-item.model";
// import { DeliveryOptionsDataService } from '../../providers/delivery-options.service';
// import { GetDataProvider } from "../../providers/get-data/get-data";
// import { ShoppingCartService } from "../../providers/shopping-cart.service";
// import { Observable } from "rxjs/Observable";
// import { Subscription } from "rxjs/Subscription";

// @Component({
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   selector: "app-shopping-cart",
//   templateUrl: "./shopping-cart.component.html"
// })
// export class ShoppingCartComponent implements OnInit, OnDestroy {
//   public products: Observable<Product[]>;
//   public cart: Observable<ShoppingCart>;
//   public itemCount: number;

//   private cartSubscription: Subscription;

//   public constructor(private productsService: GetDataProvider,
//                      private shoppingCartService: ShoppingCartService) {
//   }

//   public emptyCart(): void {
//     this.shoppingCartService.empty();
//   }

//   public ngOnInit(): void {
//     this.products = this.productsService.all();
//     this.cart = this.shoppingCartService.get();
//     this.cartSubscription = this.cart.subscribe((cart) => {
//       this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
//     });
//   }

//   public ngOnDestroy(): void {
//     if (this.cartSubscription) {
//       this.cartSubscription.unsubscribe();
//     }
//   }
// }
