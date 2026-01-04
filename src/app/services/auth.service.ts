import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly USER_STORAGE_KEY = 'currentUser';
  private isBrowser: boolean;
  
  // undefined = not initialized, null = no user, User = authenticated
  private userSubject = new BehaviorSubject<User | null | undefined>(undefined);
  public user$: Observable<User | null | undefined> = this.userSubject.asObservable();

  constructor(
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.initializeAuthState();
  }

  /**
   * Initialize auth state when service is created
   * Checks localStorage for existing user data
   */
  private initializeAuthState(): void {
    if (!this.isBrowser) {
      // Not in browser (SSR), set user to null
      this.userSubject.next(null);
      return;
    }

    const storedUser = this.getUserFromStorage();
    
    if (storedUser) {
      // User data found in localStorage, set as authenticated
      this.userSubject.next(storedUser);
    } else {
      // No user found, user is not authenticated
      this.userSubject.next(null);
    }
  }

  /**
   * Login method
   */
  login(user: User) {
    this.saveUserToStorage(user);
    this.userSubject.next(user);
  }

  /**
   * Logout method
   */
  logout(): void {
    // Clear user from localStorage
    this.clearUserFromStorage();
    // Update user subject
    this.userSubject.next(null);
  }

  /**
   * Get current user value (synchronous)
   */
  getCurrentUser(): User | null | undefined {
    return this.userSubject.value;
  }

  /**
   * Check if user is authenticated (synchronous)
   */
  isAuthenticated(): boolean {
    const user = this.userSubject.value;
    return user !== null && user !== undefined;
  }

  // localStorage management methods
  private getUserFromStorage(): User | null {
    try {
      const userJson = localStorage.getItem(this.USER_STORAGE_KEY);
      if (userJson) {
        return JSON.parse(userJson) as User;
      }
      return null;
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
      // If there's an error parsing, clear the corrupted data
      this.clearUserFromStorage();
      return null;
    }
  }

  private saveUserToStorage(user: User): void {
    try {
      localStorage.setItem(this.USER_STORAGE_KEY, JSON.stringify(user));
    } catch (error) {
      console.error('Error saving user to localStorage:', error);
    }
  }

  private clearUserFromStorage(): void {
    localStorage.removeItem(this.USER_STORAGE_KEY);
  }
}