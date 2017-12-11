import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';
import { OrdersProvider } from '../../providers/orders/orders';
import { FavoritesProvider } from '../../providers/favorites/favorites';

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
  // private orders: Product[] = [];
  private orderSummary: boolean;
  private total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private cartProvider: CartItemsProvider, private ordersProvider: OrdersProvider) {

    this.products = this.navParams.data['cart']
      .map((product) => product as Product);

    this.total = this.products
      .map((product) => product.coins * product.units)
      .reduce((total, value) => { return total + value }, 0);

    // this.ordersProvider.getOrders()
    //   .subscribe((orders) => {
    //     this.orderSummary = true
    //     this.orders = orders;
    //   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  onConfirm() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: "MAAK TEKST" + "<br/>" + "PLAATS HIER" + "..."
      // content: this.orderPlaced + "<br/>" + this.oneMomentPlease + "..."
    });

    loading.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    loading.present();

    // let confirmedOrders = this.orders.concat(this.products);

    this.ordersProvider.addToOrders(this.products)
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