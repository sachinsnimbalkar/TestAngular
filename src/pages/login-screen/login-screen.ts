import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the LoginScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-screen',
  templateUrl: 'login-screen.html',
})
export class LoginScreenPage {
  [x: string]: any;
  loading: Loading;
  registerCredentials = { email: '', password: '' };
  constructor(private nav: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScreenPage');
  }
  public createAccount() {
    this.nav.push('SignupPage');
  }
  public forgotPass() {
    this.nav.push('ForgetPasswordPage');
  }
  goBack() {
    this.navCtrl.pop();
  }
 
  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.nav.setRoot('HomePage');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    //alert.present(prompt);
  }
}
