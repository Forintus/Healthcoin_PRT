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
  private favorite: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productsProvider: ProductsProvider,
    private favoriteProvider: FavoriteProvider) {

    this.productsProvider.getProductsFromStorage()
      .then((products) => this.products = products)
      .then(() => this.favoriteProvider.getFavorite())
      .then((favorite) => this.favorite = favorite.name)
      .catch((error) => console.log('No favorite returned'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  favoriteChanged(favorite: Product) {

    console.log(favorite);
    if (!favorite) return;
  }

  onProductTap(event, product) {
    console.log(product);

    this.favoriteProvider.setFavorite(product)
      .then((product) => console.log("Favorite is saved"));
  }
}