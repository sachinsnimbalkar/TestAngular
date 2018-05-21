import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage} from '../pages/login/login';
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
import {GeolocationMapPage} from '../pages/geolocation-map/geolocation-map'
import { CachcingServiceBase } from '../providers/caching.service';
import { LoginScreenPageModule } from '../pages/login-screen/login-screen.module';
import { HomePageModule } from '../pages/home/home.module';
import { FilterPageModule } from '../pages/filter/filter.module';
import { GeolocationMapPageModule } from '../pages/geolocation-map/geolocation-map.module';
import { DeliveryOptionsDataService } from '../providers/delivery-options.service';
import { ShoppingCartService } from '../providers/shopping-cart.service';
import { LocalStorageServie } from '../providers/storage.service';

@NgModule({
  declarations: [
    MyApp,
    //HomePage,
   AboutPage,
    ListPage,
    LoginPage,
   // LoginScreenPage,
    OfferPage,
   // ForgetPasswordPage,
    VerificationCodePage,
    ResetPasswordPage,
   // FilterPage,
    OrderhistoryPage,
    TrackOrderPage,
    DisclaimerPage,
    FeedbackPage,
   // GeolocationMapPage,
    ExitPage,

  ],
  imports: [
    BrowserModule,HttpModule,LoginScreenPageModule,HomePageModule,
    FilterPageModule,GeolocationMapPageModule,
    IonicModule.forRoot(MyApp),
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
  //  HomePage,
   // LoginScreenPage,
    AboutPage,
    ListPage,
    OrderhistoryPage,
    OfferPage,
   // ForgetPasswordPage,
    VerificationCodePage,
    ResetPasswordPage,
    TrackOrderPage,
    DisclaimerPage,
//FilterPage,
    TrackOrderPage,
    DisclaimerPage,
    FeedbackPage,
   // GeolocationMapPage,
   ExitPage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,ShoppingCartService,LocalStorageServie,
    GetDataProvider,DeliveryOptionsDataService,
  ]
})
export class AppModule {}
