import { Injectable, inject } from '@angular/core';
import { Database, ref,listVal , list, object, push, set, update, remove } from '@angular/fire/database';
import { Firestore, collection, collectionData, DocumentReference, query, doc, docData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../model/category.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, UserCreate } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http=inject(HttpClient);

  private baseUrl = `${environment.apiUrl}/Users`;
  
  // Get list
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  createUser(data: UserCreate): Observable<User> {
    return this.http.post<User>(this.baseUrl, data);
  }

  updateUser(id: number, data: UserCreate): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, data);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
