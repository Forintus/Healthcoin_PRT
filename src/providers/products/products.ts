import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage/dist/storage';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  constructor(public http: HttpClient, private storage: Storage) {
    console.log('Constructing Products Provider');
  }

  getProducts(): Promise<Product[]> {
    return this.storage.ready()
      // .then(() => this.storage.set('products', null))
      .then(() => this.storage.get('products'))
      .then((json: string) => {
        if (!json || json == null || json == undefined || json.length == 0) throw "No products";
        return json;
      })
      .then((json: string) => JSON.parse(json))
      .catch((error: string) => {
        console.log(error, "Getting products form JSON...")
        return this.http.get('assets/data/products.json')
          .map((products) => products as Product[]).toPromise();
      });
  }

  setProducts(products: Product[]) {
    return this.storage.ready()
      .then(() => this.storage.set('products', JSON.stringify(products)))
      .catch((error) => console.log(error, "Products not saved to storage."));
  }
}