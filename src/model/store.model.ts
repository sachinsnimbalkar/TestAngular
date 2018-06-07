export class Store {
    lat4: number;
    lng4: number;
    name: string;    
    public updateFrom(src: Store): void {
        this.lat4 = src.lat4;
        this.lng4 = src.lng4;
        this.name = src.name;       
      }
}