import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {

  private orders: Product[];
  private ordersSubject: ReplaySubject<Product[]>;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Orders Provider');

    this.ordersSubject = new ReplaySubject<Product[]>();

    this.getOrdersFromStorage()
      .then((orders) => this.ordersSubject.next(orders));
  }

  getOrdersFromStorage(): Promise<Product[]> {
    return this.storage.ready()
      .then(() => this.storage.get('orders'))
      .then((json: string) => JSON.parse(json))
      .catch((error: string) => console.log(error, "Not returning any orders.."));
  }

  getOrders(): ReplaySubject<Product[]> {
    return this.ordersSubject;
  }

  setOrders(products: Product[]): Promise<Product[]> {
    this.ordersSubject.next(products);

    return this.storage.ready()
      .then(() => this.storage.set('orders', JSON.stringify(products)))
      .catch((error: string) => console.log(error, "Orders not saved to storage."));
  }
}