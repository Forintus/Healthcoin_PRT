import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartItemsProvider {

  private cartitems: Product[];
  
  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Cart Provider');
  }

  getCart(): Promise<Product[]> {
    return this.storage.ready()
      .then(() => this.storage.get('cartitems'))
      .then((json: string) => JSON.parse(json))
      .catch((error: string) =>  console.log(error, "Not returning any cartitem.."));
  }

  addToCart(product: Product): Promise<Product[]> {
    this.cartitems = [];
    this.cartitems.length = 0;
    this.cartitems.push(product);
    
    return this.storage.ready()
      .then(() => this.storage.set('cartitems', JSON.stringify(this.cartitems)))
      .catch(() => console.log("Cartitems not saved to storage."));
  }
}