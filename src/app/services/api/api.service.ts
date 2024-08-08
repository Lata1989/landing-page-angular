import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {

  }

  public getAllProducts(): Observable<IProduct[]> { // Devuelve observable de productos
    return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
  }

  public getProductById(id: number | string): Observable<IProduct> { // Devuelve observable de un solo producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> { // Devuelve un observable de las categorias
    return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> { // Devuelve un observable de un producto que se agregaria
    return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(id: number, product: IProduct): Observable<IProduct> { // Devuelve un observable de un producto modificado
    return this._httpClient.put<IProduct>(`${this.baseURL}/${id}`, product);
  }

  public deleteProduct(id: number | string): Observable<IProduct> { // Borra observable de un solo producto
    return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }
}
