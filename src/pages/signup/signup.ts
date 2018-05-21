import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  createSuccess = false;
  registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };
  constructor(private nav: NavController,private auth: AuthService, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
    goBack() {
      this.nav.pop();
    }
  
  public signUp() {

    this.auth.signUp(this.registerCredentials).subscribe(success => {
      if (success) {
        this.createSuccess = true;
      //  this.showPopup("Success", "Account created.");
      } else {
        this.showPopup("Error", "Problem creating account.");
      }
      console.log(this.registerCredentials);
    },
      error => {
        this.showPopup("Error", error);
      });
      this.registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };  
  }
 
  showPopup(title, text) {
    
   
    console.log(this.registerCredentials);
    
    let alert = this.alertCtrl.create({
      title: 'Congratulation!',
      subTitle: 'Sign up successfully for '+this.registerCredentials.FirstName,
      buttons: ['OK']
    });
    alert.present();
    this.registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };
    this.nav.push('HomePage');
  }
}





 