import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  private products: Product[];
  private Checkout: string;
  private disableSubmit: boolean = false;
  private total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartItemsProvider: CartItemsProvider) {
    this.products = [];
    this.Checkout = 'Checkout';
    this.disableSubmit = false;

    this.cartItemsProvider.getCart()
      .subscribe((cartitems) => {
        this.products = cartitems;
        this.total = this.products
          .map((product) => product.coins * product.units)
          .reduce((total, value) => { return total + value }, 0);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  addToCart(product: Product) {
    this.cartItemsProvider.addToCart(product);
  }

  deleteFromCart(product: Product) {
    this.cartItemsProvider.deleteFromCart(product);
  }

  goCheckout() {
    this.navCtrl.push('CheckoutPage', { cart: this.products });
  }

  onViewProduct(product: Product) {
    this.navCtrl.push('ProductPage', { product: product });
  }
}