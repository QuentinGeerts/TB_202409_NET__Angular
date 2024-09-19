import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductDescription, ProductDTO, ProductName, ProductPrice } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly _productsEndpoint: string = "http://localhost:3000/products/";

  http: HttpClient = inject(HttpClient);

  // C:  Create
  // R:  Read → ReadAll / ReadById / ReadBy...
  // U:  Update → PUT (TOUT modifier) / PATCH (UNE seule valeur)
  // D:  Delete

  get (): Observable<Product[]> {
    return this.http.get<Product[]>(this._productsEndpoint);
  }

  getById (id: string): Observable<Product> {
    return this.http.get<Product>(this._productsEndpoint + id);
  }

  add (product: ProductDTO): Observable<void> {
    return this.http.post<void>(this._productsEndpoint, product);
  }

  delete (id: string): Observable<void> {
    return this.http.delete<void>(this._productsEndpoint + id);
  }

  update (id: string,  product: ProductDTO): Observable<void> {
    return  this.http.put<void>(this._productsEndpoint + id, product);
  }

  patchDescription (id: string, description: ProductDescription): Observable<void> {
    return this.http.patch<void>(this._productsEndpoint + id,  description);
  }

  patchName (id: string, name: ProductName): Observable<void> {
    return this.http.patch<void>(this._productsEndpoint + id,  name);
  }

  patchPrice (id: string, price: ProductPrice): Observable<void> {
    return this.http.patch<void>(this._productsEndpoint + id,  price);
  }

}
