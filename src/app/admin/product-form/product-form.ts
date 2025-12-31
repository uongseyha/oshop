import { ProductService } from './../../services/product.service';
import { Observable } from 'rxjs';
import { CategoryService } from './../../services/category.service';
import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Category } from '../../model/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/product.model';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  imports: [CommonModule, FormsModule],
})
export class ProductForm implements OnInit, OnDestroy {
  categories: Category[] = [];
  product: Product = { id: 0, title: '', price: 0, categoryId: 0, imageUrl: '' };
  productId;

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {
    this.loadCategories();
    this.productId = this.activateRoute.snapshot.paramMap.get('id');
    this.loadProductById(this.productId);
  }

  ngOnInit() {}

  loadCategories() {
    this.categoryService
      .getCategories()
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.categories = data;
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  saveProduct(product: NgForm) {
    if (this.productId) {
      this.productService.updateProduct(Number(this.productId), product.value).subscribe();
    } else {
      this.productService.createProduct(product.value);
    }

    this.router.navigate(['/admin/products']);
  }

  loadProductById(id: any) {
    if (id == null) return;

    this.productService
      .getProductById(Number(id))
      .pipe(take(1))
      .subscribe({
        next: (data) => {
          this.product = data;
          if (this.cdr) this.cdr.detectChanges();
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  deleteProduct(productId: any) {
    if (!confirm('Are you sure you want to delete this product?')) return;

    this.productService.deleteProduct(Number(productId)).subscribe({
      next: () => {
        this.router.navigate(['/admin/products']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  ngOnDestroy() {}
}
