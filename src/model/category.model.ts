export class Category {
    SrNo: number;
    Category:string;

    public updateFrom(src: Category): void {
    this.SrNo = src.SrNo;
    this.Category = src.Category;
    
  }
}