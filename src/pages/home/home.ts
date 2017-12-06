import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritesProvider } from '../../providers/favorites/favorites';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private favorite: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private favoriteProvider: FavoritesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

    this.favoriteProvider.getFavorites()
      .then(favorites => this.favorite = favorites[0].name);
  }
}