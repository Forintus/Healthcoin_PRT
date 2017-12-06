import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  private favorite: Product;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Favorite Provider');

  }

  // setFavorite(product: Product) {
  //   this.favorite = product;
  // }

  // getFavorite() {
  //   return this.favorite;
  // }

  getFavorites(): Promise<Product> {
    return this.storage.ready()
      .then(() => this.storage.get('favorites'))
      .then((json: string) => JSON.parse(json))
      .catch((error: string) => {
        console.log(error, "Not returning any favorites..");
      });
  }

  setFavorites(products: Product[]): Promise<Product[]> {
    return this.storage.ready()
      .then(() => this.storage.set('favorites', JSON.stringify(products)))
      .catch(() => console.log("Favorites not saved to storage."));
  }
}