import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { PaymentPage } from '../pages/payment/payment';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AuthService } from '../providers/auth-service/auth-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { TrackOrderPage } from '../pages/track-order/track-order';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { DisclaimerPage } from '../pages/disclaimer/disclaimer';
import { FeedbackPage } from '../pages/feedback/feedback';
import { FilterPage } from '../pages/filter/filter'
import { ExitPage } from '../pages/exit/exit';
import { OfferPage } from '../pages/offer/offer';
import { AboutPage } from '../pages/about/about';
import { GetDataProvider } from '../providers/get-data/get-data';
import { HttpModule } from '@angular/http';
import { LoginScreenPage } from '../pages/login-screen/login-screen';
import { ForgetPasswordPage } from '../pages/forget-password/forget-password';
import { VerificationCodePage } from '../pages/verification-code/verification-code';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { GeolocationMapPage } from '../pages/geolocation-map/geolocation-map'
import { LoginScreenPageModule } from '../pages/login-screen/login-screen.module';
import { HomePageModule } from '../pages/home/home.module';
import { FilterPageModule } from '../pages/filter/filter.module';
import { GeolocationMapPageModule } from '../pages/geolocation-map/geolocation-map.module';
import { DeliveryOptionsDataService } from '../providers/delivery-options.service';
import { ShoppingCartService } from '../providers/shopping-cart.service';
import { LocalStorageServie } from '../providers/storage.service';
import { Badge } from '@ionic-native/badge';
import { CommonModule } from '@angular/common';
import { Device } from '@ionic-native/device';
import { SharedData } from '../providers/sharedData.service'
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import * as Firebase from 'firebase';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { ShoppingCartModule } from '../pages/shopping-cart/shopping-cart.module'
import { ShoppingCartComponent } from '../pages/shopping-cart/shopping-cart.component'
import { SignupPageModule } from '../pages/signup/signup.module';


export const firebaseConfig = {

  apiKey: "AIzaSyDbknxObiTJwTaH4b4JxELtqbq9djoTpDY",
  authDomain: "cmbjp2018-4fdc5.firebaseapp.com",
  databaseURL: "https://cmbjp2018-4fdc5.firebaseio.com",
  projectId: "cmbjp2018-4fdc5",
  storageBucket: "cmbjp2018-4fdc5.appspot.com",
  messagingSenderId: "682850594591"
};
Firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ListPage,
    OfferPage,
    VerificationCodePage,
    ResetPasswordPage,
    OrderhistoryPage,
    TrackOrderPage,
    DisclaimerPage,
    FeedbackPage,
    PaymentPage,
    ExitPage,

  ],
  imports: [CommonModule,
    NgxErrorsModule,
    SignupPageModule,
    BrowserModule,
    HttpModule,
    LoginScreenPageModule,
    HomePageModule,
    FilterPageModule,
    ShoppingCartModule,
    GeolocationMapPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ListPage,
    OrderhistoryPage,
    OfferPage,
    VerificationCodePage,
    ResetPasswordPage,
    TrackOrderPage,
    DisclaimerPage,
    TrackOrderPage,
    DisclaimerPage,
    FeedbackPage,
    PaymentPage,
    ExitPage,

  ],
  providers: [
    SplashScreen,
    StatusBar,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AngularFireAuth,
    AngularFireDatabase,
    AuthService,
    ShoppingCartService,
    LocalStorageServie,
    LoginAppDetailsService,
    Device,
    SignUpInfoService,
    GetDataProvider,
    DeliveryOptionsDataService,
    Badge,
    SharedData,
  ]
})
export class AppModule { }