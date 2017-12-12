import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';
import { CoinsProvider } from '../../providers/coins/coins';

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
  private coins: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private cartProvider: CartItemsProvider,
    private coinsProvider: CoinsProvider) {
      
    this.cartitems = [];
    
    this.coinsProvider.getCoins()
    .subscribe((coins) => this.coins = coins);

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