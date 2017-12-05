import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoriteProvider {

  private favorite: BehaviorSubject<string>;

  constructor(public http: HttpClient) {
    console.log('Constructing Favorite Provider');

    this.favorite = new BehaviorSubject('');
  }

  setFavorite(favorite) {
    this.favorite.next(favorite);
  }

  getFavorite() {
    return this.favorite;
  }
}