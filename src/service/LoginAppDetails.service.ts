import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { DeviceInfo } from '../model/deviceInfo.model';
 
@Injectable()
export class LoginAppDetailsService {
 
    private LoginAppDetails = this.db.list<DeviceInfo>('BJP/LoginAppDetails');
 
    constructor(private db: AngularFireDatabase) { }
 
    getDeviceInfoList() {
        return this.LoginAppDetails;
    }
 
    addDeviceInfo(deviceInfo: DeviceInfo) {
        return this.LoginAppDetails.push(deviceInfo);
    }
 
    updateDeviceInfo(deviceInfo: DeviceInfo) {
        return this.LoginAppDetails.update(deviceInfo.key, deviceInfo);
    }
 
    removeDeviceInfo(deviceInfo: DeviceInfo) {
        return this.LoginAppDetails.remove(deviceInfo.key);
    }
}
