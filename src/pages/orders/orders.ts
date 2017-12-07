import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrdersProvider } from '../../providers/orders/orders';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  private products: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ordersProvider: OrdersProvider) {

    this.ordersProvider.getOrders()
    .then((products) => this.products = products)
    .catch((error) => console.log('No favorite returned'));
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
