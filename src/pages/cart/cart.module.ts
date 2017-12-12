import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartPage } from './cart';
import { TranslateModule } from '@ngx-translate/core';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CartPage
  ],
  imports: [
    IonicPageModule.forChild(CartPage),
    TranslateModule.forChild(),
    ComponentsModule
  ]
})
export class CartPageModule {}