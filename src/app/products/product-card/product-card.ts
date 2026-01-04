import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { CurrencyPipe, NgIf } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {
  @Input('product') product: Product | null = null;
  @Input('showActions') showActions: boolean = true;

  constructor(
    private cartService: CartService
  ) {

  }

  onAddToCart() {
    // Implement add to cart logic here
    console.log(`Adding product ${this.product?.id} to cart.`);

    this.cartService.getOrCreateCart(this.product);

  }
}