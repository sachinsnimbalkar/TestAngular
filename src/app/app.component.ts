import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
import {LoginPage} from '../pages/login/login';
import { TrackOrderPage } from '../pages/track-order/track-order';
import { SignOutPage } from '../pages/sign-out/sign-out';
import { OfferPage } from '../pages/offer/offer';
import { ExitPage } from '../pages/exit/exit';
import { AboutPage } from '../pages/about/about';
import {FeedbackPage} from '../pages/feedback/feedback';
import {DisclaimerPage} from '../pages/disclaimer/disclaimer'
import {OrderhistoryPage} from '../pages/orderhistory/orderhistory'
import { LoginScreenPage } from '../pages/login-screen/login-screen';
import { FilterPage } from '../pages/filter/filter'
import {GeolocationMapPage} from '../pages/geolocation-map/geolocation-map'
import{StoreFrontComponent} from '../pages/store-front/store-front.component'
import{ShoppingCartComponent} from '../pages/shopping-cart/shopping-cart.component'
import{CheckoutComponent} from '../pages/checkout/checkout.component'
import{OrderConfirmationComponent} from '../pages/order-confirmation/order-confirmation.component'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
//  public alertShown:boolean = false;
  pages: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Order History', component: OrderhistoryPage },
      { title: 'Offers', component: OfferPage },
      { title: 'Filter', component: FilterPage },
      { title: 'Track Order', component: TrackOrderPage },
      { title: 'MapView', component: GeolocationMapPage },      
      { title: 'T&C Disclaimer', component: DisclaimerPage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'About', component: AboutPage },
      { title: 'SignOut', component: SignOutPage },
      { title: 'Exit', component: ExitPage },
      
    ];
  }
  
  initializeApp() {
    this.platform.ready().then(() => {      
      this.splashScreen.show();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  // presentConfirm() {
  //   let alert = this.alertCtrl.create({
  //     title: 'Confirm Exit',
  //     message: 'Do you want Exit?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //           this.alertShown=false;
  //         }
  //       },
  //       {
  //         text: 'Yes',
  //         handler: () => {
  //           console.log('Yes clicked');
  //           this.platform.exitApp();
  //         }
  //       }
  //     ]
  //   });
  //    alert.present().then(()=>{
  //     this.alertShown=true;
  //   });
  // }
}
