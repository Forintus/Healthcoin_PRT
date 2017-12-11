import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {

  // private favorites: Product[];
  private favoritesSubject: ReplaySubject<Product[]>;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Favorite Provider');

    this.favoritesSubject = new ReplaySubject<Product[]>();
  }

  getFavorites(): ReplaySubject<Product[]> {
    return this.favoritesSubject;
  }

  setFavorites(products: Product[]) {
    let favorites = products
      .filter((product) => {
        return product.favorite;
      });

    this.favoritesSubject.next(favorites);
  }

  // addToFavorites(product: Product): Promise<Product[]> {
  //   this.favorites = [];
  //   this.favorites.length = 0;
  //   this.favorites.push(product);

  //   return this.storage.ready()
  //     .then(() => this.storage.set('favorites', JSON.stringify(this.favorites)))
  //     .catch(() => console.log("Favorites not saved to storage."));
  // }

  // deleteFavorites(): Promise<Product[]> {
  //   this.favorites = [];
  //   this.favorites.length = 0;

  //   return this.storage.ready()
  //     .then(() => this.storage.set('favorites', JSON.stringify(this.favorites)))
  //     .catch(() => console.log("Favorites not removed from storage."));
  // }
}