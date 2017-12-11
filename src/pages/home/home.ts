import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private cartitems: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartProvider: CartItemsProvider) {
    this.cartitems = [];
    
    this.cartProvider.getCart()
      .subscribe(cartitems => this.cartitems = cartitems);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  showCart() {
    this.navCtrl.push('CartPage');
  }
}