import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../model/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private baseUrl = `${environment.apiUrl}/Products`;

  constructor(
    private http: HttpClient
  ) {
    this.getProducts();
  }

  // Get list
  getProducts(){
    return this.http.get<Product[]>(this.baseUrl);
  }

  getProductById(id: number){
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  createProduct(data: Product){
    return this.http.post<Product>(this.baseUrl, data);
  }

  updateProduct(id: number, data: Product){
    return this.http.put<Product>(`${this.baseUrl}/${id}`, data);
  }

  deleteProduct(id: number){
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
