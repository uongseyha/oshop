import { Category } from './../model/category.model';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { NgForOf, CurrencyPipe, CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [NgForOf, CurrencyPipe, RouterLink, CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: Product[] = [];
  categories: Category[] = [];
  filteredProducts: any[] = []; // Displayed products
  selectedCategory: number | null = null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private route: ActivatedRoute
  ) {
    this.loadProducts();
    this.loadCategories();

    
  }

  loadProducts() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;

      this.route.queryParamMap.subscribe((params) => {
        const categoryId = params.get('categoryId');
        this.filterByCategory(categoryId ? +categoryId : null);
      });

    });
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filterByCategory(categoryId: number | null) {
    this.selectedCategory = categoryId;

    if (!categoryId) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter((p) => p.categoryId === categoryId);
    }
  }

  getCategoryName(id: number): string {
    const cat = this.categories.find((c) => c.id === id);
    return cat ? cat.name || cat.description : 'Unknown';
  }
}
