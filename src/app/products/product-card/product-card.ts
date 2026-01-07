import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';
import { CommonModule, CurrencyPipe, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, FormsModule, CommonModule, RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnInit {
  @Input('product') product: Product | null = null;
  @Input('showActions') showActions: boolean = true;
  cartId!: number;
  quantity: number = 1;

  constructor(
    private cartService: CartService,
    private toastr: ToastrService
  ){}

  ngOnInit() {
    //this.initCart();
  }

  initCart() {
    this.cartService.getOrCreateCart().subscribe((cartId) => {
      this.cartId = cartId;
      this.loadExistingQuantity();
    });
  }

  loadExistingQuantity() {
    if (!this.product?.id) return;

    this.cartService.getProductQuantity(this.cartId, this.product.id).subscribe((qty) => {
      if (qty > 0) {
        this.quantity = qty;
      }
    });
  }

  addToCart() {
    if (!this.product?.id) {
      console.warn('Cannot add to cart: Product ID is missing');
      return;
    }

    this.cartId = this.cartService.getCartId() || 0;

    if (this.cartId === 0) {
      console.warn('Cannot add to cart: Cart ID is invalid');
      return;
    }

    this.cartService.addItem(this.cartId, this.product.id, this.quantity).subscribe(() => {
      this.toastr.success('Cart updated successfully');
    });
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
