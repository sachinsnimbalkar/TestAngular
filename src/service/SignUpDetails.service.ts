
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { SignUpInfo } from '../model/signUpInfo.model';
 
@Injectable()
export class SignUpInfoService {
 
    private SignUpInfoDetails = this.db.list<SignUpInfo>('BJP/SignUpInfo');
 
    constructor(private db: AngularFireDatabase) { }
 
    getSignUpInfoList() {
        return this.SignUpInfoDetails;
    }
 
    addSignUpInfo(signUpInfo: SignUpInfo) {
        return this.SignUpInfoDetails.push(signUpInfo);
    }
 
    updateSignUpInfo(signUpInfo: SignUpInfo) {
        return this.SignUpInfoDetails.update(signUpInfo.key, signUpInfo);
    }
 
    removeSignUpInfo(signUpInfo: SignUpInfo) {
        return this.SignUpInfoDetails.remove(signUpInfo.key);
    }
}
