import { Cart } from '../model/cart.model';
import { Inject, Injectable, PLATFORM_ID, inject } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Product } from '../model/product.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class CartService {
  private baseUrl = `${environment.apiUrl}/Carts`;
  private cartKey = 'cartId';
  private isBrowser: boolean = false;
  private cartQuantitySubject = new BehaviorSubject<number>(0);
  cartQuantity$ = this.cartQuantitySubject.asObservable();

  private checkoutCartSubject = new BehaviorSubject<Cart | null>(null);
  checkoutCart$ = this.checkoutCartSubject.asObservable();

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  createCart() {
    return this.http.post<Cart>(this.baseUrl, {});
  }

  getCartId(): number | null {
    return Number(localStorage.getItem(this.cartKey));
  }

  setCartId(id: number) {
    localStorage.setItem(this.cartKey, id.toString());
  }

  getCart(id: number) {
    return this.http.get<Cart>(`${this.baseUrl}/${id}`).pipe(
      tap((cart) => {
        const qty = cart.items.reduce((sum, item) => sum + item.quantity, 0);
        this.cartQuantitySubject.next(qty);

        // 🔥 store cart for checkout
        this.checkoutCartSubject.next(cart);
      })
    );
  }

  addItem(cartId: number, productId: number, quantity: number) {
    return this.http
      .post(`${this.baseUrl}/${cartId}/items`, { productId, quantity })
      .pipe(switchMap(() => this.getCart(cartId)));
  }

  removeItem(cartId: number, itemId: number) {
    return this.http
      .delete(`${this.baseUrl}/${cartId}/items/${itemId}`)
      .pipe(tap(() => this.getCart(cartId).subscribe()));
  }

  /** Get quantity for a product already in cart */
  getProductQuantity(cartId: number, productId: number): Observable<number> {
    return this.getCart(cartId).pipe(
      map((cart) => cart.items.find((i) => i.productId === productId)?.quantity ?? 0)
    );
  }

  getOrCreateCart() {
    if (this.isBrowser) {
      const storedId = localStorage.getItem(this.cartKey);
      if (storedId) {
        return of(+storedId);
      }
    }

    return this.http.post<Cart>(this.baseUrl, {}).pipe(
      tap((cart) => {
        if (this.isBrowser) {
          localStorage.setItem(this.cartKey, cart.id.toString());
        }
      }),
      map((cart) => cart.id)
    );
  }

  updateItem(cartId: number, productId: number, quantity: number) {
    return this.http.post(`${this.baseUrl}/${cartId}/items`, { productId, quantity });
  }

  setCheckoutCart(cart: Cart) {
    this.checkoutCartSubject.next(cart);

    if (this.isBrowser) {
      localStorage.setItem('checkout_cart', JSON.stringify(cart));
    }
  }

  getCheckoutCart(): Cart | null {
    if (this.checkoutCartSubject.value) {
      return this.checkoutCartSubject.value;
    }

    if (this.isBrowser) {
      const stored = localStorage.getItem('checkout_cart');
      return stored ? JSON.parse(stored) : null;
    }

    return null;
  }

  clearCheckoutCart() {
    this.checkoutCartSubject.next(null);
    if (this.isBrowser) {
      localStorage.removeItem('checkout_cart');
    }
  }
}
