// import { NgModule } from "@angular/core";
// import { RouterModule } from "@angular/router";
// import { PopulatedCartRouteGuard } from "../route-gaurds/populated-cart.route-gaurd";
// import { CheckoutComponent } from "../pages/checkout/checkout.component";
// import { OrderConfirmationComponent } from "../pages/order-confirmation/order-confirmation.component";
// import { StoreFrontComponent } from "../pages/store-front/store-front.component";

// @NgModule({
//     exports: [RouterModule],
//     imports: [
//         RouterModule.forRoot([
//             {
//                 canActivate: [PopulatedCartRouteGuard],
//                 component: CheckoutComponent,
//                 path: "checkout"
//             },
//             {
//                 canActivate: [PopulatedCartRouteGuard],
//                 component: OrderConfirmationComponent,
//                 path: "confirmed"
//             },
//             {
//                 component: StoreFrontComponent,
//                 path: "**"
//             }])
//     ]
// })
// export class AppRoutingModule { }
