

    export class Product {
        SrNo: string;
        ProductName: string;
        CatId: number;
        public Price: number;
        ProdDesc: string;
        ProductImgURL: string;

        public updateFrom(src: Product): void {
        this.SrNo = src.SrNo;
        this.Price = src.Price;
        this.ProductName = src.ProductName;
        this.CatId = src.CatId;
        this.ProdDesc = src.ProdDesc;
        this.ProductImgURL = src.ProductImgURL;
      }
    }