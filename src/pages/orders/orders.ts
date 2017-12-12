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

  private products: Product[] = [];
  private noOrders: boolean;
  private total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private ordersProvider: OrdersProvider) {

    this.ordersProvider.getOrders()
      .subscribe((products) => {
        this.products = products;
        this.noOrders = !(this.products.length > 0);

        this.total = this.products
          .map((product) => product.coins * product.units)
          .reduce((total, value) => { return total + value }, 0);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

  clearOrders() {
    console.log("clearOrders");
    this.ordersProvider.clearOrders();
  }
}