// products-list.component.ts
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule, // optional - for pagination
    MatSortModule, // optional - for sorting
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './admin-products.html',
  styleUrl: './admin-products.css',
})
export class AdminProducts implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['position', 'title', 'price', 'actions'];
  dataSource = new MatTableDataSource<any>([]); // ← your products array
  filteredDataSource: any[] = []; // for client-side filtering
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  private subscription = new Subscription();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.loadProducts();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    // Apply default sort only once when sort is ready
    if (!this.sort.active) {
      // avoid overriding user sort
      this.sort.active = 'id'; // or 'createdAt', 'title', etc.
      this.sort.direction = 'desc';
      this.sort.sortChange.emit(); // ← this is the correct way to trigger
    }
  }

  loadProducts() {
    this.subscription = this.productService.getProducts().subscribe((products) => {
      // Assign the array to MatTableDataSource
      this.dataSource.data = products;

      // Option A: Trigger sort by emitting sortChange (cleanest)
      if (this.sort.active && this.sort.direction) {
        this.sort.sortChange.emit(); // ← this re-applies current sort
      }
    });
  }

  // Search / filter
  searchProducts(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Optional: reset to first page after filter
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(id: string | number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(Number(id)).subscribe(() => {
        // Remove from data and let MatTableDataSource handle update
        const updated = this.dataSource.data.filter((p) => p.id !== id);
        this.dataSource.data = updated; // This triggers table refresh
      });
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
