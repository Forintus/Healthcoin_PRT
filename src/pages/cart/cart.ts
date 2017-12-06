import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  private cartitem: Product;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartItemsProvider: CartItemsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

    this.cartItemsProvider.getCart()
    .then(cartitems => this.cartitem = cartitems[0].name);
  }

}
