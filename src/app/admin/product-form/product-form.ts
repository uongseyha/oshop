import { ConfirmDialogComponent } from './../../confirm-dialog/confirm-dialog';
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
import { ProductCard } from '../../products/product-card/product-card';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.html',
  styleUrl: './product-form.css',
  imports: [CommonModule, FormsModule, ProductCard],
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
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService,
    private dialog: MatDialog
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
    if (!product.valid) {
      product.control.markAllAsTouched();
      return;
    }

    const productData = product.value;

    const saveOperation$ = this.productId
      ? this.productService.updateProduct(Number(this.productId), productData)
      : this.productService.createProduct(productData);

    saveOperation$.subscribe({
      next: () => {
        this.router.navigate(['/admin/products']);
      },
      error: (error) => {
        this.toastr.error('Something went wrong! Please try again.');
      },
    });
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

  deleteProduct(productId: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {
        message: 'Are you sure you want to delete this product?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (!confirmed) return;

      this.productService.deleteProduct(productId).subscribe({
        next: () => this.router.navigate(['/admin/products']),
        error: (err) => console.error(err),
      });
    });
  }

  ngOnDestroy() {}
}
