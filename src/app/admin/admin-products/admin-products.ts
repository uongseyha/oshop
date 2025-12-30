import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  imports: [RouterLink, CommonModule],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.css',
})
export class AdminProducts implements OnInit, OnDestroy {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  subscription: Subscription = new Subscription();

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {
    this.loadProducts();
  }

  ngOnInit(): void {}

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe();
    }
  }

  searchProducts(searchInput: string){
    this.filteredProducts = searchInput
      ? this.products.filter(p => p.title.toLowerCase().includes(searchInput.toLowerCase())) 
      : this.products ;
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
