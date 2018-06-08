import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the ModelPageCutomizingItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-model-page-cutomizing-items',
  templateUrl: 'model-page-cutomizing-items.html',
})
export class ModelPageCutomizingItemsPage {

  public pizzaSize = ['Small','Medium','Large'];



  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl : ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModelPageCutomizingItemsPage');
    console.log(this.navParams.get('message'));
  }

  public closeModal(){
    this.viewCtrl.dismiss();
}

}
