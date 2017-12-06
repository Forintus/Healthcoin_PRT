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

  private cartitems: Product[];
  private Checkout: string;  
  private disableSubmit: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartItemsProvider: CartItemsProvider) {
    this.cartitems = [];
    this.Checkout = 'Checkout';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');

    this.cartItemsProvider.getCart()
    .then(cartitems => this.cartitems = cartitems);
  }

  goCheckout() {
    this.navCtrl.push('CheckoutPage');
  }
}
