import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';

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
  private cartitems: Product[];  

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartItemsProvider: CartItemsProvider) {

    console.log(this.navParams);
    this.cartitems = [];
    
    this.product = this.navParams.data.product;
    this.productName = !this.product ? "NO PRODUCT" : this.product.name;

    this.cartItemsProvider.getCart()
    .subscribe((products) => this.cartitems = products);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  addToCart(product: Product) {
    this.cartItemsProvider.addToCart(product);
  }

  onShowCart() {
    this.navCtrl.push('CartPage');
  }
}