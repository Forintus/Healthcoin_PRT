import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
// import { FavoritesProvider } from '../../providers/favorites/favorites';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';
import { FavoritesProvider } from '../../providers/favorites/favorites';

/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage implements OnDestroy {

  private products: Product[];
  private cartitems: Product[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productsProvider: ProductsProvider,
    private cartItemsProvider: CartItemsProvider) {

    this.products = [];
    this.cartitems = [];

    this.productsProvider.getProducts()
      .then((products) => this.products = products)
      .then((products) => this.productsProvider.setProducts(products));

    this.cartItemsProvider.getCart()
      .subscribe((products) => this.cartitems = products);
  }

  ngOnDestroy() {
    // UNSUBSCRIBE!!
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  onViewProduct(product: Product) {
    this.navCtrl.push('ProductPage', { product: product });
  }

  addToCart(product: Product) {
    this.cartItemsProvider.addToCart(product);
  }

  onShowCart() {
    this.navCtrl.push('CartPage');
  }
}