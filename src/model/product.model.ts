

    export class Product {
        SrNo: number;
        ProductName: string;
        CatId: number;
        public price: number;
        ProdDesc: string;
        ProductImgURL: string;

        public updateFrom(src: Product): void {
        this.SrNo = src.SrNo;
        this.price = src.price;
        this.ProductName = src.ProductName;
        this.CatId = src.CatId;
        this.ProdDesc = src.ProdDesc;
        this.ProductImgURL = src.ProductImgURL;
      }
    }