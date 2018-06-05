// import { Component } from '@angular/core';
// import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
// import { AuthService } from '../../providers/auth-service/auth-service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HomePage } from '../home/home';
// import { NgxErrorsModule } from '@ultimate/ngxerrors';
// import  * as Firebase from 'firebase';

// /**
//  * Generated class for the LoginScreenPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-login-screen',
//   templateUrl: 'login-screen.html',
//   providers:[AuthService],
// })
// export class LoginScreenPage {
//   [x: string]: any;
//   navCtrl: any;
//   loading: Loading;
//   registerCredentials = { email: '', password: '' };
//   loginForm: FormGroup;
//   loginError: string;
//   constructor(private nav: NavController, private auth: AuthService,
//     private alertCtrl: AlertController, private loadingCtrl: LoadingController,
//     fb: FormBuilder) {

//     this.loginForm = fb.group({
//       email: ['', Validators.compose([Validators.required, Validators.email])],
//       password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
//     });
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad LoginScreenPage');
//   }
//   public createAccount() {
//     this.nav.push('SignupPage');
//   }
//   public forgotPass() {
//     this.nav.push('ForgetPasswordPage');
//   }
//   goBack() {
//     this.nav.pop();
//   }
//   login() {
// var that=this;
//     var loader =this.loadingCtrl.create({
//       content:"Please wait..."
//     });
//     loader.present();
//     this.auth.loginUser(this.email,this.password).then(authData=>{
//       loader.dismiss();
//       that.nav.setRoot(HomePage);
//     },error=>{
//       loader.dismiss();
//       let toast=this.toastCtrl.create({
//         message:"fail to login",
//         duration:3000,
//         position:'top'
//       });
//       toast.present()
//       that.password="";
//     });





// 		// let data = this.loginForm.value;

// 		// if (!data.email) {
// 		// 	return;
// 		// }

// 		// let credentials = {
// 		// 	email: data.email,
// 		// 	password: data.password
// 		// };
// 		// this.auth.signInWithEmail(credentials)
// 		// 	.then(
// 		// 		() => this.navCtrl.setRoot(HomePage),
// 		// 		error => this.loginError = error.message
// 		// 	);
//   }
//   loginWithGoogle() {
//     this.auth.signInWithGoogle()
//       .then(
//         () => this.navCtrl.setRoot(HomePage),
//         error => console.log(error.message)
//       );
//     }
//   // public login() {
//   //   this.showLoading()
//   //   this.auth.login(this.registerCredentials).subscribe(allowed => {
//   //     if (allowed) {
//   //       this.nav.setRoot('HomePage');
//   //     } else {
//   //       this.showError("Access Denied please enter valid credentials");
//   //     }
//   //   },
//   //     error => {
//   //       this.showError(error);
//   //     });
//   // }



//   // showLoading() {
//   //   this.loading = this.loadingCtrl.create({
//   //     content: 'Please wait...',
//   //     dismissOnPageChange: true
//   //   });
//   //   this.loading.present();
//   // }

//   // showError(text) {
//   //   this.loading.dismiss();

//   //   let alert = this.alertCtrl.create({
//   //     title: 'Fail',
//   //     subTitle: text,
//   //     buttons: ['OK']
//   //   });
//   //   alert.present();
//   // }
// }
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import  * as Firebase from 'firebase';
import { SignupPage } from '../signup/signup';

@IonicPage()
@Component({
  selector: 'page-login-screen',
  templateUrl: 'login-screen.html',
})
export class LoginScreenPage {
	loginForm: FormGroup;
	loginError: string;

	constructor(
		private navCtrl: NavController,
        private nav: NavController,
		private auth: AuthService,
		fb: FormBuilder
	) {
		this.loginForm = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		});
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginScreenPage');
  }
 public forgotPass() {
    this.nav.push('ForgetPasswordPage');
  }
  goBack() {
    this.nav.pop();
  }
  login() {
		let data = this.loginForm.value;

		if (!data.email) {
			return;
		}

		let credentials = {
			email: data.email,
			password: data.password
		};
		this.auth.signInWithEmail(credentials)
			.then(
				() => this.navCtrl.setRoot(HomePage),
				error => this.loginError = error.message
			);
    }

  signup(){
    this.nav.push(SignupPage);
  }

  loginWithGoogle() {
  this.auth.signInWithGoogle()
    .then(
      () => this.navCtrl.setRoot(HomePage),
      error => console.log(error.message)
    );
  }

}