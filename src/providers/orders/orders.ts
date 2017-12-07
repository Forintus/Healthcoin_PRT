import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';

/*
  Generated class for the OrdersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OrdersProvider {

  private orders: Product[];

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Orders Provider');

    this.getOrders()
      .then((orders) => this.orders = orders);
  }

  getOrders(): Promise<Product[]> {
    return this.storage.ready()
      .then(() => this.storage.get('orders'))
      .then((json: string) => JSON.parse(json))
      .catch((error: string) => console.log(error, "Not returning any orders.."));
  }

  addToOrders(product: Product): Promise<Product[]> {

    this.orders.push(product);

    return this.storage.ready()
      .then(() => this.storage.set('orders', JSON.stringify(this.orders)))
      .catch(() => console.log("Orders not saved to storage."));
  }
}