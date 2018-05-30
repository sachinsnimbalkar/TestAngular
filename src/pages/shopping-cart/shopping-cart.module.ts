import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShoppingCartComponent } from './shopping-cart.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
  ],
  imports: [
    IonicPageModule.forChild(ShoppingCartComponent),
  ],
})
export class ShoppingCartModule {}
