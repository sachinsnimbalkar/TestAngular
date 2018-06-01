// import { Injectable } from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
// import AuthProvider = firebase.auth.AuthProvider;
// import { Http } from '@angular/http';
// import{login} from '../../model/login.model';
// @Injectable()
// export class User {
  
// 	[x: string]: any;
//   name: string;
//   email: string;
// //   public data:any;
// //   public fireAuth:any;
// //   public userProfile:any;

//   constructor(name: string, email: string) {
//     this.name = name;
// 	this.email = email;
// //   this.fireAuth=firebase.auth();
// //   this.userProfile=firebase.database().ref('users');


//   }
// //   loginUser(email:String,password:String):any{
// // 	  return this.fireAuth.signInWithEmailAndPassword(email,password)
// //   }
// }
 
// @Injectable()
// export class AuthService {
	
//   private user: firebase.User;
//   public data:any;
//   public fireAuth:any;
//   public userProfile:any;
// 	constructor(/*public afAuth: AngularFireAuth,*/public http:Http) {
// 		// afAuth.authState.subscribe(user => {
// 		// 	this.user = user;
// 		// });

// 		this.fireAuth=firebase.auth();

// 		//this.userProfile=firebase.database().ref('databaseURL');
// 		}
// 	signInWithGoogle() {
// 		console.log('Sign in with google');
// 		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
// 	}
// 		loginUser(email:string,password:string):any{
// 			return this.fireAuth.signInWithEmailAndPassword(email,password)
// 		}

// signUpuser(account:{}){

//     return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then((newUser) => {
// 		//sign in the user
// 		this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then((authenticatedUser) => {
// 		  //successful login, create user profiles
// 		this.userProfile.child(authenticatedUser.uid).set(
// 		  account
// 		);
// 		});
// 	  });
// 	}
// }

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import AuthProvider = firebase.auth.AuthProvider;

@Injectable()
export class AuthService {
	private user: firebase.User;

	constructor(public afAuth: AngularFireAuth) {
		afAuth.authState.subscribe(user => {
			this.user = user;
		});
	}

	signInWithEmail(credentials) {
		console.log('Sign in with email');
		return this.afAuth.auth.signInWithEmailAndPassword(credentials.email,
			 credentials.password);
	}

	signUp(credentials) {
		return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email,credentials.password);
	}

	get authenticated(): boolean {
		return this.user !== null;
	}

	getEmail() {
		return this.user && this.user.email;
	}

	signOut(): Promise<void> {
		return this.afAuth.auth.signOut();
	}

signInWithFacebook() {
		console.log('Sign in with facebook');
		return this.oauthSignIn(new firebase.auth.FacebookAuthProvider());
	}
	signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	private oauthSignIn(provider: AuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider);
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
					let token = result.credential.accessToken;
					// The signed-in user info.
					let user = result.user;
					console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
	}

}

// }
// @Injectable()
// export class AuthService {
//   currentUser: User;
 
//   public login(credentials) {
//     if (credentials.email === null || credentials.password === null) {
//       return Observable.throw("Please insert credentials");
//     } else {
//       return Observable.create(observer => {
//         // At this point make a request to your backend to make a real check!
//         let access = (credentials.password =="ss" && credentials.email === "ss");
//         this.currentUser = new User('sagar', 's');
//         observer.next(access);
//         observer.complete();
//       });
//     }
//   }
 
//   public signUp(credentials) {
//     if (credentials.email === null || credentials.password === null) {
//       return Observable.throw("Please insert credentials");
//     } else {
//       // At this point store the credentials to your backend!
//       return Observable.create(observer => {
//         observer.next(true);
//         observer.complete();
//       });
//     }
//   }
 
//   public getUserInfo() : User {
//     return this.currentUser;
//   }
 
//   public logout() {
//     return Observable.create(observer => {
//       this.currentUser = null;
//       observer.next(true);
//       observer.complete();
//     });
//   }
// }

