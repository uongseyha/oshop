import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-check-out',
  imports: [FormsModule, CommonModule],
  templateUrl: './check-out.html',
  styleUrl: './check-out.css',
})
export class CheckOut implements OnInit {
  order = {
    name: '',
    address: '',
    city: '',
  };

  cart!: Cart;

  constructor(
    private cartService: CartService,
    private router: Router,
    private toastr: ToastrService) {}

  ngOnInit() {
    const checkoutCart = this.cartService.getCheckoutCart();

    if (!checkoutCart || checkoutCart.items.length === 0) {
      this.router.navigate(['/cart']);
      return;
    }

    this.cart = checkoutCart;
  }

  total() {
    return this.cart.items.reduce(
      (sum, i) => sum + i.price * i.quantity,
      0
    );
  }

  placeOrder() {
    console.log('Order placed', {
      customer: this.order,
      cart: this.cart
    });

    // clear checkout cart after success
    this.cartService.clearCheckoutCart();
    
    this.toastr.success('Cart updated successfully');
  }
}