import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**

 * Generated class for the OrderhistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderhistory',
  templateUrl: 'orderhistory.html',
})

export class OrderhistoryPage {

  constructor(private navCtrl: NavController,
    private nav: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad OrderhistoryPage');
  }
  payOrder(){
    alert("proceed to pay");
  }

}
