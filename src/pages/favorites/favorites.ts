import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesProvider } from '../../providers/favorites/favorites';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  private products: Product[];
  private Checkout: string;  
  private disableSubmit: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private favoritesProvider: FavoritesProvider) {

    this.products = [];
    this.Checkout = 'Checkout';
    
    this.favoritesProvider.getFavorites()
    .subscribe((products) => this.products = products);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  addToCart() {
    console.log("Test");
  }

  goCheckout() {
    this.navCtrl.push('CheckoutPage', { cart: this.products });
  }
}