export class login {

    public MobileNo: string;
    public Password: string;
    public DeviceToken: string;
    public Email: string;
    public DeviceModel: string;
    public DeviceIMEI: string;
    public DeviceOS: string;
    public DeviceVendor: Date;
  
    public updateFrom(src: login) {
      this.MobileNo = src.MobileNo;
      this.Password = src.Password;
      this.DeviceToken = src.DeviceToken;
      this.Email = src.Email;
      this.DeviceModel = src.DeviceModel;
      this.DeviceIMEI = src.DeviceIMEI;
      this.DeviceVendor = src.DeviceVendor;
      this.DeviceOS = src.DeviceOS;
    }
  } 
