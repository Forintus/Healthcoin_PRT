import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/*
  Generated class for the CoinsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoinsProvider {

  private coins: number;
  private coinsSubject: ReplaySubject<number>;

  constructor(public http: HttpClient) {
    console.log('Hello CoinsProvider Provider');
    this.coins = 10000;

    this.coinsSubject = new ReplaySubject<number>();

    this.coinsSubject.next(this.coins);
  }

  getCoins(): ReplaySubject<number> {
    return this.coinsSubject;
  }

  deductCoins(order: number): number {
    this.coins -= order;
    this.coinsSubject.next(this.coins);
    return this.coins;
  }
}