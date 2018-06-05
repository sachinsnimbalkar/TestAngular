export class Offer {
    Offerid: number;
    OfferDetails: string;
    OfferImgURL: string;
    OfferStartDate: string;
    OfferEndDate: string;
    public updateFrom(src: Offer): void {
        this.Offerid = src.Offerid;
        this.OfferDetails = src.OfferDetails;
        this.OfferImgURL = src.OfferImgURL;
        this.OfferStartDate = src.OfferStartDate;
        this.OfferEndDate = src.OfferEndDate;
      }
}
