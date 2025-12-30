import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../model/user.model';
import { UserService } from './user.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  login(user: User) {
    this.userSubject.next(user);
  }

  logout() {
    this.userSubject.next(null);
  }

}
