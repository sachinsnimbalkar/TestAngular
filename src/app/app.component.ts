import { Component, ViewChild } from '@angular/core';
import { App, MenuController, Nav, AlertController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SignupPage } from '../pages/signup/signup';
import { TrackOrderPage } from '../pages/track-order/track-order';
import { OfferPage } from '../pages/offer/offer';
import { AboutPage } from '../pages/about/about';
import { FeedbackPage } from '../pages/feedback/feedback';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer'
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory'
import { LoginScreenPage } from '../pages/login-screen/login-screen';
import { FilterPage } from '../pages/filter/filter';
import { GeolocationMapPage } from '../pages/geolocation-map/geolocation-map';
//import { MapGeolocationPage } from '../pages/map-geolocation/map-geolocation';
import { StoreFrontComponent } from '../pages/store-front/store-front.component';
import { ShoppingCartComponent } from '../pages/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from '../pages/checkout/checkout.component';
import { OrderConfirmationComponent } from '../pages/order-confirmation/order-confirmation.component';
import { AuthService } from '../providers/auth-service/auth-service';
import * as Firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  [x: string]: any;
  @ViewChild(Nav) nav: Nav;
  private menu: MenuController;

  rootPage: any = HomePage;
  //  public alertShown:boolean = false;
  pages: Array<{ title: string, component: any }>;


  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public app: App,
    menu: MenuController,
    private auth: AuthService,
    public alertCtrl: AlertController,
  ) {


    this.initializeApp();
    var that = this;
    Firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        that.rootPage = LoginScreenPage;
        // that.rootPage = HomePage;
        // User is signed in.
        // var displayName = user.displayName;
        // var email = user.email;
        // var emailVerified = user.emailVerified;
        // var photoURL = user.photoURL;
        // var isAnonymous = user.isAnonymous;
        // var uid = user.uid;
        // var providerData = user.providerData;
        // ...
      } else {
        // that.rootPage= LoginScreenPage;
        that.rootPage = HomePage;
        // User is signed out.
        // ...
      }
    });
    this.menu = menu;
    this.app = app;
    this.platform = platform;


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Order History', component: OrderhistoryPage },
      { title: 'Offers', component: OfferPage },
      { title: 'Filter', component: FilterPage },
      { title: 'Track Order', component: TrackOrderPage },
      { title: 'MapView', component: GeolocationMapPage },
      //{ title: 'Viewmap', component: MapGeolocationPage },
      { title: 'T&C Disclaimer', component: DisclaimerPage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'About', component: AboutPage },
    ];

    /////////////////////////////////////shri exit pop code start with back button press

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      platform.registerBackButtonAction(() => {
        if (this.alertShown == false) {
          this.exitConfirm();
        }
      }, 0)
    });
  }
  exitConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown = false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.platform.exitApp();
          }
        }
      ]
    });
    alert.present().then(() => {
      this.alertShown = true;
    });
  }



  exitApp() {
    this.platform.exitApp();
    this.exitConfirm()
  }
  /////////////////////////////////////shri exit pop code end

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.show();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  /////////////////////////////////////shri login code start
  login() {
    this.menu.close();
    this.auth.signOut();
    this.nav.setRoot(LoginScreenPage);
  }

  logout() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Log Out',
      message: 'Do you want LOG OUT ?',
      buttons: [
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown = false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
            this.menu.close();
            this.auth.signOut();
            this.nav.setRoot(HomePage);
          }
        }
      ]
    });
    alert.present().then(() => {
      this.alertShown = true;
    });
  }
  ///////////////////////////shrii login code end
  openPage(page) {
    this.menu.close();
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
