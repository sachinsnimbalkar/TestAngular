import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController,Platform, } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

/**
 * Generated class for the ExitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exit',
  templateUrl: 'exit.html',
})

   export class ExitPage{  
    public alertShown:boolean = false;
    constructor(public platform: Platform, public statusBar: StatusBar, public alertCtrl: AlertController){

      platform.ready().then(() => {
        statusBar.styleDefault();
        platform.registerBackButtonAction(() => {
          if (this.alertShown==false) {
            this.presentConfirm();  
          }
        }, 0)
      });
    }    
    presentConfirm() {
      let alert = this.alertCtrl.create({
        title: 'Confirm Exit',
        message: 'Do you want Exit?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
              this.alertShown=false;
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
       alert.present().then(()=>{
        this.alertShown=true;
      });
    }
  }
