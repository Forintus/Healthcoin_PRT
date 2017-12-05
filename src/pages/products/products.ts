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

  constructor(public navCtrl: NavController, public navParams: NavParams, private productsProvider: ProductsProvider,
  private favoriteProvider: FavoriteProvider) {

    this.productsProvider.getProductsFromStorage()
    .then((products)=> {
      this.products = products;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  favoriteChanged(favorite) {

    // console.log(favorite);

    this.favoriteProvider.setFavorite(favorite);
  }
}