import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { User } from '../model/user.model';
import { CartService } from '../services/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  standalone: true,
  templateUrl: './bs-navbar.html',
  styleUrls: ['./bs-navbar.css'],
  imports: [RouterLink, CommonModule],
})
export class BsNavbar implements OnDestroy {
  user: User | null | undefined = null;
  totalQuantity = 0;
  cartId!: number;
  private subs = new Subscription();

  constructor(public authService: AuthService, private cartService: CartService) {
    this.subs.add(this.authService.user$.subscribe((u) => (this.user = u)));

    this.subs.add(
      this.cartService.getOrCreateCart().subscribe((cartId) => {
        this.cartId = cartId;
        this.cartService.getCart(cartId).subscribe();
      })
    );

    this.subs.add(
      this.cartService.cartQuantity$.subscribe((qty) => {
        this.totalQuantity = qty;
      })
    );
  }

  async logout() {
    if (this.user) {
      this.authService.logout();
      this.user = null;
      return;
    }
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
