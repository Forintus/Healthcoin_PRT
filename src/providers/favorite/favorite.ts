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

  getFavorite(): Promise<Product> {
    return this.storage.ready()
      .then(() => this.storage.get('favorite'))
      .then((json: string) => {
        if (!json || json == null || json == undefined || json.length == 0) throw "No favorite.";
        return json;
      })
      .then((json: string) => JSON.parse(json))
      .catch((error: string) => {
        console.log(error, "Not returning a favorite..");
      });
  }

  setFavorite(product: Product): Promise<Product> {
    return this.storage.ready()
      // .then(() => console.log("Saving Favorite to storage"))
      .then(() => this.storage.set('favorite', JSON.stringify(product)))
      .catch(() => console.log("Something's wrong"));
  }
}