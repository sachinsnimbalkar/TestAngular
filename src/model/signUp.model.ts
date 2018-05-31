
export class signUp {

  public MobileNo: string;
  public Password: string;
  public Status: string;
  public Email: string;
  public FirstName: string;
  public LastName: string;
  public Gender: string;
  public DateOfBirth: Date;

  public updateFrom(src: signUp) {
    this.MobileNo = src.MobileNo;
    this.Password = src.Password;
    this.Status = src.Status;
    this.Email = src.Email;
    this.FirstName = src.FirstName;
    this.LastName = src.LastName;
    this.DateOfBirth = src.DateOfBirth;
    this.Gender = src.Gender;
  }
}