import { Component, Input } from '@angular/core';
import { Product } from '../../model/product.model';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgIf],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {

  @Input('product') product: Product | null = null;
  @Input('showActions') showActions: boolean = true;

  constructor() {

  }

}
