import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private http = inject(HttpClient);
  private baseUrl = `${environment.apiUrl}/Categories`;

  // Get list
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.baseUrl}/${id}`);
  }
}
