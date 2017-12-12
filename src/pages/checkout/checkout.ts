import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';
import { OrdersProvider } from '../../providers/orders/orders';
import { CoinsProvider } from '../../providers/coins/coins';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  private products: Product[];
  private coins: number;
  private orderSummary: boolean;
  private disableSubmit: boolean = false;
  private total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private cartProvider: CartItemsProvider, private ordersProvider: OrdersProvider, private coinsProvider: CoinsProvider) {

    this.coinsProvider.getCoins()
      .subscribe((coins) => this.coins = coins);

    this.products = this.navParams.data['cart']
      .map((product) => product as Product);

    this.total = this.products
      .map((product) => product.coins * product.units)
      .reduce((total, value) => { return total + value }, 0);
    this.disableSubmit = this.total > this.coins;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  confirmOrders() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "MAAK TEKST" + "<br/>" + "PLAATS HIER" + "..."
      // content: this.orderPlaced + "<br/>" + this.oneMomentPlease + "..."
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    loading
      .present()
      .then(() =>
        this.ordersProvider.addToOrders(this.products))
      .then(() => this.coinsProvider.deductCoins(this.total))
      .then(() => this.cartProvider.clearCart());

    setTimeout(() => {
      this.navCtrl.setRoot('ConfirmPage', {}, {
        animate: true,
        direction: 'forward'
      });
      loading.dismiss();
    }, 1000);
  }
}