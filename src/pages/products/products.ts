import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsProvider } from '../../providers/products/products';
import { FavoriteProvider } from '../../providers/favorite/favorite';

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
  private favorites: Product[];
  private favorite: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productsProvider: ProductsProvider,
    private favoriteProvider: FavoriteProvider) {

    this.productsProvider.getProductsFromStorage()
      .then((products) => this.products = products)
      .then(() => this.favoriteProvider.getFavorites())
      .then((favorites) => this.favorite = favorites[0].name)
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

    this.favorites = [];
    this.favorites.length = 0;

    this.favorites.push(product);

    this.favoriteProvider.setFavorites(this.favorites)
      .then((products) => console.log("Favorites is saved"));
  }
}