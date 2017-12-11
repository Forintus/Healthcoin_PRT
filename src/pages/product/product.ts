import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  private product: Product;
  private productName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    console.log(this.navParams);

    this.product = this.navParams.data.product;

    this.productName = !this.product ? "NO PRODUCT" : this.product.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
