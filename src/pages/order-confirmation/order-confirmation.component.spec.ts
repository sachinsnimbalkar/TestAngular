import { async, inject, TestBed } from "@angular/core/testing";

import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import * as sinon from "sinon";
import { ShoppingCartService } from "../../providers/shopping-cart.service";
import { StorageService, LocalStorageServie } from "../../providers/storage.service";
import { DeliveryOptionsDataService } from "../../providers/delivery-options.service";
import { GetDataProvider } from "../../providers/get-data/get-data";
import { OrderConfirmationComponent } from "./order-confirmation.component";
class MockShoppingCartService {
  public emptyCalled: boolean = false;

  public empty(): void {
    this.emptyCalled = true;
  }
}

describe("OrderConfirmationComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderConfirmationComponent
      ],
      providers: [
       { provide: GetDataProvider, useValue: sinon.createStubInstance(GetDataProvider) },
       { provide: DeliveryOptionsDataService, useValue: sinon.createStubInstance(DeliveryOptionsDataService) },
       { provide: StorageService, useClass: LocalStorageServie },
       { provide: ShoppingCartService, useClass: MockShoppingCartService }
     ]
    }).compileComponents();
  }));

  it("should create the component", async(() => {
    const fixture = TestBed.createComponent(OrderConfirmationComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  }));

  it("should call empty on shopping cart service when initialised",
     async(inject([ShoppingCartService], (service: MockShoppingCartService) => {
    const fixture = TestBed.createComponent(OrderConfirmationComponent);
    fixture.detectChanges();
    expect(service.emptyCalled).toBeTruthy();
  })));
});
