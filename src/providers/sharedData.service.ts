import { Injectable } from '@angular/core';

@Injectable()
export class SharedData{

dataArray = [];
public setData(data): any {
     this.dataArray = data;
}

public getData(): any{
    return this.dataArray;
}
}