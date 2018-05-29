import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  payWithPayMoney = function () {
    var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no',
      closebuttoncaption: 'back'
    };
    var close;
    var closeLoop;
    var amt = "$100";
    var name = "Sagar" + " " + "Choudhari";
    var mobile = 9763812023;
    var email = "";
    var bookingId = 1;
    var productinfo = "Order for " + 1;
    var salt = "XLpIXYyCaQ";
    var key = "qoxnps9i";
    var string = key + '|' + bookingId + '|' + amt + '|' + productinfo + '|' + name + '|' + email + '|||||||||||' + salt;
    //var encrypttext = sha512(string);

    //var url = "payumoney/payuBiz.html?amt=" + amt + "&name=" + name + "&mobileNo=" + mobile + "&email=" + email + "&bookingId=" + bookingId + "&productinfo=" + productinfo + "&hash=" + encrypttext + "&salt=" + salt + "&key=" + key;
    //console.log(url);
    // $cordovaInAppBrowser.open(url, '_blank', options)
    //   .then(function (event) {
    //     // success
    //   })
    //   .catch(function (event) {
    //     // error
    //   });
    // //$cordovaInAppBrowser.close();
    // $on('$cordovaInAppBrowser:loadstart', function (e, event) {
    // });

    // $rootScope.$on('$cordovaInAppBrowser:loadstop', function (e, event) {
    //   // insert CSS via code / file
    //   $cordovaInAppBrowser.executeScript({
    //     file: "payumoneyPaymentGateway.js"
    //   });

    //   if (event.url == "http://localhost/success.php") {
    //     $cordovaInAppBrowser.close();
    //     cartService.clearCart();
    //     $state.go("app.thanksAndHotFix");
    //   }
    //   if (event.url == "http://localhost/failure.php") {
    //     $cordovaInAppBrowser.close();
    //     $ionicPopup.alert({
    //       title: 'Something Is Wrong',
    //       template: 'You payment failed!'
    //     });
    //   }
    // });


    // $rootScope.$on('$cordovaInAppBrowser:loaderror', function (e, event) {
    // });

    // $rootScope.$on('$cordovaInAppBrowser:exit', function (e, event) {
    // });
  }

//});
}
