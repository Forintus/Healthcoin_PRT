import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { FavoritesProvider } from '../../providers/favorites/favorites';
import { CartItemsProvider } from '../../providers/cartitems/cartitems';

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
export class ProductsPage {

  private products: Product[];
  private cartitems: Product[] = [];  
  private favorite: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productsProvider: ProductsProvider,
    private favoritesProvider: FavoritesProvider, private cartItemsProvider: CartItemsProvider) {

    this.productsProvider.getProductsFromStorage()
      .then((products) => this.products = products)
      .then(() => this.favoritesProvider.getFavorites())
      .then((favorites) => this.favorite = favorites[0].name)
      .then(() => this.cartItemsProvider.getCart())
      .then(cartitems => this.cartitems = cartitems)
      .catch((error) => console.log('No favorite returned'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  favoriteChanged(favorite: Product) {

    if (!favorite) return;

    console.log(favorite);
  }

  onProductTap(event, product: Product) {
    console.log(product);

    this.favoritesProvider.addToFavorites(product)
      .then((products) => console.log("Favorites are saved"))
      .then(() => this.cartItemsProvider.addToCart(product))
      .then((products) => console.log("Cartitems are saved"));
  }

  showCart() {
    this.navCtrl.push('CartPage');
  }
}