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
  private orderSummary: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private cartProvider: CartItemsProvider, private ordersProvider: OrdersProvider, private favoritesProvider: FavoritesProvider) {

    console.log(this.navParams.data['cart']);

    this.products = this.navParams.data['cart']
      .map((product) => product as Product);

    this.orderSummary = true;

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
    this.products.forEach((product) => {
      console.log(product);

      this.ordersProvider.addToOrders(product);
      // this.cartProvider.removeCartItem(product);
    });

    this.cartProvider.emptyCart();
    this.favoritesProvider.deleteFavorites();

    setTimeout(() => {
      this.navCtrl.setRoot('ConfirmPage', {}, {
        animate: true,
        direction: 'forward' // or 'back'
      });
      loading.dismiss();
    }, 1000);
  }
}