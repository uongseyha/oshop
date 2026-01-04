import { Category } from './../model/category.model';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CurrencyPipe, CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProductFilter } from './product-filter/product-filter';
import { ProductCard } from "./product-card/product-card";

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductFilter, ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  filteredProducts: any[] = []; // Displayed products
  selectedCategory: Category | null = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.loadProducts();
  }

  loadProducts() {
    this.productService
      .getProducts()
      .pipe(
        switchMap((products) => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        const categoryId = params.get('categoryId');
        const category: Category | null = categoryId
          ? { id: +categoryId, name: '', description: '' }
          : null;
        this.filterByCategory(category || null);
      });
  }

  filterByCategory(category: Category | null) {
    if (!category?.id) {
      this.filteredProducts = this.products;
      this.selectedCategory = null;
    } else {
      this.filteredProducts = this.products.filter((p) => p.categoryId === category.id);
      this.selectedCategory = category;
    }
  }

  getCategoryName(): string {
    return this.selectedCategory
      ? this.selectedCategory.name || this.selectedCategory.description
      : 'All Products';
  }
}
