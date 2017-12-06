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
  }

  getCart(): Promise<Product[]> {
    return this.storage.ready()
      .then(() => this.storage.get('orders'))
      .then((json: string) => JSON.parse(json))
      .catch((error: string) =>  console.log(error, "Not returning any orders.."));
  }

  addToCart(product: Product): Promise<Product[]> {
    this.orders = [];
    this.orders.length = 0;
    this.orders.push(product);
    
    return this.storage.ready()
      .then(() => this.storage.set('orders', JSON.stringify(this.orders)))
      .catch(() => console.log("Orders not saved to storage."));
  }
}