import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  // private products: Product[];
  
  constructor(public http: HttpClient) {
    console.log('Constructing Products Provider');
  }

  getProductsFromStorage(): Promise<Product[]> {
      return this.http.get('assets/data/products.json')
      .map((products) => products as Product[])
      .toPromise()
  }
}