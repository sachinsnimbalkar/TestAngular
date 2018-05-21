import { Component } from '@angular/core';
import {  IonicPage, NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { GetDataProvider } from '../../providers/get-data/get-data';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/product.model';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public products:Observable<Product[]>;

  constructor(public nav: NavController,public DataService:GetDataProvider) {

  }
  ionViewDidLoad(){

    this.products = this.DataService.all();   // this.DataService.getlocalData();

  }
  viewCart(){
    this.nav.push('LoginScreenPage');
  }
  }


