import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart, CartItem } from '../model/cart.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartComponent implements OnInit{
  cart!: Cart;
  cartId!: number;

  constructor(
    private cartService: CartService,
    private router: Router) {}

  ngOnInit() {
    this.cartService.getOrCreateCart().subscribe(id => {
      this.cartId = id;
      this.loadCart();
    });
  }

  loadCart() {
    this.cartService.getCart(this.cartId)
      .subscribe(cart => this.cart = cart);
  }

  increaseQty(item: CartItem) {
    this.updateItem(item, 1);
  }

  decreaseQty(item: CartItem) {
    if (item.quantity > 1) {
      this.updateItem(item, -1);
    }
  }

  updateQty(item: CartItem, event: Event) {
    const value = (event.target as HTMLInputElement).valueAsNumber;
    if (value >= 1) {
      this.updateItem(item, value>item.quantity ? 1 : -1);
    }
  }

  updateItem(item: CartItem, quantity: number) {
    this.cartService
      .updateItem(this.cartId, item.productId, quantity)
      .subscribe(() => this.loadCart());
  }

  removeItem(itemId: number) {
    this.cartService
      .removeItem(this.cartId, itemId)
      .subscribe(() => this.loadCart());
  }

  total() {
    return this.cart.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
  }

  checkout(){
    this.router.navigate(['/check-out']);
  }
}
