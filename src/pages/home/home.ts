import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesProvider } from '../../providers/favorites/favorites';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private cartitems: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartItemsProvider: CartItemsProvider) {
    this.cartitems = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.cartItemsProvider.getCart()
      .then(cartitems => this.cartitems = cartitems);
  }

  showCart() {
    this.navCtrl.push('CartPage');
  }
}