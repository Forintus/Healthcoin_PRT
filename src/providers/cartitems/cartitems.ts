import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';
import { ReplaySubject } from 'rxjs/ReplaySubject';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartItemsProvider {

  private cartitems: Product[];
  private cartSubject: ReplaySubject<Product[]>;

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Cart Provider');

    this.cartSubject = new ReplaySubject<Product[]>();

    this.getCartFromStorage()
      .then((cartitems) => {
        this.cartitems = cartitems;
        this.cartSubject.next(this.cartitems)
      });
  }

  getCartFromStorage(): Promise<Product[]> {
    return this.storage.ready()
      .then(() => this.storage.get('cartitems'))
      .then((json: string) => JSON.parse(json))
      .catch((error: string) => console.log(error, "Not returning any cartitem..."));
  }

  getCart(): ReplaySubject<Product[]> {
    return this.cartSubject;
  }

  addToCart(product: Product) {
    let index: number = this.cartitems.findIndex((cartitem) => cartitem.name == product.name);

    index < 0 ? this.cartitems.push(product) : this.cartitems[index].units += 1;

    this.setCart(this.cartitems)
      .then(() => this.cartSubject.next(this.cartitems));
  }

  deleteFromCart(product: Product) {
    let index: number = this.cartitems.findIndex((cartitem) => cartitem.name == product.name);

    if (index < 0) return;

    product.units > 1 ? this.cartitems[index].units -= 1 : this.cartitems.splice(index, 1);

    this.setCart(this.cartitems)
      .then(() => this.cartSubject.next(this.cartitems));
  }

  clearCart() {
    this.cartitems = [];
    this.cartitems.length = 0;

    this.setCart(this.cartitems)
      .then(() => this.cartSubject.next(this.cartitems));
  }

  setCart(products: Product[]): Promise<Product[]> {

    return this.storage.ready()
      .then(() => this.storage.set('cartitems', JSON.stringify(products)))
      .catch((error: string) => console.log(error, "Cartitems not saved to storage."));
  }
}