// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams,AlertController, ToastController, LoadingController} from 'ionic-angular';
// import { AuthService } from '../../providers/auth-service/auth-service';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { HomePage } from '../home/home';


// /**
//  * Generated class for the SignupPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-signup',
//   templateUrl: 'signup.html',
// })

// export class SignupPage {

//   public MobileNo: string;
//   public Password: string;
//   public Status: string;
//   public email: string;
//   public FirstName: string;
//   public LastName: string;
//   public Gender: string;
//   public DateOfBirth: Date;

// 	signupError: string;
// 	form: FormGroup;
//   registerCredentials = { FirstName:'', LastName:'', email:'',Password:'', Address:'', 
//   MobileNumber:'',DOB:'',Status:'',Gender:'',};

// 	constructor(
//          public navParams: NavParams,  
//     public toastCtrl: ToastController, 
//     public loadingCtrl: LoadingController,
//     fb: FormBuilder,
//     private nav: NavController,
// 		private navCtrl: NavController,
//     private auth: AuthService
//   ) 
//   {
// 		// this.form = fb.group({
// 		// 	email: ['', Validators.compose([Validators.required, Validators.email])],
// 		// 	password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
// 		// });
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SignupPage');
//   }
//   signup(){

//     var account = {
//       FirstName: this.FirstName,
//       lastName: this.LastName || '',
//       email: this.email,
//       Gender: this.Gender || '',
//       Password: this.Password,
//       MobileNo: this.MobileNo || '',
//       DateOfBirth : this.DateOfBirth || ''
//     };
//     var that = this;

//     var loader = this.loadingCtrl.create({
//           content: "Please wait...",

//         });
//         loader.present();


//         this.auth.signUpuser(account).then(authData => {
//           //successful
//           loader.dismiss();
//           that.navCtrl.setRoot(HomePage);

//         }, error => {
//     loader.dismiss();
//          // Unable to log in
//           let toast = this.toastCtrl.create({
//             message: error,
//             duration: 3000,
//             position: 'top'
//           });
//           toast.present();

//           that.Password = ""//empty the password field
//         }); 
//       }

//   goBack() {
//           this.nav.pop();
//         }
//   // signup() {
// 	// 	let data = this.form.value;
// 	// 	let credentials = {
// 	// 		email: data.email,
// 	// 		password: data.password
// 	// 	};
// 	// 	this.auth.signUp(credentials).then(
// 	// 		() => this.navCtrl.setRoot(HomePage),
// 	// 		error => this.signupError = error.message
// 	// 	);
//   // }
//   loginWithGoogle() {
//     this.auth.signInWithGoogle()
//       .then(
//         () => this.navCtrl.setRoot(HomePage),
//         error => console.log(error.message)
//       );
//     }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AuthService } from '../../providers/auth-service/auth-service';
import { DeviceInfo } from '../../model/deviceInfo.model';
import { Observable } from 'rxjs/Observable';
import { LoginAppDetailsService } from '../../service/LoginAppDetails.service';
import { Device } from '@ionic-native/device';
import { SignUpInfoService } from '../../service/SignUpDetails.service';
import { SignUpInfo } from '../../model/signUpInfo.model';
@Component({
	selector: 'as-page-signup',
	templateUrl: './signup.html'
})
export class SignupPage {
	signupError: string;
	form: FormGroup;
	DeviceInfoList: Observable<DeviceInfo[]>
	SignUpInfoList: Observable<SignUpInfo[]>

	note: DeviceInfo = {
		DeviceIMEI: this.device.serial,
		DeviceModel: this.device.model,
		DeviceOS: this.device.platform,
		DeviceToken: '',
		DeviceVendor: this.device.manufacturer,
		MobileNo: ' ',
	};
	constructor(private loginAppDetailsService: LoginAppDetailsService, private signUpInfoService: SignUpInfoService,
		fb: FormBuilder, private device: Device,
		private nav: NavController,
		private navCtrl: NavController,
		private auth: AuthService
	) {
		this.DeviceInfoList = this.loginAppDetailsService.getDeviceInfoList()
			.snapshotChanges()
			.map(
				changes => {
					return changes.map(c => ({
						key: c.payload.key, ...c.payload.val()
					}))
				});
		this.SignUpInfoList = this.signUpInfoService.getSignUpInfoList()
			.snapshotChanges()
			.map(
					changes => {
					return changes.map(c => ({
						key: c.payload.key, ...c.payload.val()
					}))
				});
		this.form = fb.group({
			email: ['', Validators.compose([Validators.required, Validators.email])],
			password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
			firstName: ['', Validators.compose([])],
			address: ['', Validators.compose([])],
			lastName:  ['', Validators.compose([])],
			gender:  ['', Validators.compose([])],
			mobileNo: ['', Validators.compose([])],
			DOB : ['', Validators.compose([])],
		});

	}
	goBack() {
		this.nav.pop();
	}
	signup() {
		let data = this.form.value;
		let credentials = {
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			password: data.password,
			address: data.address,
			mobileNo: data.mobileNo,
			DOB: data.DOB,
			gender: data.gender
		};
		let dataserial = this.device.serial;
		let datamodel = this.device.model;
		let dataplatform = this.device.platform;
		let datamanufacturer = this.device.manufacturer;

		let deviceDetails = {
			DeviceIMEI: dataserial,
			DeviceModel: datamodel,
			DeviceOS: dataplatform,
			DeviceToken: '',
			DeviceVendor: datamanufacturer,
			MobileNo: ''
		};
		this.auth.signUp(credentials).then(
			() => this.navCtrl.setRoot(HomePage),
			error => this.signupError = error.message
		);
		this.loginAppDetailsService.addDeviceInfo(deviceDetails).then(ref => {
			this.navCtrl.setRoot('HomePage');
		});
		this.signUpInfoService.addSignUpInfo(credentials).then(ref => {
			this.navCtrl.setRoot('HomePage');
		})
	}
}

