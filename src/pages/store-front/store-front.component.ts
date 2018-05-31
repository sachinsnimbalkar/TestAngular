import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Product } from "../../model/product.model";
import { DeliveryOption } from "../../model/delivery-option.model";
import { DeliveryOptionsDataService } from "../../providers/delivery-options.service";
import { ShoppingCart } from "../../model/shopping-cart.model";
import { ShoppingCartService } from "../../providers/shopping-cart.service";
import { StorageService, LocalStorageServie } from "../../providers/storage.service";
import { CartItem } from "../../model/cart-item.model";
import { GetDataProvider } from "../../providers/get-data/get-data";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-store-front",
  styleUrls: ["./store-front.component.scss"],
  templateUrl: "./store-front.component.html"
})
export class StoreFrontComponent implements OnInit {
  public products: Observable<Product[]>;

  public constructor(private productsService: GetDataProvider,
                     private shoppingCartService: ShoppingCartService) {
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
                        obs.next(cart.items.some((i) => i.ProductId === product.SrNo));
                        obs.complete();
                      });
      sub.unsubscribe();
    });
  }

  public ngOnInit(): void {
    this.products = this.productsService.allProduct();
  }
}
