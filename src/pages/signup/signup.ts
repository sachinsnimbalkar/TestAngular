import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, ToastController, LoadingController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';


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
 
  public MobileNo: string;
  public Password: string;
  public Status: string;
  public email: string;
  public FirstName: string;
  public LastName: string;
  public Gender: string;
  public DateOfBirth: Date;

	signupError: string;
	form: FormGroup;
  registerCredentials = { FirstName:'', LastName:'', email:'',Password:'', Address:'', 
  MobileNumber:'',DOB:'',Status:'',Gender:'',};
  
	constructor(
         public navParams: NavParams,  
    public toastCtrl: ToastController, 
    public loadingCtrl: LoadingController,
    fb: FormBuilder,
    private nav: NavController,
		private navCtrl: NavController,
    private auth: AuthService
  ) 
  {
		// this.form = fb.group({
		// 	email: ['', Validators.compose([Validators.required, Validators.email])],
		// 	password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
		// });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signup(){

    var account = {
      FirstName: this.FirstName,
      lastName: this.LastName || '',
      email: this.email,
      Gender: this.Gender || '',
      Password: this.Password,
      MobileNo: this.MobileNo || '',
      DateOfBirth : this.DateOfBirth || ''
    };
    var that = this;

    var loader = this.loadingCtrl.create({
          content: "Please wait...",
          
        });
        loader.present();
    
    
        this.auth.signUpuser(account).then(authData => {
          //successful
          loader.dismiss();
          that.navCtrl.setRoot(HomePage);
    
        }, error => {
    loader.dismiss();
         // Unable to log in
          let toast = this.toastCtrl.create({
            message: error,
            duration: 3000,
            position: 'top'
          });
          toast.present();
    
          that.Password = ""//empty the password field
        }); 
      }

  goBack() {
          this.nav.pop();
        }
  // signup() {
	// 	let data = this.form.value;
	// 	let credentials = {
	// 		email: data.email,
	// 		password: data.password
	// 	};
	// 	this.auth.signUp(credentials).then(
	// 		() => this.navCtrl.setRoot(HomePage),
	// 		error => this.signupError = error.message
	// 	);
  // }
  loginWithGoogle() {
    this.auth.signInWithGoogle()
      .then(
        () => this.navCtrl.setRoot(HomePage),
        error => console.log(error.message)
      );
    }
}



// export class SignupPage {
//   createSuccess = false;
//   registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };
//   constructor(private nav: NavController,private auth: AuthService, public navParams: NavParams,public alertCtrl: AlertController) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SignupPage');
//   }
//     goBack() {
//       this.nav.pop();
//     }
  
//   public signUp() {

//     this.auth.signUp(this.registerCredentials).subscribe(success => {
//       if (success) {
//         this.createSuccess = true;
//       //  this.showPopup("Success", "Account created.");
//       } else {
//         this.showPopup("Error", "Problem creating account.");
//       }
//       console.log(this.registerCredentials);
//     },
//       error => {
//         this.showPopup("Error", error);
//       });
//       this.registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };  
//   }
 
//   showPopup(title, text) {
    
   
//     console.log(this.registerCredentials);
    
//     let alert = this.alertCtrl.create({
//       title: 'Congratulation!',
//       subTitle: 'Sign up successfully for '+this.registerCredentials.FirstName,
//       buttons: ['OK']
//     });
//     alert.present();
//     this.registerCredentials = { FirstName:'', LastName:'', Email:'', Address:'', MobileNumber:'' };
//     this.nav.push('HomePage');
//   }
// }





 