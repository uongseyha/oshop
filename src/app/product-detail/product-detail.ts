import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailComponent implements OnInit {

  product!: Product;
  quantity = 1;
  cartId!: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Load product
    this.productService.getProductById(id).subscribe(p => this.product = p);

    // Ensure cart exists
    this.cartService.getOrCreateCart().subscribe(cartId => {
      this.cartId = cartId;

      // Load existing quantity for this product
      this.cartService.getProductQuantity(cartId, id).subscribe(qty => {
        if (qty > 0) this.quantity = qty;
      });
    });
  }

  increaseQty() {
    this.quantity++;
  }

  decreaseQty() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    if (!this.cartId || !this.product) return;

    this.cartService
      .addItem(this.cartId, this.product.id, this.quantity)
      .subscribe(() => this.toastr.success('Product added to cart'));
  }
}